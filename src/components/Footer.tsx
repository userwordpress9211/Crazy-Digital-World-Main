import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const industries = [
  { name: "E-commerce", href: "/industries" },
  { name: "Real Estate", href: "/industries" },
  { name: "Education", href: "/industries" },
  { name: "Healthcare", href: "/industries" },
  { name: "Startups & Local Businesses", href: "/industries" },
];

const services = [
  { name: "Performance Marketing", href: "/services/performance-marketing" },
  { name: "SEO Services", href: "/services/seo-services" },
  { name: "Social Media Marketing", href: "/services/social-media-marketing" },
  { name: "Lead Generation", href: "/services/lead-generation" },
  { name: "Website Design & Development", href: "/services/web-development" },
  { name: "Branding & Creative Strategy", href: "/services/branding-creative" },
];

const Footer = () => {
  return (
    <footer className="bg-[#F3FAFE] text-[#4B5563] border-t border-[#E3E8EE]">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-[#1EA6DA] font-heading">Crazy</span>
                <span className="text-2xl font-bold text-[#1F2933] font-heading ml-1">Digital World</span>
              </div>
            </Link>
            <p className="text-[#4B5563] mb-6 leading-relaxed">
              We combine creativity, data, and AI to deliver measurable business growth. 
              From startups to global brands, we help businesses dominate the digital landscape.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-[#E3E8EE] flex items-center justify-center text-[#1EA6DA] hover:bg-[#1EA6DA] hover:text-white transition-all shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-[#1F2933] font-heading mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#4B5563] hover:text-[#1EA6DA] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1EA6DA]/30" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#1F2933] font-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Why Us", href: "/why-us" },
                { name: "Industries", href: "/industries" },
                { name: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-[#4B5563] hover:text-[#1EA6DA] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1EA6DA]/30" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-[#1F2933] font-heading mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-[#1EA6DA] shrink-0" />
                <span>Plot No. 367 Pu4 Scheme No. 54 
Behind C21 Mall Indore - 452010 (M.P.)</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-[#1EA6DA] shrink-0" />
                <span>+91 9039 502 924</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-[#1EA6DA] shrink-0" />
                <span>info@crazydigitalworlds.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-[#1F2933] font-heading mb-6">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to get the latest digital growth tips and updates.
            </p>
            <form className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-[#E3E8EE] text-[#1F2933] placeholder:text-[#6B7280]"
              />
              <Button className="bg-[#1EA6DA] text-white hover:bg-[#0F5FA8] w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E3E8EE] bg-white">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#6B7280] text-sm">
              © {new Date().getFullYear()} Crazy Digital World. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#6B7280] hover:text-[#1EA6DA] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#6B7280] hover:text-[#1EA6DA] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
