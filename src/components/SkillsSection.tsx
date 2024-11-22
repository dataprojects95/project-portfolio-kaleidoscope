import { motion } from 'framer-motion';
import { Code2, Database, Brain, LineChart, GitBranch, Terminal } from 'lucide-react';

const skills = [
  { icon: Code2, name: "Programming", description: "Python, R, SQL, JavaScript" },
  { icon: Database, name: "Data Engineering", description: "ETL, Data Pipelines, Big Data" },
  { icon: Brain, name: "Machine Learning", description: "Deep Learning, NLP, Computer Vision" },
  { icon: LineChart, name: "Data Visualization", description: "D3.js, Plotly, Tableau" },
  { icon: GitBranch, name: "Version Control", description: "Git, GitHub, GitLab" },
  { icon: Terminal, name: "DevOps", description: "Docker, AWS, CI/CD" }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-16 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-lift"
            >
              <skill.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;