import { Phone } from "lucide-react";
import { SITE } from "../lib/site-data";

export default function MobileStickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40">
      <a
        href={SITE.phoneHref}
        data-testid="mobile-sticky-call"
        className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3.5 rounded-sm font-bold shadow-xl shadow-orange-600/30 active:scale-95 transition-all"
      >
        <Phone className="w-4 h-4" />
        Зателефонувати — швидкий прорахунок
      </a>
    </div>
  );
}
