import { Link } from "react-router-dom";
import { ShoppingBag, Building2, GraduationCap, Heart, Rocket } from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Drive more sales and customer engagement with data-driven digital marketing strategies tailored for online retailers.",
    features: ["Conversion Rate Optimization", "Customer Acquisition Campaigns", "E-commerce Analytics"],
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Attract more leads and close more deals with targeted marketing campaigns for property listings and developments.",
    features: ["Lead Generation Campaigns", "Property Marketing", "Local SEO Optimization"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Grow enrollment and engagement with digital marketing that connects educational institutions with prospective students.",
    features: ["Student Lead Generation", "Brand Awareness Campaigns", "Content Marketing"],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Build trust and attract patients with compliant, results-focused marketing strategies for healthcare providers.",
    features: ["Patient Acquisition", "Healthcare Branding", "Local Search Optimization"],
  },
  {
    icon: Rocket,
    title: "Startups & Local Businesses",
    description: "Accelerate growth for startups and local businesses with cost-effective, high-impact digital marketing solutions.",
    features: ["Growth Hacking", "Local SEO & PPC", "Brand Building"],
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-[#F8FBFD]">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
            Industries We Serve
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F2933] mb-6">
            Tailored Solutions for Every Sector
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            We combine industry expertise with technical excellence to deliver solutions 
            that address the unique challenges of your business sector.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E3E8EE] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#EAF6FB] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1EA6DA] transition-all duration-300">
                <industry.icon className="w-7 h-7 text-[#1EA6DA] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#1F2933] mb-3 group-hover:text-[#1EA6DA] transition-colors">
                {industry.title}
              </h3>
              <p className="text-[#4B5563] mb-6 text-sm leading-relaxed">
                {industry.description}
              </p>
              <ul className="space-y-3">
                {industry.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <div className="w-1.5 h-1.5 bg-[#1EA6DA] rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
          {/* View All Industry */}
                <div className="text-center mt-14">
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-2 text-[#1EA6DA] font-bold hover:gap-3 transition-all"
                  >
                    View All Industry
                    <span>→</span>
                  </Link>
                </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
