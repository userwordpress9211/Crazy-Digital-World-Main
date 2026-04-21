import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#F8FBFD]">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#1EA6DA]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-[#2EC4F1]/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FB] border border-[#1EA6DA]/20 text-[#1EA6DA] text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1EA6DA] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1EA6DA]"></span>
              </span>
              Results-Driven Digital Marketing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#1F2933] leading-tight mb-6">
              We Don't Just Market. We Build <span className="text-[#1EA6DA]">Digital Empires</span>
            </h1>
            <p className="text-lg text-[#4B5563] mb-8 leading-relaxed max-w-xl">
              AI-powered digital marketing strategies that generate leads, boost revenue, and scale your business globally.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button className="bg-[#1EA6DA] text-white hover:bg-[#0F5FA8] h-12 px-8 rounded-lg text-base font-semibold shadow-lg shadow-[#1EA6DA]/20" asChild>
                <Link to="/contact">
                  Get Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" className="border-2 border-[#1EA6DA] text-[#1EA6DA] hover:bg-[#1EA6DA] hover:text-white h-12 px-8 rounded-lg text-base font-semibold" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Data-driven campaigns",
                "ROI-focused execution",
                "AI-powered strategies",
                "Transparent reporting",
                "Global client experience"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[#4B5563]">
                  <CheckCircle2 className="w-5 h-5 text-[#2EC4F1]" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Growth" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-xl shadow-xl border border-[#E3E8EE] animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EAF6FB] rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#1EA6DA]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1F2933]">99%</div>
                  <div className="text-sm text-[#6B7280]">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
