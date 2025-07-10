"use client"

import { useEffect } from "react"
import Image from "next/image"

interface LoaderProps {
  onLoadComplete: () => void
}

export function Loader({ onLoadComplete }: LoaderProps) {
  useEffect(() => {
    // Just show the logo briefly then load
    const timer = setTimeout(() => {
      onLoadComplete()
    }, 1500)

    return () => clearTimeout(timer)
  }, [onLoadComplete])

  return (
    <div className="fixed inset-0 bg-[#1e1e1e] flex flex-col items-center justify-center z-50">
      {/* VS Code Logo */}
      <div className="mb-8 relative">
        <div className="animate-pulse">
          <Image
            src="/vscode-logo.png"
            alt="VS Code Logo"
            width={120}
            height={120}
            className="animate-bounce"
            style={{
              filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
            }}
          />
        </div>

        {/* Rotating ring around logo */}
        <div className="absolute inset-0 -m-4">
          <div className="w-32 h-32 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white mb-2 animate-fade-in">Visual Studio Code</h2>
        <p className="text-gray-400">Welcome to Soham Codes</p>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
