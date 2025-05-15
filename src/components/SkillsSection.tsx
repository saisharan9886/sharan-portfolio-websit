
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = {
    programming: [
      { name: "C", icon: "/lovable-uploads/b5e5ea3f-0cbe-4536-9617-a06a60e715a3.png", level: 85 },
      { name: "C++", icon: "/lovable-uploads/1ad43561-9ec6-49d8-af1d-34f6f10ac090.png", level: 80 },
      { name: "Java", icon: "/lovable-uploads/9c710d3f-3d02-4fb3-bd67-dccced76d8ef.png", level: 90 },
      { name: "JavaScript", icon: "/lovable-uploads/a7dc259f-d605-4ef3-b689-e24cfa8cd49f.png", level: 95 },
      { name: "Python", icon: "/lovable-uploads/cc8163fd-a0ad-4e38-a6c1-c62530fd5845.png", level: 75 },
    ],
    frontend: [
      { name: "React", icon: "/lovable-uploads/0cbc459e-9604-40fa-a19e-a558211ee261.png", level: 90 },
      { name: "TypeScript", icon: "/lovable-uploads/e3aa28f7-f9a9-4301-a9c5-71e715d4ccf0.png", level: 85 },
      { name: "HTML", icon: "/lovable-uploads/1672fa3d-1777-4f15-a40a-04bce625191e.png", level: 95 },
      { name: "CSS", icon: "/lovable-uploads/9b8487f9-10b5-4fe3-87cb-7796837e2f6b.png", level: 85 },
      { name: "Bootstrap", icon: "🅱️", level: 80 },
    ],
    backend: [
      { name: "Node.js", icon: "/lovable-uploads/889f3151-9e02-4886-b2ca-65e4ea6b9698.png", level: 85 },
      { name: "Express", icon: "/lovable-uploads/3f4c6814-48a4-425e-a580-f4f6d5629658.png", level: 80 },
      { name: "MongoDB", icon: "/lovable-uploads/63833d84-5d55-4a10-8275-7849dad08ea3.png", level: 75 },
      { name: "MySQL", icon: "📊", level: 70 },
      { name: "NoSQL", icon: "🗄️", level: 75 },
    ],
    tools: [
      { name: "Git", icon: "/lovable-uploads/43e72617-a197-4744-a8d0-4f35848d9a1e.png", level: 85 },
      { name: "GitHub", icon: "/lovable-uploads/4355ecb6-bd1c-4ec7-99d5-a222acffcad5.png", level: 90 },
      { name: "VS Code", icon: "/lovable-uploads/0593fccd-1b5a-4568-8755-10fc518fc8ef.png", level: 90 },
      { name: "Figma", icon: "/lovable-uploads/083b0217-1994-40d3-ba8b-a084b3ef621a.png", level: 65 },
    ],
  };

  const renderSkillCategory = (title: string, skills: any[]) => (
    <div className="mb-10 opacity-0 animate-slideUp" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
      <h3 className="text-xl font-bold mb-4 text-portfolio-darkBlue">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <Card key={skill.name} className="overflow-hidden border border-gray-200 hover:border-portfolio-blue transition-all hover:shadow-md">
            <CardContent className="p-4">
              <div className="text-center">
                {typeof skill.icon === 'string' && skill.icon.startsWith('/') ? (
                  <div className="flex justify-center mb-2">
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} icon`} 
                      className="h-12 w-auto" 
                    />
                  </div>
                ) : (
                  <div className="text-3xl mb-2">{skill.icon}</div>
                )}
                <h4 className="text-base font-medium">{skill.name}</h4>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto opacity-0 animate-slideUp" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
          I have expertise in various technologies and tools that allow me to build complete and efficient web solutions. Here are my key skills grouped by category:
        </p>

        {renderSkillCategory("Programming Languages", skills.programming)}
        {renderSkillCategory("Frontend Development", skills.frontend)}
        {renderSkillCategory("Backend Development", skills.backend)}
        {renderSkillCategory("Tools & Technologies", skills.tools)}
      </div>
    </section>
  );
};

export default SkillsSection;
