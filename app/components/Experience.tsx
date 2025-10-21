'use client';

import { useState } from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of scalable web applications using modern technologies. Architecting solutions and mentoring junior developers.",
    technologies: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    title: "Full Stack Developer",
    company: "Innovation Labs",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client-facing applications. Implemented CI/CD pipelines and improved code quality.",
    technologies: ["Next.js", "Python", "PostgreSQL", "Docker"]
  },
  {
    title: "Software Developer",
    company: "Startup Inc",
    period: "2018 - 2020",
    description: "Built RESTful APIs and responsive front-end interfaces. Collaborated with cross-functional teams to deliver features.",
    technologies: ["JavaScript", "Express", "MongoDB", "React"]
  }
];

export default function Experience() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 bg-white dark:bg-gray-950 hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap ml-4">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  expandedCard === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-500 text-center">
                {expandedCard === index ? '▲ Click to collapse' : '▼ Click to expand'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
