import { useEffect, useRef } from "react";
import profilePhoto from '@/assets/profile-photo.png';

interface HeroProps {
  name: string;
}

export const Hero = ({ name }: HeroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate elements sequentially
    const imageEl = imageRef.current;
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;

    if (imageEl && titleEl && subtitleEl) {
      // Start animations with slight delays
      setTimeout(() => {
        imageEl.classList.add("animate-fade-in");
      }, 300);
      
      setTimeout(() => {
        titleEl.classList.add("animate-fade-in");
      }, 700);
      
      setTimeout(() => {
        subtitleEl.classList.add("animate-fade-in");
      }, 1100);
    }
  }, []);

  return (
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div
          ref={imageRef}
          className="hidden-initially mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 relative"
        >
          {/* Profile Photo */}
          <img 
            src={profilePhoto} 
            alt="Profile" 
            className="circular-image w-full h-full object-cover rounded-full pointer-events-none select-none"
          />
        </div>
        
        <h1 
          ref={titleRef}
          className="hidden-initially text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
        >
          Hey, my name is <span className="text-primary">{name}</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="hidden-initially max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground"
        >
          I'm a future entrepreneur with a strong foundation in writing and literature, I strive to blend creativity with business acumen to drive success and inspire others.
        </p>
        
        <div className="mt-12 animate-on-scroll">
          <a 
            href="#writings" 
            className="glass-button px-8 py-3 text-foreground font-medium"
          >
            Explore My Work
          </a>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-2/3 -right-64 w-96 h-96 bg-burgundy-200/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
