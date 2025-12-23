import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { TechStack } from "./components/TechStack";
import { AllProjects } from "./components/AllProjects";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { Education } from "./components/Education";
import {Experience } from "./components/Experience";
 
export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsGrid />
        <TechStack />
        <Education />
        <Experience/>
        <AllProjects />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}