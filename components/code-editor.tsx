import React, { useEffect, useState, useRef } from "react"

interface CodeEditorProps {
  content: string
  filename: string
  onContentChange: (content: string) => void
  isDirty: boolean
}

export function CodeEditor({ content, filename, onContentChange, isDirty }: CodeEditorProps) {
  const [lines, setLines] = useState<string[]>([])
  const [syntaxErrors, setSyntaxErrors] = useState<Set<number>>(new Set())
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const displayRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState({ line: 1, col: 1 })

  useEffect(() => {
    setLines(content.split("\n"))
    checkSyntaxErrors(content)
  }, [content])

  const checkSyntaxErrors = (code: string) => {
    const errors = new Set<number>()
    const codeLines = code.split("\n")

    codeLines.forEach((line, index) => {
      const trimmedLine = line.trim()

      // Unclosed strings (basic check)
      const singleQuotes = (line.match(/'/g) || []).length
      const doubleQuotes = (line.match(/"/g) || []).length
      const backticks = (line.match(/`/g) || []).length

      if (singleQuotes % 2 !== 0 || doubleQuotes % 2 !== 0 || backticks % 2 !== 0) {
        errors.add(index)
      }

      // Random syntax error simulation (remove in production)
      if (trimmedLine.length > 0 && Math.random() < 0.05) {
        errors.add(index)
      }
    })

    setSyntaxErrors(errors)
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    onContentChange(newContent)

    // Update cursor position
    const textarea = e.target
    const text = textarea.value.substring(0, textarea.selectionStart)
    const lines = text.split("\n")
    setCursorPosition({
      line: lines.length,
      col: lines[lines.length - 1].length + 1,
    })
  }

  // Sync scrolling between textarea and display
  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (displayRef.current) {
      displayRef.current.scrollTop = e.currentTarget.scrollTop
      displayRef.current.scrollLeft = e.currentTarget.scrollLeft
    }
  }

  const getFileIcon = (filename: string) => {
    if (filename.endsWith(".tsx") || filename.endsWith(".ts")) return "📘"
    if (filename.endsWith(".json")) return "📋"
    if (filename.endsWith(".md")) return "📝"
    if (filename.endsWith(".html")) return "🌐"
    return "📄"
  }

  const highlightSyntax = (line: string, lineIndex: number) => {
    let highlighted = line

    // Keywords
    highlighted = highlighted.replace(
      /\b(import|export|from|interface|const|let|var|function|return|if|else|for|while|class|extends|implements|type|React|useState|useEffect)\b/g,
      '<span class="text-blue-400">$1</span>',
    )

    // Strings
    highlighted = highlighted.replace(/(["'`])((?:\\.|(?!\1)[^\\])*?)\1/g, '<span class="text-green-400">$1$2$1</span>')

    // Comments
    highlighted = highlighted.replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="text-gray-500">$1</span>')

    // JSX tags
    highlighted = highlighted.replace(/(<\/?[a-zA-Z][^>]*>)/g, '<span class="text-red-400">$1</span>')

    return highlighted
  }

  return (
    <div className="h-full bg-[#1e1e1e] flex relative">
      {/* Line numbers */}
      <div className="bg-[#1e1e1e] text-gray-500 text-sm font-mono p-4 select-none border-r border-[#3c3c3c] min-w-[60px]">
        {lines.map((_, index) => (
          <div
            key={index}
            className={`leading-6 text-right pr-4 h-6 ${syntaxErrors.has(index) ? "bg-red-900 bg-opacity-30" : ""}`}
          >
            {index + 1}
            {syntaxErrors.has(index) && <span className="text-red-400 ml-1">●</span>}
          </div>
        ))}
      </div>

      {/* Code content */}
      <div className="flex-1 relative">
        {/* File header */}
        <div className="flex items-center mb-4 p-4 pb-0 text-sm text-gray-400">
          <span className="mr-2">{getFileIcon(filename)}</span>
          <span>{filename}</span>
          {isDirty && <span className="ml-2 text-yellow-400">●</span>}
        </div>
        
        {/* Code area container */}
        <div 
          ref={containerRef}
          className="absolute inset-0 top-16 left-4 right-4 bottom-4 overflow-hidden"
        >
          {/* Syntax highlighted display layer */}
          <div 
            ref={displayRef}
            className="absolute inset-0 overflow-auto pointer-events-none text-sm font-mono leading-6 whitespace-pre-wrap z-10"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {lines.map((line, index) => (
              <div
                key={index}
                className={`min-h-[24px] ${
                  syntaxErrors.has(index) ? "bg-red-900 bg-opacity-20 border-l-2 border-red-500" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: highlightSyntax(line, index) || "&nbsp;" }}
                style={{ wordWrap: "break-word", overflowWrap: "break-word" }}
              />
            ))}
          </div>

          {/* Editable textarea */}
          <textarea
            ref={textareaRef}
            value={content}
            onChange={handleContentChange}
            onScroll={handleScroll}
            className="absolute inset-0 bg-transparent text-transparent caret-white text-sm font-mono leading-6 resize-none outline-none z-20 whitespace-pre-wrap overflow-auto"
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
              caretColor: "white",
            }}
            spellCheck={false}
          />
        </div>
        
        {/* Cursor position indicator */}
        <div className="absolute bottom-2 right-4 text-xs text-gray-500">
          Ln {cursorPosition.line}, Col {cursorPosition.col}
        </div>
      </div>
    </div>
  )
}