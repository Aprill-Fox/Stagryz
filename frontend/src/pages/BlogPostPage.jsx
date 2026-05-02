import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import FloatingContact from "../components/FloatingContact";
import Breadcrumbs from "../components/Breadcrumbs";
import LeadForm from "../components/LeadForm";
import { FadeIn, Section, Eyebrow } from "../components/Motion";
import { POSTS } from "../lib/site-data";
import { useSeo, breadcrumbSchema } from "../lib/seo";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  useSeo({
    title: post?.title,
    description: post?.excerpt,
    path: post ? `/blog/${post.slug}` : "/blog",
    image: post?.cover,
    schema: post
      ? [
          breadcrumbSchema([
            { name: "Головна", path: "/" },
            { name: "Блог", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            image: [post.cover],
            description: post.excerpt,
            author: { "@type": "Organization", name: "ВАШ ПЕРЕЇЗД" },
          },
        ]
      : null,
  });

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <Breadcrumbs items={[
          { name: "Головна", path: "/" },
          { name: "Блог", path: "/blog" },
          { name: post.title },
        ]} />

        <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 lg:py-20">
          <FadeIn>
            <Eyebrow>Стаття</Eyebrow>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mt-3 leading-[1.1] text-foreground">
              {post.title}
            </h1>
            <div className="text-xs text-muted-foreground mt-4 uppercase tracking-wider">
              {new Date(post.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="img-zoom mt-8 rounded-sm">
              <img src={post.cover} alt={post.title} className="w-full aspect-[16/9] object-cover" />
            </div>
          </FadeIn>

          <div className="max-w-none mt-10 space-y-5">
            {post.content.map((p, i) => (
              <p key={i} className="text-foreground/80 text-lg leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-border">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 link-underline">
              <ArrowLeft className="w-4 h-4" /> Усі статті
            </Link>
          </div>
        </article>

        <Section className="bg-foreground text-background">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Замовити</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">Готові до переїзду?</h2>
              <p className="mt-4 opacity-80">Залиште заявку — і ми все організуємо.</p>
            </FadeIn>
            <FadeIn delay={0.1}><LeadForm variant="dark" source={`/blog/${slug}`} /></FadeIn>
          </div>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingContact />
    </>
  );
}
