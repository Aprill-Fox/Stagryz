import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Phone, Check } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import LeadForm from "../components/LeadForm";
import Breadcrumbs from "../components/Breadcrumbs";
import MagneticButton from "../components/MagneticButton";
import KineticText from "../components/KineticText";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { SERVICES, FLEET, FAQS, SITE, PROCESS_STEPS } from "../lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { useSeo, breadcrumbSchema, serviceSchema, faqPageSchema } from "../lib/seo";

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  const seoCall = useSeo({
    title: service?.metaTitle || service?.title,
    description: service?.metaDescription || service?.short,
    path: service ? `/services/${service.slug}` : "/services",
    schema: service
      ? [
          serviceSchema({ name: service.title, description: service.metaDescription || service.short, slug: service.slug }),
          breadcrumbSchema([
            { name: "Головна", path: "/" },
            { name: "Послуги", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          faqPageSchema(FAQS.slice(0, 5)),
        ]
      : null,
  });
  void seoCall;

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;
  const others = SERVICES.filter(s => s.slug !== slug).slice(0, 4);

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[
          { name: "Головна", path: "/" },
          { name: "Послуги", path: "/services" },
          { name: service.title },
        ]} />

        {/* Hero */}
        <section className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 grid place-items-center bg-accent rounded-sm">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <Eyebrow>Послуга</Eyebrow>
              </div>
              <h1 data-testid="service-title" className="font-display text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-balance leading-[1.05] text-foreground">
                <KineticText text={service.hero} />
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton as="a" href={SITE.phoneHref} data-testid="service-call-btn"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3.5 rounded-sm font-bold transition-colors">
                  <Phone className="w-4 h-4" /> Зателефонувати
                </MagneticButton>
                <a href="#order" className="inline-flex items-center gap-2 bg-muted hover:bg-secondary text-foreground px-6 py-3.5 rounded-sm font-semibold transition-all">
                  Залишити заявку <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-surface border border-border p-6 lg:p-8">
                <h3 className="font-display font-bold text-lg mb-5 text-foreground">Що включено</h3>
                <ul className="grid gap-3">
                  {service.features.map((f, i) => (
                    <li key={i} data-testid={`feature-${i}`} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground grid place-items-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Long copy / SEO content */}
        <Section>
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeIn className="lg:col-span-2">
              <Eyebrow>Деталі</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight mb-6 text-foreground">
                {service.title} у Полтаві — як ми це робимо
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{service.longCopy}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-muted border-l-2 border-accent p-6">
                <h3 className="font-display font-bold mb-4 text-foreground">Що впливає на ціну</h3>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {service.priceFactors.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent shrink-0">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted-foreground">
                  Точну вартість ми називаємо лише після короткої розмови. Жодних прихованих платежів.
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>

        {/* Process */}
        <Section className="bg-surface border-y border-border">
          <FadeIn>
            <Eyebrow>Як ми працюємо</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight mb-12 text-foreground">Чотири прості кроки</h2>
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

        {/* Fleet snippet */}
        <Section>
          <div className="flex items-end justify-between mb-10">
            <FadeIn>
              <Eyebrow>Авто</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight text-foreground">Підберемо під ваш обʼєм</h2>
            </FadeIn>
            <Link to="/fleet" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 link-underline">
              Усі моделі <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <StaggerGrid className="grid md:grid-cols-3 gap-6">
            {FLEET.map((c) => (
              <StaggerItem key={c.slug}>
                <div className="border border-border bg-card p-6">
                  <img src={c.img} alt={`${c.name} ${c.volume}`} className="w-full h-28 object-contain mb-3" />
                  <h3 className="font-display text-xl font-bold text-foreground">{c.name}</h3>
                  <div className="mt-2 text-sm text-muted-foreground">{c.volume} · {c.capacity}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{c.best}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        {/* FAQ */}
        <Section className="bg-surface border-y border-border">
          <FadeIn>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight mb-8 text-foreground">Часті питання</h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Accordion type="single" collapsible className="border-t border-border max-w-3xl">
              {FAQS.slice(0, 5).map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-display font-semibold py-5 hover:text-accent">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </Section>

        {/* Lead form */}
        <Section id="order" className="bg-foreground text-background">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Замовити</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">{service.title}</h2>
              <p className="mt-4 opacity-80 leading-relaxed">
                Залишіть телефон — менеджер зателефонує протягом 10 хвилин, уточнить деталі і прорахує точну вартість.
              </p>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-4 bg-background/10 border border-background/15">
                <Phone className="w-5 h-5 text-accent" />
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-10 tracking-tight text-foreground">Дивіться також</h2>
          </FadeIn>
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {others.map((o) => {
              const I = o.icon;
              return (
                <StaggerItem key={o.slug}>
                  <Link to={`/services/${o.slug}`} className="block bg-card p-6 hover:bg-foreground hover:text-background transition-colors group">
                    <I className="w-6 h-6 mb-3 text-accent" />
                    <div className="font-display font-bold leading-tight">{o.title}</div>
                    <div className="text-xs mt-2 opacity-70">{o.short}</div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingContact />
    </>
  );
}
