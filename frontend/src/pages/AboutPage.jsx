import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import LeadForm from "../components/LeadForm";
import Breadcrumbs from "../components/Breadcrumbs";
import KineticText from "../components/KineticText";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { GALLERY, SITE } from "../lib/site-data";
import { ShieldCheck, Clock, Users, Heart } from "lucide-react";
import { useSeo, breadcrumbSchema } from "../lib/seo";

export default function AboutPage() {
  useSeo({
    title: "Про нас — компанія ВАШ ПЕРЕЇЗД у Полтаві",
    description: "ВАШ ПЕРЕЇЗД — професійна команда вантажників у Полтаві. Понад 5 років на ринку, власний автопарк, страхування, цілодобова робота.",
    path: "/about",
    schema: breadcrumbSchema([{ name: "Головна", path: "/" }, { name: "Про нас", path: "/about" }]),
  });

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[{ name: "Головна", path: "/" }, { name: "Про нас" }]} />

        <Section className="!py-16 lg:!py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Про нас</Eyebrow>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight leading-[1.05] text-foreground">
                <KineticText text="Команда, що робить" />
                <br />
                <span className="font-serif italic text-accent">переїзди простими</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Компанія {SITE.brand} надає послуги вантажних перевезень у Полтаві понад 5 років.
                Ми — це професійні вантажники, які відповідально та дбайливо виконають будь-яку задачу.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                За потреби розберемо та зберемо ваші меблі, використаємо якісні пакувальні матеріали
                і підберемо авто саме під ваш переїзд. З нами ви можете вирішити всі питання у будь-який час —
                ми працюємо цілодобово та без вихідних з турботою про вас.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                <div className="img-zoom row-span-2"><img src={GALLERY[5]} alt="Команда вантажників ВАШ ПЕРЕЇЗД" className="h-full w-full object-cover rounded-sm" /></div>
                <div className="img-zoom"><img src={GALLERY[1]} alt="Перевезення меблів у Полтаві" className="h-44 w-full object-cover rounded-sm" /></div>
                <div className="img-zoom"><img src={GALLERY[2]} alt="Робота команди ВАШ ПЕРЕЇЗД" className="h-44 w-full object-cover rounded-sm" /></div>
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="bg-surface border-y border-border">
          <FadeIn>
            <Eyebrow>Наші принципи</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight mb-10 text-foreground">У що ми віримо</h2>
          </FadeIn>
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: ShieldCheck, t: "Відповідальність", d: "Кожна річ — це зона відповідальності команди. Ми відповідаємо за результат." },
              { i: Clock, t: "Пунктуальність", d: "Приїжджаємо вчасно. Якщо щось затримує — попереджаємо за годину." },
              { i: Users, t: "Команда", d: "Ми працюємо разом роками. Це не випадкові виконавці з оголошення." },
              { i: Heart, t: "Турбота", d: "Ваш переїзд — наш стрес-тест. Ми хочемо, щоб ви не нервували." },
            ].map((b) => {
              const I = b.i;
              return (
                <StaggerItem key={b.t}>
                  <div className="bg-card border border-border p-6 h-full">
                    <I className="w-7 h-7 text-accent mb-4" />
                    <h3 className="font-display font-bold text-lg mb-2 text-foreground">{b.t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </Section>

        <Section className="panel-ink">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Замовити</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">Поговоримо?</h2>
              <p className="mt-4 opacity-80">Залиште заявку — менеджер зателефонує протягом 10 хвилин.</p>
            </FadeIn>
            <FadeIn delay={0.1}><LeadForm variant="dark" source="/about" /></FadeIn>
          </div>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingContact />
    </>
  );
}
