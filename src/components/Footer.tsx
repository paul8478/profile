import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/alexchen",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/alexchen",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:alex.chen@example.com",
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl mb-4">Alex Chen</h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about creating beautiful and functional web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>alex.chen@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Alex Chen. Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}