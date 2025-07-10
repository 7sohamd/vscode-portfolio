"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Terminal } from "./terminal"

interface DraggableTerminalProps {
  isVisible: boolean
  onClose: () => void
  initialHeight?: number
}

export function DraggableTerminal({ isVisible, onClose, initialHeight = 300 }: DraggableTerminalProps) {
  const [height, setHeight] = useState(initialHeight)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartY, setDragStartY] = useState(0)
  const [dragStartHeight, setDragStartHeight] = useState(0)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const deltaY = dragStartY - e.clientY
      const newHeight = Math.max(100, Math.min(window.innerHeight - 200, dragStartHeight + deltaY))
      setHeight(newHeight)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragStartY, dragStartHeight])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStartY(e.clientY)
    setDragStartHeight(height)
  }

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleMaximize = () => {
    if (isMaximized) {
      setHeight(initialHeight)
      setIsMaximized(false)
    } else {
      setHeight(window.innerHeight - 100)
      setIsMaximized(true)
    }
  }

  const handleClose = () => {
    onClose()
  }

  if (!isVisible) return null

  return (
    <div
      ref={terminalRef}
      className="border-t border-[#3c3c3c] bg-[#1e1e1e] relative"
      style={{
        height: isMinimized ? "32px" : isMaximized ? "calc(100vh - 100px)" : `${height}px`,
        transition: isDragging ? "none" : "height 0.2s ease",
      }}
    >
      {/* Drag Handle */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-[#3c3c3c] cursor-ns-resize hover:bg-[#007acc] transition-colors z-10"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "ns-resize" : "ns-resize" }}
      />

      {/* Terminal Content */}
      {!isMinimized && (
        <div className="h-full">
          <Terminal
            onClose={handleClose}
            onMinimize={handleMinimize}
            onMaximize={handleMaximize}
            isMaximized={isMaximized}
          />
        </div>
      )}

      {/* Minimized State */}
      {isMinimized && (
        <div className="h-8 bg-[#2d2d30] border-b border-[#3c3c3c] flex items-center justify-between px-4">
          <span className="text-white font-semibold text-sm">TERMINAL (Minimized)</span>
          <div className="flex items-center space-x-2">
            <button onClick={handleMinimize} className="text-gray-400 hover:text-white" title="Restore">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3 3v10h10V3H3zm9 9H4V4h8v8z" />
              </svg>
            </button>
            <button onClick={handleClose} className="text-gray-400 hover:text-white" title="Close">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
