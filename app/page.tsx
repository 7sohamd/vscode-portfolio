import ClientPage from "./ClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A modern portfolio website built with Next.js",
}

export interface FileNode {
  name: string
  type: "file" | "folder"
  path: string
  content?: string
  children?: FileNode[]
  isOpen?: boolean
}

export interface OpenTab {
  path: string
  name: string
  content: string
  isDirty: boolean
}

export default function HomePage() {
  return <ClientPage />
}
