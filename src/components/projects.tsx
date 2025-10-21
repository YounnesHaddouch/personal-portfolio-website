'use client'

import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: "Tech for Social Mobility Platform",
      description: "A comprehensive platform connecting students from underrepresented backgrounds with technology mentors and resources.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      status: "In Development",
      githubUrl: "https://github.com/YounnesHaddouch/tech-social-mobility"
    },
    {
      title: "Community Learning Hub",
      description: "An educational platform providing free coding resources and mentorship opportunities for local communities.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      status: "Planning Phase",
      githubUrl: "https://github.com/YounnesHaddouch/community-learning-hub"
    },
    {
      title: "Digital Inclusion Toolkit",
      description: "Tools and resources to help organizations improve digital accessibility and inclusion in their communities.",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      status: "Concept",
      githubUrl: "https://github.com/YounnesHaddouch/digital-inclusion-toolkit"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
            Building technology solutions that create positive social impact and promote digital inclusion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'In Development' 
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : project.status === 'Planning Phase'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">View Code</span>
                </a>
                <ExternalLink size={18} className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Explore More Projects
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Check out my complete portfolio on GitHub
            </p>
            <a
              href="https://github.com/YounnesHaddouch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>Visit My GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
