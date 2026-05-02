import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Truck, Clock, ShieldCheck, Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import LeadForm from "../components/LeadForm";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { SERVICES, FLEET, REVIEWS, FAQS, POSTS, GALLERY, SITE } from "../lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-slate-900 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1628481103102-01de5ffe556b?auto=format&fit=crop&w=1900&q=80)" }}
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.25em] text-orange-400 font-semibold"
              >
                <span className="w-10 h-px bg-orange-500" />
                {SITE.city} · 5+ років · цілодобово
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-balance leading-[1.05]"
              >
                Переїзд — <br />
                <span className="text-orange-500">це просто.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-6 text-lg md:text-xl text-slate-200 max-w-xl"
              >
                Безпечне і дбайливе перевезення вантажів по Полтаві, області та всій Україні. Команда, авто, пакування та страхування — все вже включено.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <a href={SITE.phoneHref} data-testid="hero-call-btn"
                   className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 px-7 py-4 rounded-sm font-bold text-base transition-all hover:-translate-y-0.5">
                  <Phone className="w-5 h-5" /> {SITE.phone}
                </a>
                <Link to="/services" data-testid="hero-services-btn"
                   className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 px-7 py-4 rounded-sm font-semibold transition-all">
                  Дізнатись більше <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-xl"
              >
                {[
                  { v: "до 2 т", l: "Вантажопідйомність" },
                  { v: "до 20 м³", l: "Обʼєм авто" },
                  { v: "5+ років", l: "Досвід команди" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl md:text-3xl font-bold text-orange-500">{s.v}</div>
                    <div className="text-xs md:text-sm text-slate-300 uppercase tracking-wider mt-1">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <div className="border-y border-slate-200 bg-white py-5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 text-slate-500 text-sm font-medium">
            {[...Array(2)].flatMap((_, i) => [
              "Страхування вантажу", "Цілодобово 24/7", "Власний автопарк", "Досвідчені вантажники",
              "Прозоре ціноутворення", "Без передоплат", "Робота по Україні", "Договір з юр.особами",
            ].map((t, j) => (
              <span key={`${i}-${j}`} className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />{t}</span>
            )))}
          </div>
        </div>

        {/* Services */}
        <Section id="services">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <FadeIn>
              <Eyebrow>Послуги</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
                Що ми робимо
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-md text-slate-600">
                Восьмеро основних напрямків. Натисніть на будь-яку послугу — побачите деталі, що включено, як працюємо.
              </p>
            </FadeIn>
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    data-testid={`service-card-${s.slug}`}
                    className="group block bg-white p-7 h-full hover:bg-slate-900 hover:text-white transition-colors duration-300"
                  >
                    <div className="w-12 h-12 grid place-items-center bg-slate-100 group-hover:bg-orange-600 rounded-sm mb-5 transition-colors">
                      <Icon className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-lg leading-tight tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-300 leading-relaxed">{s.short}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 group-hover:text-orange-400">
                      Детальніше <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </Section>

        {/* Fleet */}
        <Section className="bg-white border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <FadeIn>
              <Eyebrow>Автопарк</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">Свої авто, готові до роботи</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link to="/fleet" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                Усі моделі <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {FLEET.map((c) => (
              <StaggerItem key={c.slug}>
                <div data-testid={`fleet-${c.slug}`} className="border border-slate-200 bg-slate-50 p-6 h-full hover:border-slate-900 transition-colors">
                  <img src={c.img} alt={c.name} className="w-full h-32 object-contain mb-4" />
                  <h3 className="font-display text-2xl font-bold tracking-tight">{c.name}</h3>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <div><span className="text-slate-500">Довжина: </span>{c.length}</div>
                    <div><span className="text-slate-500">Висота: </span>{c.height}</div>
                    <div><span className="text-slate-500">Ширина: </span>{c.width}</div>
                    <div><span className="text-slate-500">Обʼєм: </span>{c.volume}</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-500">{c.best}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        {/* Why us */}
        <Section className="bg-slate-50 border-y border-slate-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Чому ми</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight mb-6">
                Команда, що відповідає за результат
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Понад 5 років професійних перевезень. Ми — це не випадкові люди з оголошення, а команда, яка щодня працює разом. У нас власні авто, інструменти, пакувальні матеріали і чіткі стандарти.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: ShieldCheck, t: "Договір та страхування", d: "Працюємо офіційно з фіз. та юр. особами" },
                  { icon: Clock, t: "Цілодобово", d: "Виїзд за 1–2 години у будні" },
                  { icon: Truck, t: "Свій автопарк", d: "Авто під ваш обʼєм — без посередників" },
                  { icon: Star, t: "Досвідчена команда", d: "Хлопці, що знають, що роблять" },
                ].map((b) => {
                  const I = b.icon;
                  return (
                    <div key={b.t} className="flex gap-3">
                      <div className="w-10 h-10 grid place-items-center bg-white border border-slate-200 rounded-sm shrink-0">
                        <I className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-slate-900">{b.t}</div>
                        <div className="text-sm text-slate-600">{b.d}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {GALLERY.slice(0, 4).map((g, i) => (
                  <img key={i} src={g} alt="" className={`w-full object-cover rounded-sm ${i === 0 ? "row-span-2 h-full" : "h-44"}`} />
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Reviews */}
        <Section>
          <div className="mb-12">
            <FadeIn>
              <Eyebrow>Відгуки</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">Що про нас кажуть клієнти</h2>
            </FadeIn>
          </div>
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <StaggerItem key={i}>
                <div className="border border-slate-200 bg-white p-6 h-full">
                  <div className="flex gap-0.5 text-orange-500 mb-3">
                    {[...Array(r.rating)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-700 leading-relaxed">«{r.text}»</p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="font-semibold text-slate-900">{r.name}</span>
                    <span className="text-xs text-slate-500">{r.service}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
          <div className="mt-8">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
              Усі відгуки <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="bg-slate-50 border-y border-slate-200">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeIn>
              <Eyebrow>Часті питання</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">Відповіді на головне</h2>
              <p className="mt-4 text-slate-600">Не знайшли відповіді? Просто зателефонуйте — швидше і простіше.</p>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 mt-6 text-orange-600 hover:text-orange-700 font-bold">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-2">
              <Accordion type="single" collapsible className="border-t border-slate-200">
                {FAQS.slice(0, 5).map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200" data-testid={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg py-5 hover:text-orange-600">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </Section>

        {/* Blog preview */}
        <Section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <FadeIn>
              <Eyebrow>Блог</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">Корисні статті про переїзди</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                Усі статті <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {POSTS.slice(0, 3).map((p) => (
              <StaggerItem key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="group block">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="text-xs text-slate-500 mt-4 uppercase tracking-wider">{new Date(p.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}</div>
                  <h3 className="font-display font-bold text-xl mt-2 leading-tight group-hover:text-orange-600 transition-colors">{p.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        {/* Lead form CTA */}
        <Section className="bg-slate-900 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Замовити</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight mb-5">
                Отримайте індивідуальний прорахунок
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Залишайте заявку — менеджер зателефонує протягом 10 хвилин, уточнить деталі та запропонує оптимальне авто й команду.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center gap-3"><span className="text-orange-500">✓</span> Безкоштовна консультація</div>
                <div className="flex items-center gap-3"><span className="text-orange-500">✓</span> Чесна ціна після огляду</div>
                <div className="flex items-center gap-3"><span className="text-orange-500">✓</span> Без прихованих платежів</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <LeadForm variant="dark" source="/" />
            </FadeIn>
          </div>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
