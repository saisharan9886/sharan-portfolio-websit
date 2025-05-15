
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => {
  const educationHistory = [
    {
      degree: "B.Tech in Computer Science Engineering",
      specialization: "Cyber Security",
      institution: "CMR Technical Campus",
      duration: "2020 - 2024",
      description: "Pursuing a bachelor's degree with a focus on computer science fundamentals, data structures, algorithms, and specialized cybersecurity courses.",
      achievements: ["Dean's List for Academic Excellence", "Student Research Project Award", "Cybersecurity Hackathon Winner"]
    },
    {
      degree: "Higher Secondary Education",
      specialization: "Science Stream (PCM)",
      institution: "Delhi Public School",
      duration: "2018 - 2020",
      description: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
      achievements: ["School Topper in Mathematics", "Science Olympiad Finalist"]
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2022",
      credentialId: "UC-123456"
    },
    {
      name: "Data Structures and Algorithms Specialization",
      issuer: "Coursera",
      date: "2021",
      credentialId: "ABCD1234"
    },
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2022",
      credentialId: "UC-789012"
    },
    {
      name: "MongoDB Basics",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MDB1234"
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {educationHistory.map((item, index) => (
              <Card key={index} className="border border-gray-200 overflow-hidden opacity-0 animate-slideUp" style={{animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards'}}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-portfolio-darkBlue">{item.degree}</h4>
                      <p className="text-portfolio-blue">{item.specialization}</p>
                      <p className="text-gray-600 mt-1">{item.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-portfolio-blue/10 text-portfolio-blue px-3 py-1 rounded-full text-sm font-medium">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-700">{item.description}</p>
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="mt-4">
                      <p className="font-medium text-gray-800">Achievements:</p>
                      <ul className="list-disc list-inside mt-2 text-gray-700">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border border-gray-200 opacity-0 animate-slideUp" style={{animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: 'forwards'}}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium">{cert.name}</h4>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500">{cert.date}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Credential ID: {cert.credentialId}
                  </p>
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
