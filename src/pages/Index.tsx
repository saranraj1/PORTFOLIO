import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import ProjectsSection from "@/components/ProjectsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ThinkingSection from "@/components/ThinkingSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import StudyStackSection from "@/components/StudyStackSection";
import HireSection from "@/components/HireSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <ChallengeSection />
      <ProjectsSection />
      <PhilosophySection />
      <ThinkingSection />
      <SkillsSection />
      <ExperienceSection />
      <StudyStackSection />
      <HireSection />
      <ContactSection />
    </div>
  );
};

export default Index;
