import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import siteConfig from '@/config/site';

export default function Home() {
  // Create an array of section components that should be visible
  const sections = [
    { id: 'hero', component: HeroSection, visible: siteConfig.sections.hero },
    { id: 'about', component: AboutSection, visible: siteConfig.sections.about },
    { id: 'skills', component: SkillsSection, visible: siteConfig.sections.skills },
    { id: 'projects', component: ProjectsSection, visible: siteConfig.sections.projects },
    { id: 'experience', component: ExperienceSection, visible: siteConfig.sections.experience },
    { id: 'contact', component: ContactSection, visible: siteConfig.sections.contact },
  ].filter(section => section.visible);

  return (
    <main>
      <Navbar />
      {sections.map((section, index) => {
        const SectionComponent = section.component;
        return <SectionComponent key={section.id} isOdd={index % 2 === 0} />;
      })}
      <Footer isOdd={sections.length % 2 === 0} />
    </main>
  );
}
