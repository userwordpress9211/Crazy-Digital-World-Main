import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import MegaMenu from "@/components/MegaMenu";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const megaWrapperRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const navLinks = [
    { name: "About Us", href: "/about", isPage: true },
    { name: "Why Us", href: "/why-us", isPage: true },
    { name: "Services", href: "/services", hasDropdown: true, isPage: true },
    { name: "Portfolio", href: "/portfolio", isPage: true },
    { name: "Industries", href: "/industries", isPage: true },
    { name: "Blog", href: "/blog", isPage: true },
  ];

  const mobileServices = [
    { name: "Performance Marketing", href: "/services/performance-marketing" },
    { name: "SEO Services", href: "/services/seo-services" },
    { name: "Social Media Marketing", href: "/services/social-media-marketing" },
    { name: "Lead Generation", href: "/services/lead-generation" },
    { name: "Website Design & Development", href: "/services/web-development" },
    { name: "Branding & Creative Strategy", href: "/services/branding-creative" },
  ];

  /** Close Mega Menu on outside click */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        megaWrapperRef.current &&
        !megaWrapperRef.current.contains(e.target as Node)
      ) {
        setShowMegaMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.hasDropdown) {
      setShowMegaMenu(!showMegaMenu);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E3E8EE]">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
           <img
                src={logoImage}
                alt="Code editor showing software development"
                className="w-full h-auto object-cover"
              />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" ref={megaMenuRef}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => handleNavClick(link)}
                    className="flex items-center gap-1 text-[#1F2933] hover:text-[#1EA6DA] transition-colors font-medium"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showMegaMenu ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 text-[#1F2933] hover:text-[#1EA6DA] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button 
              className="bg-[#1EA6DA] text-white hover:bg-[#0F5FA8] transition-colors rounded-lg px-6"
              asChild
            >
              <Link to="/contact">CONTACT US</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1F2933]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mega Menu */}
        {showMegaMenu && <MegaMenu onClose={() => setShowMegaMenu(false)} />}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#E3E8EE] animate-fade-in bg-white">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full text-[#1F2933] hover:text-[#1EA6DA] transition-colors font-medium py-2"
                      >
                        {link.name}
                        <ChevronRight className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-90" : ""}`} />
                      </button>
                      {mobileServicesOpen && (
                        <div className="pl-4 space-y-2 mt-2 border-l-2 border-[#1EA6DA]/20">
                          {mobileServices.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block text-sm text-[#4B5563] hover:text-[#1EA6DA] py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="block text-sm text-[#1EA6DA] font-medium py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="flex items-center gap-1 text-[#1F2933] hover:text-[#1EA6DA] transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button 
                className="w-full mt-4 bg-[#1EA6DA] text-white hover:bg-[#0F5FA8]"
                asChild
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
