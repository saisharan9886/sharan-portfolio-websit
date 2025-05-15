
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Front End Developer",
    "Backend Developer", 
    "Full Stack Developer", 
    "UI/UX Designer"
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 order-2 md:order-1 animate-fadeIn">
          <p className="text-lg text-portfolio-blue font-medium mb-2">Hi, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-black mb-4">
            P. Sai Sharan
          </h1>
          
          <div className="h-14">
            <h2 className="text-2xl md:text-3xl font-medium text-portfolio-darkBlue mb-6 opacity-0 animate-slideUp" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              I'm a{" "}
              <span className="text-portfolio-blue">
                {roles[roleIndex]}
              </span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8 opacity-0 animate-slideUp" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            <Button 
              onClick={scrollToAbout}
              className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white px-6 py-2"
            >
              About Me
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
            >
              Download Resume
            </Button>
          </div>
          
          <div className="mt-12 hidden md:block opacity-0 animate-slideUp" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
            <Button
              variant="ghost" 
              onClick={scrollToAbout}
              className="text-portfolio-gray hover:text-portfolio-blue hover:bg-transparent p-0 flex items-center gap-2"
            >
              Scroll Down <ArrowDown className="h-4 w-4 animate-bounce" />
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center order-1 md:order-2 opacity-0 animate-slideUp" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
          <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-portfolio-blue/20 shadow-xl">
            <img 
              src="/lovable-uploads/0a5ad479-cd9c-462e-ac22-d0afa93119b4.png" 
              alt="P. Sai Sharan" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
