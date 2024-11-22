import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';
import ProjectCard from '../components/ProjectCard';
import { Github, Linkedin, Mail } from 'lucide-react';

const projects = [
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard built with React and D3.js for analyzing large datasets",
    tags: ["React", "D3.js", "TypeScript"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Machine Learning Pipeline",
    description: "Automated ML pipeline for processing and analyzing financial data",
    tags: ["Python", "TensorFlow", "AWS"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    title: "Natural Language Processing",
    description: "Text analysis tool for processing customer feedback",
    tags: ["NLP", "Python", "BERT"],
    image: "/placeholder.svg",
    link: "#"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Data Science Portfolio
            </span>
          </motion.div>
          <h1 className="text-5xl font-bold mb-6">
            Turning Data into
            <span className="text-primary"> Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Data scientist and machine learning engineer specializing in creating meaningful insights from complex datasets
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Featured Work
            </span>
            <h2 className="text-4xl font-bold mt-4">Recent Projects</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12"
          >
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Contact
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-8">Let's Connect</h2>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;