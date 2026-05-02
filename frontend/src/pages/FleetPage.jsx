import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import LeadForm from "../components/LeadForm";
import Breadcrumbs from "../components/Breadcrumbs";
import KineticText from "../components/KineticText";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { FLEET } from "../lib/site-data";
import { useSeo, breadcrumbSchema } from "../lib/seo";

export default function FleetPage() {
  useSeo({
    title: "Автопарк — вантажні авто для переїздів у Полтаві",
    description: "Автопарк ВАШ ПЕРЕЇЗД: Міні (10 м³), Стандарт (13 м³), Максі (20 м³). Власні фургони для переїздів і вантажних перевезень у Полтаві.",
    path: "/fleet",
    schema: breadcrumbSchema([{ name: "Головна", path: "/" }, { name: "Автопарк", path: "/fleet" }]),
  });

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[{ name: "Головна", path: "/" }, { name: "Автопарк" }]} />

        <Section className="!py-16 lg:!py-24">
          <FadeIn>
            <Eyebrow>Автопарк</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight text-foreground">
              <KineticText text="Свої авто" /> <span className="font-serif italic text-accent">під будь-який обʼєм</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Три класи фургонів — від компактного «Міні» для однокімнатної квартири до місткого «Максі» для повноцінного офісу або міжміського переїзду.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <StaggerGrid className="grid lg:grid-cols-3 gap-6">
            {FLEET.map((c) => (
              <StaggerItem key={c.slug}>
                <div data-testid={`fleet-page-${c.slug}`} className="border border-border bg-card overflow-hidden h-full hover:border-foreground transition-colors">
                  <div className="bg-surface p-6">
                    <img src={c.img} alt={`Фургон ${c.name} — ${c.volume}, ${c.capacity}`} className="w-full h-44 object-contain" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="font-display text-3xl font-bold tracking-tight text-foreground">{c.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.best}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-y-3 text-sm">
                      <dt className="text-muted-foreground">Довжина</dt><dd className="font-semibold text-right text-foreground">{c.length}</dd>
                      <dt className="text-muted-foreground">Висота</dt><dd className="font-semibold text-right text-foreground">{c.height}</dd>
                      <dt className="text-muted-foreground">Ширина</dt><dd className="font-semibold text-right text-foreground">{c.width}</dd>
                      <dt className="text-muted-foreground">Обʼєм</dt><dd className="font-semibold text-right text-foreground">{c.volume}</dd>
                      <dt className="text-muted-foreground">Вантаж</dt><dd className="font-semibold text-right text-foreground">{c.capacity}</dd>
                    </dl>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        <Section className="bg-foreground text-background">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Замовити</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">Не знаєте, який обʼєм потрібен?</h2>
              <p className="mt-4 opacity-80">Залиште заявку — підберемо авто саме під ваш переїзд.</p>
            </FadeIn>
            <FadeIn delay={0.1}><LeadForm variant="dark" source="/fleet" /></FadeIn>
          </div>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingContact />
    </>
  );
}
