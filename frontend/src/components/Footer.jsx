import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Truck } from "lucide-react";
import { SITE, SERVICES } from "../lib/site-data";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="panel-ink mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 bg-accent grid place-items-center rounded-sm">
              <Truck className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <div className="font-display font-extrabold text-background text-lg">{SITE.brand}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50">{SITE.city}</div>
            </div>
          </Link>
          <p className="text-sm opacity-70 leading-relaxed">
            Понад 5 років професійних вантажних перевезень у Полтаві та по всій Україні. Цілодобово, без вихідних.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">Послуги</h4>
          <ul className="space-y-2.5 text-sm opacity-80">
            {SERVICES.map(s => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-accent transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">Навігація</h4>
          <ul className="space-y-2.5 text-sm opacity-80">
            <li><Link to="/about" className="hover:text-accent">Про нас</Link></li>
            <li><Link to="/fleet" className="hover:text-accent">Автопарк</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Галерея</Link></li>
            <li><Link to="/reviews" className="hover:text-accent">Відгуки</Link></li>
            <li><Link to="/faq" className="hover:text-accent">Питання</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Блог</Link></li>
            <li><Link to="/contacts" className="hover:text-accent">Контакти</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-5 text-sm uppercase tracking-wider">Контакти</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-accent mt-0.5" /><a href={SITE.phoneHref} className="hover:text-background">{SITE.phone}</a></li>
            <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-accent mt-0.5" /><a href={SITE.emailHref} className="hover:text-background">{SITE.email}</a></li>
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-accent mt-0.5" />{SITE.address}</li>
            <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-accent mt-0.5" />{SITE.workingHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs opacity-60">
          <span>© {new Date().getFullYear()} {SITE.brand}. Всі права захищені.</span>
          <span>Створено з турботою про ваш переїзд.</span>
        </div>
      </div>
    </footer>
  );
}
