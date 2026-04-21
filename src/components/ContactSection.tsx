import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F2933] mb-6">
              Ready to Scale Your <span className="text-[#1EA6DA]">Business?</span>
            </h2>
            <p className="text-lg text-[#4B5563] mb-10 leading-relaxed">
              Ready to accelerate your growth with data-driven digital marketing? 
              Let's discuss your goals and create a custom strategy for measurable results.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FB] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#1EA6DA]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2933]">Call Us</h4>
                  <p className="text-[#4B5563]">+91 9039 502 924</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FB] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#1EA6DA]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2933]">Email Us</h4>
                  <p className="text-[#4B5563]">info@crazydigitalworlds.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF6FB] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#1EA6DA]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2933]">Visit Us</h4>
                  <p className="text-[#4B5563]">Plot No. 367 Pu4 Scheme No. 54 
Behind C21 Mall Indore - 452010 (M.P.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F8FBFD] p-8 md:p-10 rounded-3xl border border-[#E3E8EE] shadow-sm">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1F2933]">Full Name</label>
                  <Input placeholder="John Doe" className="bg-white border-[#E3E8EE]" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1F2933]">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-white border-[#E3E8EE]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1F2933]">Subject</label>
                <Input placeholder="How can we help?" className="bg-white border-[#E3E8EE]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#1F2933]">Message</label>
                <Textarea placeholder="Tell us about your project..." className="bg-white border-[#E3E8EE] min-h-[150px]" />
              </div>
              <Button className="w-full bg-[#1EA6DA] text-white hover:bg-[#0F5FA8] h-12 text-base font-bold">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
