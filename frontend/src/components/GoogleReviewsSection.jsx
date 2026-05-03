import { Star, ExternalLink } from "lucide-react";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "./Motion";
import { REVIEWS, SITE } from "../lib/site-data";

// Google "G" icon — official colored
const GoogleG = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function GoogleReviewsSection() {
  const reviews = REVIEWS; // in future — fetched from Places API

  return (
    <Section className="bg-surface border-y border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <FadeIn>
          <Eyebrow>Відгуки в Google</Eyebrow>
          <div className="flex items-center gap-3 mt-3">
            <GoogleG className="w-7 h-7" />
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Що кажуть у <span className="font-serif italic text-accent">Google</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-display font-bold text-xl text-foreground">5.0</span>
            <span className="text-sm text-muted-foreground">на основі реальних відгуків</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={SITE.googleMapsUrl}
              target="_blank" rel="noreferrer"
              data-testid="google-maps-link"
              className="inline-flex items-center gap-2 border border-border bg-card px-5 py-3 rounded-sm font-semibold text-sm text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              <GoogleG className="w-4 h-4" /> Читати в Google
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={SITE.googleReviewUrl}
              target="_blank" rel="noreferrer"
              data-testid="google-review-link"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-5 py-3 rounded-sm font-semibold text-sm transition-colors"
            >
              Залишити відгук
            </a>
          </div>
        </FadeIn>
      </div>

      <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.slice(0, 6).map((r, i) => (
          <StaggerItem key={i}>
            <div data-testid={`google-review-${i}`} className="bg-card border border-border p-5 h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 grid place-items-center">
                  <span className="font-display font-bold text-accent">{r.name.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-foreground">{r.name}</div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="flex text-accent">
                      {[...Array(r.rating)].map((_, k) => <Star key={k} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <span className="text-[10px] text-muted-foreground ml-1">· {r.service}</span>
                  </div>
                </div>
                <GoogleG className="w-4 h-4 opacity-60" />
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{r.text}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </Section>
  );
}
