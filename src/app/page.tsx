'use client'
import {ModeToggle} from "@/components/ModeToggle";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={"min-h-screen"}>
      <ModeToggle/>
      <StarBackground/>
      <Navbar/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  );
}
