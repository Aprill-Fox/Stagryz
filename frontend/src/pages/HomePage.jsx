import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Truck, Clock, ShieldCheck, Star, Sparkles } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import LeadForm from "../components/LeadForm";
import KineticText from "../components/KineticText";
import MagneticButton from "../components/MagneticButton";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { SERVICES, FLEET, REVIEWS, FAQS, POSTS, GALLERY, SITE, TRUST_TAGS, PRICING, PROCESS_STEPS } from "../lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { useSeo, localBusinessSchema, faqPageSchema } from "../lib/seo";
import GoogleReviewsSection from "../components/GoogleReviewsSection";
import DrivingTruck from "../components/DrivingTruck";

export default function HomePage() {
  useSeo({
title: "Вантажне таксі Полтава — переїзди від 1800 грн",
description: "Квартирні та офісні переїзди в Полтаві під ключ. Вантажне таксі, вивіз сміття. Власне авто, досвідчені вантажники. 4.9★ Google. Дзвоніть: 095 558-24-24",
    path: "/",
    schema: [localBusinessSchema, faqPageSchema(FAQS.slice(0, 6))],
  });

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">

        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden panel-ink">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1605256585681-455837661b18?auto=format&fit=crop&w=1900&q=80)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(8,12,22,0.94) 0%, rgba(8,12,22,0.82) 50%, rgba(8,12,22,0.6) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 30%, rgba(234,88,12,0.10), transparent 55%)" }} />

          <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-6 text-xs uppercase tracking-[0.25em] text-accent font-semibold"
              >
                Полтава · 10 років досвіду · 8:00–22:00
              </motion.div>

              <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[5.5rem] tracking-tight leading-[0.95]">
                <KineticText text="Квартирні" />
                <span className="font-serif italic text-accent ml-2">переїзди та</span><br />
                <KineticText text="вантажне таксі" delay={0.2} /><br className="hidden sm:block" />
                <span className="font-serif italic text-accent">у Полтаві</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-7 text-lg md:text-xl opacity-85 max-w-xl leading-relaxed"
              >
                Подаємо власне авто з постійною командою професійних вантажників. 100% матеріальна відповідальність за кожну річ. Без прихованих доплат!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-10 flex flex-wrap gap-3"
              >
                <MagneticButton as="a" href={SITE?.phoneHref || "tel:+380955582424"} data-testid="hero-call-btn"
                  className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-7 py-4 rounded-sm font-bold text-base transition-colors">
                  <Phone className="w-5 h-5" /> {SITE?.phone || "+38 (095) 558-24-24"}
                </MagneticButton>
                <a href="#contact-form" data-testid="hero-services-btn"
                  className="inline-flex items-center gap-2 bg-background/10 hover:bg-background/20 backdrop-blur border border-background/20 px-7 py-4 rounded-sm font-semibold transition-all">
                  Отримати точний прорахунок <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-xl border-t border-white/15 pt-8"
              >
                {[
                  { v: "10 років", l: "На ринку Полтави" },
                  { v: "4.9 ★", l: "60 відгуків Google" },
                  { v: "100%", l: "Матеріальна відповідальність" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl md:text-3xl font-bold text-accent">{s.v}</div>
                    <div className="text-[0.65rem] md:text-xs opacity-70 uppercase tracking-wider mt-1.5">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ TRUST STRIP ============ */}
        <div className="border-y border-border bg-surface py-5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 text-muted-foreground text-sm font-medium">
            {[...Array(2)].flatMap((_, i) => TRUST_TAGS?.map((t, j) => (
              <span key={`${i}-${j}`} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />{t}
              </span>
            )))}
          </div>
        </div>

        {/* ============ PRICING ============ */}
        {PRICING && (
          <Section id="pricing" className="bg-background">
            <div className="flex flex-col gap-3 mb-10">
              <FadeIn>
                <Eyebrow>Тарифи</Eyebrow>
                <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight text-foreground">
                  Прозорі ціни <span className="font-serif italic text-accent">без</span> сюрпризів
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="max-w-md text-muted-foreground">
                  Стартові тарифи на популярні послуги. Фінальна вартість — після короткої розмови.
                </p>
              </FadeIn>
            </div>

            <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
              {PRICING.map((p, i) => (
                <StaggerItem key={i}>
                  <div className="group relative bg-card hover:bg-surface transition-colors duration-300 p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">{p.label}</div>
                    </div>
                    <div className="font-display font-extrabold leading-tight tracking-tight text-foreground" style={{ fontSize: "clamp(1.5rem,3.2vw,2.2rem)" }}>
                      {p.price === "Індивідуально"
                        ? "Індивідуально"
                        : <> <span className="text-accent" dangerouslySetInnerHTML={{ __html: p.price }} /></>}
                    </div>
                    <div className="font-display text-sm font-semibold text-muted-foreground mt-1.5">{p.unit}</div>
                    <p className="mt-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-5 flex-1">{p.note}</p>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </Section>
        )}

        {/* ============ SERVICES ============ */}
        <Section id="services" className="bg-surface border-y border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <FadeIn>
              <Eyebrow>Послуги</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight text-foreground">
                Що ми робимо у <span className="font-serif italic text-accent">Полтаві</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="max-w-md text-muted-foreground">
                Оберіть послугу — побачите що входить у вартість і як ми працюємо.
              </p>
            </FadeIn>
          </div>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    data-testid={`service-card-${s.slug}`}
                    className="group block bg-card p-7 h-full hover:bg-foreground hover:text-background transition-colors duration-300"
                  >
                    <div className="w-12 h-12 grid place-items-center bg-muted group-hover:bg-accent rounded-sm mb-5 transition-colors">
                      <Icon className="w-6 h-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-lg leading-tight tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm opacity-75 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.short }} />
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                      Детальніше <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </Section>

        {/* ============ PROCESS ============ */}
        <Section>
          <FadeIn>
            <Eyebrow>Як ми працюємо</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight mb-10 text-foreground">
              Чотири кроки до спокійного переїзду
            </h2>
          </FadeIn>
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {PROCESS_STEPS.map((s) => (
              <StaggerItem key={s.n}>
                <div className="bg-card p-7 h-full">
                  <div className="font-display text-3xl font-bold text-accent mb-3">{s.n}</div>
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground">{s.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        {/* ============ FLEET ============ */}
        <Section className="bg-surface border-y border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <FadeIn>
              <Eyebrow>Автопарк</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight text-foreground">
                Власні авто — завжди готові до виїзду
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link to="/fleet" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 link-underline">
                Усі моделі <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {FLEET.map((c) => (
              <StaggerItem key={c.slug}>
                <div data-testid={`fleet-${c.slug}`} className="border border-border bg-card p-6 h-full hover:border-foreground transition-colors">
                  <img src={c.img} alt={`Фургон ${c.name}`} className="w-full h-32 object-contain mb-4" />
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">{c.name}</h3>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <div><span className="text-muted-foreground">Довжина: </span>{c.length}</div>
                    <div><span className="text-muted-foreground">Висота: </span>{c.height}</div>
                    <div><span className="text-muted-foreground">Ширина: </span>{c.width}</div>
                    <div><span className="text-muted-foreground">Обʼєм: </span>{c.volume}</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">{c.best}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        {/* ============ WHY US ============ */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Чому ми</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight mb-6 text-foreground">
                Команда, що <span className="font-serif italic text-accent">відповідає</span> за результат
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Понад 10 років досвіду у сфері вантажних перевезень у Полтаві. Ми працюємо постійним штатом кваліфікованих працівників та маємо власний автопарк. Гарантуємо дбайливе ставлення до вашого майна та несемо повну матеріальну відповідальність за результати нашої роботи.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: ShieldCheck, t: "100% матеріальна відповідальність", d: "Несемо повну відповідальність за збереження вашого майна в процесі перевезення." },
                  { icon: Clock, t: "Оперативна подача авто", d: "Подаємо транспорт по Полтаві протягом 1-2 годин. Приймаємо та виконуємо замовлення щодня з 08:00 до 22:00." },
                  { icon: Truck, t: "Власний автопарк", d: "Підберемо оптимальний транспорт под ваш об'єм речей. Ви не переплачуєте за порожнє місце." },
                  { icon: Star, t: "Професійна команда", d: "Наші вантажники — це постійний штат спеціалістів, які щодня працюють разом, мають необхідний досвід та спеціалізований інструмент." },
                ].map((b) => {
                  const I = b.icon;
                  return (
                    <div key={b.t} className="flex gap-3">
                      <div className="w-10 h-10 grid place-items-center bg-card border border-border rounded-sm shrink-0">
                        <I className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-foreground">{b.t}</div>
                        <div className="text-sm text-muted-foreground">{b.d}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {GALLERY.slice(0, 4).map((g, i) => (
                  <div key={i} className={`img-zoom ${i === 0 ? "row-span-2" : ""}`}>
                    <img src={g} alt="Команда ВашПереїзд за роботою" className={`w-full object-cover rounded-sm ${i === 0 ? "h-full" : "h-44"}`} />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* ============ REVIEWS ============ */}
        <GoogleReviewsSection />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <DrivingTruck className="my-4" />
        </div>

        {/* ============ FAQ ============ */}
        <Section className="bg-surface border-y border-border">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeIn>
              <Eyebrow>Часті питання</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight text-foreground">
                Відповіді на головне
              </h2>
              <p className="mt-4 text-muted-foreground">
                Не знайшли відповіді? Просто зателефонуйте — швидше і простіше.
              </p>
              <a href={SITE?.phoneHref || "tel:+380955582424"} className="inline-flex items-center gap-2 mt-6 text-accent hover:opacity-80 font-bold">
                <Phone className="w-4 h-4" /> {SITE?.phone || "+38 (095) 558-24-24"}
              </a>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-2">
              <Accordion type="single" collapsible className="border-t border-border">
                {FAQS.slice(0, 8).map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border" data-testid={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display font-semibold text-base md:text-lg py-5 hover:text-accent">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          </div>
        </Section>

        {/* ============ BLOG ============ */}
        <Section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <FadeIn>
              <Eyebrow>Блог</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight text-foreground">
                Корисні статті про переїзди
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 link-underline">
                Усі статті <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {POSTS?.slice(0, 3).map((p) => (
              <StaggerItem key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="group block">
                  <div className="aspect-[16/10] img-zoom rounded-sm">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs text-muted-foreground mt-4 uppercase tracking-wider">
                    {new Date(p.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h3 className="font-display font-bold text-xl mt-2 leading-tight text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{p.excerpt}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        {/* ============ LEAD FORM CTA ============ */}
        <Section id="contact-form" className="panel-ink">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Замовити</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight mb-5">
                Отримайте <span className="font-serif italic text-accent">точний</span> прорахунок
              </h2>
              <p className="opacity-80 text-lg leading-relaxed">
                Залишайте заявку — менеджер зателефонує протягом 10 хвилин,
                уточнить деталі та назве точну вартість.
              </p>
              <div className="mt-8 grid gap-3 text-sm opacity-90">
                <div className="flex items-center gap-3"><span className="text-accent">✓</span> Фіксована ціна без доплат на місці</div>
                <div className="flex items-center gap-3"><span className="text-accent">✓</span> Приїжджаємо зі своїм інструментом і матеріалами</div>
                <div className="flex items-center gap-3"><span className="text-accent">✓</span> 100% відшкодування якщо щось пошкодимо</div>
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
      <FloatingContact />
    </>
  );
}
