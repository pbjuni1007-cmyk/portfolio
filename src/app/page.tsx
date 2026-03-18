import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
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
      <Skills />
      <Contact />
    </IDELayout>
  );
}
