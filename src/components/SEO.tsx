import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string; // Add support for an image
}

export const SEO = ({
  title,
  description = "Ashish Guleria's modern, responsive portfolio with projects, blog, and contact.",
  canonical,
  type = "website",
  image = `${window.location.origin}/assets/avatar.jpg`, // Default image
}: SEOProps) => {
  const url = canonical || window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};
