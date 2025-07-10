import Layout from "@/components/Layout"

interface WorkExperience {
  id: number
  company: string
  position: string
  duration: string
  description: string[]
  technologies: string[]
}

export default function WorksPage() {
  const workExperience: WorkExperience[] = [
    {
      id: 1,
      company: "NooBuild",
      position: "Co-Founder",
      duration: "2023 – Present",
      description: [
        "Architected a 2K+ member technology community and spearheaded a 50+ member core team to host 7+ technical events",
        "Developed a freelancing-focused training curriculum and orchestrated workshops on Game Development, UI/UX, and Graphic Design",
      ],
      technologies: ["Community Building", "Event Management", "Curriculum Development", "Leadership"],
    },
    {
      id: 2,
      company: "GDSC NSEC",
      position: "Design Lead",
      duration: "2023 – 2024",
      description: [
        "Engineered interactive branding and promotional content for 20+ technology workshops and community events",
        "Spearheaded UI/UX sessions to train 100+ students on industry-standard design tools and workflows",
      ],
      technologies: ["UI/UX Design", "Figma", "Adobe XD", "Branding", "Training"],
    },
    {
      id: 3,
      company: "CodeClause",
      position: "Python Developer Intern",
      duration: "Aug 2023 – Nov 2023",
      description: [
        "Constructed a desktop music player using Python-Tkinter, implementing Object-Oriented Programming (OOP) principles",
        "Implemented file handling and created an intuitive user interface for seamless user experience",
      ],
      technologies: ["Python", "Tkinter", "OOP", "Desktop Development", "File Handling"],
    },
    {
      id: 4,
      company: "Curlbury (YouTube)",
      position: "Video Editor",
      duration: "2019 – 2022",
      description: [
        "Produced and edited a diverse range of travel, gaming, and documentary-style videos",
        "Managed content for a channel with over 90,000 subscribers, ensuring high-quality video production",
      ],
      technologies: ["Video Editing", "Content Creation", "Adobe Premiere", "YouTube", "Storytelling"],
    },
  ]

  return (
    <Layout title="Work Experience">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Work Experience</h1>

        <div className="space-y-8">
          {workExperience.map((work) => (
            <div key={work.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{work.position}</h3>
                  <p className="text-lg text-blue-600">{work.company}</p>
                </div>
                <span className="text-gray-500 text-sm">{work.duration}</span>
              </div>

              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
                {work.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {work.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
