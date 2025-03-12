import React, { useEffect, useState } from "react";

interface FooterProps {
  name: string;
}

export const Footer = ({ name }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkIfAtBottom = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    setIsAtBottom(scrollPosition >= documentHeight - 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfAtBottom);
    return () => window.removeEventListener("scroll", checkIfAtBottom);
  }, []);

  return (
    <footer className={`w-full py-10 bg-background border-t border-border mt-auto ${isAtBottom ? 'visible' : 'invisible'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} {name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
