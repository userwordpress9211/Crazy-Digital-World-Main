import { ArrowRight, Calendar } from "lucide-react";

const blogs = [
  {
    title: "How Digital Transformation is Reshaping Modern Businesses",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "The Future of E-commerce: Trends to Watch in 2026",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    link: "#",
  },
  {
    title: "Maximizing ROI through Intelligent Workflow Automation",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-[#F8FBFD]">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
            Our Insights
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F2933] mb-6">
            Digital Marketing Insights
          </h2>
          <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of 
            technology and digital growth.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-white border border-[#E3E8EE] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1EA6DA] px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Calendar className="w-3.5 h-3.5" />
                  {blog.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading text-[#1F2933] mb-4 line-clamp-2 group-hover:text-[#1EA6DA] transition-colors">
                  {blog.title}
                </h3>
                <a
                  href={blog.link}
                  className="inline-flex items-center gap-2 text-[#1EA6DA] font-bold text-sm hover:gap-3 transition-all"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
