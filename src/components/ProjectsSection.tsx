import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: "Machine Learning Pipeline",
    description: "End-to-end ML pipeline for predictive analytics using Python and TensorFlow",
    tags: ["Python", "TensorFlow", "AWS"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for real-time data analysis using D3.js and React",
    tags: ["React", "D3.js", "TypeScript"],
    image: "/placeholder.svg",
    link: "#"
  },
  {
    id: 3,
    title: "NLP Text Analysis",
    description: "Natural Language Processing system for sentiment analysis and text classification",
    tags: ["Python", "NLTK", "Scikit-learn"],
    image: "/placeholder.svg",
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;