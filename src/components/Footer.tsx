
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
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">P. Sai Sharan</h2>
            <p className="text-[#AAAAAA]">Full Stack Developer | MERN Stack Specialist</p>
          </div>
          
          <div>
            <Button 
              onClick={scrollToTop} 
              variant="outline" 
              size="icon"
              className="bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.linkedin.com/in/saisharan-paluttla-449ab9258/" target="_blank" rel="noopener noreferrer" className="text-[#AAAAAA] hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/saisharan9886" target="_blank" rel="noopener noreferrer" className="text-[#AAAAAA] hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://x.com/SaiSharan49216" target="_blank" rel="noopener noreferrer" className="text-[#AAAAAA] hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/__sharan__0704/" target="_blank" rel="noopener noreferrer" className="text-[#AAAAAA] hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-6 pt-6 text-center">
          <p className="text-[#AAAAAA] text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
