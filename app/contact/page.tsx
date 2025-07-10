"use client"

import type React from "react"
import { useState } from "react"
import Layout from "@/components/Layout"

interface ContactForm {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", form)
    alert("Thank you for your message! I will get back to you soon.")
    setForm({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Layout title="Contact Me">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Get In Touch</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">soham4707@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 73639 77016</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Location</h3>
                <p className="text-gray-600">Kolkata, India</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Professional Links</h3>
                <div className="flex flex-col space-y-2 mt-2">
                  <a href="https://linkedin.com/in/soham-dey-891332256" className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>
                  <a href="https://github.com/7sohamd" className="text-gray-800 hover:underline">
                    GitHub
                  </a>
                  <a href="https://g.dev/7sohamd" className="text-green-600 hover:underline">
                    Google Developer Profile
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Coding & Design Profiles</h3>
                <div className="flex flex-col space-y-2 mt-2">
                  <a href="https://leetcode.com/u/7soham" className="text-orange-600 hover:underline">
                    LeetCode
                  </a>
                  <a href="https://behance.net/7soham" className="text-blue-500 hover:underline">
                    Behance
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-medium text-gray-800 mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">English (Fluent)</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Hindi (Fluent)</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Bengali (Native)</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
