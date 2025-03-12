
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import resumePDF from '@/assets/leila-montoya-resume.pdf';

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Latest Writings", href: "#writings" },
  { name: "Education & Experience", href: "#education" },
  { name: "Get Connected", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => document.querySelector(link.href));
      const currentSection = sections.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection !== -1) {
        setActiveSection(navLinks[currentSection].href);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (!element) return;
    
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.pageYOffset - 100,
      behavior: "smooth",
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? "py-2 bg-background/80 backdrop-blur-lg shadow-md" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-bold text-primary transition-all duration-300 hover:opacity-80"
          aria-label="Home"
        >
          Leila Montoya
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link ${activeSection === link.href ? "nav-link-active" : ""}`}
            >
              {link.name}
            </a>
          ))}
          
          {/* Resume Download Button */}
          <a 
            href={resumePDF}
            download
            className="nav-link flex items-center"
            aria-label="Download Resume"
          >
            <Download className="mr-1 h-4 w-4" />
            Resume
          </a>
          
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="glass-button p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/100 backdrop-blur-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ height: '100vh', top: 0 }}
      >
        {/* Close button at the top right */}
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setIsOpen(false)}
            className="glass-button p-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Resume Download Button for Mobile */}
          <a
            href={resumePDF}
            download
            className="text-2xl font-medium text-foreground hover:text-primary transition-colors flex items-center"
          >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
