import { useEffect } from "react";
import { SITE } from "./site-data";

const BASE = "https://stagruz.pl.ua"; // canonical base URL for SEO

export function useSeo({ title, description, path = "", schema = null, image = "" }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.brand}` : `${SITE.brand} | Вантажні перевезення в Полтаві`;
    document.title = fullTitle;

    const setMeta = (name, content, attr = "name") => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", `${BASE}${path}`, "property");
    if (image) setMeta("og:image", image, "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    // canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", `${BASE}${path}`);

    // JSON-LD
    document.querySelectorAll('script[data-seo-jsonld="true"]').forEach((s) => s.remove());
    if (schema) {
      const arr = Array.isArray(schema) ? schema : [schema];
      arr.forEach((s) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo-jsonld", "true");
        script.text = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }
  }, [title, description, path, image, schema]);
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: SITE.brand,
  image: `${BASE}/og-cover.jpg`,
  url: BASE,
  telephone: SITE.phone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Полтава",
    addressRegion: "Полтавська область",
    addressCountry: "UA",
  },
  areaServed: ["Полтава", "Полтавська область", "Україна"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${BASE}${it.path}`,
  })),
});

export const serviceSchema = ({ name, description, slug }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: name,
  provider: { "@type": "MovingCompany", name: SITE.brand, telephone: SITE.phone },
  areaServed: ["Полтава", "Полтавська область", "Україна"],
  name,
  description,
  url: `${BASE}/services/${slug}`,
});

export const faqPageSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
