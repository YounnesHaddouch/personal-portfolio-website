'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:younnes.haddouch@example.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setStatus('Opening your email client...');
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="mailto:younnes.haddouch@example.com"
            className="text-lg font-medium hover:underline"
          >
            younnes.haddouch@example.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white dark:bg-gray-950"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white dark:bg-gray-950"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white dark:bg-gray-950 resize-none"
              placeholder="Your message..."
            />
          </div>

          {status && (
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              {status}
            </div>
          )}

          <button
            type="submit"
            className="w-full px-8 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://github.com/YounnesHaddouch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-foreground dark:hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/younnes-haddouch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-foreground dark:hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/younnes_haddouch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-foreground dark:hover:text-foreground transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
