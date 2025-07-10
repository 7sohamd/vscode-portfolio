"use client"

import { useState, useMemo } from "react"
import { Search, File, X } from "lucide-react"
import type { FileNode } from "@/app/page"

interface SearchPanelProps {
  fileSystem: FileNode
  onFileClick: (file: FileNode) => void
  onClose: () => void
}

export function SearchPanel({ fileSystem, onFileClick, onClose }: SearchPanelProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Flatten file system to searchable array
  const flattenFiles = (node: FileNode): FileNode[] => {
    let files: FileNode[] = []
    if (node.type === "file") {
      files.push(node)
    }
    if (node.children) {
      for (const child of node.children) {
        files = files.concat(flattenFiles(child))
      }
    }
    return files
  }

  const allFiles = useMemo(() => flattenFiles(fileSystem), [fileSystem])

  const filteredFiles = useMemo(() => {
    if (!searchQuery.trim()) return []
    return allFiles.filter(
      (file) =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        file.path.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery, allFiles])

  const handleFileClick = (file: FileNode) => {
    onFileClick(file)
    onClose()
  }

  return (
    <div className="w-64 bg-[#252526] border-r border-[#3c3c3c] h-full">
      <div className="p-2 border-b border-[#3c3c3c] flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Search</span>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={16} />
        </button>
      </div>

      <div className="p-2">
        <div className="relative">
          <Search size={16} className="absolute left-2 top-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#3c3c3c] text-white text-sm pl-8 pr-2 py-1 rounded border-none outline-none focus:bg-[#4c4c4c]"
            autoFocus
          />
        </div>
      </div>

      <div className="overflow-y-auto">
        {searchQuery.trim() && (
          <div className="px-2 py-1">
            <div className="text-xs text-gray-400 mb-2">
              {filteredFiles.length} result{filteredFiles.length !== 1 ? "s" : ""}
            </div>
            {filteredFiles.map((file) => (
              <div
                key={file.path}
                className="flex items-center py-1 px-2 hover:bg-[#2a2d2e] cursor-pointer text-sm rounded"
                onClick={() => handleFileClick(file)}
              >
                <File size={16} className="mr-2 text-gray-400" />
                <div className="flex-1 min-w-0">
                  <div className="text-gray-200 truncate">{file.name}</div>
                  <div className="text-xs text-gray-500 truncate">{file.path}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {searchQuery.trim() && filteredFiles.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500 text-sm">No files found matching "{searchQuery}"</div>
        )}

        {!searchQuery.trim() && (
          <div className="px-4 py-8 text-center text-gray-500 text-sm">Type to search files...</div>
        )}
      </div>
    </div>
  )
}
