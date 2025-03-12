
import { Mail, Linkedin, Instagram } from "lucide-react";

interface ContactProps {
  email: string;
  linkedinUrl: string;
  instagramUrl: string;
}

export const Contact = ({ email, linkedinUrl, instagramUrl }: ContactProps) => {
  const handleContactClick = () => {
    window.location.href = `mailto:${email}?subject=Hey, what's up! 👋`;
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title">Get Connected</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Let's start a conversation. Reach out to me through any of these channels.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Ready to Work Together?</h3>
            
            <button 
              onClick={handleContactClick}
              className="mb-10 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium
                        transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </button>
            
            <div className="flex justify-center space-x-6">
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-4 transition-transform duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6 text-foreground" />
              </a>
              
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button p-4 transition-transform duration-300 hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-6 w-6 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
