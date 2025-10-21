export function Experience() {
  const experiences = [
    {
      title: "Altitude Foundation",
      role: "Volunteer/Team Member",
      period: "2023 - Present",
      description: "Contributing to initiatives that promote social mobility through technology education and mentorship programs.",
      highlights: [
        "Mentoring students from underrepresented backgrounds",
        "Developing educational content for tech accessibility",
        "Organizing community outreach programs"
      ]
    },
    {
      title: "The Young Consultant",
      role: "Consultant",
      period: "2023 - Present", 
      description: "Providing strategic consulting services with a focus on technology solutions for social impact organizations.",
      highlights: [
        "Advising non-profits on digital transformation",
        "Developing tech strategies for social mobility initiatives",
        "Leading client workshops and training sessions"
      ]
    },
    {
      title: "Various Internships",
      role: "Technology Intern",
      period: "2022 - 2023",
      description: "Gained hands-on experience in software development and technology consulting across multiple organizations.",
      highlights: [
        "Software development and testing",
        "Data analysis and visualization",
        "Client relationship management"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
            Building experience at the intersection of technology and social impact
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.role}
                  </p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                {exp.description}
              </p>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Highlights:
                </h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Focus on Social Impact
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              All my professional experiences are driven by a commitment to using technology as a force for good, 
              creating opportunities for social mobility and bridging digital divides in underserved communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
