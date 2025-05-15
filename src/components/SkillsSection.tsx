
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = {
    programming: [
      { name: "C", icon: "🅒", level: 85 },
      { name: "C++", icon: "🅒++", level: 80 },
      { name: "Java", icon: "☕", level: 90 },
      { name: "Python", icon: "🐍", level: 75 },
      { name: "JavaScript", icon: "𝙅𝙎", level: 95 },
    ],
    frontend: [
      { name: "React", icon: "⚛️", level: 90 },
      { name: "HTML", icon: "🌐", level: 95 },
      { name: "CSS", icon: "🎨", level: 85 },
      { name: "JavaScript", icon: "𝙅𝙎", level: 95 },
      { name: "Bootstrap", icon: "🅱️", level: 80 },
    ],
    backend: [
      { name: "Node.js", icon: "📦", level: 85 },
      { name: "Express", icon: "🚂", level: 80 },
      { name: "MongoDB", icon: "🍃", level: 75 },
      { name: "SQL", icon: "📊", level: 70 },
    ],
    tools: [
      { name: "Git", icon: "📚", level: 85 },
      { name: "VS Code", icon: "📝", level: 90 },
      { name: "Figma", icon: "🎨", level: 65 },
      { name: "Docker", icon: "🐳", level: 60 },
    ],
    dsa: [
      { name: "Data Structures", icon: "🏗️", level: 90 },
      { name: "Algorithms", icon: "⚙️", level: 85 },
      { name: "Problem Solving", icon: "🧩", level: 90 },
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
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h4 className="text-base font-medium">{skill.name}</h4>
                <div className="mt-2 h-1.5 w-full bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-portfolio-blue rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
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
        {renderSkillCategory("DSA & Problem Solving", skills.dsa)}
      </div>
    </section>
  );
};

export default SkillsSection;
