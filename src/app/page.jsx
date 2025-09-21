import About from "@/components/HomePage/About";
import Contact from "@/components/HomePage/Contact";
import BannerSection from "@/components/HomePage/HeroSection";
import Projects from "@/components/HomePage/Project";
import TechStack from "@/components/HomePage/TechSkills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <BannerSection />
      <Projects />
      <TechStack />
      <Contact />
      <About />
    </div>
  );
}
