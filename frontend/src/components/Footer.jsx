import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Truck } from "lucide-react";
import { SITE, SERVICES } from "../lib/site-data";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-slate-900 text-slate-300 mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 bg-orange-600 grid place-items-center rounded-sm">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display font-extrabold text-white text-lg">{SITE.brand}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">{SITE.city}</div>
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Понад 5 років професійних вантажних перевезень у Полтаві та по всій Україні. Цілодобово, без вихідних.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Послуги</h4>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map(s => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-orange-500 transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Навігація</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-orange-500">Про нас</Link></li>
            <li><Link to="/fleet" className="hover:text-orange-500">Автопарк</Link></li>
            <li><Link to="/gallery" className="hover:text-orange-500">Галерея</Link></li>
            <li><Link to="/reviews" className="hover:text-orange-500">Відгуки</Link></li>
            <li><Link to="/faq" className="hover:text-orange-500">Питання</Link></li>
            <li><Link to="/blog" className="hover:text-orange-500">Блог</Link></li>
            <li><Link to="/contacts" className="hover:text-orange-500">Контакти</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Контакти</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-orange-500 mt-0.5" /><a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a></li>
            <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-orange-500 mt-0.5" /><a href={SITE.emailHref} className="hover:text-white">{SITE.email}</a></li>
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-orange-500 mt-0.5" />{SITE.address}</li>
            <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-orange-500 mt-0.5" />{SITE.workingHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} {SITE.brand}. Всі права захищені.</span>
          <span>Створено з турботою про ваш переїзд.</span>
        </div>
      </div>
    </footer>
  );
}
