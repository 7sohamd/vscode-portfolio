import Layout from "@/components/Layout"

export default function AboutPage() {
  return (
    <Layout title="About Me">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">About Me</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hi! I'm <strong>Soham Dey</strong>, a passionate Software Engineer, Full Stack Developer, and UI/UX
              Designer based in Kolkata, India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I have experience in full stack development (MERN, Next.js), cross-platform apps (Flutter, React Native),
              and DevOps (Docker, AWS). I've proven success in leading teams, developing scalable applications, and
              participating in national-level hackathons.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm passionate about solving real-world problems with efficient code and intuitive UI/UX design. Currently
              pursuing B.Tech in Computer Science and Engineering at Netaji Subhash Engineering College.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "JavaScript", "C++", "SQL"].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "Express.js", "MongoDB"].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">Mobile & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "React Native", "Docker", "AWS", "Figma", "Firebase"].map((skill) => (
                    <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold">B.Tech in Computer Science and Engineering</h3>
            <p className="text-blue-600">Netaji Subhash Engineering College, Kolkata</p>
            <p className="text-gray-600">2022 – 2026 | GPA: 7.9 (Till 5th Sem)</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Second Runners Up at Hackolution 2025 - IEM</li>
            <li>Second Round at Smart India Hackathon 2023 and 2024 (Team Leader)</li>
            <li>
              Participated in multiple hackathons: Diversion 2k25, Status Code 1, Hack4Bengal, Build On Aptos Hackathon
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
