export function StatusBar() {
  return (
    <div className="h-6 bg-[#007acc] flex items-center justify-between px-4 text-xs text-white">
      <div className="flex items-center space-x-4">
        <span>🔗 main</span>
        <span>✓ 0 ⚠ 0</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>TypeScript React</span>
      </div>
    </div>
  )
}
