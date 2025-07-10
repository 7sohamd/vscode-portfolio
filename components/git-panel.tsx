"use client"

import { GitBranch, Github, Plus, Download, Upload, X } from "lucide-react"

interface GitPanelProps {
  onClose: () => void
}

export function GitPanel({ onClose }: GitPanelProps) {
  const handleInitializeRepo = () => {
    window.open("https://github.com/new", "_blank")
  }

  const handleCloneRepo = () => {
    window.open("https://github.com/7sohamd/soham-codes-portfolio", "_blank")
  }

  const handleViewOnGitHub = () => {
    window.open("https://github.com/7sohamd/soham-codes-portfolio", "_blank")
  }

  const handlePushToGitHub = () => {
    window.open("https://github.com/7sohamd/soham-codes-portfolio", "_blank")
  }

  return (
    <div className="w-64 bg-[#252526] border-r border-[#3c3c3c] h-full">
      <div className="p-2 border-b border-[#3c3c3c] flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Source Control</span>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={16} />
        </button>
      </div>

      <div className="p-4 space-y-4">
        {/* Repository Status */}
        <div className="bg-[#1e1e1e] rounded p-3">
          <div className="flex items-center mb-2">
            <GitBranch size={16} className="mr-2 text-blue-400" />
            <span className="text-sm text-white">main</span>
          </div>
          <div className="text-xs text-gray-400">soham-codes-portfolio</div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <button
            onClick={handleInitializeRepo}
            className="w-full flex items-center px-3 py-2 bg-[#0e639c] hover:bg-[#1177bb] text-white text-sm rounded transition-colors"
          >
            <Plus size={16} className="mr-2" />
            Initialize Repository
          </button>

          <button
            onClick={handleCloneRepo}
            className="w-full flex items-center px-3 py-2 bg-[#3c3c3c] hover:bg-[#4c4c4c] text-white text-sm rounded transition-colors"
          >
            <Download size={16} className="mr-2" />
            Clone Repository
          </button>

          <button
            onClick={handleViewOnGitHub}
            className="w-full flex items-center px-3 py-2 bg-[#3c3c3c] hover:bg-[#4c4c4c] text-white text-sm rounded transition-colors"
          >
            <Github size={16} className="mr-2" />
            View on GitHub
          </button>

          <button
            onClick={handlePushToGitHub}
            className="w-full flex items-center px-3 py-2 bg-[#3c3c3c] hover:bg-[#4c4c4c] text-white text-sm rounded transition-colors"
          >
            <Upload size={16} className="mr-2" />
            Push to GitHub
          </button>
        </div>

        {/* Changes Section */}
        <div className="border-t border-[#3c3c3c] pt-4">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Changes</div>
          <div className="space-y-1">
            <div className="flex items-center text-sm text-gray-300">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="flex-1">portfolio updates</span>
              <span className="text-xs text-gray-500">M</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="flex-1">new features added</span>
              <span className="text-xs text-gray-500">A</span>
            </div>
          </div>
        </div>

        {/* Commit Section */}
        <div className="border-t border-[#3c3c3c] pt-4">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Commit</div>
          <textarea
            placeholder="Message (press Ctrl+Enter to commit)"
            className="w-full bg-[#3c3c3c] text-white text-sm p-2 rounded border-none outline-none resize-none"
            rows={3}
          />
          <button className="w-full mt-2 px-3 py-1 bg-[#0e639c] hover:bg-[#1177bb] text-white text-sm rounded transition-colors">
            Commit & Push
          </button>
        </div>
      </div>
    </div>
  )
}
