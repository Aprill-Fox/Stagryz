import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://service-showcase-110.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"


# ---------- Services ----------
EXPECTED_SLUGS = {
    "kvartyrni-pereizdy", "ofisni-pereizdy", "poslugy-vantazhnykiv",
    "pereizd-v-inshe-misto", "vyviz-smittia", "dostavka-mebliv",
    "perevezennya-seyfiv", "pakuvannya",
}


def test_services_list(client):
    r = client.get(f"{API}/services")
    assert r.status_code == 200
    items = r.json().get("items", [])
    assert len(items) == 8
    slugs = {i["slug"] for i in items}
    assert slugs == EXPECTED_SLUGS
    for it in items:
        assert it.get("title")
        assert it.get("short")


# ---------- Leads ----------
def test_create_lead_success(client):
    payload = {"name": "TEST_Іван", "phone": "+380970000000",
               "service": "kvartyrni-pereizdy", "message": "тест",
               "source_page": "/test"}
    r = client.post(f"{API}/leads", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert data["name"] == payload["name"]
    assert data["phone"] == payload["phone"]
    assert data["telegram_sent"] is False
    assert "_id" not in data
    assert "created_at" in data


def test_create_lead_validation_empty_name(client):
    r = client.post(f"{API}/leads", json={"name": "", "phone": "+380970000000"})
    # Pydantic min_length=1 -> 422
    assert r.status_code in (400, 422)


def test_create_lead_validation_empty_phone(client):
    r = client.post(f"{API}/leads", json={"name": "Test", "phone": ""})
    assert r.status_code in (400, 422)


def test_create_lead_whitespace_only(client):
    # Whitespace passes pydantic length but fails the strip() check -> 400
    r = client.post(f"{API}/leads", json={"name": "   ", "phone": "+380970000000"})
    assert r.status_code == 400


def test_list_leads(client):
    # Ensure at least one exists
    client.post(f"{API}/leads", json={"name": "TEST_List", "phone": "+380971111111"})
    r = client.get(f"{API}/leads")
    assert r.status_code == 200
    leads = r.json()
    assert isinstance(leads, list)
    assert len(leads) >= 1
    # No mongo _id leakage
    for lead in leads:
        assert "_id" not in lead
        assert "id" in lead
        assert "name" in lead
        assert "phone" in lead
        assert "telegram_sent" in lead
    # Sorted desc by created_at
    times = [lead["created_at"] for lead in leads]
    assert times == sorted(times, reverse=True)


def test_lead_persistence(client):
    payload = {"name": "TEST_Persist", "phone": "+380972222222"}
    r = client.post(f"{API}/leads", json=payload)
    assert r.status_code == 200
    new_id = r.json()["id"]
    r2 = client.get(f"{API}/leads")
    assert r2.status_code == 200
    ids = [le["id"] for le in r2.json()]
    assert new_id in ids
