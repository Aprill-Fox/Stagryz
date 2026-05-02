import { Phone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import { FadeIn, Section, Eyebrow } from "../components/Motion";
import { FAQS, SITE } from "../lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        <Section className="!pt-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeIn>
              <Eyebrow>FAQ</Eyebrow>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold mt-3 tracking-tight">Відповіді на популярні питання</h1>
              <p className="mt-6 text-slate-600">Не знайшли відповіді? Просто зателефонуйте — швидше і простіше.</p>
              <a href={SITE.phoneHref} className="inline-flex items-center gap-2 mt-6 text-orange-600 hover:text-orange-700 font-bold">
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
            </FadeIn>
            <FadeIn delay={0.1} className="lg:col-span-2">
              <Accordion type="single" collapsible className="border-t border-slate-200">
                {FAQS.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-200" data-testid={`faq-page-${i}`}>
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
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
