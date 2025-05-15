
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
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const projects = [
    {
      id: 1,
      title: "Stream Circle",
      description: "A stream/OTT rental platform where users can rent, buy or sell streaming services. Features include hourly, daily, weekly, monthly and yearly rental options with 100% trusted transactions and refund guarantee if users face any issues from sellers.",
      image: "/lovable-uploads/04fbc472-91ba-4360-bb5d-70f61f3c696a.png",
      categories: ["fullstack", "react", "nodejs"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveLink: "#",
      codeLink: "https://github.com/saisharan9886/stream-circle",
      fullDescription: "Stream Circle is a comprehensive OTT rental platform built with the MERN stack. The platform allows users to rent streaming services for flexible durations ranging from hourly to yearly subscriptions. Users can also buy or sell access to streaming platforms in a secure environment. The application features a robust authentication system, payment integration, and a user-friendly interface for browsing available services. The platform includes a strong verification process to ensure all transactions are safe and legitimate."
    },
    {
      id: 2,
      title: "Airbnb Clone",
      description: "A fully functional Airbnb clone built with MERN stack that allows users to list and rent properties. The platform includes user authentication, property listing, booking system, and payment integration.",
      image: "/lovable-uploads/b6c2b2ad-c48a-40ff-ba49-d65f5db510cb.png",
      categories: ["fullstack", "react", "nodejs"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      liveLink: "#",
      codeLink: "https://github.com/saisharan9886/airbnb-clone",
      fullDescription: "This Airbnb clone is built using the MERN stack and replicates the core functionality of the original platform. Users can create accounts, list properties, browse available listings, make bookings, and process payments. The application features a responsive design, interactive maps for property locations, search filters, user reviews, and a messaging system for hosts and guests. Authentication is handled with JWT tokens, and the database is optimized for efficient queries and scalability."
    },
    {
      id: 3,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with payment integration, product catalog, shopping cart, and user authentication features.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3",
      categories: ["fullstack", "react"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveLink: "#",
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
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "react", label: "React" },
    { value: "nodejs", label: "Node.js" },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex justify-center flex-wrap gap-2 mb-10 opacity-0 animate-slideUp" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              onClick={() => setFilter(category.value)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden border border-gray-200 hover:border-portfolio-blue transition-all hover:shadow-lg opacity-0 animate-slideUp" style={{animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards'}}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-portfolio-blue/10 text-portfolio-blue text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between p-6 pt-0">
                <Button 
                  variant="default"
                  size="sm"
                  className="bg-portfolio-blue hover:bg-portfolio-darkBlue"
                  onClick={() => window.open(project.liveLink, '_blank')}
                >
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
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
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="h-52 sm:h-64 overflow-hidden rounded-md mb-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogDescription className="text-base text-gray-700 leading-relaxed">
                {selectedProject.fullDescription}
              </DialogDescription>
              
              <div className="mt-4">
                <h4 className="font-medium mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <span key={tech} className="bg-portfolio-blue/10 text-portfolio-blue px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <DialogFooter className="flex justify-end gap-2 mt-4">
                <Button 
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => window.open(selectedProject.liveLink, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </Button>
                <Button 
                  variant="default"
                  size="sm"
                  className="bg-portfolio-darkBlue hover:bg-portfolio-blue flex items-center gap-2"
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
