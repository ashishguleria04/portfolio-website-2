import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

export const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const onNavClick = (id: string) => (e: React.MouseEvent) => {
    if (location.pathname !== "/") return;
    e.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 glass border-b animate-fade-in">
      <nav className="container mx-auto flex h-20 items-center justify-between">
        {/* Logo with initials */}
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight text-2xl md:text-3xl text-primary">
          {/* Logo with initials AG that inverts colors in dark mode */}
            <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white dark:bg-background dark:text-primary text-xl md:text-2xl font-bold shadow transition-colors"
            aria-label="Ashish Guleria Logo"
            >
            AG
            </span>
          <span className="hidden sm:inline font-extrabold tracking-tight text-lg md:text-xl text-foreground">
            Ashish Guleria
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={onNavClick(s.id)}
              className={`text-base md:text-lg font-semibold px-2 py-1 rounded transition-colors ${
                active === s.id
                  ? "text-primary underline underline-offset-4"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={active === s.id ? "page" : undefined}
            >
              {s.label}
            </a>
          ))}
          <Link to="/blog" className="text-base md:text-lg font-semibold px-2 py-1 rounded text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
        </div>
        <div className="flex items-center gap-3">
          {/* Social icons */}
          <a
            href="https://www.linkedin.com/in/ashish-guleria04/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            <FaLinkedin className="size-6 text-primary" />
          </a>
          <a
            href="https://github.com/ashishguleria04"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            title="GitHub"
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            <FaGithub className="size-6 text-primary" />
          </a>
          <a
            href="https://x.com/ashishguleria_"
            target="_blank"
            rel="noopener"
            aria-label="X (Twitter)"
            title="X (Twitter)"
            className="p-2 rounded-full hover:bg-primary/10 transition-colors"
          >
            <FaXTwitter className="size-6 text-primary" />
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
