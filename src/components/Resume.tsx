
import { Download } from "lucide-react";

interface ResumeProps {
  resumeUrl: string;
}

export const Resume = ({ resumeUrl }: ResumeProps) => {
  return (
    <section id="resume" className="py-24">
      <div className="section-container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title">Resume</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Download my resume to learn more about my skills, education, and professional experience.
          </p>
        </div>
        
        <div className="max-w-md mx-auto text-center animate-on-scroll">
          <div className="glass-card p-8 md:p-10">
            <div className="mb-6 w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Download className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-xl font-bold mb-4">My Resume</h3>
            <p className="text-muted-foreground mb-8">
              Get a comprehensive overview of my professional background, skills, and accomplishments.
            </p>
            
            <a 
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium
                        inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
