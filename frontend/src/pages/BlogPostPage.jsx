import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileStickyCTA from "../components/MobileStickyCTA";
import LeadForm from "../components/LeadForm";
import { FadeIn, Section, Eyebrow } from "../components/Motion";
import { POSTS } from "../lib/site-data";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 text-xs text-slate-500 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-orange-600">Головна</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-orange-600">Блог</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900 font-semibold line-clamp-1">{post.title}</span>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 lg:py-20">
          <FadeIn>
            <Eyebrow>Стаття</Eyebrow>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mt-3 leading-[1.1]">
              {post.title}
            </h1>
            <div className="text-xs text-slate-500 mt-4 uppercase tracking-wider">
              {new Date(post.date).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <img src={post.cover} alt={post.title} className="w-full aspect-[16/9] object-cover mt-8 rounded-sm" />
          </FadeIn>

          <div className="prose prose-slate max-w-none mt-10 space-y-5">
            {post.content.map((p, i) => (
              <p key={i} className="text-slate-700 text-lg leading-relaxed">{p}</p>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-slate-200">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
              <ArrowLeft className="w-4 h-4" /> Усі статті
            </Link>
          </div>
        </article>

        <Section className="bg-slate-900 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <Eyebrow>Замовити</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 tracking-tight">Готові до переїзду?</h2>
              <p className="mt-4 text-slate-300">Залиште заявку — і ми все організуємо.</p>
            </FadeIn>
            <FadeIn delay={0.1}><LeadForm variant="dark" source={`/blog/${slug}`} /></FadeIn>
          </div>
        </Section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
