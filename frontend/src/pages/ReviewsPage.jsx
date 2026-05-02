import { Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { REVIEWS } from "../lib/site-data";

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        <Section className="!pt-8">
          <FadeIn>
            <Eyebrow>Відгуки</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight">Що про нас кажуть клієнти</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Реальні відгуки від людей, які вже скористались нашими послугами.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <StaggerItem key={i}>
                <div data-testid={`review-${i}`} className="border border-slate-200 bg-white p-6 h-full">
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
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
