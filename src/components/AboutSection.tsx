
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Briefcase, Phone } from "lucide-react";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("about");
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-2/5 opacity-0 animate-slideUp" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            <img 
              src="/lovable-uploads/0a5ad479-cd9c-462e-ac22-d0afa93119b4.png"
              alt="P. Sai Sharan" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="md:w-3/5">
            <div className="flex mb-6 gap-1 border-b border-gray-200 opacity-0 animate-slideUp" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <Button
                variant={activeTab === "about" ? "default" : "ghost"}
                onClick={() => setActiveTab("about")}
                className="rounded-b-none rounded-t-lg"
              >
                <User className="mr-2 h-4 w-4" />
                About
              </Button>
              <Button
                variant={activeTab === "experience" ? "default" : "ghost"}
                onClick={() => setActiveTab("experience")}
                className="rounded-b-none rounded-t-lg"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                Experience
              </Button>
              <Button
                variant={activeTab === "contact" ? "default" : "ghost"}
                onClick={() => setActiveTab("contact")}
                className="rounded-b-none rounded-t-lg"
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
            
            <div className="opacity-0 animate-slideUp" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              {activeTab === "about" && (
                <Card className="border-0 shadow-none">
                  <CardContent className="pt-6 px-0">
                    <p className="text-gray-700 leading-relaxed">
                      Hello! I'm P. Sai Sharan, a passionate Developer with a strong foundation in full-stack development. I specialize in building responsive and user-friendly web applications using modern technologies.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      Currently pursuing Computer Science Engineering with a focus on Cyber Security at CMR Technical Campus, I combine my academic knowledge with practical development skills to create innovative solutions.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      I enjoy tackling complex problems and am always eager to learn new technologies and methodologies to enhance my development capabilities.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div>
                        <p className="text-gray-600 font-medium">Name:</p>
                        <p>P. Sai Sharan</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Location:</p>
                        <p>Hyderabad, India</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Email:</p>
                        <p>saisharan@example.com</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Degree:</p>
                        <p>Computer Science Engineering</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "experience" && (
                <Card className="border-0 shadow-none">
                  <CardContent className="pt-6 px-0">
                    <div className="space-y-6">
                      <div className="border-l-2 border-portfolio-blue pl-4 pb-6">
                        <p className="text-sm text-portfolio-gray">2022 - Present</p>
                        <h3 className="text-xl font-medium">Full Stack Developer</h3>
                        <p className="text-portfolio-blue">Freelance</p>
                        <p className="mt-2 text-gray-700">Developing responsive web applications using the MERN stack. Building custom solutions for clients across various industries.</p>
                      </div>
                      
                      <div className="border-l-2 border-portfolio-gray pl-4">
                        <p className="text-sm text-portfolio-gray">2021 - 2022</p>
                        <h3 className="text-xl font-medium">Frontend Developer</h3>
                        <p className="text-portfolio-blue">Tech Innovations</p>
                        <p className="mt-2 text-gray-700">Created responsive user interfaces using React. Collaborated with design and backend teams to implement new features.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === "contact" && (
                <Card className="border-0 shadow-none">
                  <CardContent className="pt-6 px-0">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-portfolio-blue/10 flex items-center justify-center text-portfolio-blue mr-4">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Phone</p>
                          <p className="font-medium">+91 99999 88888</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-portfolio-blue/10 flex items-center justify-center text-portfolio-blue mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Email</p>
                          <p className="font-medium">saisharan@example.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-portfolio-blue/10 flex items-center justify-center text-portfolio-blue mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Location</p>
                          <p className="font-medium">Hyderabad, India</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
