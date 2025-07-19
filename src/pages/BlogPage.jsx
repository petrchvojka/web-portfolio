
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    title: '5 Ways Python Transformed Our Factory Floor',
    date: 'July 18, 2025',
    excerpt: 'A deep dive into the practical applications of Python scripts that increased our production efficiency by 20%. From data collection to automated reporting...',
    category: 'Automation',
    imageUrl: 'A modern factory floor with robotic arms working',
  },
  {
    title: 'Building a Real-Time Dashboard with Pandas and Plotly',
    date: 'July 10, 2025',
    excerpt: 'Learn how to move beyond static Excel sheets. This tutorial walks you through creating an interactive, web-based dashboard for business intelligence.',
    category: 'Data Visualization',
    imageUrl: 'A computer screen showing a colorful and interactive data dashboard',
  },
  {
    title: 'The Hidden Power of Excel Automation with Python',
    date: 'June 28, 2025',
    excerpt: 'Most people underestimate what Python can do with Excel. Discover advanced techniques for manipulating spreadsheets that will save you hours of manual work.',
    category: 'Productivity',
    imageUrl: 'A grid of Excel cells with Python code overlayed',
  },
];

const BlogPage = () => {
  const { toast } = useToast();

  const handleReadMore = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Blog Post Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Petr Chvojka</title>
        <meta name="description" content="Thoughts and tutorials on Python, automation, and data science by John Doe." />
      </Helmet>
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk']">From the Blog</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            Sharing my thoughts on Python, automation, and everything in between.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-lg overflow-hidden border border-border/50 flex flex-col group"
            >
              <div className="aspect-video bg-slate-800 overflow-hidden">
                <img  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={post.title} src="https://images.unsplash.com/photo-1694484835435-5155fd353e52" />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-purple-400 font-medium">{post.category}</p>
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mt-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{post.date}</p>
                <p className="text-muted-foreground flex-grow mt-4">{post.excerpt}</p>
                <div className="mt-6">
                  <Button variant="link" className="p-0 text-foreground" onClick={handleReadMore}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
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

export default BlogPage;
  
