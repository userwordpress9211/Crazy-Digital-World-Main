import { Link } from "react-router-dom";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2933] mb-6">
            Featured Services
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            We deliver end-to-end digital solutions designed to accelerate growth,
            improve efficiency, and maximize business impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <div
              key={service.slug}
              className="group bg-white border border-[#E3E8EE] rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon
                  className="w-7 h-7"
                  
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1F2933] mb-3 group-hover:text-[#1EA6DA] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#4B5563] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center text-sm font-bold text-[#1EA6DA] hover:text-[#0F5FA8] transition-colors"
              >
                Learn More
                <span className="ml-1 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services */}
        <div className="text-center mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-[#1EA6DA] font-bold hover:gap-3 transition-all"
          >
            View All Services
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
