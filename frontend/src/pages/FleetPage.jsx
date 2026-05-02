import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import LeadForm from "../components/LeadForm";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { FLEET } from "../lib/site-data";

export default function FleetPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        <Section className="!pt-8">
          <FadeIn>
            <Eyebrow>Автопарк</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight">Свої авто під будь-який обʼєм</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Три класи фургонів — від компактного «Міні» для однокімнатної квартири до місткого «Максі» для повноцінного офісу або міжміського переїзду.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <StaggerGrid className="grid lg:grid-cols-3 gap-6">
            {FLEET.map((c) => (
              <StaggerItem key={c.slug}>
                <div data-testid={`fleet-page-${c.slug}`} className="border border-slate-200 bg-white overflow-hidden h-full">
                  <div className="bg-slate-50 p-6">
                    <img src={c.img} alt={c.name} className="w-full h-44 object-contain" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="font-display text-3xl font-bold tracking-tight">{c.name}</h3>
                    <p className="mt-2 text-sm text-slate-500">{c.best}</p>
                    <dl className="mt-6 grid grid-cols-2 gap-y-3 text-sm">
                      <dt className="text-slate-500">Довжина</dt><dd className="font-semibold text-right">{c.length}</dd>
                      <dt className="text-slate-500">Висота</dt><dd className="font-semibold text-right">{c.height}</dd>
                      <dt className="text-slate-500">Ширина</dt><dd className="font-semibold text-right">{c.width}</dd>
                      <dt className="text-slate-500">Обʼєм</dt><dd className="font-semibold text-right">{c.volume}</dd>
                      <dt className="text-slate-500">Вантаж</dt><dd className="font-semibold text-right">{c.capacity}</dd>
                    </dl>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>

        <Section className="bg-slate-900 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Замовити</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">Не знаєте, який обʼєм потрібен?</h2>
              <p className="mt-4 text-slate-300">Залиште заявку — підберемо авто саме під ваш переїзд.</p>
            </FadeIn>
            <FadeIn delay={0.1}><LeadForm variant="dark" source="/fleet" /></FadeIn>
          </div>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
