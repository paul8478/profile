import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.chen@example.com",
      href: "mailto:alex.chen@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/alexchen"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alexchen"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/alexchen"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project Inquiry" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project or just say hello!"
                      className="min-h-[120px]"
                      required 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div>{item.value}</div>
                      </div>
                    </a>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        aria-label={link.label}
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    I typically respond within 24 hours. Looking forward to hearing from you!
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}