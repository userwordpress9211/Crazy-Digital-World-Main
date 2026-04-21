import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Lightbulb, CheckCircle } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To help brands grow smarter, faster, and more profitably using digital innovation.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description: "To become a global leader in AI-driven marketing and business growth solutions.",
  },
  {
    icon: Users,
    title: "Data-Driven",
    description: "We focus on results, not vanity metrics. Every strategy backed by data and analytics.",
  },
  {
    icon: Award,
    title: "Transparent & Accountable",
    description: "We provide transparent reporting and take full responsibility for delivering measurable ROI.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                Our Story
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#1F2933] mb-6">
                About <span className="text-[#1EA6DA]">Crazy Digital World</span>
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                Crazy Digital World is a results-driven digital marketing agency based in Indore, helping businesses grow across India, USA, Dubai, and beyond. We believe marketing is not about impressions — it's about impact.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#1EA6DA]">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-6">
                  Who We Are
                </h2>
                <div className="space-y-6 text-[#4B5563] leading-relaxed">
                  <p>
                    At <strong className="text-[#1F2933]">Crazy Digital World</strong>, we combine creativity, data, and technology to deliver real business growth. From startups to global brands, we help businesses dominate the digital landscape with performance-driven marketing strategies.
                  </p>
                  <p>
                    Based in Indore, we serve clients across India, USA, Dubai, and beyond. We believe marketing is not about impressions — it's about impact.
                  </p>
                  <p>
                    With a team of experienced marketers, strategists, and creatives, we've successfully executed campaigns across industries including e-commerce, real estate, education, healthcare, and more.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#EAF6FB] rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                Our Approach
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-4">
                Our 3-Step <span className="text-[#1EA6DA]">Growth System</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Analyze", subtitle: "Data & Market Research", description: "We deep-dive into your business, competitors, and market to uncover growth opportunities backed by real data." },
                { step: "02", title: "Strategize", subtitle: "Custom Growth Plan", description: "We craft a tailored digital marketing strategy aligned to your business goals, audience, and budget." },
                { step: "03", title: "Execute", subtitle: "Performance + Optimization", description: "We launch, monitor, and continuously optimize campaigns to maximize ROI and deliver measurable results." },
              ].map((item, index) => (
                <div key={index} className="bg-white border border-[#E3E8EE] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30">
                  <div className="text-5xl font-bold text-[#1EA6DA]/20 mb-4">{item.step}</div>
                  <h3 className="text-2xl font-bold font-heading text-[#1F2933] mb-1">{item.title}</h3>
                  <p className="text-sm font-semibold text-[#1EA6DA] mb-4">{item.subtitle}</p>
                  <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-4">
                What Drives Us Forward
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#E3E8EE] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30"
                >
                  <div className="w-16 h-16 bg-[#EAF6FB] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-[#1EA6DA]" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#1F2933] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                    alt="Why choose us"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#EAF6FB] rounded-2xl -z-10" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                  Why Choose Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-8">
                  What Makes Us <span className="text-[#1EA6DA]">Different</span>
                </h2>
                <ul className="space-y-5">
                  {[
                    "We focus on results, not vanity metrics",
                    "We use AI + Data-driven marketing",
                    "We build long-term growth systems",
                    "Transparent reporting and accountability",
                    "Global client experience from India to USA to Dubai",
                    "ROI-focused execution on every campaign",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#EAF6FB] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-[#1EA6DA]" />
                      </div>
                      <span className="text-[#4B5563] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
