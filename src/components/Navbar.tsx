import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
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
    if (location.pathname !== "/") return; // allow default navigation
    e.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight text-lg">
          <span className="sr-only">Home</span>
          <span aria-hidden>Portfolio</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={onNavClick(s.id)}
              className="text-sm text-muted-foreground hover:text-foreground story-link"
              aria-current={active === s.id ? "page" : undefined}
            >
              {s.label}
            </a>
          ))}
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground story-link">
            Blog
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href="#contact" onClick={onNavClick("contact")}>Hire me</a>
          </Button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
