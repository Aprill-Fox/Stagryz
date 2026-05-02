import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { GALLERY } from "../lib/site-data";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        <Section className="!pt-8">
          <FadeIn>
            <Eyebrow>Галерея</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight">Наша робота — у фото</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Кілька кадрів з реальних виїздів. Без фотошопу — просто команда за роботою.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY.map((g, i) => (
              <StaggerItem key={i}>
                <div className="aspect-square overflow-hidden rounded-sm bg-slate-100">
                  <img src={g} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
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
