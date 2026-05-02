# ВАШ ПЕРЕЇЗД — Stagruz.pl.ua redesign

## Original problem
"Створи оновлений сайт https://stagruz.pl.ua/ на кожну послугу має бути окрема сторінка"

## User choices
- Premium/professional design with modern animations
- Trendy moving-niche colors (Editorial Premium: Bone/Cream + Deep Ink + Burnt Orange + Sage)
- Light + Dark theme with toggle
- Telegram bot integration (mock — token to be added later via .env: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)
- Ukrainian language only
- Full sections: Home, About, Fleet, Gallery, Reviews, FAQ, Blog, Contacts
- Mobile-first, not overloaded
- Client doesn't want to show prices (Google Ads + calls focus)
- SEO is top priority — needs to rank in Google organic

## Tech stack
- Frontend: React 19, react-router-dom 7, framer-motion, sonner, lucide-react, shadcn/ui (accordion)
- Backend: FastAPI, MongoDB (motor), httpx for Telegram API
- Fonts: Unbounded (display), Manrope (body), Instrument Serif (italic accent)

## What's been implemented (Dec 2025 — iteration 2)
- 8 separate service pages with rich SEO copy, longCopy, priceFactors, FAQ, process steps
- Static pages: Home, Services index, About, Fleet, Gallery, Reviews, FAQ, Blog (4 articles), Blog detail, Contacts, 404
- Premium design: Editorial Bone/Cream + Deep Ink + Burnt Orange (#E8552B) + Sage accents
- Light + Dark theme with persistent localStorage choice & system pref auto-detect
- Modern 2025 animations: Kinetic typography, Magnetic buttons, marquee trust strip, page transitions, image hover parallax, AnimatePresence per route
- Floating contact bubble (Phone + Telegram + Viber) on desktop
- Mobile sticky CTA on mobile
- SEO: per-page meta title/description, OG tags, canonical, JSON-LD (LocalBusiness/MovingCompany, Service, BreadcrumbList, FAQPage, Article), sitemap.xml (21 URLs), robots.txt
- Lead form: name+phone+message, POST /api/leads → MongoDB + optional Telegram (mocked when no token)
- Backend endpoints: GET /api/services, POST/GET /api/leads
- Tested: 8/8 backend + 22/22 frontend (iteration 1 + 2)

## Next action items (P1)
- Real Telegram bot token + chat_id to be added in `/app/backend/.env`
- Real phone number, email, address (replace placeholders in `/app/frontend/src/lib/site-data.js` SITE constant)
- Replace hero photo with original truck image (currently uses Unsplash)
- Add Google Analytics + Google Tag Manager for Ads conversion tracking
- Connect with Google Search Console to submit sitemap
- Possibly add WhatsApp number for floating contact

## Backlog (P2)
- Admin panel to view leads at /admin (currently only via API GET /api/leads)
- More blog articles for SEO (target 10–15 long-form articles in 6 months)
- Reviews schema with aggregateRating
- Geo-targeted landing pages: /poltava, /kyiv-pereizd etc.
- Image optimization: WebP versions, lazy loading
