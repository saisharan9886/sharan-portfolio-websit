
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Front End Developer",
    "UI/UX Designer",
    "Backend Developer", 
    "Full Stack Developer"
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
        } else {
          // Finished typing current role, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentRoleIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/1cHsWIj_Xfu7pVqmeKT6dV1ymJA9V5Ty0/view?usp=sharing", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-portfolio-dark">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 order-1 md:order-1 animate-slideIn">
            <div className="mb-4 opacity-0 animate-slideUp" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              <p className="text-lg text-portfolio-accent font-medium mb-2">Hi, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-text">
                P. Sai Sharan
              </h1>
            </div>
            
            <div className="h-14 relative mb-8 opacity-0 animate-slideUp" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <div className="absolute inset-0 flex items-center">
                <h2 className="text-2xl md:text-3xl font-medium text-portfolio-text">
                  I'm a{" "}
                  <span className="text-portfolio-accent">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h2>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8 opacity-0 animate-slideUp" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <Button 
                onClick={scrollToAbout}
                className="bg-portfolio-accent hover:bg-portfolio-highlight text-portfolio-dark font-medium px-6 py-2 rounded-full btn-glow"
              >
                About Me
              </Button>
              <Button 
                variant="outline" 
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10 hover:text-portfolio-accent rounded-full"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>
            
            <div className="mt-12 opacity-0 animate-slideUp" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
              <Button
                variant="ghost" 
                onClick={scrollToAbout}
                className="text-portfolio-secondary hover:text-portfolio-accent hover:bg-transparent p-0 flex items-center gap-2"
              >
                Scroll Down <ArrowDown className="h-4 w-4 animate-bounce" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center order-2 md:order-2 opacity-0 animate-slideRight" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-portfolio-accent/20 shadow-xl bg-gradient-to-br from-portfolio-card to-portfolio-dark">
              <img 
                src="/lovable-uploads/31be7720-576a-44f1-9de0-1dd61f16b256.png" 
                alt="P. Sai Sharan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
