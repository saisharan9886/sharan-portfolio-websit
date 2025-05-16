
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const projects = [
    {
      id: 1,
      title: "Stream Circle",
      description: "A stream/OTT rental platform with flexible rental options and secure transactions.",
      image: "/lovable-uploads/04fbc472-91ba-4360-bb5d-70f61f3c696a.png",
      categories: ["fullstack", "react", "nodejs"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      codeLink: "https://github.com/saisharan9886/stream-circle",
      fullDescription: "Stream Circle is a comprehensive OTT rental platform built with the MERN stack. The platform allows users to rent streaming services for flexible durations ranging from hourly to yearly subscriptions. Users can also buy or sell access to streaming platforms in a secure environment. The application features a robust authentication system, payment integration, and a user-friendly interface for browsing available services. The platform includes a strong verification process to ensure all transactions are safe and legitimate."
    },
    {
      id: 2,
      title: "Airbnb Clone",
      description: "A fully functional Airbnb clone with listing, booking and payment features.",
      image: "/lovable-uploads/b6c2b2ad-c48a-40ff-ba49-d65f5db510cb.png",
      categories: ["fullstack", "react", "nodejs"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      codeLink: "https://github.com/saisharan9886/airbnb-clone",
      fullDescription: "This Airbnb clone is built using the MERN stack and replicates the core functionality of the original platform. Users can create accounts, list properties, browse available listings, make bookings, and process payments. The application features a responsive design, interactive maps for property locations, search filters, user reviews, and a messaging system for hosts and guests. Authentication is handled with JWT tokens, and the database is optimized for efficient queries and scalability."
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description: "A responsive e-commerce platform with complete shopping features.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3",
      categories: ["fullstack", "react"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      codeLink: "https://github.com/saisharan9886/ecommerce-platform",
      fullDescription: "This e-commerce platform provides a complete shopping experience from product browsing to checkout. Built with React for the frontend and Node.js/Express for the backend, it includes features like product categorization, search functionality, user reviews, wishlist, shopping cart, secure checkout with Stripe integration, and order tracking. The admin panel allows for inventory management, order processing, and sales analytics. The responsive design ensures a seamless experience across all devices."
    },
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.categories.includes(filter));
    
  const categories = [
    { value: "all", label: "All" },
    { value: "fullstack", label: "Full Stack" },
    { value: "react", label: "React" },
    { value: "nodejs", label: "Node.js" },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-[#1A1A1A]">My Projects</h2>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10 opacity-0 animate-slideUp" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              onClick={() => setFilter(category.value)}
              className={filter === category.value ? "mb-2 bg-[#3A86FF] hover:bg-[#3A86FF]/90" : "mb-2 text-[#1A1A1A] hover:text-[#3A86FF] hover:bg-[#E0F0FF] border-[#AAAAAA]"}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden border border-gray-200 hover:border-[#3A86FF] transition-all hover:shadow-lg opacity-0 animate-slideUp" style={{animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards'}}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{project.title}</h3>
                <p className="text-[#AAAAAA] mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-[#E0F0FF] text-[#3A86FF] text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end p-6 pt-0">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-[#3A86FF] text-[#3A86FF] hover:bg-[#E0F0FF] hover:text-[#3A86FF]"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#1A1A1A]">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="h-52 sm:h-64 overflow-hidden rounded-md mb-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogDescription className="text-base text-[#1A1A1A] leading-relaxed">
                {selectedProject.fullDescription}
              </DialogDescription>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2 text-[#1A1A1A]">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span key={tech} className="bg-[#E0F0FF] text-[#3A86FF] px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <DialogFooter className="mt-4">
                <Button 
                  variant="default"
                  size="sm"
                  className="bg-[#3A86FF] hover:bg-[#3A86FF]/90 flex items-center gap-2"
                  onClick={() => window.open(selectedProject.codeLink, '_blank')}
                >
                  <Github className="h-4 w-4" /> View on GitHub
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
