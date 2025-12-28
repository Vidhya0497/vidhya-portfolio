import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Target, Sparkles } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading inline-block">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar/Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <User size={48} className="text-primary" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="text-center md:text-left">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                I'm a Computer Science and Design student at SRM Easwari Engineering College, 
                Chennai, with a passion for creating impactful digital solutions. As a fresher 
                in the tech industry, I bring fresh perspectives and an eagerness to learn and 
                grow with every project I undertake.
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <Target size={18} className="text-primary" />
                  <span className="text-muted-foreground">
                    Goal: <span className="text-foreground">Frontend Developer</span>
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-2 text-sm"
                >
                  <Sparkles size={18} className="text-accent" />
                  <span className="text-muted-foreground">
                    Focus: <span className="text-foreground">Web Development</span>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
