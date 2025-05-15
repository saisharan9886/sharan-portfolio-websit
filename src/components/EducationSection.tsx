
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
    <section id="education" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {educationHistory.map((item, index) => (
              <Card key={index} className="border border-gray-200 overflow-hidden opacity-0 animate-slideUp" style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards'}}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-portfolio-darkBlue">{item.degree}</h4>
                      {item.specialization && <p className="text-portfolio-blue">{item.specialization}</p>}
                      <p className="text-gray-600 mt-1">{item.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-portfolio-blue/10 text-portfolio-blue px-3 py-1 rounded-full text-sm font-medium">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-700">{item.description}</p>
                  
                  {item.score && (
                    <div className="mt-4">
                      <p className="text-gray-800">{item.score}</p>
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
