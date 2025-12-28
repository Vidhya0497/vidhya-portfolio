import { motion } from 'framer-motion';
import { Code2, Laptop, Cloud, Database, ChevronDown, Download } from 'lucide-react';

const floatingIcons = [
  { Icon: Code2, position: 'top-20 left-10 md:left-20', delay: 0 },
  { Icon: Laptop, position: 'top-32 right-10 md:right-24', delay: 1 },
  { Icon: Cloud, position: 'bottom-40 left-16 md:left-32', delay: 2 },
  { Icon: Database, position: 'bottom-32 right-12 md:right-28', delay: 3 },
];

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} hidden md:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: delay * 0.3, duration: 0.6 }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: delay,
              ease: 'easeInOut',
            }}
          >
            <Icon size={48} className="text-primary/50" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="text-6xl md:text-8xl font-bold gradient-text">VR</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Vidhya</span>
          <br />
          <span className="text-muted-foreground">Aspiring Software Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A passionate Computer Science fresher focused on building beautiful, 
          user-friendly web applications and exploring innovative technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToProjects}
            className="btn-gradient"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsla(270, 91%, 65%, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Projects</span>
          </motion.button>

          <motion.a
            href="/vidhya_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gradient flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
