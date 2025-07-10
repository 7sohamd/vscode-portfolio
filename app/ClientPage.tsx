"use client"

import { useState } from "react"
import { FileExplorer } from "@/components/file-explorer"
import { CodeEditor } from "@/components/code-editor"
import { DraggableTerminal } from "@/components/draggable-terminal"
import { ActivityBar } from "@/components/activity-bar"
import { StatusBar } from "@/components/status-bar"
import { TabBar } from "@/components/tab-bar"
import { SearchPanel } from "@/components/search-panel"
import { GitPanel } from "@/components/git-panel"
import { SettingsPanel } from "@/components/settings-panel"
import { Loader } from "@/components/loader"

export interface FileNode {
  name: string
  type: "file" | "folder"
  path: string
  content?: string
  children?: FileNode[]
  isOpen?: boolean
}

export interface OpenTab {
  path: string
  name: string
  content: string
  originalContent: string
  isDirty: boolean
}

const fileSystem: FileNode = {
  name: "portfolio-website",
  type: "folder",
  path: "/",
  isOpen: true,
  children: [
    {
      name: "app",
      type: "folder",
      path: "/app",
      isOpen: true,
      children: [
        {
          name: "about",
          type: "folder",
          path: "/app/about",
          children: [
            {
              name: "page.tsx",
              type: "file",
              path: "/app/about/page.tsx",
              content: `import Layout from "@/components/Layout"

export default function AboutPage() {
  return (
    <Layout title="About Me">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Who I Am
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hi! I'm <strong>Soham Dey</strong>, a passionate 
              Software Engineer, Full Stack Developer, and UI/UX
              Designer based in Kolkata, India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I have experience in full stack development (MERN, 
              Next.js), cross-platform apps (Flutter, React Native),
              and DevOps (Docker, AWS). I've proven success in 
              leading teams, developing scalable applications, and
              participating in national-level hackathons.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm passionate about solving real-world problems with 
              efficient code and intuitive UI/UX design. Currently
              pursuing B.Tech in Computer Science and Engineering 
              at Netaji Subhash Engineering College.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Technical Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "JavaScript", "C++", "SQL"]
                    .map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-blue-100 text-blue-800 px-3 py-1 
                                 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Web Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "Express.js", 
                    "MongoDB"].map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-green-100 text-green-800 px-3 py-1 
                                 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Mobile & Others
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "React Native", "Docker", "AWS", 
                    "Figma", "Firebase"].map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-purple-100 text-purple-800 px-3 py-1 
                                 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="text-blue-600">
              Netaji Subhash Engineering College, Kolkata
            </p>
            <p className="text-gray-600">
              2022 – 2026 | GPA: 7.9 (Till 5th Sem)
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Second Runners Up at Hackolution 2025 - IEM</li>
            <li>
              Second Round at Smart India Hackathon 2023 and 2024 
              (Team Leader)
            </li>
            <li>
              Participated in multiple hackathons: Diversion 2k25, 
              Status Code 1, Hack4Bengal, Build On Aptos Hackathon
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}`,
            },
          ],
        },
        {
          name: "projects",
          type: "folder",
          path: "/app/projects",
          children: [
            {
              name: "page.tsx",
              type: "file",
              path: "/app/projects/page.tsx",
              content: `import Layout from "@/components/Layout"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  category: "major" | "mini"
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "LoreChain",
      description: "A collaborative storytelling web application that blends AI assistance, blockchain-authenticated authorship, and a credit-based monetization system. Users can co-create, explore, and narrate stories that form a growing, interconnected universe.",
      technologies: ["React.js", "Blockchain", "AI", "Web3", "Storytelling"],
      liveUrl: "#",
      category: "major",
    },
    {
      id: 2,
      title: "Vaayu",
      description: "A decentralized, AI-powered mobile and web application that empowers individuals—especially those with chronic health conditions—to monitor their environmental exposure and receive actionable health guidance based on real-time air quality data.",
      technologies: ["React Native", "AI", "Health Tech", "Environmental Data", "Mobile App"],
      liveUrl: "#",
      category: "major",
    },
    {
      id: 3,
      title: "Pac-Rupt",
      description: "A retro-style, AI-powered, Aptos blockchain-integrated arcade game where viewers don't just watch — they sabotage. Inspired by Pac-Man, this multiplayer chaos game lets your audience make your life harder in real-time.",
      technologies: ["Game Development", "Blockchain", "Aptos", "AI", "Multiplayer"],
      liveUrl: "#",
      category: "major",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "My Personal Portfolio Website, this is a fun quirky style website made to demonstrate all my projects and achievements with an interactive VS Code-like interface.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
      liveUrl: "#",
      category: "major",
    },
    {
      id: 5,
      title: "NoKeyboardGaming",
      description: "Facial movement + hand gesture based gaming control system that allows users to play games without traditional input devices.",
      technologies: ["Python", "Computer Vision", "Machine Learning", "OpenCV"],
      githubUrl: "https://github.com/7sohamd/NoKeyboardGaming",
      category: "mini",
    },
    {
      id: 6,
      title: "Emotion Recognise",
      description: "ML-based emotion recognition system that analyzes facial expressions to detect and classify human emotions in real-time.",
      technologies: ["Python", "Machine Learning", "Computer Vision", "TensorFlow"],
      githubUrl: "https://github.com/7sohamd/EmotionRecognise",
      category: "mini",
    },
    {
      id: 7,
      title: "TabTracker",
      description: "Chrome extension to track time spent on tabs and summarize content, helping users understand their browsing habits and productivity.",
      technologies: ["JavaScript", "Chrome Extension", "Web APIs", "Data Analytics"],
      githubUrl: "https://github.com/7sohamd/TabTracker",
      category: "mini",
    },
  ]

  const majorProjects = projects.filter((p) => p.category === "major")
  const miniProjects = projects.filter((p) => p.category === "mini")

  return (
    <Layout title="My Projects">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          My Projects
        </h1>

        {/* Major Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Major Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {majorProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-md p-6 
                           hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 
                                 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="text-blue-600 hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="text-green-600 hover:underline text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Mini Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {miniProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg shadow-md p-4 
                           hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-gray-100 text-gray-700 px-2 py-1 
                                 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    className="text-blue-600 hover:underline text-sm"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}`,
            },
          ],
        },
        {
          name: "works",
          type: "folder",
          path: "/app/works",
          children: [
            {
              name: "page.tsx",
              type: "file",
              path: "/app/works/page.tsx",
              content: `import Layout from "@/components/Layout"

interface WorkExperience {
  id: number
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export default function WorksPage() {
  const workExperience: WorkExperience[] = [
    {
      id: 1,
      company: "NooBuild",
      position: "Co-Founder",
      duration: "2023 – Present",
      description: [
        "Architected a 2K+ member technology community and spearheaded a 50+ member core team to host 7+ technical events",
        "Developed a freelancing-focused training curriculum and orchestrated workshops on Game Development, UI/UX, and Graphic Design",
      ],
      technologies: ["Community Building", "Event Management", "Curriculum Development", "Leadership"],
    },
    {
      id: 2,
      company: "GDSC NSEC",
      position: "Design Lead",
      duration: "2023 – 2024",
      description: [
        "Engineered interactive branding and promotional content for 20+ technology workshops and community events",
        "Spearheaded UI/UX sessions to train 100+ students on industry-standard design tools and workflows",
      ],
      technologies: ["UI/UX Design", "Figma", "Adobe XD", "Branding", "Training"],
    },
    {
      id: 3,
      company: "CodeClause",
      position: "Python Developer Intern",
      duration: "Aug 2023 – Nov 2023",
      description: [
        "Constructed a desktop music player using Python-Tkinter, implementing Object-Oriented Programming (OOP) principles",
        "Implemented file handling and created an intuitive user interface for seamless user experience",
      ],
      technologies: ["Python", "Tkinter", "OOP", "Desktop Development", "File Handling"],
    },
    {
      id: 4,
      company: "Curlbury (YouTube)",
      position: "Video Editor",
      duration: "2019 – 2022",
      description: [
        "Produced and edited a diverse range of travel, gaming, and documentary-style videos",
        "Managed content for a channel with over 90,000 subscribers, ensuring high-quality video production",
      ],
      technologies: ["Video Editing", "Content Creation", "Adobe Premiere", "YouTube", "Storytelling"],
    },
  ]

  return (
    <Layout title="Work Experience">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Work Experience
        </h1>

        <div className="space-y-8">
          {workExperience.map((work) => (
            <div 
              key={work.id} 
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {work.position}
                  </h3>
                  <p className="text-lg text-blue-600">
                    {work.company}
                  </p>
                </div>
                <span className="text-gray-500 text-sm">
                  {work.duration}
                </span>
              </div>

              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
                {work.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-100 text-blue-800 px-3 py-1 
                               rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}`,
            },
          ],
        },
        {
          name: "contact",
          type: "folder",
          path: "/app/contact",
          children: [
            {
              name: "page.tsx",
              type: "file",
              path: "/app/contact/page.tsx",
              content: `"use client"

import type React from "react"
import { useState } from "react"
import Layout from "@/components/Layout"

interface ContactForm {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", form)
    alert("Thank you for your message! I will get back to you soon.")
    setForm({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Layout title="Contact Me">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Get In Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">soham4707@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 73639 77016</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Location</h3>
                <p className="text-gray-600">Kolkata, India</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  Professional Links
                </h3>
                <div className="flex flex-col space-y-2 mt-2">
                  <a 
                    href="https://linkedin.com/in/soham-dey-891332256" 
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/7sohamd" 
                    className="text-gray-800 hover:underline"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://g.dev/7sohamd" 
                    className="text-green-600 hover:underline"
                  >
                    Google Developer Profile
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  Coding & Design Profiles
                </h3>
                <div className="flex flex-col space-y-2 mt-2">
                  <a 
                    href="https://leetcode.com/u/7soham" 
                    className="text-orange-600 hover:underline"
                  >
                    LeetCode
                  </a>
                  <a 
                    href="https://behance.net/7soham" 
                    className="text-blue-500 hover:underline"
                  >
                    Behance
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-800 mb-2">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 
                                 rounded-full text-sm">
                  English (Fluent)
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 
                                 rounded-full text-sm">
                  Hindi (Fluent)
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 
                                 rounded-full text-sm">
                  Bengali (Native)
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 
                             rounded-md focus:outline-none focus:ring-2 
                             focus:ring-blue-500"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 
                             rounded-md focus:outline-none focus:ring-2 
                             focus:ring-blue-500"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 
                             rounded-md focus:outline-none focus:ring-2 
                             focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 
                           rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}`,
            },
          ],
        },
        {
          name: "layout.tsx",
          type: "file",
          path: "/app/layout.tsx",
          content: `import type { Metadata } from 'next'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}`,
        },
        {
          name: "globals.css",
          type: "file",
          path: "/app/globals.css",
          content: `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}`,
        },
      ],
    },
    {
      name: "components",
      type: "folder",
      path: "/components",
      children: [
        {
          name: "Layout.tsx",
          type: "file",
          path: "/components/Layout.tsx",
          content: `import type React from "react"
import type { ReactNode } from "react"
import Link from "next/link"

interface LayoutProps {
  children: ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Soham Codes" 
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/about" 
                className="hover:text-blue-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/works" 
                className="hover:text-blue-400 transition-colors"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

export default Layout`,
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
      path: "/package.json",
      content: `{
  "name": "portfolio-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "14.0.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.3.0",
    "typescript": "^5.0.0"
  }
}`,
    },
    {
      name: "next.config.js",
      type: "file",
      path: "/next.config.js",
      content: `/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig`,
    },
    {
      name: "tailwind.config.js",
      type: "file",
      path: "/tailwind.config.js",
      content: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}`,
    },
    {
      name: "README.md",
      type: "file",
      path: "/README.md",
      content: `# Portfolio Website

A modern portfolio website built with Next.js 14 and TypeScript.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

### Development
Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features
- Next.js 14 with App Router
- TypeScript support
- Responsive design with Tailwind CSS
- Server-side rendering
- Modern UI components

## Project Structure
- \`app/\` - Next.js App Router pages
- \`components/\` - Reusable components
- \`public/\` - Static assets

## Technologies Used
- Next.js 14
- TypeScript
- Tailwind CSS
- React 18

## Deployment
This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.`,
    },
  ],
}

export default function VSCodePortfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([])
  const [activeTab, setActiveTab] = useState<string>("")
  const [terminalVisible, setTerminalVisible] = useState(false)
  const [searchVisible, setSearchVisible] = useState(false)
  const [gitVisible, setGitVisible] = useState(false)
  const [settingsVisible, setSettingsVisible] = useState(false)

  const openFile = (file: FileNode) => {
    if (file.type === "file" && file.content) {
      const existingTab = openTabs.find((tab) => tab.path === file.path)
      if (!existingTab) {
        const newTab: OpenTab = {
          path: file.path,
          name: file.name,
          content: file.content,
          originalContent: file.content,
          isDirty: false,
        }
        setOpenTabs([...openTabs, newTab])
      }
      setActiveTab(file.path)
    }
  }

  const updateTabContent = (path: string, content: string) => {
    setOpenTabs((tabs) =>
      tabs.map((tab) => (tab.path === path ? { ...tab, content, isDirty: content !== tab.originalContent } : tab)),
    )
  }

  const closeTab = (path: string) => {
    const newTabs = openTabs.filter((tab) => tab.path !== path)
    setOpenTabs(newTabs)
    if (activeTab === path) {
      setActiveTab(newTabs.length > 0 ? newTabs[newTabs.length - 1].path : "")
    }
  }

  const handleRunClick = () => {
    window.open("https://v0-my-zeta-gules.vercel.app/", "_blank")
  }

  const activeTabContent = openTabs.find((tab) => tab.path === activeTab)

  if (isLoading) {
    return <Loader onLoadComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="h-screen bg-[#1e1e1e] text-white flex flex-col">
      {/* Title Bar */}
      <div className="h-8 bg-[#323233] flex items-center justify-center text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center">soham-codes — Visual Studio Code</div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar
          onTerminalToggle={() => setTerminalVisible(!terminalVisible)}
          onSearchToggle={() => {
            setSearchVisible(!searchVisible)
            setGitVisible(false)
          }}
          onGitToggle={() => {
            setGitVisible(!gitVisible)
            setSearchVisible(false)
          }}
          onRunClick={handleRunClick}
          onSettingsClick={() => setSettingsVisible(true)}
        />

        {/* Sidebar */}
        <div className="w-64 bg-[#252526] border-r border-[#3c3c3c]">
          {searchVisible ? (
            <SearchPanel fileSystem={fileSystem} onFileClick={openFile} onClose={() => setSearchVisible(false)} />
          ) : gitVisible ? (
            <GitPanel onClose={() => setGitVisible(false)} />
          ) : (
            <FileExplorer fileSystem={fileSystem} onFileClick={openFile} />
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tab Bar */}
          <TabBar tabs={openTabs} activeTab={activeTab} onTabClick={setActiveTab} onTabClose={closeTab} />

          {/* Editor */}
          <div className="flex-1 overflow-hidden">
            {activeTabContent ? (
              <CodeEditor
                content={activeTabContent.content}
                filename={activeTabContent.name}
                onContentChange={(content) => updateTabContent(activeTabContent.path, content)}
                isDirty={activeTabContent.isDirty}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <h2 className="text-2xl mb-2">Welcome to Soham Codes</h2>
                  <p>Open a file from the explorer to get started</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Draggable Terminal */}
      <DraggableTerminal isVisible={terminalVisible} onClose={() => setTerminalVisible(false)} initialHeight={300} />

      {/* Status Bar */}
      <StatusBar />

      {/* Settings Panel */}
      {settingsVisible && <SettingsPanel onClose={() => setSettingsVisible(false)} />}
    </div>
  )
}
