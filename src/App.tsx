/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ThreeBackground from './components/ThreeBackground';
import Preloader from './components/Preloader';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-brand-charcoal overflow-x-hidden">
        <Preloader />
        <CustomCursor />
        <ThreeBackground />
        
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}
