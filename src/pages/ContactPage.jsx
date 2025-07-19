
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { Helmet } from 'react-helmet';
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ Message Sent!",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
    e.target.reset();
  };

  const handleSocialClick = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact - Petr Chvojka</title>
        <meta name="description" content="Get in touch with Petr Chvojka for freelance projects or collaborations." />
      </Helmet>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk']">Get In Touch</h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a question or a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-purple-400" />
                <a href="mailto:contact@johndoe.dev" className="text-muted-foreground hover:text-foreground">
                  contact@johndoe.dev
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-purple-400" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="h-5 w-5 text-purple-400" />
                <a href="#" onClick={handleSocialClick} className="text-muted-foreground hover:text-foreground">
                  linkedin.com/in/johndoe
                </a>
              </div>
            </div>
            <div className="mt-8 p-6 bg-secondary rounded-lg border border-border/50">
              <p className="font-semibold">My Availability</p>
              <p className="text-muted-foreground text-sm mt-2">I'm currently available for freelance projects and open to new opportunities. My typical response time is within 24 hours.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project Inquiry" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell me about your project..." required rows={5} />
              </div>
              <div>
                <Button type="submit" className="w-full">Send Message</Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
  
