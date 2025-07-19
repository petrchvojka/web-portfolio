
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { to: '/', text: 'Home' },
  { to: '/portfolio', text: 'Portfolio' },
  { to: '/blog', text: 'Blog' },
  { to: '/contact', text: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#a78bfa', // violet-400
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-purple-400" />
          <span className="font-bold text-lg font-['Space_Grotesk']">John Doe</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              {link.text}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild>
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden px-4 pt-2 pb-4 space-y-2 border-t border-border/40"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              {link.text}
            </NavLink>
          ))}
          <Button asChild className="w-full mt-4">
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Hire Me</NavLink>
          </Button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
  