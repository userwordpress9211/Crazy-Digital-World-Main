import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, TrendingUp, Target, BarChart3, Users, Award } from "lucide-react";

const differentiators = [
  {
    icon: TrendingUp,
    title: "Results Over Vanity Metrics",
    description: "We focus on revenue growth, customer acquisition, and ROI - not just likes and shares."
  },
  {
    icon: Target,
    title: "AI + Data-Driven Marketing",
    description: "Every strategy is backed by data analysis and powered by AI for maximum effectiveness."
  },
  {
    icon: BarChart3,
    title: "Long-Term Growth Systems",
    description: "We build sustainable marketing systems that continue delivering results long after launch."
  },
  {
    icon: Users,
    title: "Transparent Reporting",
    description: "Real-time dashboards and detailed reports so you always know what's working."
  },
  {
    icon: Award,
    title: "Global Experience",
    description: "Proven success across India, USA, Dubai, and international markets."
  },
  {
    icon: CheckCircle,
    title: "ROI-Focused Execution",
    description: "Every campaign is designed to deliver measurable business growth and profitability."
  }
];

const industries = [
  "E-commerce", "Real Estate", "Education", "Healthcare", "Startups & Local Businesses"
];

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                Why Choose Us
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#1F2933] mb-6">
                Why Crazy Digital <span className="text-[#1EA6DA]">World?</span>
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed mb-8">
                We're not just another marketing agency. We're your growth partners, 
                combining creativity, data, and technology to deliver extraordinary results.
              </p>
              <Button className="bg-[#1EA6DA] text-white hover:bg-[#0F5FA8] h-12 px-8 rounded-lg text-base font-semibold shadow-lg shadow-[#1EA6DA]/20" asChild>
                <Link to="/contact">
                  Start Your Growth Journey
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Differentiators Grid */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-4">
                What Makes Us <span className="text-[#1EA6DA]">Different</span>
              </h2>
              <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
                Our unique approach combines proven strategies with cutting-edge technology 
                to deliver results that matter to your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F8FBFD] border border-[#E3E8EE] rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-[#1EA6DA]/30"
                >
                  <div className="w-16 h-16 bg-[#EAF6FB] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-[#1EA6DA]" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#1F2933] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Mindset */}
        <section className="py-16 bg-[#1EA6DA]">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Results Mindset
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We don't chase clicks. We chase <strong>conversions, revenue, and business growth.</strong>
            </p>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-4">
                Industries We <span className="text-[#1EA6DA]">Serve</span>
              </h2>
              <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
                We've helped businesses across diverse industries achieve remarkable growth 
                through strategic digital marketing.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#E3E8EE] rounded-full px-6 py-3 text-[#1F2933] font-medium hover:border-[#1EA6DA] hover:text-[#1EA6DA] transition-all"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#1EA6DA]">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and create a custom digital marketing strategy 
              that delivers real, measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#1EA6DA] hover:bg-[#EAF6FB] h-12 px-8 rounded-lg text-base font-semibold" asChild>
                <Link to="/contact">
                  Get Free Strategy Call
                </Link>
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1EA6DA] h-12 px-8 rounded-lg text-base font-semibold" asChild>
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyUs;