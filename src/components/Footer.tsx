
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-portfolio-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">P. Sai Sharan</h2>
            <p className="text-gray-400">Full Stack Developer | MERN Stack Specialist</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <Button 
              onClick={scrollToTop} 
              variant="outline" 
              size="icon"
              className="mb-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/saisharan-paluttla-449ab9258/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/saisharan9886" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://x.com/SaiSharan49216" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://www.instagram.com/__sharan__0704/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
