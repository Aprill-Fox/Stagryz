import { Star } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import Breadcrumbs from "../components/Breadcrumbs";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { REVIEWS } from "../lib/site-data";
import { useSeo, breadcrumbSchema } from "../lib/seo";

export default function ReviewsPage() {
  useSeo({
    title: "Відгуки — реальні відгуки клієнтів ВАШ ПЕРЕЇЗД у Полтаві",
    description: "Відгуки клієнтів про переїзди у Полтаві: квартирні, офісні, вантажники, перевезення піаніно. Реальний досвід людей.",
    path: "/reviews",
    schema: breadcrumbSchema([{ name: "Головна", path: "/" }, { name: "Відгуки", path: "/reviews" }]),
  });

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[{ name: "Головна", path: "/" }, { name: "Відгуки" }]} />
        <Section className="!py-16 lg:!py-24">
          <FadeIn>
            <Eyebrow>Відгуки</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight text-foreground">
              Що про нас <span className="font-serif italic text-accent">кажуть клієнти</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Реальні відгуки від людей, які вже скористались нашими послугами.
            </p>
          </FadeIn>
        </Section>
        <Section className="!pt-0">
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <StaggerItem key={i}>
                <div data-testid={`review-${i}`} className="border border-border bg-card p-6 h-full">
                  <div className="flex gap-0.5 text-accent mb-3">
                    {[...Array(r.rating)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-foreground/80 leading-relaxed">«{r.text}»</p>
                  <div className="mt-5 pt-4 border-t border-border flex justify-between items-center">
                    <span className="font-semibold text-foreground">{r.name}</span>
                    <span className="text-xs text-muted-foreground">{r.service}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingContact />
    </>
  );
}
