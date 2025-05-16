
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Create email link with form data
    const emailSubject = encodeURIComponent(formData.subject || "Contact from Portfolio Website");
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:paluttlasaisharan2k5@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Show success message
    toast.success("Opening your email client to send the message");
    
    // Reset form after short delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 500);
  };
  
  return (
    <section id="contact" className="py-20 bg-portfolio-dark">
      <div className="section-container">
        <h2 className="section-title text-portfolio-text">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 opacity-0 animate-slideUp" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            <h3 className="text-xl font-bold mb-6 text-portfolio-text">Let's Connect</h3>
            <p className="text-portfolio-secondary mb-8">
              I'm currently open for new opportunities and collaborations. Feel free to reach out if you have a question or just want to say hi!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-portfolio-card flex items-center justify-center text-portfolio-accent mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-portfolio-secondary text-sm">Email</p>
                  <p className="font-medium text-portfolio-text">paluttlasaisharan2k5@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-portfolio-card flex items-center justify-center text-portfolio-accent mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-portfolio-secondary text-sm">Location</p>
                  <p className="font-medium text-portfolio-text">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 opacity-0 animate-slideUp" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <Card className="border-0 bg-portfolio-card shadow-lg portfolio-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-portfolio-text">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="opacity-0 animate-slideUp stagger-1" style={{animationFillMode: 'forwards'}}>
                      <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-1">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border-portfolio-secondary/20 bg-portfolio-dark focus:border-portfolio-accent focus:ring-portfolio-accent text-portfolio-text"
                      />
                    </div>
                    <div className="opacity-0 animate-slideUp stagger-2" style={{animationFillMode: 'forwards'}}>
                      <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-1">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border-portfolio-secondary/20 bg-portfolio-dark focus:border-portfolio-accent focus:ring-portfolio-accent text-portfolio-text"
                      />
                    </div>
                  </div>
                  
                  <div className="opacity-0 animate-slideUp stagger-3" style={{animationFillMode: 'forwards'}}>
                    <label htmlFor="subject" className="block text-sm font-medium text-portfolio-text mb-1">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full border-portfolio-secondary/20 bg-portfolio-dark focus:border-portfolio-accent focus:ring-portfolio-accent text-portfolio-text"
                    />
                  </div>
                  
                  <div className="opacity-0 animate-slideUp stagger-4" style={{animationFillMode: 'forwards'}}>
                    <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full border-portfolio-secondary/20 bg-portfolio-dark focus:border-portfolio-accent focus:ring-portfolio-accent text-portfolio-text"
                    />
                  </div>
                  
                  <div className="opacity-0 animate-slideUp stagger-5" style={{animationFillMode: 'forwards'}}>
                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="bg-portfolio-accent hover:bg-portfolio-highlight text-portfolio-dark w-full md:w-auto btn-glow"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
