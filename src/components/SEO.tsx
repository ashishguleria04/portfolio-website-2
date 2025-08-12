import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export const SEO = ({
  title,
  description = "Modern, responsive portfolio with projects, blog, and contact.",
  canonical,
  type = "website",
  image = "https://lovable.dev/opengraph-image-p98pqg.png",
}: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, prop = false) => {
      let el = document.querySelector<HTMLMetaElement>(
        prop ? `meta[property='${name}']` : `meta[name='${name}']`
      );
      if (!el) {
        el = document.createElement("meta");
        if (prop) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:image", image, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:image", image);

    const url = canonical || window.location.href;
    let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }, [title, description, canonical, type, image]);

  return null;
};
