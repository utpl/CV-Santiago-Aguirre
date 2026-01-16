import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Languages } from '@/components/sections/languages';
import { DownloadCV } from '@/components/sections/download-cv';
import { Footer } from '@/components/sections/footer';

export default function CVPortfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Languages />
      <DownloadCV />
      <Footer />
    </div>
  );
}