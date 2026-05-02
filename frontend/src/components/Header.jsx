import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Truck } from "lucide-react";
import { SITE } from "../lib/site-data";

const NAV = [
  { to: "/", label: "Головна" },
  { to: "/services", label: "Послуги" },
  { to: "/fleet", label: "Автопарк" },
  { to: "/about", label: "Про нас" },
  { to: "/gallery", label: "Галерея" },
  { to: "/reviews", label: "Відгуки" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Блог" },
  { to: "/contacts", label: "Контакти" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-white/85 border-b border-slate-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" data-testid="logo-link" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-slate-900 text-white grid place-items-center rounded-sm group-hover:bg-orange-600 transition-colors">
            <Truck className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-base md:text-lg text-slate-900 tracking-tight">{SITE.brand}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500">{SITE.city} · цілодобово</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.slice(1).map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.to.replace("/", "")}`}
              className={({ isActive }) => `nav-link text-sm font-medium text-slate-700 hover:text-slate-900 ${isActive ? "active text-slate-900" : ""}`}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            data-testid="header-call-btn"
            className="hidden md:inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2.5 rounded-sm font-semibold text-sm transition-all hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            {SITE.phone}
          </a>
          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden w-10 h-10 grid place-items-center rounded-sm border border-slate-200 bg-white"
            aria-label="menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div data-testid="mobile-menu" className="lg:hidden border-t border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`mobile-nav-${n.to.replace("/", "")}`}
                className={({ isActive }) => `px-3 py-3 rounded-sm font-medium ${isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"}`}
              >
                {n.label}
              </NavLink>
            ))}
            <a href={SITE.phoneHref} data-testid="mobile-call-btn" className="mt-2 inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-4 py-3 rounded-sm font-semibold">
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
