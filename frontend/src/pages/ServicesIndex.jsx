import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { SERVICES } from "../lib/site-data";

export default function ServicesIndex() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        <Section className="!pt-8">
          <FadeIn>
            <Eyebrow>Послуги</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight text-balance leading-[1.05]">
              Все, що потрібно для переїзду — в одному місці
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Виберіть напрямок — і побачите деталі, що включено, як працюємо та яке авто підійде.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    data-testid={`services-index-${s.slug}`}
                    className="block bg-white p-8 h-full hover:bg-slate-900 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 grid place-items-center bg-slate-100 group-hover:bg-orange-600 rounded-sm mb-5 transition-colors">
                      <Icon className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-xl tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 group-hover:text-slate-300">{s.short}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 group-hover:text-orange-400">
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
    </>
  );
}
