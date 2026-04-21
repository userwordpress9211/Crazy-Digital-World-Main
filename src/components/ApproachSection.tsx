import { Search, Lightbulb, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Analyze",
    description: "Data & Market Research - We dive deep into your business, audience, and market to identify growth opportunities.",
    color: "#1EA6DA"
  },
  {
    icon: Lightbulb,
    title: "Strategize",
    description: "Custom Growth Plan - Our experts craft data-driven marketing strategies tailored to your specific business objectives.",
    color: "#2EC4F1"
  },
  {
    icon: Rocket,
    title: "Execute",
    description: "Performance + Optimization - We implement campaigns and continuously optimize for maximum ROI and growth.",
    color: "#3B82F6"
  }
];

const ApproachSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F2933] mb-6">
            Our 3-Step Growth System
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            We follow a proven, data-driven approach that combines creativity, technology, and analytics 
            to deliver measurable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-[#1EA6DA]/20 via-[#2EC4F1]/20 to-[#1EA6DA]/20 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 bg-white border-2 border-[#E3E8EE] group-hover:border-[#1EA6DA] group-hover:shadow-lg transition-all duration-300 relative z-10"
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#1EA6DA] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  0{index + 1}
                </div>
                <step.icon className="w-10 h-10 text-[#1EA6DA]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#1F2933] mb-3">
                {step.title}
              </h3>
              <p className="text-[#4B5563] leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
