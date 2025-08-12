import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { Mail, BookOpen, Award } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
// Add react-icons for better brand icons
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Index = () => {
  return (
    <main className="min-h-screen bg-grid-light dark:bg-grid-dark">
      <SEO
        title="Ashish Guleria | Software Engineer & Full Stack Developer"
        description="Portfolio of Ashish Guleria: Software Engineer & Full Stack Web Developer. Projects, about, contact, and blog."
        type="website"
      />

      {/* Hero */}
      <section
        id="home"
        className="container mx-auto pt-16 pb-20 flex flex-col-reverse md:flex-row items-center gap-12"
      >
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide border border-blue-200 dark:border-blue-700 shadow-sm">
            Open for freelance, internships, and full-time roles
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight font-display mb-4">
            Hi, I'm{" "}
            <span>
              Ashish Guleria
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6">
            Software Engineer & Full Stack Web Developer
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            <Button asChild variant="outline">
              <Link to="/blog">
                <BookOpen className="size-4 mr-2" />
                Read the Blog
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://drive.google.com/file/d/1AfCCeVgSXvhjuefcNG3TWm5yYhpFj8uv/view"
                target="_blank"
                rel="noopener"
              >
                <FileText className="size-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-prose mb-8">
            I’m Ashish Guleria, a Software Engineer and Full Stack Web Developer passionate about building impactful, user-friendly, and visually appealing digital experiences. I love turning ideas into reality through clean code, creative design, and constant learning.
          </p>
          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <Button
              asChild
              variant="outline"
              size="icon"
              aria-label="Email"
              className="transition-all hover:scale-110"
            >
              <a href="mailto:guleriaashish85@gmail.com">
                <MdEmail className="size-5 text-white" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              aria-label="LinkedIn"
              className="transition-all hover:scale-110"
            >
              <a
                href="https://www.linkedin.com/in/ashish-guleria04/"
                target="_blank"
                rel="noopener"
              >
                <FaLinkedin className="size-5 text-white" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              aria-label="GitHub"
              className="transition-all hover:scale-110"
            >
              <a
                href="https://github.com/ashishguleria04"
                target="_blank"
                rel="noopener"
              >
                <FaGithub className="size-5 text-white" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              aria-label="X (Twitter)"
              className="transition-all hover:scale-110"
            >
              <a
                href="https://x.com/ashishguleria_"
                target="_blank"
                rel="noopener"
              >
                <FaXTwitter className="size-5 text-white" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              aria-label="LeetCode"
              className="transition-all hover:scale-110"
            >
              <a
                href="https://leetcode.com/u/aashiishh_/"
                target="_blank"
                rel="noopener"
              >
                <SiLeetcode className="size-5 text-white" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="icon"
              aria-label="GeeksforGeeks"
              className="transition-all hover:scale-110"
            >
              <a
                href="https://www.geeksforgeeks.org/user/ashishguleria04/"
                target="_blank"
                rel="noopener"
              >
                <SiGeeksforgeeks className="size-5 text-white" />
              </a>
            </Button>
          </div>
        </motion.div>
        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <div className="relative size-50 sm:size-56 md:size-64 rounded-full overflow-hidden ring-4 ring-blue-400/30 dark:ring-purple-700/40 shadow-elevated">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, hsl(var(--brand) / 0.18), transparent 70%)",
              }}
            />
            <img
              src={avatar}
              alt="Ashish Guleria portrait"
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto py-16">
        <header className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight font-display">
            Projects
          </h2>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Example project cards without images */}
          <a
            href="https://github.com/ashishguleria04/Curio"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Curio</h3>
            <p className="text-muted-foreground text-sm">
              A modern knowledge-sharing platform for curious minds to ask, answer, and discover.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/loginpage-tailwindcss"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Login Page (Tailwind CSS)</h3>
            <p className="text-muted-foreground text-sm">
              A beautiful, responsive login page built with Tailwind CSS and React.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/Project-Certify"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Project Certify</h3>
            <p className="text-muted-foreground text-sm">
              A certificate generator and management tool for events and organizations.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/Multimodal-Vision-Language-Model"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Multimodal Vision Language Model</h3>
            <p className="text-muted-foreground text-sm">
              Combines vision and language models for advanced AI applications.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/Straight-Line-In-Python"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Straight Line in Python</h3>
            <p className="text-muted-foreground text-sm">
              A Python tool to plot and analyze straight lines and their equations.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/IdeaLab"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">IdeaLab</h3>
            <p className="text-muted-foreground text-sm">
              A collaborative platform for brainstorming and sharing innovative ideas.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/Website-Performance-Analyzer-Extension"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Website Performance Analyzer Extension</h3>
            <p className="text-muted-foreground text-sm">
              A browser extension to analyze and improve website performance metrics.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/heyspeakers"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">HeySpeakers</h3>
            <p className="text-muted-foreground text-sm">
              A web app for organizing and managing speaker sessions and events.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/sexual-harassment"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">SHEild – Women Safety at Workplaces</h3>
            <p className="text-muted-foreground text-sm">
              A platform to report and address workplace safety concerns for women.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/simple-ad-blocker"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Simple Ad Blocker</h3>
            <p className="text-muted-foreground text-sm">
              A lightweight browser extension to block intrusive ads.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/python-QR-Code-Generator"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Python QR Code Generator</h3>
            <p className="text-muted-foreground text-sm">
              Generate QR codes easily with this Python-based tool.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/Editro-Flask-Img-Editor"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Editro Flask Image Editor</h3>
            <p className="text-muted-foreground text-sm">
              A simple image editor built with Flask for quick edits and filters.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/Python-Chatbot"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Python Chatbot</h3>
            <p className="text-muted-foreground text-sm">
              An interactive chatbot built in Python for basic conversations.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/snake-game"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Snake Game</h3>
            <p className="text-muted-foreground text-sm">
              Classic snake game recreated in Python with a modern UI.
            </p>
          </a>
          <a
            href="https://github.com/ashishguleria04/odin-landing-page"
            target="_blank"
            rel="noopener"
            className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-1">Odin Landing Page</h3>
            <p className="text-muted-foreground text-sm">
              A clean and responsive landing page project for The Odin Project curriculum.
            </p>
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight font-display">About</h2>
            <p className="mt-4 text-muted-foreground max-w-prose">
              I’m Ashish Guleria, a dedicated Software Engineer and Full Stack Web Developer with a passion for building impactful, user-centric digital solutions. My journey spans a diverse range of projects—from browser extensions that analyze and improve website performance, to collaborative platforms like Curio and IdeaLab, to creative tools such as image editors and certificate generators.
            </p>
            <p className="mt-4 text-muted-foreground max-w-prose">
              I thrive on solving real-world problems through clean code, thoughtful design, and a constant drive to learn and innovate. Whether it’s developing robust backend systems, crafting beautiful and responsive UIs, or optimizing applications for speed and accessibility, I enjoy every step of the software development process.
            </p>
            <p className="mt-4 text-muted-foreground max-w-prose">
              My work reflects a blend of technical expertise and creativity—delivering solutions like ad blockers, chatbots, and safety platforms that make a difference. I’m always eager to take on new challenges, collaborate with others, and contribute to projects that push the boundaries of what’s possible on the web.
            </p>
          </div>
          <div>
            <div className="rounded-lg border bg-card/60 backdrop-blur p-4 shadow-elevated supports-[backdrop-filter]:bg-card/50">
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-muted-foreground">Focus:</span> Software Development, Full Stack Website Development, Problem Solving, UI/UX Engineering, Web Performance, Collaboration Tools
                </li>
                <li>
                  <span className="text-muted-foreground">Stack:</span> React, TypeScript, Tailwind CSS, Framer Motion, Python, Flask
                </li>
                <li>
                  <span className="text-muted-foreground">Location:</span> Remote
                </li>
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
        {/* Contact form removed */}
        <div className="text-lg text-muted-foreground">
          You can reach me directly at{" "}
          <a
            href="mailto:guleriaashish85@gmail.com"
            className="underline hover:text-primary transition-colors"
          >
            guleriaashish85@gmail.com
          </a>
          {" "}or via any of the social links above.
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
