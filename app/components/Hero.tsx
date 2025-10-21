export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Younnes Haddouch
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Software Engineer | Full Stack Developer | Tech Enthusiast
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border-2 border-foreground rounded-lg hover:bg-foreground hover:text-background transition-colors font-medium"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
