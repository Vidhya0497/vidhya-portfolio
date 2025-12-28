import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  FileCode, 
  Braces, 
  CircuitBoard,
  Coffee,
  Atom,
  Terminal,
  Github,
  Database,
  Palette,
  Users,
  MessageSquare,
  Lightbulb,
  Sparkles,
  Crown
} from 'lucide-react';

const technicalSkills = [
  { name: 'HTML', icon: Code2 },
  { name: 'CSS', icon: FileCode },
  { name: 'JavaScript', icon: Braces },
  { name: 'Python', icon: CircuitBoard },
  { name: 'C', icon: Terminal },
  { name: 'Java', icon: Coffee },
  { name: 'React', icon: Atom },
];

const tools = [
  { name: 'VS Code', icon: Terminal },
  { name: 'GitHub', icon: Github },
  { name: 'MongoDB', icon: Database },
  { name: 'Canva', icon: Palette },
];

const softSkills = [
  { name: 'Teamwork', icon: Users },
  { name: 'Communication', icon: MessageSquare },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Creativity', icon: Sparkles },
  { name: 'Leadership', icon: Crown },
];

interface SkillCardProps {
  name: string;
  icon: React.ElementType;
  index: number;
  isInView: boolean;
}

const SkillCard = ({ name, icon: Icon, index, isInView }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="skill-card"
  >
    <Icon size={28} className="mx-auto mb-2 text-primary" />
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
);

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading inline-block">Skills</h2>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>

        {/* Tools & Software */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
            Tools & Software
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {tools.map((tool, index) => (
              <SkillCard key={tool.name} {...tool} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            {softSkills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} index={index} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
