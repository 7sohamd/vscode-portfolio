"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Plus, X, Minus, Square } from "lucide-react"

interface TerminalSession {
  id: string
  name: string
  history: string[]
  input: string
  isLoading: boolean
  loadingCommand: string
}

interface TerminalProps {
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  isMaximized: boolean
}

export function Terminal({ onClose, onMinimize, onMaximize, isMaximized }: TerminalProps) {
  const [sessions, setSessions] = useState<TerminalSession[]>([
    {
      id: "1",
      name: "bash",
      history: ["Welcome to the integrated terminal!", 'Type "help" to see available commands.', ""],
      input: "",
      isLoading: false,
      loadingCommand: "",
    },
  ])
  const [activeSessionId, setActiveSessionId] = useState("1")
  const inputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({})

  const activeSession = sessions.find((s) => s.id === activeSessionId)

  useEffect(() => {
    const activeInput = inputRefs.current[activeSessionId]
    if (activeInput && !activeSession?.isLoading) {
      activeInput.focus()
    }
  }, [activeSessionId, activeSession?.isLoading])

  const addNewTerminal = () => {
    const newId = (sessions.length + 1).toString()
    const newSession: TerminalSession = {
      id: newId,
      name: "bash",
      history: ["Welcome to the integrated terminal!", 'Type "help" to see available commands.', ""],
      input: "",
      isLoading: false,
      loadingCommand: "",
    }
    setSessions([...sessions, newSession])
    setActiveSessionId(newId)
  }

  const closeTerminal = (sessionId: string) => {
    if (sessions.length === 1) {
      onClose()
      return
    }

    const newSessions = sessions.filter((s) => s.id !== sessionId)
    setSessions(newSessions)

    if (activeSessionId === sessionId) {
      setActiveSessionId(newSessions[0].id)
    }
  }

  const updateSession = (sessionId: string, updates: Partial<TerminalSession>) => {
    setSessions((prev) => prev.map((session) => (session.id === sessionId ? { ...session, ...updates } : session)))
  }

  const simulateNpmInstall = async (sessionId: string, packageName = "") => {
    const session = sessions.find((s) => s.id === sessionId)
    if (!session) return

    const newHistory = [...session.history, `$ npm install ${packageName}`.trim()]
    updateSession(sessionId, { history: newHistory, isLoading: true, loadingCommand: "npm install" })

    const installSteps = [
      "npm WARN deprecated package@1.0.0: This package is deprecated",
      "npm WARN deprecated another-package@2.1.0: Please upgrade to version 3.x",
      "",
      "added 247 packages, and audited 1354 packages in 3s",
      "",
      "109 packages are looking for funding",
      "  run `npm fund` for details",
      "",
      "found 0 vulnerabilities",
      "",
    ]

    for (let i = 0; i < installSteps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 200))
      const currentSession = sessions.find((s) => s.id === sessionId)
      if (currentSession) {
        updateSession(sessionId, { history: [...currentSession.history, installSteps[i]] })
      }
    }

    updateSession(sessionId, { isLoading: false, loadingCommand: "" })
  }

  const simulateNpmBuild = async (sessionId: string) => {
    const session = sessions.find((s) => s.id === sessionId)
    if (!session) return

    const newHistory = [...session.history, "$ npm run build"]
    updateSession(sessionId, { history: newHistory, isLoading: true, loadingCommand: "npm run build" })

    const buildSteps = [
      "> portfolio-website@0.1.0 build",
      "> next build",
      "",
      "▲ Next.js 14.0.0",
      "",
      "✓ Creating an optimized production build",
      "✓ Compiled successfully",
      "✓ Linting and checking validity of types",
      "✓ Collecting page data",
      "✓ Generating static pages (5/5)",
      "✓ Collecting build traces",
      "✓ Finalizing page optimization",
      "",
      "Route (app)                              Size     First Load JS",
      "┌ ○ /                                    1.2 kB          87.4 kB",
      "├ ○ /about                               2.1 kB          88.3 kB",
      "├ ○ /contact                             1.8 kB          88.0 kB",
      "├ ○ /projects                            3.2 kB          89.4 kB",
      "└ ○ /works                               2.5 kB          88.7 kB",
      "+ First Load JS shared by all            86.2 kB",
      "  ├ chunks/framework-aec844bf.js         45.2 kB",
      "  ├ chunks/main-app-c544b6b.js          216 B",
      "  ├ chunks/webpack-87b3a7c.js           1.64 kB",
      "  └ other shared chunks (total)         39.1 kB",
      "",
      "○  (Static)  automatically rendered as static HTML",
      "",
    ]

    for (let i = 0; i < buildSteps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 150 + Math.random() * 100))
      const currentSession = sessions.find((s) => s.id === sessionId)
      if (currentSession) {
        updateSession(sessionId, { history: [...currentSession.history, buildSteps[i]] })
      }
    }

    updateSession(sessionId, { isLoading: false, loadingCommand: "" })
  }

  const handleCommand = async (sessionId: string, command: string) => {
    const session = sessions.find((s) => s.id === sessionId)
    if (!session) return

    const cmd = command.trim().toLowerCase()
    const newHistory = [...session.history]

    if (cmd === "npm run dev" || cmd === "npm start" || cmd === "next dev") {
      updateSession(sessionId, { isLoading: true, loadingCommand: "npm run dev" })
      newHistory.push(`$ ${command}`)
      newHistory.push("▲ Next.js 14.0.0")
      newHistory.push("- Local:        http://localhost:3000")
      newHistory.push("- Environments: .env.local")
      newHistory.push("")
      newHistory.push("✓ Ready in 2.1s")
      updateSession(sessionId, { history: newHistory })

      setTimeout(() => {
        const currentSession = sessions.find((s) => s.id === sessionId)
        if (currentSession) {
          updateSession(sessionId, {
            history: [
              ...currentSession.history,
              "○ Compiling / ...",
              "✓ Compiled / in 1.2s",
              "✓ Compiled /about in 890ms",
              "",
            ],
            isLoading: false,
            loadingCommand: "",
          })
        }

        setTimeout(() => {
          window.open("https://portfolio-peach-iota-67.vercel.app/", "_blank")
        }, 1000)
      }, 2000)
    } else if (cmd.startsWith("npm install") || cmd === "npm i") {
      const packageName = cmd.replace(/^npm (install|i)\s*/, "")
      await simulateNpmInstall(sessionId, packageName)
    } else if (cmd === "npm run build" || cmd === "npm build") {
      await simulateNpmBuild(sessionId)
    } else if (cmd === "npm -v" || cmd === "npm --version" || cmd === "npm version") {
      newHistory.push(`$ ${command}`)
      newHistory.push("10.2.4")
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (cmd === "node -v" || cmd === "node --version") {
      newHistory.push(`$ ${command}`)
      newHistory.push("v20.11.0")
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (cmd === "npm list" || cmd === "npm ls") {
      newHistory.push(`$ ${command}`)
      newHistory.push("portfolio-website@0.1.0 /Users/developer/portfolio-website")
      newHistory.push("├── @types/node@20.11.17")
      newHistory.push("├── @types/react@18.2.55")
      newHistory.push("├── @types/react-dom@18.2.19")
      newHistory.push("├── autoprefixer@10.4.17")
      newHistory.push("├── eslint@8.56.0")
      newHistory.push("├── eslint-config-next@14.0.0")
      newHistory.push("├── next@14.0.0")
      newHistory.push("├── postcss@8.4.35")
      newHistory.push("├── react@18.2.0")
      newHistory.push("├── react-dom@18.2.0")
      newHistory.push("├── tailwindcss@3.4.1")
      newHistory.push("└── typescript@5.3.3")
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (cmd === "npm test") {
      newHistory.push(`$ ${command}`)
      newHistory.push("No tests found. Run 'npm run test' to run tests.")
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (cmd === "npm run lint") {
      newHistory.push(`$ ${command}`)
      newHistory.push("> portfolio-website@0.1.0 lint")
      newHistory.push("> next lint")
      newHistory.push("")
      newHistory.push("✓ No ESLint warnings or errors")
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (cmd === "clear") {
      updateSession(sessionId, { history: [""] })
    } else if (cmd === "ls" || cmd === "dir") {
      newHistory.push(`$ ${command}`)
      newHistory.push("app/")
      newHistory.push("components/")
      newHistory.push("public/")
      newHistory.push("package.json")
      newHistory.push("next.config.js")
      newHistory.push("tailwind.config.js")
      newHistory.push("README.md")
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (cmd === "pwd") {
      newHistory.push(`$ ${command}`)
      newHistory.push("/Users/developer/portfolio-website")
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (cmd === "whoami") {
      newHistory.push(`$ ${command}`)
      newHistory.push("soham-dey")
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (cmd === "date") {
      newHistory.push(`$ ${command}`)
      newHistory.push(new Date().toString())
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (cmd === "help") {
      newHistory.push(`$ ${command}`)
      newHistory.push("Available commands:")
      newHistory.push("  npm run dev      - Start Next.js development server")
      newHistory.push("  npm run build    - Build for production")
      newHistory.push("  npm install      - Install dependencies")
      newHistory.push("  npm run lint     - Run ESLint")
      newHistory.push("  npm -v           - Show npm version")
      newHistory.push("  node -v          - Show Node.js version")
      newHistory.push("  npm list         - List installed packages")
      newHistory.push("  ls / dir         - List files")
      newHistory.push("  pwd              - Show current directory")
      newHistory.push("  whoami           - Show current user")
      newHistory.push("  date             - Show current date")
      newHistory.push("  clear            - Clear terminal")
      newHistory.push("  help             - Show this help")
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else if (command.trim() !== "") {
      newHistory.push(`$ ${command}`)
      newHistory.push(`Command not found: ${command}`)
      newHistory.push('Type "help" for available commands.')
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    } else {
      newHistory.push("")
      updateSession(sessionId, { history: newHistory })
    }
  }

  const handleSubmit = (e: React.FormEvent, sessionId: string) => {
    e.preventDefault()
    const session = sessions.find((s) => s.id === sessionId)
    if (!session || session.isLoading) return

    handleCommand(sessionId, session.input)
    updateSession(sessionId, { input: "" })
  }

  const handleInputChange = (sessionId: string, value: string) => {
    updateSession(sessionId, { input: value })
  }

  if (!activeSession) return null

  return (
    <div className="h-full bg-[#1e1e1e] text-white font-mono text-sm flex flex-col">
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-[#2d2d30] px-4 py-2 border-b border-[#3c3c3c]">
        <div className="flex items-center space-x-4">
          <span className="text-white font-semibold">TERMINAL</span>
          {activeSession.isLoading && (
            <span className="text-yellow-400 text-xs">Running {activeSession.loadingCommand}...</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={addNewTerminal}
            className="text-gray-400 hover:text-white p-1 rounded hover:bg-[#3c3c3c]"
            title="New Terminal"
          >
            <Plus size={16} />
          </button>
          <button onClick={onMinimize} className="text-gray-400 hover:text-white p-1" title="Minimize">
            <Minus size={16} />
          </button>
          <button onClick={onMaximize} className="text-gray-400 hover:text-white p-1" title="Maximize">
            <Square size={16} />
          </button>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1" title="Close">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Terminal Tabs */}
      {sessions.length > 1 && (
        <div className="flex bg-[#252526] border-b border-[#3c3c3c]">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`flex items-center px-3 py-1 text-xs cursor-pointer border-r border-[#3c3c3c] ${
                activeSessionId === session.id ? "bg-[#1e1e1e] text-white" : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveSessionId(session.id)}
            >
              <span className="mr-2">{session.name}</span>
              {sessions.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    closeTerminal(session.id)
                  }}
                  className="hover:bg-[#3c3c3c] rounded p-0.5"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Terminal Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {activeSession.history.map((line, index) => (
            <div key={index} className="whitespace-pre-wrap">
              {line.startsWith("$") ? (
                <span className="text-green-400">{line}</span>
              ) : line.includes("✓") || line.includes("Compiled successfully") ? (
                <span className="text-green-400">{line}</span>
              ) : line.includes("Error") || line.includes("Command not found") || line.includes("WARN") ? (
                <span className="text-red-400">{line}</span>
              ) : line.includes("▲") || line.includes("Next.js") ? (
                <span className="text-blue-400">{line}</span>
              ) : (
                <span className="text-gray-300">{line}</span>
              )}
            </div>
          ))}

          {/* Current input line */}
          <form onSubmit={(e) => handleSubmit(e, activeSessionId)} className="flex items-center">
            <span className="text-green-400 mr-2">$</span>
            <input
              ref={(el) => {
                inputRefs.current[activeSessionId] = el;
              }}
              type="text"
              value={activeSession.input}
              onChange={(e) => handleInputChange(activeSessionId, e.target.value)}
              className="flex-1 bg-transparent outline-none text-white"
              disabled={activeSession.isLoading}
              placeholder={activeSession.isLoading ? `Running ${activeSession.loadingCommand}...` : ""}
            />
            {activeSession.isLoading && (
              <div className="ml-2">
                <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
