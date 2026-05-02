from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import httpx


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class LeadCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    phone: str = Field(min_length=4, max_length=40)
    service: Optional[str] = None
    message: Optional[str] = None
    source_page: Optional[str] = None


class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    service: Optional[str] = None
    message: Optional[str] = None
    source_page: Optional[str] = None
    telegram_sent: bool = False
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------- Telegram helper ----------
async def send_to_telegram(lead: Lead) -> bool:
    token = os.environ.get('TELEGRAM_BOT_TOKEN', '').strip()
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '').strip()
    if not token or not chat_id:
        logger.info(f"[Telegram MOCK] Lead received: {lead.name} {lead.phone} ({lead.service})")
        return False
    text = (
        "🚚 *Нова заявка — ВАШ ПЕРЕЇЗД*\n\n"
        f"👤 *Імʼя:* {lead.name}\n"
        f"📞 *Телефон:* `{lead.phone}`\n"
        f"🛠 *Послуга:* {lead.service or '—'}\n"
        f"📝 *Коментар:* {lead.message or '—'}\n"
        f"🌐 *Сторінка:* {lead.source_page or '—'}\n"
        f"🕒 {lead.created_at.strftime('%d.%m.%Y %H:%M UTC')}"
    )
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    try:
        async with httpx.AsyncClient(timeout=10) as c:
            r = await c.post(url, json={"chat_id": chat_id, "text": text, "parse_mode": "Markdown"})
            return r.status_code == 200
    except Exception as e:
        logger.warning(f"Telegram send failed: {e}")
        return False


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Stagruz API", "status": "ok"}


@api_router.post("/leads", response_model=Lead)
async def create_lead(payload: LeadCreate):
    if not payload.name.strip() or not payload.phone.strip():
        raise HTTPException(400, "Name and phone are required")
    lead = Lead(**payload.model_dump())
    sent = await send_to_telegram(lead)
    lead.telegram_sent = sent
    doc = lead.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.leads.insert_one(doc)
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def list_leads(limit: int = 100):
    items = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for it in items:
        if isinstance(it.get('created_at'), str):
            it['created_at'] = datetime.fromisoformat(it['created_at'])
    return items


# ---------- Static service catalog ----------
SERVICES = [
    {"slug": "kvartyrni-pereizdy", "title": "Квартирні переїзди",
     "short": "Швидкий і дбайливий переїзд квартири «під ключ» — від пакування до розстановки меблів."},
    {"slug": "ofisni-pereizdy", "title": "Офісні переїзди",
     "short": "Перевозимо офіси без зупинки роботи: техніка, документи, меблі — все за графіком."},
    {"slug": "poslugy-vantazhnykiv", "title": "Послуги вантажників",
     "short": "Досвідчені вантажники для будь-яких задач: підняти, спустити, переставити."},
    {"slug": "pereizd-v-inshe-misto", "title": "Переїзд в інше місто",
     "short": "Міжміські перевезення по всій Україні — зручно, безпечно, у домовлений час."},
    {"slug": "vyviz-smittia", "title": "Вивіз та утилізація сміття",
     "short": "Звільнимо квартиру, офіс або будівельний майданчик від старих меблів і сміття."},
    {"slug": "dostavka-mebliv", "title": "Доставка меблів із магазинів",
     "short": "Заберемо ваше замовлення з магазину та підіймемо у квартиру з акуратністю."},
    {"slug": "perevezennya-seyfiv", "title": "Перевезення роялів та сейфів",
     "short": "Габаритні та надважкі вантажі — сейфи, рояли, піаніно. Спецобладнання, страхування."},
    {"slug": "pakuvannya", "title": "Пакування, збирання та розбирання",
     "short": "Якісні матеріали та інструменти. Розберемо, упакуємо й зберемо назад на новому місці."},
]


@api_router.get("/services")
async def get_services():
    return {"items": SERVICES}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
