import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen grid place-items-center">
        <div className="max-w-xl text-center px-4">
          <div className="font-display text-7xl md:text-9xl font-extrabold text-orange-600">404</div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mt-4">Сторінку не знайдено</h1>
          <p className="text-slate-600 mt-4">Можливо, посилання застаріло. Поверніться на головну і ми все знайдемо разом.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-sm font-semibold mt-8">
            На головну
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
