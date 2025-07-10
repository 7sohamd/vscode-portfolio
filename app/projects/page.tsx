import Layout from "@/components/Layout"

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
      description:
        "A collaborative storytelling web application that blends AI assistance, blockchain-authenticated authorship, and a credit-based monetization system. Users can co-create, explore, and narrate stories that form a growing, interconnected universe.",
      technologies: ["React.js", "Blockchain", "AI", "Web3", "Storytelling"],
      liveUrl: "#",
      category: "major",
    },
    {
      id: 2,
      title: "Vaayu",
      description:
        "A decentralized, AI-powered mobile and web application that empowers individuals—especially those with chronic health conditions—to monitor their environmental exposure and receive actionable health guidance based on real-time air quality data.",
      technologies: ["React Native", "AI", "Health Tech", "Environmental Data", "Mobile App"],
      liveUrl: "#",
      category: "major",
    },
    {
      id: 3,
      title: "Pac-Rupt",
      description:
        "A retro-style, AI-powered, Aptos blockchain-integrated arcade game where viewers don't just watch — they sabotage. Inspired by Pac-Man, this multiplayer chaos game lets your audience make your life harder in real-time.",
      technologies: ["Game Development", "Blockchain", "Aptos", "AI", "Multiplayer"],
      liveUrl: "#",
      category: "major",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "My Personal Portfolio Website, this is a fun quirky style website made to demonstrate all my projects and achievements with an interactive VS Code-like interface.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
      liveUrl: "#",
      category: "major",
    },
    {
      id: 5,
      title: "NoKeyboardGaming",
      description:
        "Facial movement + hand gesture based gaming control system that allows users to play games without traditional input devices.",
      technologies: ["Python", "Computer Vision", "Machine Learning", "OpenCV"],
      githubUrl: "https://github.com/7sohamd/NoKeyboardGaming",
      category: "mini",
    },
    {
      id: 6,
      title: "Emotion Recognise",
      description:
        "ML-based emotion recognition system that analyzes facial expressions to detect and classify human emotions in real-time.",
      technologies: ["Python", "Machine Learning", "Computer Vision", "TensorFlow"],
      githubUrl: "https://github.com/7sohamd/EmotionRecognise",
      category: "mini",
    },
    {
      id: 7,
      title: "TabTracker",
      description:
        "Chrome extension to track time spent on tabs and summarize content, helping users understand their browsing habits and productivity.",
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
        <h1 className="text-4xl font-bold mb-8 text-gray-800">My Projects</h1>

        {/* Major Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Major Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {majorProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="text-blue-600 hover:underline text-sm">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="text-green-600 hover:underline text-sm">
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
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Mini Projects</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {miniProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a href={project.githubUrl} className="text-blue-600 hover:underline text-sm">
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
}
