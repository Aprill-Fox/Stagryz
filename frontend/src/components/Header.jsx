import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Truck } from "lucide-react";
import { SITE } from "../lib/site-data";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "./MagneticButton";

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
        scrolled ? "backdrop-blur-xl bg-background/85 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-4">
        <Link to="/" data-testid="logo-link" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 bg-foreground text-background grid place-items-center rounded-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <Truck className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-base md:text-lg text-foreground tracking-tight">{SITE.brand}</div>
            <div className="text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">{SITE.city} · 24/7</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {NAV.slice(1).map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.to.replace("/", "")}`}
              className={({ isActive }) => `nav-link text-sm font-medium text-muted-foreground hover:text-foreground transition-colors ${isActive ? "active text-foreground" : ""}`}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MagneticButton
            as="a"
            href={SITE.phoneHref}
            data-testid="header-call-btn"
            className="hidden md:inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2.5 rounded-sm font-semibold text-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            {SITE.phone}
          </MagneticButton>
          <button
            onClick={() => setOpen(!open)}
            data-testid="mobile-menu-toggle"
            className="xl:hidden w-10 h-10 grid place-items-center rounded-sm border border-border bg-surface"
            aria-label="menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="xl:hidden border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`mobile-nav-${n.to.replace("/", "")}`}
                className={({ isActive }) => `px-3 py-3 rounded-sm font-medium ${isActive ? "bg-foreground text-background" : "text-foreground hover:bg-muted"}`}
              >
                {n.label}
              </NavLink>
            ))}
            <a href={SITE.phoneHref} data-testid="mobile-call-btn" className="mt-2 inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-3 rounded-sm font-semibold">
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
