
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product catalog, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3",
      categories: ["fullstack", "react", "nodejs"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, user roles, and real-time updates.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
      categories: ["frontend", "react"],
      technologies: ["React", "Tailwind CSS", "Firebase"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Social Media Analytics Dashboard",
      description: "A data visualization dashboard for social media analytics with customizable widgets and reporting features.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
      categories: ["frontend", "datavis"],
      technologies: ["React", "D3.js", "Styled Components"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Blogging Platform API",
      description: "A RESTful API for a blogging platform with user authentication, post management, and comment functionality.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      categories: ["backend", "api"],
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "#",
      codeLink: "#",
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
    { value: "api", label: "API" },
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
                >
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                >
                  View Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
