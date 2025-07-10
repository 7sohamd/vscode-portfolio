import type React from "react"
import type { ReactNode } from "react"
import Link from "next/link"

interface LayoutProps {
  children: ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title = "Soham Codes" }) => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="bg-gray-900 text-white p-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/works" className="hover:text-blue-400 transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}

export default Layout
