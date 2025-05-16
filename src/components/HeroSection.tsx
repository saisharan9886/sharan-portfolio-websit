
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "UI/UX Designer",
    "Front End Developer",
    "Backend Developer", 
    "Full Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = "/lovable-uploads/31be7720-576a-44f1-9de0-1dd61f16b256.png";
    link.download = "P_Sai_Sharan_Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-portfolio-dark">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-left mb-10 md:mb-0 order-1 md:order-1">
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
                    {roles[roleIndex]}
                  </span>
                </h2>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-start mt-8 opacity-0 animate-slideUp" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
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
          
          <div className="md:w-1/2 flex justify-center order-2 md:order-2 opacity-0 animate-fadeIn" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
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
