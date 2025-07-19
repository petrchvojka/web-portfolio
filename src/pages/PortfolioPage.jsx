
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from 'react-helmet';

const projects = [
  {
    title: 'Headcount Dashboard',
    description: 'A powerful dashboard that reads and parses Excel data to visualize team structures, headcount, and daily absences, providing managers with real-time insights.',
    tags: ['Python', 'Pandas', 'Plotly', 'Excel Automation'],
    imageUrl: 'A dashboard showing charts and graphs of employee data',
  },
  {
    title: 'Weekly Planning Viewer',
    description: 'An interactive visualizer for complex production schedules. Features custom time slots and drag-and-drop functionality for easy plan adjustments.',
    tags: ['Python', 'Tkinter', 'Custom GUI', 'Scheduling'],
    imageUrl: 'A weekly calendar view with color-coded production tasks',
  },
  {
    title: 'Production Plan Viewer',
    description: 'A scrollable canvas application that displays shift-based production plans. Allows for zooming and panning across a large, detailed timeline.',
    tags: ['Python', 'PyQt5', 'Data Visualization', 'Manufacturing'],
    imageUrl: 'A timeline view of a factory production schedule',
  },
  {
    title: 'Captor Tool',
    description: 'A specialized automation tool that generates screenshots from specific regions within Excel files based on a complex set of rules and conditions.',
    tags: ['Python', 'Openpyxl', 'Pillow', 'Automation'],
    imageUrl: 'An application interface for capturing screenshots from Excel files',
  },
  {
    title: 'Truck Loading Visualizer',
    description: 'A GUI-based simulation for optimizing truck loading. It allows users to place boxes virtually, calculating weight distribution and space utilization.',
    tags: ['Python', '3D Simulation', 'Logistics', 'Optimization'],
    imageUrl: 'A 3D simulation of boxes being loaded into a truck',
  },
  {
    title: 'Factory Data Pipeline',
    description: 'An automated data pipeline that collects sensor data from factory machinery, processes it, and stores it in a centralized database for analysis.',
    tags: ['Python', 'SQL', 'ETL', 'IoT'],
    imageUrl: 'A diagram showing data flowing from factory machines to a database',
  },
];

const PortfolioPage = () => {
  const { toast } = useToast();

  const handleActionClick = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio - Petr Chvojka</title>
        <meta name="description" content="A showcase of Python projects by John Doe, focusing on business and factory automation." />
      </Helmet>
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk']">My Portfolio</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            Here's a selection of projects I've worked on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-lg overflow-hidden border border-border/50 flex flex-col"
            >
              <div className="aspect-video bg-slate-800 flex items-center justify-center">
                <img  class="w-full h-full object-cover" alt={project.title} src="https://images.unsplash.com/photo-1681511346076-da60ca823409" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-2">{project.title}</h3>
                <p className="text-muted-foreground flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <Button variant="outline" className="w-full" onClick={handleActionClick}>
                    <Github className="mr-2 h-4 w-4" /> Source
                  </Button>
                  <Button className="w-full" onClick={handleActionClick}>
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
  
