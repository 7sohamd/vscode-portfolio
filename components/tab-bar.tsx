"use client"

import { X } from "lucide-react"
import type { OpenTab } from "@/app/page"

interface TabBarProps {
  tabs: OpenTab[]
  activeTab: string
  onTabClick: (path: string) => void
  onTabClose: (path: string) => void
}

export function TabBar({ tabs, activeTab, onTabClick, onTabClose }: TabBarProps) {
  if (tabs.length === 0) return null

  return (
    <div className="flex bg-[#2d2d30] border-b border-[#3c3c3c] overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.path}
          className={`flex items-center px-3 py-2 text-sm border-r border-[#3c3c3c] cursor-pointer min-w-0 ${
            activeTab === tab.path ? "bg-[#1e1e1e] text-white" : "bg-[#2d2d30] text-gray-300 hover:bg-[#1e1e1e]"
          }`}
          onClick={() => onTabClick(tab.path)}
        >
          <span className="truncate mr-2">{tab.name}</span>
          {tab.isDirty && <span className="text-yellow-400 mr-1">●</span>}
          <button
            className="hover:bg-[#3c3c3c] rounded p-1"
            onClick={(e) => {
              e.stopPropagation()
              onTabClose(tab.path)
            }}
          >
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  )
}
