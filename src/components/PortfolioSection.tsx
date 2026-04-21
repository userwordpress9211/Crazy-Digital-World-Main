import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    name: "Mobile Phone Accessories Brand",
    category: "Performance Marketing",
    type: "Meta Ads",
    highlight: "Significant increase in online orders & revenue",
    stats: [
      { label: "Campaign Type", value: "Meta Ads" },
      { label: "Result", value: "Sales Up" },
      { label: "Strategy", value: "Awareness + Conversion" },
    ],
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&h=400&fit=crop",
    color: "#1EA6DA",
  },
  {
    name: "Google Ads PPC Campaigns",
    category: "Performance Marketing",
    type: "Google Ads",
    highlight: "68K Clicks · 7.03K Conversions · ₹219 Cost/Conv",
    stats: [
      { label: "Total Clicks", value: "68K" },
      { label: "Conversions", value: "7.03K" },
      { label: "Cost/Conv", value: "₹219" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    color: "#2EC4F1",
  },
  {
    name: "TheHighConfectionary.com",
    category: "SEO",
    type: "Search Engine Optimization",
    highlight: "+50% Organic Traffic YoY · Top 10 for 20 Keywords",
    stats: [
      { label: "Organic Traffic", value: "+50%" },
      { label: "Top 10 Keywords", value: "20" },
      { label: "CTR", value: "16.8%" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    color: "#3B82F6",
  },
  {
    name: "727moto.com.au",
    category: "SEO",
    type: "Search Engine Optimization",
    highlight: "+45% Organic Traffic YoY · Top 10 for 15 Keywords",
    stats: [
      { label: "Organic Traffic", value: "+45%" },
      { label: "Top 10 Keywords", value: "15" },
      { label: "Impressions", value: "415K" },
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    color: "#1EA6DA",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F2933] mb-6">
            Real Results. Real Clients.
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            From PPC to SEO, here are some of our proven case studies that showcase measurable growth for our clients.
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E3E8EE] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: project.color }}>
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1EA6DA] mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-[#1F2933] mb-2">{project.name}</h3>
                <p className="text-sm text-[#4B5563] mb-5">{project.highlight}</p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="bg-[#F8FBFD] rounded-xl p-3 text-center">
                      <div className="text-lg font-bold text-[#1EA6DA]">{stat.value}</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-14">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[#1EA6DA] font-bold hover:gap-3 transition-all"
          >
            View Full Portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
