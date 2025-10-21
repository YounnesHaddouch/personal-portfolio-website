export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Newcastle University
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    BSc Computer Science (2024–2027)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Pursuing a comprehensive computer science degree with focus on software engineering and data science.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Seoul National University
                  </h4>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    International Exchange Program
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Gained international perspective on technology and innovation in South Korea's leading tech ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Interests & Passions
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">🥊</div>
                  <p className="font-medium text-gray-900 dark:text-white">Boxing</p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">🎹</div>
                  <p className="font-medium text-gray-900 dark:text-white">Piano</p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">🎸</div>
                  <p className="font-medium text-gray-900 dark:text-white">Guitar</p>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="text-2xl mb-2">🏃</div>
                  <p className="font-medium text-gray-900 dark:text-white">Running</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Mission:
                  </span>{' '}
                  Leveraging technology to create opportunities and bridge social gaps, 
                  making tech accessible and beneficial for all communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
