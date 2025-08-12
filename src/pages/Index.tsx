import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SEO } from "@/components/SEO";
import { ProjectCard } from "@/components/ProjectCard";
import avatar from "@/assets/avatar.jpg";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Index = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    toast({
      title: "Message sent",
      description: `Thanks${name ? `, ${name}` : ""}! I'll get back to you shortly.`,
    });
    e.currentTarget.reset();
  };

  return (
    <main className="min-h-screen">
      <SEO
        title="Modern Portfolio | Developer & Designer"
        description="Sleek single-page portfolio with projects, about, contact, and blog. Dark/light themes with tasteful animations."
        type="website"
      />

      {/* Hero */}
      <section id="home" className="container mx-auto pt-16 pb-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground mb-3">Available for freelance</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.1] tracking-tight font-display">
              Your Name
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Frontend engineer crafting elegant, performant interfaces with motion and clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" className="hover-scale">
                <a href="#contact">Contact me</a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog">Read the blog</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="/resume.pdf" download>
                  Download resume
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="justify-self-center"
          >
            <div className="relative size-40 sm:size-48 rounded-full overflow-hidden ring-2 ring-ring shadow-elevated">
              <img
                src={avatar}
                alt="Professional avatar portrait"
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto py-16">
        <header className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight font-display">Projects</h2>
          <p className="text-muted-foreground mt-2">Selected work with thoughtful details, gradients, and motion.</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            image={p1}
            title="Analytics Dashboard"
            description="A modular analytics experience with realtime charts and smooth transitions."
            tags={["React", "Recharts", "Design System"]}
          />
          <ProjectCard
            image={p2}
            title="Mobile App UI"
            description="Dark-to-blue accent UI with delightful interactions and gestures."
            tags={["React Native", "Motion", "Accessibility"]}
          />
          <ProjectCard
            image={p3}
            title="Landing Page"
            description="High-conversion hero with gradient CTAs and subtle parallax."
            tags={["Vite", "Tailwind", "SEO"]}
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight font-display">About</h2>
            <p className="mt-4 text-muted-foreground max-w-prose">
              I build fast, accessible, and expressive interfaces. My process blends a
              robust design system, semantic HTML, and purposeful motion to create
              experiences that feel effortless.
            </p>
          </div>
            <div>
              <div className="rounded-lg border bg-card/60 backdrop-blur p-4 shadow-elevated supports-[backdrop-filter]:bg-card/50">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-muted-foreground">Focus:</span> UI Engineering, Motion, Design Systems</li>
                  <li><span className="text-muted-foreground">Stack:</span> React, TypeScript, Tailwind, Framer Motion</li>
                  <li><span className="text-muted-foreground">Location:</span> Remote</li>
                </ul>
              </div>
            </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto py-16">
        <header className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight font-display">Contact</h2>
          <p className="text-muted-foreground mt-2">Let’s build something exceptional together.</p>
        </header>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-2 block text-sm">Name</label>
            <Input id="name" name="name" placeholder="Jane Doe" required />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="email" className="mb-2 block text-sm">Email</label>
            <Input id="email" name="email" type="email" placeholder="jane@email.com" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-2 block text-sm">Message</label>
            <Textarea id="message" name="message" placeholder="Tell me about your project" rows={6} required />
          </div>
          <div>
            <Button type="submit" variant="hero" className="hover-scale">Send message</Button>
          </div>
          <div className="sm:col-span-2">
            <Button asChild variant="outline">
              <a href="/resume.pdf" target="_blank" rel="noopener" className="hover-scale">View resume</a>
            </Button>
          </div>
        </motion.form>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default Index;
