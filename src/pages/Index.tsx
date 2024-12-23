import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ParticleBackground />
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="text-primary font-bold text-xl hover:text-primary/80 transition-colors"
            >
              YAN HOLTZ
            </Link>
            <div className="hidden md:flex gap-8 text-gray-600 dark:text-gray-300">
              <Link to="/intro" className="hover:text-primary transition-colors hover:scale-105 transform">INTRO</Link>
              <Link to="/services" className="hover:text-primary transition-colors hover:scale-105 transform">SERVICES</Link>
              <Link to="/blog" className="hover:text-primary transition-colors hover:scale-105 transform">BLOG</Link>
              <Link to="/websites" className="hover:text-primary transition-colors hover:scale-105 transform">WEBSITES</Link>
              <Link to="/portfolio" className="hover:text-primary transition-colors hover:scale-105 transform">PORTFOLIO</Link>
              <Link to="/testimonials" className="hover:text-primary transition-colors hover:scale-105 transform">TESTIMONIALS</Link>
              <Link to="/contact" className="hover:text-primary transition-colors hover:scale-105 transform">CONTACT</Link>
            </div>
            {/* Mobile menu button - you might want to implement a mobile menu later */}
            <button className="md:hidden text-gray-600 dark:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold tracking-wider">
              YAN <span className="inline-block w-12 h-12 bg-contain bg-no-repeat bg-center mx-2" style={{ backgroundImage: "url('/lovable-uploads/b9cf6ce1-8d5e-4b11-ad22-89c98d00a7e1.png')" }}></span> HOLTZ
            </h1>
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-900 text-white hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-900 text-white hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-900 text-white hover:bg-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Introduction Text */}
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            👋 Hi! I'm a freelance <span className="font-semibold">senior software engineer</span> specializing in
            <span className="text-primary font-semibold"> data visualization</span>. I worked for prestigious research centers and
            top-tier companies. I've also developed extensive <span className="font-semibold">educational content</span> that you might benefit from. ❤️
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6">
            <motion.a
              href="#subscribe"
              className="px-8 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SUBSCRIBE
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-6 border-b-2 border-r-2 border-primary transform rotate-45"></div>
        </motion.div>
      </header>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
};

export default Index;
