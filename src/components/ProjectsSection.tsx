import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Cpu, Leaf, Stethoscope } from 'lucide-react';
import projectFood from '@/assets/project-food.jpg';
import projectRobot from '@/assets/project-robot.jpg';
import projectFlower from '@/assets/project-flower.jpg';
import projectDoctor from '@/assets/project-doctor.jpg';

const projects = [
  {
    title: 'No-Code Multi-Robot Workflow Orchestration System',
    category: 'Robotics / Industrial Automation',
    icon: Bot,
    description:
      'A modern web-based platform that allows users to visually design and control multi-robot workflows without coding. The system supports coordination of AMRs, AGVs, and industrial PLC systems using a unified adapter-based architecture. It includes real-time simulation, intelligent task execution, and telemetry monitoring for efficient warehouse and industrial automation.',
    tech: ['React (Vite)', 'React Flow', 'JavaScript', 'JSON Workflow Engine'],
    color: 'from-secondary to-accent',
    image: projectRobot,
    featured: true,
  },
  {
    title: 'Smart Food Freshness Monitoring System',
    category: 'IoT / Embedded Systems',
    icon: Cpu,
    description:
      'An IoT-based solution designed to monitor food freshness using environmental sensors. The system collects data related to conditions that affect food quality and helps detect early signs of spoilage.',
    tech: ['IoT Sensors', 'Python', 'Embedded Programming', 'Data Monitoring'],
    color: 'from-primary to-secondary',
    image: projectFood,
  },
  {
    title: 'Temple Flower Waste Recycling Management System',
    category: 'Sustainability',
    icon: Leaf,
    description:
      'Focuses on sustainable management of temple flower waste. Instead of disposing flowers into rivers, the system proposes a structured process to collect and recycle them into eco-friendly products.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Database Management'],
    color: 'from-accent to-primary',
    image: projectFlower,
  },
  {
    title: 'Doctor-Patient Appointment System',
    category: 'Web Application',
    icon: Stethoscope,
    description:
      'A web-based application that allows patients to book doctor appointments online and manage consultations efficiently.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    color: 'from-primary to-accent',
    image: projectDoctor,
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

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="project-card group overflow-hidden"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 flex flex-col md:flex-row gap-6">
                {/* Text content - left */}
                <div className="flex-1 min-w-0">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
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

                {/* Image - right on desktop, top on mobile (order handled by flex-col/row) */}
                <motion.div
                  className="w-full md:w-64 lg:w-72 flex-shrink-0"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 md:h-full object-cover rounded-xl shadow-lg shadow-primary/10 group-hover:shadow-primary/25 transition-shadow duration-300"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
