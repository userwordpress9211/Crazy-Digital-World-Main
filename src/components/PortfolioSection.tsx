const projects = [
  {
    name: "E-commerce Sales Growth",
    category: "Performance Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    name: "Real Estate Lead Generation",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    name: "Healthcare Brand Building",
    category: "Branding & Creative",
    image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&h=400&fit=crop",
  },
  {
    name: "Startup Growth Scaling",
    category: "Growth Marketing",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
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
            Recent Success Stories
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Discover some of our most recent projects that reflect our commitment to quality, 
            innovation, and client satisfaction.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2933]/90 via-[#1F2933]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[#1EA6DA] text-xs font-bold uppercase tracking-wider mb-1">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-white font-heading">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
