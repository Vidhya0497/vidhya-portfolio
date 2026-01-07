import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Trophy, Code } from 'lucide-react';

const certifications = [
  { name: 'Python Essentials', provider: 'Cisco' },
  { name: 'UI/UX Design', provider: 'Le Wagon' },
  { name: 'MongoDB Basics', provider: 'MongoDB University' },
  { name: 'Graphic Design', provider: 'Alison' },
  { name: 'Internet of Things', provider: 'NPTEL' },
];

const achievements = [
  { name: 'Visalon Hacks', detail: '24-Hour Hackathon' },
  { name: 'HackToFuture', detail: '12-Hour Hackathon' },
  { name: 'Code for Bharat', detail: 'National Level' },
  { name: 'Code Cubicle 4.0', detail: 'Coding Competition' },
  { name: 'Hack 4 Mini 2.0', detail: 'Mini Hackathon' },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading inline-block">Education & Achievements</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-primary/20">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-foreground">
                  Bachelor of Engineering
                </h4>
                <p className="text-sm text-primary">
                  Computer Science and Design
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                SRM Easwari Engineering College, Chennai
              </p>
              <div className="flex items-center gap-2">
                <Code size={14} className="text-accent" />
                <span className="text-xs text-muted-foreground">
                  Currently Pursuing
                </span>
              </div>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-secondary/20">
                <Award size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-semibold">Certifications</h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground">{cert.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {cert.provider}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-accent/20">
                <Trophy size={24} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold">Achievements</h3>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground">{achievement.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {achievement.detail}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
