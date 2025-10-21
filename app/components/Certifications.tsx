interface Certification {
  name: string;
  issuer: string;
  year: string;
  description: string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    description: "Professional level certification for designing distributed systems on AWS"
  },
  {
    name: "Professional Scrum Master",
    issuer: "Scrum.org",
    year: "2022",
    description: "Certification demonstrating advanced knowledge of Scrum framework"
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    year: "2022",
    description: "Cloud architecture and engineering certification"
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    year: "2021",
    description: "Professional certification for MongoDB development"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2021",
    description: "Advanced React development and best practices"
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    year: "2020",
    description: "Containerization and orchestration expertise"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-950 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <div className="flex justify-between items-center text-sm">
                  <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <span className="text-gray-500 dark:text-gray-500">{cert.year}</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
