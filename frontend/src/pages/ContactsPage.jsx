import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import LeadForm from "../components/LeadForm";
import Breadcrumbs from "../components/Breadcrumbs";
import KineticText from "../components/KineticText";
import { FadeIn, Section, Eyebrow } from "../components/Motion";
import { SITE } from "../lib/site-data";
import { useSeo, breadcrumbSchema } from "../lib/seo";

export default function ContactsPage() {
  useSeo({
    title: "Контакти — замовити переїзд у Полтаві",
    description: "Контакти ВАШ ПЕРЕЇЗД: телефон, email, адреса. Цілодобово приймаємо заявки на переїзди у Полтаві та області.",
    path: "/contacts",
    schema: breadcrumbSchema([{ name: "Головна", path: "/" }, { name: "Контакти", path: "/contacts" }]),
  });

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[{ name: "Головна", path: "/" }, { name: "Контакти" }]} />
        <Section className="!py-16 lg:!py-24">
          <FadeIn>
            <Eyebrow>Контакти</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight text-foreground">
              <KineticText text="На звʼязку" /> <span className="font-serif italic text-accent">24/7</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Зателефонуйте напряму або залиште заявку — менеджер передзвонить протягом 10 хвилин.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <div className="grid lg:grid-cols-2 gap-10">
            <FadeIn>
              <div className="border border-border bg-card p-8 grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-accent text-accent-foreground rounded-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Телефон</div>
                    <a href={SITE.phoneHref} className="font-display font-bold text-2xl block mt-1 hover:text-accent text-foreground">{SITE.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-muted rounded-sm shrink-0">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                    <a href={SITE.emailHref} className="font-semibold text-lg block mt-1 hover:text-accent text-foreground">{SITE.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-muted rounded-sm shrink-0">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Місто</div>
                    <div className="font-semibold text-lg mt-1 text-foreground">{SITE.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-muted rounded-sm shrink-0">
                    <Clock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Графік</div>
                    <div className="font-semibold text-lg mt-1 text-foreground">{SITE.workingHours}</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-foreground text-background p-8">
                <h2 className="font-display text-2xl font-bold mb-2">Залишити заявку</h2>
                <p className="opacity-80 text-sm mb-6">Менеджер передзвонить протягом 10 хвилин.</p>
                <LeadForm variant="dark" source="/contacts" />
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="!pt-0 !pb-20">
          <div className="border border-border overflow-hidden rounded-sm">
            <iframe title="Карта Полтави" src="https://www.google.com/maps?q=Poltava,Ukraine&output=embed"
              width="100%" height="380" loading="lazy" style={{ border: 0 }} />
          </div>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingContact />
    </>
  );
}
