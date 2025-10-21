export function Skills() {
  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "React/Next.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "SQL/Database Design", level: 75 },
    { name: "Git/GitHub", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 }
  ]

  const softSkills = [
    "Leadership",
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Mentoring",
    "Project Management",
    "Strategic Thinking",
    "Community Building"
  ]

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      status: "In Progress"
    },
    {
      name: "Google Data Analytics Certificate",
      issuer: "Google",
      year: "2023",
      status: "Completed"
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
      status: "Completed"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
            Technical expertise and professional development focused on social impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-900 dark:text-white font-medium">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <span className="text-gray-900 dark:text-white font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 animate-slide-up">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Certifications & Professional Development
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {cert.issuer}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.year}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Area */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Specialization Focus
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              My skills development is strategically focused on technologies and methodologies that can 
              create the greatest social impact, from accessible web development to data-driven solutions 
              for community challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
