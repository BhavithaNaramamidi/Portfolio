import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Process from '../components/Process';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <main className="ds-noise bg-[var(--ds-bg)] text-[var(--ds-fg)] min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee text="BHAVITHA NARAMAMIDI" />
      <About />
      <Projects />
      <Services />
      <Process />
      <Footer />
    </main>
  );
};

export default Home;
