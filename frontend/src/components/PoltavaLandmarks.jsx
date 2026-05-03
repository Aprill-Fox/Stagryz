import { motion } from "framer-motion";
import { FadeIn, Section, Eyebrow } from "./Motion";

// Minimal SVG illustrations of iconic Poltava landmarks
// Монумент Слави, Біла альтанка (Ротонда), Кругла площа
function MonumentOfGlory() {
  return (
    <svg viewBox="0 0 120 220" className="w-full h-full" aria-label="Монумент Слави у Полтаві">
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {/* base */}
        <rect x="35" y="195" width="50" height="15" />
        <rect x="30" y="210" width="60" height="5" />
        {/* column */}
        <rect x="54" y="50" width="12" height="145" />
        {/* column lines */}
        <line x1="58" y1="55" x2="58" y2="190" strokeWidth="0.5" opacity="0.4" />
        <line x1="62" y1="55" x2="62" y2="190" strokeWidth="0.5" opacity="0.4" />
        {/* capital */}
        <rect x="49" y="42" width="22" height="8" />
        <rect x="51" y="35" width="18" height="7" />
        {/* eagle stylized */}
        <path d="M60 15 L54 30 L66 30 Z" />
        <path d="M60 15 L50 22 M60 15 L70 22" />
        <circle cx="60" cy="12" r="3" />
        {/* laurel */}
        <path d="M40 50 Q35 35 45 30" />
        <path d="M80 50 Q85 35 75 30" />
      </g>
    </svg>
  );
}

function WhiteGazebo() {
  return (
    <svg viewBox="0 0 180 160" className="w-full h-full" aria-label="Біла альтанка у Полтаві">
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {/* dome */}
        <path d="M30 70 Q90 10 150 70" />
        <path d="M85 25 L95 25" />
        <circle cx="90" cy="18" r="2" />
        {/* columns */}
        <line x1="40" y1="70" x2="40" y2="135" />
        <line x1="65" y1="70" x2="65" y2="135" />
        <line x1="90" y1="70" x2="90" y2="135" />
        <line x1="115" y1="70" x2="115" y2="135" />
        <line x1="140" y1="70" x2="140" y2="135" />
        {/* base */}
        <rect x="25" y="135" width="130" height="8" />
        <rect x="15" y="143" width="150" height="6" />
        {/* steps */}
        <line x1="10" y1="152" x2="170" y2="152" />
      </g>
    </svg>
  );
}

function RoundSquare() {
  return (
    <svg viewBox="0 0 220 180" className="w-full h-full" aria-label="Кругла площа у Полтаві">
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {/* curved left facade */}
        <path d="M10 140 Q30 80 70 70" />
        <line x1="10" y1="140" x2="70" y2="140" />
        <line x1="10" y1="140" x2="10" y2="90" />
        <line x1="25" y1="90" x2="25" y2="140" strokeWidth="0.7" opacity="0.5" />
        <line x1="40" y1="85" x2="40" y2="140" strokeWidth="0.7" opacity="0.5" />
        <line x1="55" y1="80" x2="55" y2="140" strokeWidth="0.7" opacity="0.5" />
        {/* central monument (Монумент Слави — тонкий стовп у центрі) */}
        <line x1="110" y1="30" x2="110" y2="130" />
        <rect x="104" y="130" width="12" height="8" />
        <rect x="100" y="138" width="20" height="4" />
        <circle cx="110" cy="24" r="4" />
        {/* curved right facade */}
        <path d="M210 140 Q190 80 150 70" />
        <line x1="210" y1="140" x2="150" y2="140" />
        <line x1="210" y1="90" x2="210" y2="140" />
        <line x1="195" y1="90" x2="195" y2="140" strokeWidth="0.7" opacity="0.5" />
        <line x1="180" y1="85" x2="180" y2="140" strokeWidth="0.7" opacity="0.5" />
        <line x1="165" y1="80" x2="165" y2="140" strokeWidth="0.7" opacity="0.5" />
        {/* ground */}
        <line x1="0" y1="150" x2="220" y2="150" />
      </g>
    </svg>
  );
}

export default function PoltavaLandmarks() {
  const items = [
    { name: "Монумент Слави", caption: "1811 — серце Круглої площі", Icon: MonumentOfGlory },
    { name: "Біла альтанка", caption: "Ротонда над Ворсклою", Icon: WhiteGazebo },
    { name: "Кругла площа", caption: "Унікальний архітектурний ансамбль", Icon: RoundSquare },
  ];

  return (
    <Section className="bg-surface border-y border-border overflow-hidden">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <FadeIn className="lg:col-span-2">
          <Eyebrow>Наше місто</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight text-foreground">
            Працюємо у <span className="font-serif italic text-accent">Полтаві</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Ми знаємо це місто — від Подолу до Левади, від Алмазного до Сади‑1. Знаємо, де в пʼятничний вечір затори, де вʼїзд із фурою вимагає дозволу, де під`їзди вимагають обережного підйому, а де — навпаки, один виклик і справа зроблена.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Полтава — місто з характером. І ми раді працювати саме тут.
          </p>
        </FadeIn>
        <FadeIn delay={0.1} className="lg:col-span-3">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {items.map((it, i) => (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="aspect-[3/4] md:aspect-square text-foreground/80 mb-3">
                  <it.Icon />
                </div>
                <div className="font-display font-bold text-sm md:text-base text-foreground">{it.name}</div>
                <div className="text-xs text-muted-foreground mt-1 hidden md:block">{it.caption}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
