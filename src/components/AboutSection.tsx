
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Briefcase } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("about");
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-[#1A1A1A]">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex mb-6 gap-1 border-b border-gray-200 opacity-0 animate-slideUp" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <Button
              variant={activeTab === "about" ? "default" : "ghost"}
              onClick={() => setActiveTab("about")}
              className={activeTab === "about" ? "rounded-b-none rounded-t-lg bg-[#3A86FF]" : "rounded-b-none rounded-t-lg text-[#1A1A1A]"}
            >
              <User className="mr-2 h-4 w-4" />
              About
            </Button>
            <Button
              variant={activeTab === "experience" ? "default" : "ghost"}
              onClick={() => setActiveTab("experience")}
              className={activeTab === "experience" ? "rounded-b-none rounded-t-lg bg-[#3A86FF]" : "rounded-b-none rounded-t-lg text-[#1A1A1A]"}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Experience
            </Button>
          </div>
          
          <div className="opacity-0 animate-slideUp" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            {activeTab === "about" && (
              <Card className="border-0 shadow-none">
                <CardContent className="pt-6 px-0">
                  <p className="text-[#1A1A1A] leading-relaxed">
                    Hello! I'm P. Sai Sharan, a passionate Developer with a strong foundation in full-stack development. I specialize in building responsive and user-friendly web applications using modern technologies.
                  </p>
                  <p className="text-[#1A1A1A] leading-relaxed mt-4">
                    Currently pursuing Computer Science Engineering with a focus on Cyber Security at CMR Technical Campus, I combine my academic knowledge with practical development skills to create innovative solutions.
                  </p>
                  <p className="text-[#1A1A1A] leading-relaxed mt-4">
                    I enjoy tackling complex problems and am always eager to learn new technologies and methodologies to enhance my development capabilities.
                  </p>
                </CardContent>
              </Card>
            )}
            
            {activeTab === "experience" && (
              <Card className="border-0 shadow-none">
                <CardContent className="pt-6 px-0">
                  <div className="space-y-6">
                    <div className="border-l-2 border-[#3A86FF] pl-4 pb-6">
                      <p className="text-sm text-[#AAAAAA]">2022 - Present</p>
                      <h3 className="text-xl font-medium text-[#1A1A1A]">Full Stack Developer</h3>
                      <p className="text-[#3A86FF]">Freelance</p>
                      <p className="mt-2 text-[#1A1A1A]">Developing responsive web applications using the MERN stack. Building custom solutions for clients across various industries.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
