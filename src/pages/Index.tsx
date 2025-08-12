import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, FileText, BookOpen } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import avatar from "@/assets/avatar.jpg";
import { useRef } from "react";

const SOCIALS = [
	{
		href: "mailto:guleriaashish85@gmail.com",
		label: "Email",
		icon: <Mail className="size-5 text-white" />,
	},
	{
		href: "https://www.linkedin.com/in/ashish-guleria04/",
		label: "LinkedIn",
		icon: <Linkedin className="size-5 text-white" />,
	},
	{
		href: "https://github.com/ashishguleria04",
		label: "GitHub",
		icon: <Github className="size-5 text-white" />,
	},
	{
		href: "https://x.com/ashishguleria_",
		label: "X (Twitter)",
		icon: <FaXTwitter className="size-5 text-white" />,
	},
	{
		href: "https://leetcode.com/u/aashiishh_/",
		label: "LeetCode",
		icon: <SiLeetcode className="size-5 text-white" />,
	},
	{
		href: "https://www.geeksforgeeks.org/user/ashishguleria04/",
		label: "GeeksforGeeks",
		icon: <SiGeeksforgeeks className="size-5 text-white" />,
	},
];

const PROJECTS = [
	{
		name: "Curio",
		desc: "A modern knowledge-sharing platform for curious minds to ask, answer, and discover.",
		url: "https://github.com/ashishguleria04/Curio",
		tags: ["React", "Node.js"],
	},
	{
		name: "Login Page (Tailwind CSS)",
		desc: "A beautiful, responsive login page built with Tailwind CSS and React.",
		url: "https://github.com/ashishguleria04/loginpage-tailwindcss",
		tags: ["React", "Tailwind"],
	},
	{
		name: "Project Certify",
		desc: "A certificate generator and management tool for events and organizations.",
		url: "https://github.com/ashishguleria04/Project-Certify",
		tags: ["Python", "Flask"],
	},
	{
		name: "Multimodal Vision Language Model",
		desc: "Combines vision and language models for advanced AI applications.",
		url: "https://github.com/ashishguleria04/Multimodal-Vision-Language-Model",
		tags: ["Python", "AI"],
	},
	{
		name: "Straight Line in Python",
		desc: "A Python tool to plot and analyze straight lines and their equations.",
		url: "https://github.com/ashishguleria04/Straight-Line-In-Python",
		tags: ["Python"],
	},
	{
		name: "IdeaLab",
		desc: "A collaborative platform for brainstorming and sharing innovative ideas.",
		url: "https://github.com/ashishguleria04/IdeaLab",
		tags: ["React", "Node.js"],
	},
	{
		name: "Website Performance Analyzer Extension",
		desc: "A browser extension to analyze and improve website performance metrics.",
		url: "https://github.com/ashishguleria04/Website-Performance-Analyzer-Extension",
		tags: ["JavaScript", "Extension"],
	},
	{
		name: "HeySpeakers",
		desc: "A web app for organizing and managing speaker sessions and events.",
		url: "https://github.com/ashishguleria04/heyspeakers",
		tags: ["React"],
	},
	{
		name: "SHEild – Women Safety at Workplaces",
		desc: "A platform to report and address workplace safety concerns for women.",
		url: "https://github.com/ashishguleria04/sexual-harassment",
		tags: ["React", "Node.js"],
	},
	{
		name: "Simple Ad Blocker",
		desc: "A lightweight browser extension to block intrusive ads.",
		url: "https://github.com/ashishguleria04/simple-ad-blocker",
		tags: ["JavaScript", "Extension"],
	},
	{
		name: "Python QR Code Generator",
		desc: "Generate QR codes easily with this Python-based tool.",
		url: "https://github.com/ashishguleria04/python-QR-Code-Generator",
		tags: ["Python"],
	},
	{
		name: "Editro Flask Image Editor",
		desc: "A simple image editor built with Flask for quick edits and filters.",
		url: "https://github.com/ashishguleria04/Editro-Flask-Img-Editor",
		tags: ["Python", "Flask"],
	},
	{
		name: "Python Chatbot",
		desc: "An interactive chatbot built in Python for basic conversations.",
		url: "https://github.com/ashishguleria04/Python-Chatbot",
		tags: ["Python"],
	},
	{
		name: "Snake Game",
		desc: "Classic snake game recreated in Python with a modern UI.",
		url: "https://github.com/ashishguleria04/snake-game",
		tags: ["Python"],
	},
	{
		name: "Odin Landing Page",
		desc: "A clean and responsive landing page project for The Odin Project curriculum.",
		url: "https://github.com/ashishguleria04/odin-landing-page",
		tags: ["HTML", "CSS"],
	},
];

const Index = () => {
	const emailRef = useRef<HTMLAnchorElement>(null);

	// Copy email to clipboard
	const handleCopyEmail = () => {
		navigator.clipboard.writeText("guleriaashish85@gmail.com");
		if (emailRef.current) {
			emailRef.current.innerText = "Copied!";
			setTimeout(() => {
				if (emailRef.current)
					emailRef.current.innerText = "guleriaashish85@gmail.com";
			}, 1200);
		}
	};

	return (
		<main className="min-h-screen bg-grid-light dark:bg-grid-dark overflow-x-hidden">
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
					<h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight font-display mb-2">
						Hi, I'm{" "}
						<span>
							Ashish Guleria
						</span>
					</h1>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.7 }}
						className="text-lg sm:text-xl font-semibold text-primary mb-2"
					>
						Building digital experiences that matter.
					</motion.p>
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
						{SOCIALS.map((s) => (
							<Button
								asChild
								variant="outline"
								size="icon"
								aria-label={s.label}
								title={s.label}
								className="transition-all hover:scale-110 hover:bg-primary/80 focus-visible:ring-2 focus-visible:ring-primary"
								key={s.label}
							>
								<a href={s.href} target="_blank" rel="noopener">
									{s.icon}
								</a>
							</Button>
						))}
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
							alt="Portrait of Ashish Guleria"
							loading="eager"
							className="h-full w-full object-cover border-2 border-white/60 shadow-lg"
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
					{PROJECTS.map((proj) => (
						<div
							key={proj.name}
							className="block rounded-lg border bg-card/60 p-5 shadow-elevated hover:shadow-lg transition"
						>
							<div className="flex items-center justify-between mb-1">
								<h3 className="font-bold text-lg">{proj.name}</h3>
								<a
									href={proj.url}
									target="_blank"
									rel="noopener"
									aria-label={`View ${proj.name} on GitHub`}
									title="View on GitHub"
									className="ml-2 text-primary hover:underline"
								>
									<Github className="size-4 inline text-primary" />
								</a>
							</div>
							<p className="text-muted-foreground text-sm mb-2">
								{proj.desc}
							</p>
							<div className="flex flex-wrap gap-1">
								{proj.tags.map((tag) => (
									<span
										key={tag}
										className="inline-block bg-primary/10 text-primary text-xs px-2 py-0.5 rounded font-medium"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* About */}
			<section id="about" className="container mx-auto py-16">
				<div className="grid gap-8 md:grid-cols-3">
					<div className="md:col-span-2">
						<h2 className="text-3xl font-bold tracking-tight font-display">
							About
						</h2>
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
									<span className="text-muted-foreground">Focus:</span>{" "}
									Software Development, Full Stack Website Development, Problem Solving, UI/UX Engineering, Web Performance, Collaboration Tools
								</li>
								<li>
									<span className="text-muted-foreground">Stack:</span>{" "}
									React, TypeScript, Tailwind CSS, Framer Motion, Python, Flask
								</li>
								<li>
									<span className="text-muted-foreground">Location:</span>{" "}
									Remote
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section id="contact" className="container mx-auto py-16">
				<header className="mb-8">
					<h2 className="text-3xl font-bold tracking-tight font-display">
						Contact
					</h2>
					<p className="text-muted-foreground mt-2">
						Let’s build something exceptional together.
					</p>
				</header>
				<div className="text-lg text-muted-foreground flex flex-col sm:flex-row items-start sm:items-center gap-2">
					<span>You can reach me directly at</span>
					<a
						ref={emailRef}
						href="mailto:guleriaashish85@gmail.com"
						className="underline hover:text-primary transition-colors cursor-pointer"
						aria-label="Email Ashish Guleria"
						title="Email Ashish Guleria"
						onClick={(e) => {
							e.preventDefault();
							handleCopyEmail();
						}}
					>
						guleriaashish85@gmail.com
					</a>
					<Button
						size="sm"
						variant="outline"
						className="ml-2"
						onClick={handleCopyEmail}
						aria-label="Copy email to clipboard"
						title="Copy email to clipboard"
					>
						Copy Email
					</Button>
				</div>
				<div className="text-sm text-muted-foreground mt-2">
					I usually respond within 24 hours. Feel free to connect via any of the
					social links above.
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
