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
import { Mail, Linkedin, Github, Twitter, FileText } from "lucide-react";
import leetcodeLogo from "@/assets/leetcode.svg";
import gfgLogo from "@/assets/geeksforgeeks.svg";

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
        title="Ashish Guleria | Software Engineer & Full Stack Developer"
        description="Portfolio of Ashish Guleria: Software Engineer & Full Stack Web Developer. Projects, about, contact, and blog."
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
              Ashish Guleria
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Software Engineer & Full Stack Web Developer
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" className="hover-scale">
                <a href="#contact">Contact me</a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog">Read the blog</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://drive.google.com/file/d/1AfCCeVgSXvhjuefcNG3TWm5yYhpFj8uv/view" target="_blank" rel="noopener">
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
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-6 rounded-full opacity-60 blur-2xl"
                style={{ background: "radial-gradient(closest-side, hsl(var(--brand) / 0.18), transparent 70%)" }}
              />
              <img
                src={avatar}
                alt="Ashish Guleria portrait"
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
          <ProjectCard image={p1} title="Curio" href="https://github.com/ashishguleria04/Curio" />
          <ProjectCard image={p2} title="Login Page (Tailwind CSS)" href="https://github.com/ashishguleria04/loginpage-tailwindcss" />
          <ProjectCard image={p3} title="Project Certify" href="https://github.com/ashishguleria04/Project-Certify" />
          <ProjectCard image={p1} title="Multimodal Vision Language Model" href="https://github.com/ashishguleria04/Multimodal-Vision-Language-Model" />
          <ProjectCard image={p2} title="Straight Line in Python" href="https://github.com/ashishguleria04/Straight-Line-In-Python" />
          <ProjectCard image={p3} title="IdeaLab" href="https://github.com/ashishguleria04/IdeaLab" />
          <ProjectCard image={p1} title="Website Performance Analyzer Extension" href="https://github.com/ashishguleria04/Website-Performance-Analyzer-Extension" />
          <ProjectCard image={p2} title="HeySpeakers" href="https://github.com/ashishguleria04/heyspeakers" />
          <ProjectCard image={p3} title="SHEild – Women Safety at Workplaces" href="https://github.com/ashishguleria04/sexual-harassment" />
          <ProjectCard image={p1} title="Simple Ad Blocker" href="https://github.com/ashishguleria04/simple-ad-blocker" />
          <ProjectCard image={p2} title="Python QR Code Generator" href="https://github.com/ashishguleria04/python-QR-Code-Generator" />
          <ProjectCard image={p3} title="Editro Flask Image Editor" href="https://github.com/ashishguleria04/Editro-Flask-Img-Editor" />
          <ProjectCard image={p1} title="Python Chatbot" href="https://github.com/ashishguleria04/Python-Chatbot" />
          <ProjectCard image={p2} title="Snake Game" href="https://github.com/ashishguleria04/snake-game" />
          <ProjectCard image={p3} title="Odin Landing Page" href="https://github.com/ashishguleria04/odin-landing-page" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight font-display">About</h2>
            <p className="mt-4 text-muted-foreground max-w-prose">
              I’m Ashish Guleria, a passionate Software Engineer and Full Stack Web Developer who thrives on building meaningful and efficient digital experiences. With strong expertise in frontend and backend technologies, I love creating seamless, performant, and visually engaging web solutions.
            </p>
            <p className="mt-4 text-muted-foreground max-w-prose">
              Beyond coding, I’m an explorer of new tech trends, a problem-solver at heart, and a constant learner — whether it’s diving into AI integrations, optimizing website performance, or designing engaging user interfaces. My projects range from creative UI experiments to impactful real-world applications.
            </p>
            <p className="mt-4 text-muted-foreground max-w-prose">
              My mission is simple: to build technology that’s both beautiful and functional, while continuously leveling up my skills and contributing to the tech community.
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
              <a href="https://drive.google.com/file/d/1AfCCeVgSXvhjuefcNG3TWm5yYhpFj8uv/view" target="_blank" rel="noopener" className="hover-scale">View resume</a>
            </Button>
          </div>
        </motion.form>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="outline" size="icon" aria-label="Email">
            <a href="mailto:guleriaashish85@gmail.com"><Mail className="size-4" /></a>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
            <a href="https://www.linkedin.com/in/ashish-guleria04/" target="_blank" rel="noopener"><Linkedin className="size-4" /></a>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="GitHub">
            <a href="https://github.com/ashishguleria04" target="_blank" rel="noopener"><Github className="size-4" /></a>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="X (Twitter)">
            <a href="https://x.com/ashishguleria_" target="_blank" rel="noopener"><Twitter className="size-4" /></a>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="Resume">
            <a href="https://drive.google.com/file/d/1AfCCeVgSXvhjuefcNG3TWm5yYhpFj8uv/view" target="_blank" rel="noopener"><FileText className="size-4" /></a>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="LeetCode">
            <a href="https://leetcode.com/u/aashiishh_/" target="_blank" rel="noopener">
              <img src={leetcodeLogo} alt="LeetCode logo" className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="GeeksforGeeks">
            <a href="https://www.geeksforgeeks.org/user/ashishguleria04/" target="_blank" rel="noopener">
              <img src={gfgLogo} alt="GeeksforGeeks logo" className="size-4" />
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="container mx-auto text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ashish Guleria. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default Index;
