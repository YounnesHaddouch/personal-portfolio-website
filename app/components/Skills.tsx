interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Git", category: "Tools" },
  { name: "CI/CD", category: "Tools" }
];

export default function Skills() {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        
        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-6">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg text-center hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-gray-400 dark:hover:border-gray-600"
                  >
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
