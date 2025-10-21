export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-medium mb-2">Bachelor&apos;s in Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-400">University Name</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">2018 - 2022</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold mb-4">Interests</h3>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Full Stack Development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cloud Architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Open Source Contribution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I&apos;m a passionate software engineer with a strong focus on building scalable and efficient applications. 
            I enjoy solving complex problems and learning new technologies. When I&apos;m not coding, you can find me 
            contributing to open source projects or exploring the latest tech trends.
          </p>
        </div>
      </div>
    </section>
  );
}
