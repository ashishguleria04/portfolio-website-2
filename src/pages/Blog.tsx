import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

const posts = [
  {
    id: 1,
    title: "Designing Smooth Theme Transitions",
    date: "2025-06-24",
    excerpt:
      "Learn how to craft elegant dark/light transitions using CSS variables and motion.",
    image: blog1,
  },
  {
    id: 2,
    title: "Framer Motion Patterns for React",
    date: "2025-05-12",
    excerpt:
      "Practical animation patterns for cards, lists, and page transitions.",
    image: blog2,
  },
  {
    id: 3,
    title: "Building Accessible, Animated Buttons",
    date: "2025-04-05",
    excerpt:
      "Balancing flair with usability: focus rings, reduced motion, and more.",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Blog | Thoughts on Design & Dev"
        description="Clean, minimalist blog with smooth fade-in animations on scroll."
        type="website"
      />
      <section className="container mx-auto py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight font-display">Blog</h1>
          <p className="mt-2 text-muted-foreground">Notes on design systems, motion, and modern frontend.</p>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card className="overflow-hidden border-0 bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-elevated hover:shadow-glow transition-shadow">
                <img
                  src={p.image}
                  alt={`${p.title} cover image`}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
                <CardContent className="py-5">
                  <time className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</time>
                  <h2 className="mt-2 text-lg font-semibold leading-tight font-display">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
