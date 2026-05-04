import { Mail, Linkedin, Github, FileText, BookOpen } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import {
	SiLeetcode,
	SiGeeksforgeeks,
	SiReact,
	SiNodedotjs,
	SiTypescript,
	SiPython,
	SiFlask,
	SiTailwindcss,
	SiFramer,
	SiGit,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiPostgresql,
	SiMongodb,
} from "react-icons/si";

export const SOCIALS = [
	{
		href: "mailto:guleriaashish85@gmail.com",
		label: "Email",
		icon: <Mail className="size-6" />,
	},
	{
		href: "https://www.linkedin.com/in/ashish-guleria04/",
		label: "LinkedIn",
		icon: <Linkedin className="size-6" />,
	},
	{
		href: "https://github.com/ashishguleria04",
		label: "GitHub",
		icon: <Github className="size-6" />,
	},
	{
		href: "https://x.com/ashishguleria_",
		label: "X (Twitter)",
		icon: <FaXTwitter className="size-6" />,
	},
	{
		href: "https://leetcode.com/u/aashiishh_/",
		label: "LeetCode",
		icon: <SiLeetcode className="size-6" />,
	},
	{
		href: "https://www.geeksforgeeks.org/user/ashishguleria04/",
		label: "GeeksforGeeks",
		icon: <SiGeeksforgeeks className="size-6" />,
	},
];

export const ADVANCED_PROJECTS = [
	{
		name: "Advanced B2B Billing",
		desc: "A robust, production-ready starter kit for building B2B SaaS applications with advanced billing patterns, multi-tenancy, and team management.",
		url: "https://github.com/ashishguleria04/Advanced-B2B-Billing",
		tags: ["Next.js", "Stripe", "Drizzle", "Tailwind"],
	},
	{
		name: "MockSocial",
		desc: "A powerful tool designed to create high-fidelity social media and chat mockups for developers and designers.",
		url: "https://github.com/ashishguleria04/MockSocial",
		tags: ["Next.js", "Tailwind", "Framer Motion"],
	},
	{
		name: "Quantalyze Habit Tracker",
		desc: "A minimalistic habit tracker designed to optimize vitality, focus, discipline, and social connection.",
		url: "https://github.com/ashishguleria04/quantalyze-habit-tracker",
		tags: ["React", "TypeScript", "Tailwind"],
	},
	{
		name: "Curio",
		desc: "A modern knowledge-sharing platform for curious minds to ask, answer, and discover.",
		url: "https://github.com/ashishguleria04/Curio",
		tags: ["React", "Node.js"],
	},
	{
		name: "Multimodal Vision Language Model",
		desc: "Combines vision and language models for advanced AI applications.",
		url: "https://github.com/ashishguleria04/Multimodal-Vision-Language-Model",
		tags: ["Python", "AI"],
	},
	{
		name: "Project Certify",
		desc: "A certificate generator and management tool for events and organizations.",
		url: "https://github.com/ashishguleria04/Project-Certify",
		tags: ["Python", "Flask"],
	},
	{
		name: "IdeaLab",
		desc: "A collaborative platform for brainstorming and sharing innovative ideas.",
		url: "https://github.com/ashishguleria04/IdeaLab",
		tags: ["React", "Node.js"],
	},
	{
		name: "SHEild – Women Safety at Workplaces",
		desc: "A platform to report and address workplace safety concerns for women.",
		url: "https://github.com/ashishguleria04/sexual-harassment",
		tags: ["React", "Node.js"],
	},
];

export const INTERMEDIATE_PROJECTS = [
	{
		name: "Login Page (Tailwind CSS)",
		desc: "A beautiful, responsive login page built with Tailwind CSS and React.",
		url: "https://github.com/ashishguleria04/loginpage-tailwindcss",
		tags: ["React", "Tailwind"],
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
		name: "Editro Flask Image Editor",
		desc: "A simple image editor built with Flask for quick edits and filters.",
		url: "https://github.com/ashishguleria04/Editro-Flask-Img-Editor",
		tags: ["Python", "Flask"],
	},
	{
		name: "Simple Ad Blocker",
		desc: "A lightweight browser extension to block intrusive ads.",
		url: "https://github.com/ashishguleria04/simple-ad-blocker",
		tags: ["JavaScript", "Extension"],
	},
];

export const BASIC_PROJECTS = [
	{
		name: "Straight Line in Python",
		desc: "A Python tool to plot and analyze straight lines and their equations.",
		url: "https://github.com/ashishguleria04/Straight-Line-In-Python",
		tags: ["Python"],
	},
	{
		name: "Python QR Code Generator",
		desc: "Generate QR codes easily with this Python-based tool.",
		url: "https://github.com/ashishguleria04/python-QR-Code-Generator",
		tags: ["Python"],
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

export const SKILLS = [
	{ name: "React", icon: <SiReact size={28} /> },
	{ name: "Node.js", icon: <SiNodedotjs size={28} /> },
	{ name: "TypeScript", icon: <SiTypescript size={28} /> },
	{ name: "Python", icon: <SiPython size={28} /> },
	{ name: "Flask", icon: <SiFlask size={28} /> },
	{ name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
	{ name: "PostgreSQL", icon: <SiPostgresql size={28} /> },
	{ name: "MongoDB", icon: <SiMongodb size={28} /> },
	{ name: "Framer Motion", icon: <SiFramer size={28} /> },
	{ name: "Git", icon: <SiGit size={28} /> },
	{ name: "HTML5", icon: <SiHtml5 size={28} /> },
	{ name: "CSS3", icon: <SiCss3 size={28} /> },
	{ name: "JavaScript", icon: <SiJavascript size={28} /> },
];
