import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import Breadcrumbs from "../components/Breadcrumbs";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { GALLERY } from "../lib/site-data";
import { useSeo, breadcrumbSchema } from "../lib/seo";

export default function GalleryPage() {
  useSeo({
    title: "Галерея — фото з переїздів у Полтаві",
    description: "Реальні фото роботи команди ВАШ ПЕРЕЇЗД: квартирні переїзди, доставка меблів, вантажники у Полтаві.",
    path: "/gallery",
    schema: breadcrumbSchema([{ name: "Головна", path: "/" }, { name: "Галерея", path: "/gallery" }]),
  });

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[{ name: "Головна", path: "/" }, { name: "Галерея" }]} />
        <Section className="!py-16 lg:!py-24">
          <FadeIn>
            <Eyebrow>Галерея</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight text-foreground">
              Наша робота — <span className="font-serif italic text-accent">у фото</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Кілька кадрів з реальних виїздів. Без фотошопу — просто команда за роботою.
            </p>
          </FadeIn>
        </Section>
        <Section className="!pt-0">
          <StaggerGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY.map((g, i) => (
              <StaggerItem key={i}>
                <div className="aspect-square img-zoom bg-muted">
                  <img src={g} alt={`Фото переїзду ${i + 1} — ВАШ ПЕРЕЇЗД Полтава`} className="w-full h-full object-cover" />
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
