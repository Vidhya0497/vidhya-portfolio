import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Smart Freshness Tracker System',
    category: 'IoT / Embedded Systems',
    icon: Cpu,
    description:
      'A sensor-based system to monitor food freshness using temperature and gas sensors, helping reduce food waste through real-time monitoring.',
    tech: ['Arduino Uno', 'TMP36', 'MQ Sensor', 'Embedded C', 'Tinkercad'],
    color: 'from-primary to-secondary',
  },
  {
    title: 'Digital Healthcare Bridge System',
    category: 'Web Application',
    icon: Globe,
    description:
      'A comprehensive healthcare platform enabling seamless doctor-patient interaction, appointment scheduling, and medical record management.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Database', 'GitHub'],
    color: 'from-secondary to-accent',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading inline-block">Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="project-card group"
            >
              {/* Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <project.icon size={18} className="text-primary" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
