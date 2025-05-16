
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const educationHistory = [
    {
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Cyber Security",
      institution: "CMR Technical Campus",
      duration: "2022 - 2026",
      description: "Pursuing a bachelor's degree with a focus on computer science fundamentals, data structures, algorithms, and specialized cybersecurity courses.",
      score: "Score: 8.03"
    },
    {
      degree: "Higher Secondary Education",
      specialization: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Narayana Junior College",
      duration: "2020 - 2022",
      description: "Completed higher secondary education with a focus on Mathematics, Physics, and Chemistry.",
      score: "Score: 936"
    },
    {
      degree: "Secondary Education",
      specialization: "",
      institution: "Nava Jyothi High School",
      duration: "2020",
      description: "Completed secondary education with focus on fundamental subjects.",
      score: "Score: 9.5"
    },
  ];

  return (
    <section id="education" className="py-20 bg-portfolio-card">
      <div className="section-container">
        <h2 className="section-title text-portfolio-text">Education</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-portfolio-text">Academic Background</h3>
          <div className="space-y-8">
            {educationHistory.map((item, index) => (
              <Card key={index} className="border border-portfolio-secondary/10 bg-portfolio-dark overflow-hidden opacity-0 animate-slideUp portfolio-card" style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards'}}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-portfolio-text">{item.degree}</h4>
                      {item.specialization && <p className="text-portfolio-accent">{item.specialization}</p>}
                      <p className="text-portfolio-secondary mt-1">{item.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-portfolio-card text-portfolio-accent px-3 py-1 rounded-full text-sm font-medium">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-portfolio-text">{item.description}</p>
                  
                  {item.score && (
                    <div className="mt-4">
                      <p className="text-portfolio-accent">{item.score}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
