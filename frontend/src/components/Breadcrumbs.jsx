import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  return (
    <div className="bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 text-xs text-muted-foreground flex items-center gap-2 flex-wrap">
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="w-3 h-3" />}
            {it.path ? (
              <Link to={it.path} className="hover:text-accent transition-colors">{it.name}</Link>
            ) : (
              <span className="text-foreground font-semibold">{it.name}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
