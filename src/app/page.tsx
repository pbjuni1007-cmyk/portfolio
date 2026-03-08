import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Features from '@/components/Features';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import IDELayout from '@/components/IDELayout';

export default function Home() {
  return (
    <IDELayout>
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Features />
      <Skills />
      <Contact />
    </IDELayout>
  );
}
