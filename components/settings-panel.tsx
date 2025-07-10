"use client"

import { X, User, Mail, Phone, MapPin, Github, Linkedin, Globe, Award } from "lucide-react"

interface SettingsPanelProps {
  onClose: () => void
}

export function SettingsPanel({ onClose }: SettingsPanelProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#252526] border border-[#3c3c3c] rounded-lg w-[800px] h-[600px] flex">
        {/* Settings Sidebar */}
        <div className="w-64 bg-[#2d2d30] border-r border-[#3c3c3c] p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-semibold">Settings</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-2">
            <div className="text-blue-400 bg-[#1e1e1e] px-3 py-2 rounded text-sm cursor-pointer">About</div>
            <div className="text-gray-400 px-3 py-2 rounded text-sm cursor-pointer hover:bg-[#3c3c3c]">Appearance</div>
            <div className="text-gray-400 px-3 py-2 rounded text-sm cursor-pointer hover:bg-[#3c3c3c]">Editor</div>
            <div className="text-gray-400 px-3 py-2 rounded text-sm cursor-pointer hover:bg-[#3c3c3c]">Extensions</div>
            <div className="text-gray-400 px-3 py-2 rounded text-sm cursor-pointer hover:bg-[#3c3c3c]">Features</div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Header */}
            <div className="border-b border-[#3c3c3c] pb-4">
              <h1 className="text-2xl font-bold text-white mb-2">About</h1>
              <p className="text-gray-400">Information about this VS Code Portfolio</p>
            </div>

            {/* Developer Info */}
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <User size={20} className="mr-2 text-blue-400" />
                Developer
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <span className="font-medium w-20">Name:</span>
                  <span>Soham Dey</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="font-medium w-20">Role:</span>
                  <span>Software Engineer • Full Stack Developer • UI/UX Designer</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  <span>Kolkata, India</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Mail size={20} className="mr-2 text-blue-400" />
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail size={16} className="mr-2 text-gray-400" />
                  <a href="mailto:soham4707@gmail.com" className="text-blue-400 hover:underline">
                    soham4707@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone size={16} className="mr-2 text-gray-400" />
                  <span>+91 73639 77016</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Globe size={20} className="mr-2 text-blue-400" />
                Professional Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/7sohamd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Github size={16} className="mr-2" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/soham-dey-891332256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://g.dev/7sohamd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Globe size={16} className="mr-2" />
                  Google Dev
                </a>
                <a
                  href="https://leetcode.com/u/7soham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Award size={16} className="mr-2" />
                  LeetCode
                </a>
                <a
                  href="https://behance.net/7soham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Globe size={16} className="mr-2" />
                  Behance
                </a>
              </div>
            </div>

            {/* Portfolio Info */}
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Portfolio Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Version:</span>
                  <span className="text-blue-400">1.0.0</span>
                </div>
                <div className="flex justify-between">
                  <span>Built with:</span>
                  <span className="text-blue-400">Next.js 14, TypeScript, Tailwind CSS</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Updated:</span>
                  <span className="text-blue-400">January 2025</span>
                </div>
                <div className="flex justify-between">
                  <span>Repository:</span>
                  <a
                    href="https://github.com/7sohamd/soham-codes-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Credits */}
            <div className="bg-[#1e1e1e] rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Credits</h3>
              <div className="text-gray-300 space-y-2">
                <p>
                  <strong className="text-white">Made by:</strong> Soham Dey
                </p>
                <p>
                  <strong className="text-white">Inspired by:</strong> Visual Studio Code
                </p>
                <p>
                  <strong className="text-white">Special Thanks:</strong> Microsoft VS Code Team for the amazing editor
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  This portfolio is a tribute to VS Code and showcases my development skills through an interactive
                  IDE-like experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
