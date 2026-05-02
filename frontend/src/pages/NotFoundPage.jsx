import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSeo } from "../lib/seo";

export default function NotFoundPage() {
  useSeo({ title: "404 — Сторінку не знайдено", description: "Сторінка не існує або була переміщена.", path: "/404" });

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen grid place-items-center">
        <div className="max-w-xl text-center px-4">
          <div className="font-display text-7xl md:text-9xl font-extrabold text-accent">404</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 text-foreground">Сторінку не знайдено</h1>
          <p className="text-muted-foreground mt-4">Можливо, посилання застаріло. Поверніться на головну і ми все знайдемо разом.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-sm font-semibold mt-8">
            На головну
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
