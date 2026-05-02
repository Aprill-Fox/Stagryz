import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import Breadcrumbs from "../components/Breadcrumbs";
import KineticText from "../components/KineticText";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { SERVICES } from "../lib/site-data";
import { useSeo, breadcrumbSchema } from "../lib/seo";

export default function ServicesIndex() {
  useSeo({
    title: "Послуги — вантажні перевезення та переїзди в Полтаві",
    description: "Усі послуги ВАШ ПЕРЕЇЗД у Полтаві: квартирні переїзди, офіс, вантажники, міжмісто, вивіз сміття, доставка меблів, перевезення піаніно, пакування.",
    path: "/services",
    schema: breadcrumbSchema([
      { name: "Головна", path: "/" },
      { name: "Послуги", path: "/services" },
    ]),
  });

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[{ name: "Головна", path: "/" }, { name: "Послуги" }]} />

        <Section className="!py-16 lg:!py-24">
          <FadeIn>
            <Eyebrow>Послуги</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight text-balance leading-[1.05] text-foreground">
              <KineticText text="Все, що потрібно для переїзду —" />
              <br />
              <span className="font-serif italic text-accent">в одному місці</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Виберіть напрямок — і побачите деталі: що включено, як працюємо, який автомобіль підійде.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    data-testid={`services-index-${s.slug}`}
                    className="block bg-card p-8 h-full hover:bg-foreground hover:text-background transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 grid place-items-center bg-muted group-hover:bg-accent rounded-sm mb-5 transition-colors">
                      <Icon className="w-6 h-6 text-foreground group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm opacity-75">{s.short}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Дивитись деталі <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
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
