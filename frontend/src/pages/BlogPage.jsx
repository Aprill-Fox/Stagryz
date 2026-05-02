import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { POSTS } from "../lib/site-data";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-28">
        <Section className="!pt-8">
          <FadeIn>
            <Eyebrow>Блог</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight">Корисні статті про переїзди</h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Чек-листи, поради та лайфхаки від нашої команди — щоб ваш переїзд був без сюрпризів.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <StaggerItem key={p.slug}>
                <Link to={`/blog/${p.slug}`} data-testid={`blog-card-${p.slug}`} className="group block h-full">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="text-xs text-slate-500 mt-4 uppercase tracking-wider">
                    {new Date(p.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h3 className="font-display font-bold text-xl mt-2 leading-tight group-hover:text-orange-600 transition-colors">{p.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
