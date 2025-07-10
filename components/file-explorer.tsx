"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, File, Folder, FolderOpen } from "lucide-react"
import type { FileNode } from "@/app/page"

interface FileExplorerProps {
  fileSystem: FileNode
  onFileClick: (file: FileNode) => void
}

export function FileExplorer({ fileSystem, onFileClick }: FileExplorerProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["/"]))

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(path)) {
      newExpanded.delete(path)
    } else {
      newExpanded.add(path)
    }
    setExpandedFolders(newExpanded)
  }

  const renderFileNode = (node: FileNode, depth = 0) => {
    const isExpanded = expandedFolders.has(node.path)
    const paddingLeft = depth * 16 + 8

    return (
      <div key={node.path}>
        <div
          className="flex items-center py-1 px-2 hover:bg-[#2a2d2e] cursor-pointer text-sm"
          style={{ paddingLeft }}
          onClick={() => {
            if (node.type === "folder") {
              toggleFolder(node.path)
            } else {
              onFileClick(node)
            }
          }}
        >
          {node.type === "folder" ? (
            <>
              {isExpanded ? <ChevronDown size={16} className="mr-1" /> : <ChevronRight size={16} className="mr-1" />}
              {isExpanded ? (
                <FolderOpen size={16} className="mr-2 text-blue-400" />
              ) : (
                <Folder size={16} className="mr-2 text-blue-400" />
              )}
            </>
          ) : (
            <>
              <div className="w-4 mr-1"></div>
              <File size={16} className="mr-2 text-gray-400" />
            </>
          )}
          <span className="text-gray-200">{node.name}</span>
        </div>
        {node.type === "folder" && isExpanded && node.children && (
          <div>{node.children.map((child) => renderFileNode(child, depth + 1))}</div>
        )}
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">Explorer</div>
      {renderFileNode(fileSystem)}
    </div>
  )
}
