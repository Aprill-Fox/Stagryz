import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Phone, Check, ChevronRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import LeadForm from "../components/LeadForm";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { SERVICES, FLEET, FAQS, SITE } from "../lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const others = SERVICES.filter(s => s.slug !== slug).slice(0, 4);

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Breadcrumbs */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 text-xs text-slate-500 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-orange-600">Головна</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-orange-600">Послуги</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 font-semibold">{service.title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 grid place-items-center bg-orange-600 rounded-sm">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <Eyebrow>Послуга</Eyebrow>
              </div>
              <h1 data-testid="service-title" className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance leading-[1.05]">
                {service.hero}
              </h1>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={SITE.phoneHref} data-testid="service-call-btn" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3.5 rounded-sm font-bold transition-all hover:-translate-y-0.5">
                  <Phone className="w-4 h-4" /> Зателефонувати
                </a>
                <a href="#order" className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 px-6 py-3.5 rounded-sm font-semibold transition-all">
                  Залишити заявку <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-slate-50 border border-slate-200 p-6 lg:p-8">
                <h3 className="font-display font-bold text-lg mb-5">Що включено</h3>
                <ul className="grid gap-3">
                  {service.features.map((f, i) => (
                    <li key={i} data-testid={`feature-${i}`} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-orange-600 text-white grid place-items-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Process */}
        <Section>
          <FadeIn>
            <Eyebrow>Як ми працюємо</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight mb-12">Чотири прості кроки</h2>
          </FadeIn>
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {[
              { n: "01", t: "Заявка", d: "Ви телефонуєте або залишаєте заявку. Розповідаєте про задачу." },
              { n: "02", t: "Прорахунок", d: "Ми називаємо вартість, узгоджуємо час, авто і кількість людей." },
              { n: "03", t: "Виконання", d: "Команда приїжджає вчасно, із пакувальними матеріалами та інструментами." },
              { n: "04", t: "Передача", d: "Все на новому місці, ви перевіряєте, ми отримуємо оплату." },
            ].map((s) => (
              <StaggerItem key={s.n}>
                <div className="bg-white p-7 h-full">
                  <div className="font-display text-3xl font-bold text-orange-600 mb-3">{s.n}</div>
                  <h3 className="font-display font-bold text-lg mb-2">{s.t}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        {/* Fleet snippet */}
        <Section className="bg-slate-50 border-y border-slate-200">
          <div className="flex items-end justify-between mb-10">
            <FadeIn>
              <Eyebrow>Авто</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">Підберемо під ваш обʼєм</h2>
            </FadeIn>
          </div>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {FLEET.map((c) => (
              <StaggerItem key={c.slug}>
                <div className="border border-slate-200 bg-white p-6">
                  <img src={c.img} alt={c.name} className="w-full h-28 object-contain mb-3" />
                  <h3 className="font-display text-xl font-bold">{c.name}</h3>
                  <div className="mt-2 text-sm text-slate-600">{c.volume} · {c.capacity}</div>
                  <div className="mt-2 text-xs text-slate-500">{c.best}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        {/* FAQ specific */}
        <Section>
          <FadeIn>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight mb-8">Часті питання</h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Accordion type="single" collapsible className="border-t border-slate-200 max-w-3xl">
              {FAQS.slice(0, 5).map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200">
                  <AccordionTrigger className="text-left font-display font-semibold py-5 hover:text-orange-600">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </Section>

        {/* Lead form */}
        <Section id="order" className="bg-slate-900 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Замовити</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">{service.title}</h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Залишіть телефон — менеджер зателефонує протягом 10 хвилин, уточнить деталі і прорахує точну вартість.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-4 bg-slate-800 border border-slate-700">
                <Phone className="w-5 h-5 text-orange-500" />
                <a href={SITE.phoneHref} className="font-bold text-lg">{SITE.phone}</a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <LeadForm variant="dark" defaultService={service.title} source={`/services/${slug}`} />
            </FadeIn>
          </div>
        </Section>

        {/* Other services */}
        <Section>
          <FadeIn>
            <Eyebrow>Інші послуги</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-10 tracking-tight">Дивіться також</h2>
          </FadeIn>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {others.map((o) => {
              const I = o.icon;
              return (
                <StaggerItem key={o.slug}>
                  <Link to={`/services/${o.slug}`} className="block bg-white p-6 hover:bg-slate-900 hover:text-white transition-colors group">
                    <I className="w-6 h-6 mb-3 text-orange-600" />
                    <div className="font-display font-bold leading-tight">{o.title}</div>
                    <div className="text-xs mt-2 text-slate-500 group-hover:text-slate-300">{o.short}</div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
