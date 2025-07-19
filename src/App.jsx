
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import PortfolioPage from '@/pages/PortfolioPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <>
      <Helmet>
        <title>Petr Chvojka - Python Developer</title>
        <meta name="description" content="Personal portfolio of Petr Chvojka, a Python developer specializing in factory and business automation." />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
  
