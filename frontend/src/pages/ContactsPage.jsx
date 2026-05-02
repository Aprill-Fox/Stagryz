import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import LeadForm from "../components/LeadForm";
import { FadeIn, Section, Eyebrow } from "../components/Motion";
import { SITE } from "../lib/site-data";

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        <Section className="!pt-8">
          <FadeIn>
            <Eyebrow>Контакти</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight">На звʼязку 24/7</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Зателефонуйте напряму або залиште заявку — менеджер передзвонить протягом 10 хвилин.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <div className="grid lg:grid-cols-2 gap-10">
            <FadeIn>
              <div className="border border-slate-200 bg-white p-8 grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-orange-600 text-white rounded-sm shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Телефон</div>
                    <a href={SITE.phoneHref} className="font-display font-bold text-2xl block mt-1 hover:text-orange-600">{SITE.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-slate-100 rounded-sm shrink-0">
                    <Mail className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Email</div>
                    <a href={SITE.emailHref} className="font-semibold text-lg block mt-1 hover:text-orange-600">{SITE.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-slate-100 rounded-sm shrink-0">
                    <MapPin className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Місто</div>
                    <div className="font-semibold text-lg mt-1">{SITE.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 grid place-items-center bg-slate-100 rounded-sm shrink-0">
                    <Clock className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">Графік</div>
                    <div className="font-semibold text-lg mt-1">{SITE.workingHours}</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-slate-900 text-white p-8">
                <h2 className="font-display text-2xl font-bold mb-2">Залишити заявку</h2>
                <p className="text-slate-300 text-sm mb-6">Менеджер передзвонить протягом 10 хвилин.</p>
                <LeadForm variant="dark" source="/contacts" />
              </div>
            </FadeIn>
          </div>
        </Section>

        <Section className="!pt-0 !pb-20">
          <div className="border border-slate-200 overflow-hidden rounded-sm">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Poltava,Ukraine&output=embed"
              width="100%" height="380" loading="lazy" style={{ border: 0 }}
            />
          </div>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
