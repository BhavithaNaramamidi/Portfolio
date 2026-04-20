import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Clients from '../components/Clients';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="ds-noise bg-[var(--ds-bg)] text-[var(--ds-fg)] min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee text="BRUNO SIMON" />
      <About />
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <Clients />
      <Blogs />
      <Footer />
    </main>
  );
};

export default Home;
