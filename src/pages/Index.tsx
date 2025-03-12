
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LatestWritings from "@/components/LatestWritings";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  const personalDetails = {
    name: "Leila Montoya",
    email: "montoya.leila.2006@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/leila-montoya/",
    instagramUrl: "https://www.instagram.com/leila.m_1606?igsh=MWM1ZWdkYWFkbmlscw==",
    resumeUrl: new URL('@/assets/resume.pdf', import.meta.url).href
  };

  // Initialize scroll animation observer
  useScrollAnimation();

  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <Hero name={personalDetails.name} />
        <LatestWritings />
        <Education />
        <Contact 
          email={personalDetails.email}
          linkedinUrl={personalDetails.linkedinUrl}
          instagramUrl={personalDetails.instagramUrl}
        />
      </main>
      
      <Footer name={personalDetails.name} />
    </div>
  );
};

export default Index;
