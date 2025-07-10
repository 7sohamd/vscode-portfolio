"use client"

import { Files, Search, GitBranch, Play, Settings, Terminal } from "lucide-react"

interface ActivityBarProps {
  onTerminalToggle: () => void
  onSearchToggle: () => void
  onGitToggle: () => void
  onRunClick: () => void
  onSettingsClick: () => void
}

export function ActivityBar({
  onTerminalToggle,
  onSearchToggle,
  onGitToggle,
  onRunClick,
  onSettingsClick,
}: ActivityBarProps) {
  return (
    <div className="w-12 bg-[#333333] flex flex-col items-center py-2 space-y-4">
      <button className="p-2 text-white hover:bg-[#2a2d2e] rounded">
        <Files size={20} />
      </button>
      <button className="p-2 text-gray-400 hover:bg-[#2a2d2e] hover:text-white rounded" onClick={onSearchToggle}>
        <Search size={20} />
      </button>
      <button className="p-2 text-gray-400 hover:bg-[#2a2d2e] hover:text-white rounded" onClick={onGitToggle}>
        <GitBranch size={20} />
      </button>
      <button className="p-2 text-gray-400 hover:bg-[#2a2d2e] hover:text-white rounded" onClick={onRunClick}>
        <Play size={20} />
      </button>
      <button className="p-2 text-gray-400 hover:bg-[#2a2d2e] rounded" onClick={onTerminalToggle}>
        <Terminal size={20} />
      </button>
      <div className="flex-1"></div>
      <button className="p-2 text-gray-400 hover:bg-[#2a2d2e] hover:text-white rounded" onClick={onSettingsClick}>
        <Settings size={20} />
      </button>
    </div>
  )
}
