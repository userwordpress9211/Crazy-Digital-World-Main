import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, TrendingUp, Search } from "lucide-react";

const ppcStats = [
  { label: "Total Clicks", value: "68K" },
  { label: "Conversions", value: "7.03K" },
  { label: "Cost / Conv.", value: "₹219" },
  { label: "Total Spend", value: "₹1.54M" },
];

const metaCampaigns = [
  { label: "Total Reach", value: "8.45M+" },
  { label: "Impressions", value: "21.18M+" },
  { label: "Campaigns Managed", value: "81+" },
  { label: "Clients Served", value: "13+" },
];

const seoCase1Stats = [
  { label: "Organic Traffic", value: "+50%" },
  { label: "Top 10 Keywords", value: "20" },
  { label: "Avg CTR", value: "16.8%" },
  { label: "Total Clicks", value: "4.46K" },
];

const seoCase2Stats = [
  { label: "Organic Traffic", value: "+45%" },
  { label: "Top 10 Keywords", value: "15" },
  { label: "Total Clicks", value: "7.49K" },
  { label: "Impressions", value: "415K" },
];

const metaApproachSteps = [
  {
    step: "01",
    title: "Website & Platform Analysis",
    description:
      "Thoroughly reviewed the client's website and all online platforms to identify areas for improvement, user experience gaps, and conversion blockers.",
  },
  {
    step: "02",
    title: "Competitor Analysis for Meta Ads",
    description:
      "Conducted a deep dive into competitor Meta campaigns — analyzing ad creatives, messaging, targeting, and landing pages to develop a competitive ad strategy.",
  },
  {
    step: "03",
    title: "Awareness Campaign Execution",
    description:
      "Launched a brand awareness campaign on Meta with a ₹200/day budget to introduce the product to a qualified audience and build a user base.",
  },
  {
    step: "04",
    title: "Sales Campaign Optimization",
    description:
      "Created two A/B sales campaigns at ₹1,000/day each, analyzed performance data, and scaled the winning ad to drive consistent online sales.",
  },
  {
    step: "05",
    title: "Lead Generation & Automation",
    description:
      "Identified abandoned carts and implemented automated follow-up sequences to nurture and convert lost leads into successful sales.",
  },
];

const metaResults = [
  "Brand presence established with a qualified user base",
  "Significant increase in online orders and revenue",
  "Higher conversion rate from abandoned carts",
  "Full-funnel performance marketing approach driving ecommerce acceleration",
];

const seoActivitiesOffPage = [
  "Blog Submissions",
  "PDF Submissions",
  "Business Listing",
  "Profile Creation",
  "Directories & Web 2.0 Submissions",
];

const seoActivitiesOnPage = [
  "Title & Description Optimization",
  "Schema Markup",
  "Analytics Integration",
  "Page Error Fixes",
  "Breadcrumb Implementation",
  "Content Optimization",
];

const seoTechnical = [
  "Technical SEO Audit & Fixes",
  "Website Speed Optimization",
  "Core Web Vitals Compliance",
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
                Our Work
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-[#1F2933] mb-6">
                Real Results for <span className="text-[#1EA6DA]">Real Clients</span>
              </h1>
              <p className="text-xl text-[#4B5563] leading-relaxed">
                From PPC and Meta Ads to comprehensive SEO — here are the case studies that prove our performance-driven approach delivers measurable growth.
              </p>
            </div>
          </div>
        </section>

        {/* ── PPC PORTFOLIO ── */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6FB] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#1EA6DA]" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#1EA6DA]">PPC Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-4">
              Google Ads Performance
            </h2>
            <p className="text-[#4B5563] text-lg mb-12 max-w-2xl">
              Proven results across multiple Google Ads accounts — driving high-quality clicks, conversions, and measurable ROI for clients across industries.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {ppcStats.map((stat, i) => (
                <div key={i} className="bg-[#F8FBFD] border border-[#E3E8EE] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#1EA6DA] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#6B7280] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Meta Ads */}
            <div className="flex items-center gap-3 mb-4 mt-16">
              <span className="text-sm font-bold uppercase tracking-wider text-[#1EA6DA]">Meta Ads Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-4">
              Facebook & Instagram Campaigns
            </h2>
            <p className="text-[#4B5563] text-lg mb-12 max-w-2xl">
              Managed 81+ campaigns across multiple clients including e-commerce, events, education, and trading brands — delivering consistent reach, leads, and conversions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metaCampaigns.map((stat, i) => (
                <div key={i} className="bg-[#F8FBFD] border border-[#E3E8EE] rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#1EA6DA] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#6B7280] font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY: Mobile Phone Accessories ── */}
        <section className="py-24 bg-[#F8FBFD]">
          <div className="section-container">
            <div className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-[#1EA6DA] uppercase bg-[#EAF6FB] rounded-full">
              Case Study — Performance Marketing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-3">
              Mobile Phone Accessories Brand
            </h2>
            <p className="text-[#4B5563] text-lg mb-12 max-w-2xl">
              Objective: Drive accessories brand growth and online sales through a full-funnel performance marketing strategy.
            </p>

            {/* Approach */}
            <h3 className="text-xl font-bold text-[#1F2933] mb-6">Our Approach</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {metaApproachSteps.map((item, i) => (
                <div key={i} className="bg-white border border-[#E3E8EE] rounded-2xl p-6">
                  <div className="text-4xl font-bold text-[#1EA6DA]/20 mb-3">{item.step}</div>
                  <h4 className="text-base font-bold text-[#1F2933] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Results */}
            <h3 className="text-xl font-bold text-[#1F2933] mb-6">Results</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {metaResults.map((result, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-[#E3E8EE] rounded-xl p-4">
                  <CheckCircle className="w-5 h-5 text-[#1EA6DA] shrink-0 mt-0.5" />
                  <span className="text-[#4B5563] text-sm">{result}</span>
                </div>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-12 bg-[#1EA6DA] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" /> Performance marketing requires a holistic approach — analysis, optimization, and an experimental mindset.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" /> Competitor analysis and deep audience understanding are crucial for effective ad strategies.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" /> Continuous A/B testing and optimization maximize ROI.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 shrink-0 mt-0.5" /> Automation and lead nurturing significantly enhance conversion rates and drive sustainable growth.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── SEO PORTFOLIO ── */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EAF6FB] flex items-center justify-center">
                <Search className="w-5 h-5 text-[#1EA6DA]" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#1EA6DA]">SEO Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F2933] mb-4">
              Search Engine Optimization
            </h2>
            <p className="text-[#4B5563] text-lg mb-12 max-w-2xl">
              Comprehensive SEO strategy combining off-page, on-page, and technical SEO — delivering consistent ranking improvements and organic growth.
            </p>

            {/* SEO Strategy */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-[#F8FBFD] border border-[#E3E8EE] rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#1F2933] mb-4 pb-3 border-b border-[#E3E8EE]">Off-Page SEO</h3>
                <ul className="space-y-3">
                  {seoActivitiesOffPage.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                      <CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F8FBFD] border border-[#E3E8EE] rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#1F2933] mb-4 pb-3 border-b border-[#E3E8EE]">On-Page SEO</h3>
                <ul className="space-y-3">
                  {seoActivitiesOnPage.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                      <CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F8FBFD] border border-[#E3E8EE] rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#1F2933] mb-4 pb-3 border-b border-[#E3E8EE]">Technical SEO</h3>
                <ul className="space-y-3">
                  {seoTechnical.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#4B5563]">
                      <CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* SEO Case Studies */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <div className="bg-[#F8FBFD] border border-[#E3E8EE] rounded-2xl overflow-hidden">
                <div className="bg-[#1EA6DA] px-6 py-4">
                  <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">Case Study 01</p>
                  <h3 className="text-xl font-bold text-white">TheHighConfectionary.com</h3>
                  <p className="text-white/80 text-sm mt-1">Premium Confectionery Retailer — UK</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
                    Comprehensive SEO strategy implementation over 12 months, focusing on both off-page and on-page activities to enhance online presence and improve search rankings.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {seoCase1Stats.map((stat, i) => (
                      <div key={i} className="bg-white border border-[#E3E8EE] rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-[#1EA6DA]">{stat.value}</div>
                        <div className="text-xs text-[#6B7280] mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm text-[#4B5563]">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0 mt-0.5" /> Organic traffic increased 50% year-over-year</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0 mt-0.5" /> Top 10 rankings for 20 primary keywords</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0 mt-0.5" /> Lower bounce rates and higher session durations</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0 mt-0.5" /> Successfully met Google's Core Web Vitals requirements</li>
                  </ul>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-[#F8FBFD] border border-[#E3E8EE] rounded-2xl overflow-hidden">
                <div className="bg-[#0F5FA8] px-6 py-4">
                  <p className="text-white/80 text-xs font-bold uppercase tracking-wider mb-1">Case Study 02</p>
                  <h3 className="text-xl font-bold text-white">727moto.com.au</h3>
                  <p className="text-white/80 text-sm mt-1">Motorcycle Parts & Accessories — Australia</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
                    Comprehensive SEO strategy for an Australian motorcycle retailer — covering both off-page and on-page activities to improve visibility and organic search performance.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {seoCase2Stats.map((stat, i) => (
                      <div key={i} className="bg-white border border-[#E3E8EE] rounded-xl p-3 text-center">
                        <div className="text-xl font-bold text-[#1EA6DA]">{stat.value}</div>
                        <div className="text-xs text-[#6B7280] mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm text-[#4B5563]">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0 mt-0.5" /> Organic traffic increased 45% year-over-year</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0 mt-0.5" /> Top 10 rankings for 15 primary keywords</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0 mt-0.5" /> 17K users, $55K total revenue tracked</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#1EA6DA] shrink-0 mt-0.5" /> Successfully met Google's Core Web Vitals requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#1EA6DA]">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Let's turn your brand into a revenue machine. Book your free consultation today.
            </p>
            <Button className="bg-white text-[#1EA6DA] hover:bg-[#EAF6FB] h-14 px-10 rounded-xl text-lg font-bold shadow-xl" asChild>
              <Link to="/contact">Book Your Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
