import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Testimonials from './components/sections/Testimonials';
import Experience from './components/sections/Experience';
import Footer from './components/sections/Footer';
import { ThemeProvider } from './components/ui/ThemeProvider';
import SmoothScroll from './components/ui/SmoothScroll';
import CursorFollower from './components/ui/CursorFollower';
import ProjectDetail from './components/pages/ProjectDetail';
import ScrollToTop from './components/ui/ScrollToTop';

const Home = () => (
  <>
    <Hero />
    <TechStack />
    <Projects />
    <Testimonials />
    <Experience />
  </>
);

function App() {
  useEffect(() => {
    // We use the global gtag function initialized in index.html
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-YHFM2B88KT', {
        page_path: window.location.pathname,
      });
    }
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        <SmoothScroll>
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-primary/30">
            <CursorFollower />
            <Navbar />

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </SmoothScroll>
      </ThemeProvider>
    </Router>
  );
}

export default App;
