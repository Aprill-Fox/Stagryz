import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import Breadcrumbs from "../components/Breadcrumbs";
import { FadeIn, StaggerGrid, StaggerItem, Section, Eyebrow } from "../components/Motion";
import { POSTS } from "../lib/site-data";
import { useSeo, breadcrumbSchema } from "../lib/seo";

export default function BlogPage() {
  useSeo({
    title: "Блог про переїзди — поради та чек-листи",
    description: "Корисні статті від команди ВАШ ПЕРЕЇЗД: чек-листи, поради щодо пакування, як організувати переїзд у Полтаві.",
    path: "/blog",
    schema: breadcrumbSchema([{ name: "Головна", path: "/" }, { name: "Блог", path: "/blog" }]),
  });

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[{ name: "Головна", path: "/" }, { name: "Блог" }]} />
        <Section className="!py-16 lg:!py-24">
          <FadeIn>
            <Eyebrow>Блог</Eyebrow>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mt-3 tracking-tight text-foreground">
              Корисні статті <span className="font-serif italic text-accent">про переїзди</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Чек-листи, поради та лайфхаки від нашої команди — щоб ваш переїзд був без сюрпризів.
            </p>
          </FadeIn>
        </Section>

        <Section className="!pt-0">
          <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <StaggerItem key={p.slug}>
                <Link to={`/blog/${p.slug}`} data-testid={`blog-card-${p.slug}`} className="group block h-full">
                  <div className="aspect-[16/10] img-zoom rounded-sm">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs text-muted-foreground mt-4 uppercase tracking-wider">
                    {new Date(p.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <h3 className="font-display font-bold text-xl mt-2 leading-tight text-foreground group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{p.excerpt}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingContact />
    </>
  );
}
