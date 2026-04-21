import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-[#F8FBFD] min-h-[70vh] flex items-center">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              {/* 404 Number */}
              <div className="relative mb-8 select-none">
                <span className="text-[160px] md:text-[220px] font-bold font-heading leading-none text-[#1EA6DA]/10">
                  404
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-bold font-heading text-[#1EA6DA]">
                    404
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                Page Not Found
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#1F2933] mb-4">
                Oops! This Page Doesn't Exist
              </h1>
              <p className="text-lg text-[#4B5563] mb-10 max-w-xl mx-auto leading-relaxed">
                The page you're looking for may have been moved, deleted, or never existed.
                Let's get you back on track.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1EA6DA] text-white rounded-xl font-semibold hover:bg-[#0F5FA8] transition-all shadow-lg shadow-[#1EA6DA]/20"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-[#E3E8EE] text-[#1F2933] rounded-xl font-semibold hover:border-[#1EA6DA] hover:text-[#1EA6DA] transition-all"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </button>
              </div>

              {/* Popular Pages */}
              <div className="border-t border-[#E3E8EE] pt-10 mb-10">
                <p className="text-sm font-bold text-[#1F2933] uppercase tracking-wider mb-5">Popular Pages</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {[
                    { name: "About Us", href: "/about" },
                    { name: "Services", href: "/services" },
                    { name: "Portfolio", href: "/portfolio" },
                    { name: "Why Us", href: "/why-us" },
                    { name: "Blog", href: "/blog" },
                    { name: "Contact", href: "/contact" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="px-4 py-2 bg-white border border-[#E3E8EE] rounded-full text-sm text-[#4B5563] hover:border-[#1EA6DA] hover:text-[#1EA6DA] transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white border border-[#E3E8EE] rounded-2xl p-8 max-w-md mx-auto shadow-sm">
                <p className="font-bold text-[#1F2933] mb-2">Still need help?</p>
                <p className="text-sm text-[#4B5563] mb-5">Our team is ready to assist you.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:+919039502924"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#EAF6FB] text-[#1EA6DA] rounded-xl text-sm font-semibold hover:bg-[#1EA6DA] hover:text-white transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    +91 9039 502 924
                  </a>
                  <a
                    href="mailto:info@crazydigitalworlds.com"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#EAF6FB] text-[#1EA6DA] rounded-xl text-sm font-semibold hover:bg-[#1EA6DA] hover:text-white transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
