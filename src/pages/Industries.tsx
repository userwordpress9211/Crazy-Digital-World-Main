import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Building2, GraduationCap, Heart, Rocket, ArrowRight } from "lucide-react";

export const industries = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    slug: "ecommerce",
    description: "Drive more sales and customer engagement with data-driven digital marketing strategies tailored for online retailers.",
    features: ["Conversion Rate Optimization", "Customer Acquisition Campaigns", "E-commerce Analytics", "Shopping Cart Abandonment Recovery"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
  },
  {
    icon: Building2,
    title: "Real Estate",
    slug: "real-estate",
    description: "Attract more leads and close more deals with targeted marketing campaigns for property listings and developments.",
    features: ["Lead Generation Campaigns", "Property Marketing", "Local SEO Optimization", "Virtual Tour Integration"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Education",
    slug: "education",
    description: "Grow enrollment and engagement with digital marketing that connects educational institutions with prospective students.",
    features: ["Student Lead Generation", "Brand Awareness Campaigns", "Content Marketing", "Social Proof Marketing"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
  },
  {
    icon: Heart,
    title: "Healthcare",
    slug: "healthcare",
    description: "Build trust and attract patients with compliant, results-focused marketing strategies for healthcare providers.",
    features: ["Patient Acquisition", "Healthcare Branding", "Local Search Optimization", "Review Management"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
  },
  {
    icon: Rocket,
    title: "Startups & Local Businesses",
    slug: "startups",
    description: "Accelerate growth for startups and local businesses with cost-effective, high-impact digital marketing solutions.",
    features: ["Growth Hacking", "Local SEO & PPC", "Brand Building", "Community Engagement"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                Industries We Serve
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#1F2933] mb-6">
                Industry <span className="text-[#1EA6DA]">Solutions</span>
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                We offer tailored technology solutions backed by dedicated teams who understand 
                the unique needs of your industry.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="space-y-24">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-[#EAF6FB] rounded-xl flex items-center justify-center">
                        <industry.icon className="w-7 h-7 text-[#1EA6DA]" />
                      </div>
                      <h2 className="text-3xl font-bold font-heading text-[#1F2933]">
                        {industry.title}
                      </h2>
                    </div>
                    <p className="text-[#4B5563] text-lg mb-8 leading-relaxed">
                      {industry.description}
                    </p>
                    <ul className="space-y-4 mb-10">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#EAF6FB] flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-[#1EA6DA] rounded-full" />
                          </div>
                          <span className="text-[#4B5563] font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-2 text-[#1EA6DA] font-bold text-sm hover:gap-3 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative">
                      <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                        <img
                          src={industry.image}
                          alt={industry.title}
                          className="w-full h-auto"
                        />
                      </div>
                      <div className={`absolute -bottom-6 ${index % 2 === 1 ? "-left-6" : "-right-6"} w-64 h-64 bg-[#EAF6FB] rounded-2xl -z-10`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#1EA6DA]">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              We work with businesses across all sectors. Let's discuss how we can help yours.
            </p>
            <Button className="bg-white text-[#1EA6DA] hover:bg-[#EAF6FB] h-14 px-10 rounded-xl text-lg font-bold shadow-xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
