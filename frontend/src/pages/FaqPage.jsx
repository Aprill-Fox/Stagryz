import { Phone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import Breadcrumbs from "../components/Breadcrumbs";
import { FadeIn, Section, Eyebrow } from "../components/Motion";
import { FAQS, SITE } from "../lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { useSeo, breadcrumbSchema, faqPageSchema } from "../lib/seo";

export default function FaqPage() {
  useSeo({
    title: "Часті питання про переїзди у Полтаві — FAQ",
    description: "Відповіді на популярні питання про вантажні перевезення у Полтаві: ціни, страхування, час виїзду, оплата, послуги вантажників.",
    path: "/faq",
    schema: [
      breadcrumbSchema([{ name: "Головна", path: "/" }, { name: "FAQ", path: "/faq" }]),
      faqPageSchema(FAQS),
    ],
  });

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[{ name: "Головна", path: "/" }, { name: "FAQ" }]} />
        <Section className="!py-16 lg:!py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeIn>
              <Eyebrow>FAQ</Eyebrow>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold mt-3 tracking-tight text-foreground">
                Відповіді на <span className="font-serif italic text-accent">популярні</span> питання
              </h1>
              <p className="mt-6 text-muted-foreground">Не знайшли відповіді? Просто зателефонуйте — швидше і простіше.</p>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 mt-6 text-accent hover:opacity-80 font-bold">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-2">
              <Accordion type="single" collapsible className="border-t border-border">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border" data-testid={`faq-page-${i}`}>
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
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingContact />
    </>
  );
}
