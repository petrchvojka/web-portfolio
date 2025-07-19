
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, BarChart } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const projects = [
  {
    title: 'Headcount Dashboard',
    description: 'Reads Excel data, visualizes teams and absences.',
    icon: <BarChart className="h-8 w-8 text-purple-400" />,
  },
  {
    title: 'Weekly Planning Viewer',
    description: 'Production schedule visualizer with custom time slots.',
    icon: <Code className="h-8 w-8 text-purple-400" />,
  },
  {
    title: 'Truck Loading Visualizer',
    description: 'GUI-based box placement simulation with weight limits.',
    icon: <Database className="h-8 w-8 text-purple-400" />,
  },
];

const HomePage = () => {
  const { toast } = useToast();

  const handleHireMeClick = (e) => {
    e.preventDefault();
    toast({
      title: "Let's get in touch!",
      description: "Redirecting you to the contact page.",
    });
    // In a real app, you'd use react-router's navigate function
    setTimeout(() => {
      document.getElementById('contact-link').click();
    }, 1000);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      <NavLink to="/contact" id="contact-link" className="hidden">Contact</NavLink>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] tracking-tight">
          Hi, I'm <span className="gradient-text">Petr Chvojka</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
          A Python Developer specializing in building automation tools and data-driven applications for businesses and factories.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <NavLink to="/portfolio">View My Work</NavLink>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resume.pdf" download onClick={(e) => {
              e.preventDefault();
              toast({
                title: "🚧 Feature Not Implemented",
                description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
              });
            }}>
              Download CV
            </a>
          </Button>
        </div>
      </motion.section>

      {/* Featured Projects Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">Featured Projects</h2>
          <p className="mt-2 text-muted-foreground">A glimpse into what I can build.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg border border-border/50 hover:border-purple-400/50 transition-colors duration-300"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="link" className="text-purple-400">
            <NavLink to="/portfolio">
              See all projects <ArrowRight className="ml-2 h-4 w-4" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg p-8 sm:p-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk']">Have a project in mind?</h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Let's collaborate to build something amazing. I'm available for freelance opportunities.
        </p>
        <div className="mt-8">
          <Button size="lg" onClick={handleHireMeClick}>
            Hire Me
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
  
