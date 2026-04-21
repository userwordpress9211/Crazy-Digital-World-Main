import { Link } from "react-router-dom";
// import { services } from "@/data/services";

import {
  TrendingUp,
  Search,
  Share2,
  Target,
  Globe,
  Palette,
  ArrowRight,
} from "lucide-react";

var services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "ROI-focused paid advertising campaigns",
    slug: "performance-marketing",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Improve search rankings and organic traffic",
    slug: "seo-services",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build engagement and brand loyalty",
    slug: "social-media-marketing",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Targeted strategies for quality leads",
    slug: "lead-generation",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "High-converting websites built with modern tech",
    slug: "web-development",
  },
  {
    icon: Palette,
    title: "Branding & Creative Strategy",
    description: "Complete brand identity and creative campaigns",
    slug: "branding-creative",
  },
];

interface MegaMenuProps {
  onClose: () => void;
}

const MegaMenu = ({ onClose }: MegaMenuProps) => {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-[#E3E8EE] shadow-xl animate-fade-in z-50">
      <div className="section-container py-10">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Services Grid */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-6">
              Our Expertise
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.slug}`}
                  onClick={onClose}
                  className="group flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8FBFD] transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#EAF6FB] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#1EA6DA] transition-colors">
                    <service.icon className="w-5 h-5 text-[#1EA6DA] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F2933] text-sm group-hover:text-[#1EA6DA] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          {/* <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#1EA6DA] to-[#0F5FA8] rounded-2xl p-8 text-white h-full flex flex-col justify-between shadow-lg shadow-[#1EA6DA]/20">
              <div>
                <h3 className="font-bold text-xl mb-3">
                  Need a Custom Solution?
                </h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Let’s discuss your goals and build a tailored digital strategy.
                </p>
              </div>
              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-sm font-bold bg-white text-[#1EA6DA] px-6 py-3 rounded-xl hover:bg-[#EAF6FB] transition-all w-fit"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div> */}
        </div>

        {/* Footer Row */}
        <div className="mt-8 pt-8 border-t border-[#E3E8EE] flex justify-between items-center">
          <Link
            to="/services"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-[#1EA6DA] font-bold text-sm hover:gap-3 transition-all"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-[#6B7280]">
            Trusted by 500+ businesses worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
