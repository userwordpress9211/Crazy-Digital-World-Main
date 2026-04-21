import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import {
  ClipboardList,
  Scale,
  DollarSign,
  Code,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  Laptop,
  ShoppingCart,
  Search,
  Palette,
} from "lucide-react";

const servicesData: Record<string, {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  process: { title: string; description: string }[];
}> = {
  "operations-workflow-automation": {
    icon: ClipboardList,
    title: "Operations & Workflow Automation",
    description: "Streamline your business operations with automated workflows",
    longDescription: "Our Operations & Workflow Automation services help businesses eliminate manual bottlenecks, reduce errors, and accelerate processes. We design and implement custom automation solutions that integrate seamlessly with your existing systems.",
    features: [
      "Business Process Automation",
      "Workflow Design & Optimization",
      "Task Management Systems",
      "Document Automation",
      "Integration with Existing Tools",
      "Real-time Monitoring & Analytics",
    ],
    benefits: [
      "Reduce operational costs by up to 40%",
      "Eliminate manual errors and improve accuracy",
      "Free up staff for higher-value tasks",
      "Improve process visibility and control",
      "Scale operations without adding headcount",
      "Faster turnaround times on key processes",
    ],
    process: [
      { title: "Discovery", description: "We analyze your current workflows and identify automation opportunities" },
      { title: "Design", description: "Our team designs optimized workflows tailored to your needs" },
      { title: "Development", description: "We build and configure automation solutions" },
      { title: "Testing", description: "Rigorous testing ensures everything works perfectly" },
      { title: "Deployment", description: "We deploy the solution with minimal disruption" },
      { title: "Support", description: "Ongoing support and optimization post-launch" },
    ],
  },
  "supply-chain-optimization": {
    icon: Scale,
    title: "Supply Chain Optimization",
    description: "Enhance visibility and control over your supply chain",
    longDescription: "Our Supply Chain Optimization services provide end-to-end visibility and control over your supply chain operations. From inventory management to logistics tracking, we help you build a more efficient and resilient supply chain.",
    features: [
      "Inventory Management Systems",
      "Logistics & Fleet Tracking",
      "Vendor Management Portals",
      "Demand Forecasting with AI",
      "Warehouse Management",
      "Supply Chain Analytics",
    ],
    benefits: [
      "Reduce inventory costs by 20-30%",
      "Improve delivery times and reliability",
      "Better vendor relationships and communication",
      "Accurate demand forecasting",
      "Real-time visibility across the supply chain",
      "Reduced stockouts and overstock situations",
    ],
    process: [
      { title: "Assessment", description: "Evaluate your current supply chain processes" },
      { title: "Strategy", description: "Develop optimization strategies and roadmap" },
      { title: "Implementation", description: "Deploy tracking and management solutions" },
      { title: "Integration", description: "Connect with suppliers and logistics partners" },
      { title: "Optimization", description: "Continuous improvement based on data insights" },
      { title: "Maintenance", description: "Ongoing support and system updates" },
    ],
  },
  "invoice-billing-financial": {
    icon: DollarSign,
    title: "Invoice, Billing & Financial Systems",
    description: "Modernize your financial processes",
    longDescription: "Transform your financial operations with our comprehensive billing and invoicing solutions. We help businesses automate payments, streamline accounting, and gain better financial insights.",
    features: [
      "Automated Invoice Generation",
      "Payment Gateway Integration",
      "Recurring Billing Systems",
      "Financial Reporting & Dashboards",
      "Tax Calculation & Compliance",
      "Multi-currency Support",
    ],
    benefits: [
      "Reduce invoice processing time by 80%",
      "Faster payment collection",
      "Fewer billing errors and disputes",
      "Better cash flow visibility",
      "Simplified tax compliance",
      "Reduced accounting overhead",
    ],
    process: [
      { title: "Analysis", description: "Review your current financial processes" },
      { title: "Design", description: "Create tailored billing workflows" },
      { title: "Development", description: "Build custom financial systems" },
      { title: "Integration", description: "Connect with banks and payment providers" },
      { title: "Testing", description: "Validate all financial calculations" },
      { title: "Launch", description: "Go live with training and support" },
    ],
  },
  "custom-software-development": {
    icon: Code,
    title: "Custom Software Development",
    description: "Build tailored software solutions for your business",
    longDescription: "Our custom software development services deliver solutions built specifically for your unique business needs. From web applications to enterprise systems, we create software that drives efficiency and growth.",
    features: [
      "Web Application Development",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Legacy System Modernization",
      "SaaS Product Development",
      "Custom CRM/ERP Systems",
    ],
    benefits: [
      "Software tailored to your exact needs",
      "Competitive advantage through unique capabilities",
      "Better integration with existing systems",
      "Scalable architecture for growth",
      "Full ownership of your software",
      "Long-term cost savings",
    ],
    process: [
      { title: "Requirements", description: "Deep dive into your business needs" },
      { title: "Architecture", description: "Design scalable technical architecture" },
      { title: "Development", description: "Agile development with regular demos" },
      { title: "QA", description: "Comprehensive quality assurance" },
      { title: "Deployment", description: "Smooth deployment to production" },
      { title: "Maintenance", description: "Ongoing support and enhancements" },
    ],
  },
  "mobile-app-development": {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Create powerful mobile applications",
    longDescription: "We build high-performance mobile applications for iOS and Android that engage users and drive business results. From native apps to cross-platform solutions, we deliver mobile experiences that users love.",
    features: [
      "Native iOS Development",
      "Native Android Development",
      "Cross-Platform Apps (React Native/Flutter)",
      "UI/UX Design for Mobile",
      "App Store Optimization",
      "Push Notifications & Analytics",
    ],
    benefits: [
      "Reach customers on their preferred devices",
      "Increase engagement and retention",
      "New revenue channels",
      "Enhanced brand presence",
      "Better customer experience",
      "Competitive advantage",
    ],
    process: [
      { title: "Concept", description: "Define app vision and features" },
      { title: "Design", description: "Create intuitive UI/UX designs" },
      { title: "Development", description: "Build robust mobile applications" },
      { title: "Testing", description: "Test on multiple devices and scenarios" },
      { title: "Launch", description: "App store submission and launch" },
      { title: "Growth", description: "Updates, monitoring, and optimization" },
    ],
  },
  "database-solutions": {
    icon: Database,
    title: "Database Solutions",
    description: "Implement robust database architectures",
    longDescription: "We design and implement database solutions that ensure data integrity, security, and optimal performance. From database design to migration and optimization, we handle all your data needs.",
    features: [
      "Database Design & Architecture",
      "Data Migration Services",
      "Performance Tuning",
      "Backup & Disaster Recovery",
      "Database Security",
      "NoSQL & SQL Solutions",
    ],
    benefits: [
      "Faster query performance",
      "Data security and compliance",
      "Reliable backup and recovery",
      "Scalable data architecture",
      "Reduced storage costs",
      "Better data insights",
    ],
    process: [
      { title: "Assessment", description: "Evaluate current database setup" },
      { title: "Design", description: "Create optimized database schema" },
      { title: "Migration", description: "Safely migrate existing data" },
      { title: "Optimization", description: "Tune for performance" },
      { title: "Security", description: "Implement security measures" },
      { title: "Monitoring", description: "Set up monitoring and alerts" },
    ],
  },
  "cloud-services": {
    icon: Cloud,
    title: "Cloud Services",
    description: "Leverage cloud technologies for your business",
    longDescription: "Our cloud services help businesses migrate to and optimize their cloud infrastructure. We work with AWS, Azure, and Google Cloud to deliver scalable, secure, and cost-effective solutions.",
    features: [
      "Cloud Migration",
      "AWS/Azure/GCP Services",
      "DevOps & CI/CD",
      "Kubernetes & Containerization",
      "Cloud Security",
      "Cost Optimization",
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Better disaster recovery",
      "Faster deployment cycles",
      "Global availability",
      "Pay-as-you-go pricing",
    ],
    process: [
      { title: "Assessment", description: "Evaluate cloud readiness" },
      { title: "Strategy", description: "Develop migration strategy" },
      { title: "Migration", description: "Execute cloud migration" },
      { title: "Optimization", description: "Optimize for performance and cost" },
      { title: "Security", description: "Implement cloud security" },
      { title: "Management", description: "Ongoing cloud management" },
    ],
  },
  "cybersecurity-solutions": {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your business with comprehensive security",
    longDescription: "Our cybersecurity solutions protect your business from evolving threats. From security audits to incident response, we provide comprehensive protection for your digital assets.",
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Compliance Management",
      "Incident Response",
      "Security Training",
      "Threat Monitoring",
    ],
    benefits: [
      "Protection from cyber threats",
      "Regulatory compliance",
      "Reduced risk of data breaches",
      "Peace of mind",
      "Business continuity",
      "Customer trust",
    ],
    process: [
      { title: "Audit", description: "Comprehensive security assessment" },
      { title: "Analysis", description: "Identify vulnerabilities and risks" },
      { title: "Planning", description: "Develop security roadmap" },
      { title: "Implementation", description: "Deploy security measures" },
      { title: "Testing", description: "Validate security controls" },
      { title: "Monitoring", description: "Continuous threat monitoring" },
    ],
  },
  "it-services-consulting": {
  icon: Laptop,
  title: "IT Services & Consulting",
  description: "Strategic IT guidance for business growth",
  longDescription:
    "Our IT Services & Consulting help businesses align technology with strategic goals. We assess infrastructure, optimize systems, and provide expert guidance to improve efficiency, security, and scalability.",
  features: [
    "IT Strategy & Roadmapping",
    "Infrastructure Assessment",
    "System Optimization",
    "Technology Consulting",
    "Risk & Compliance Advisory",
    "IT Support & Maintenance",
  ],
  benefits: [
    "Better technology alignment",
    "Reduced operational risks",
    "Improved system performance",
    "Cost-effective IT investments",
    "Enhanced security posture",
    "Future-ready infrastructure",
  ],
  process: [
    { title: "Assessment", description: "Analyze current IT landscape" },
    { title: "Strategy", description: "Define IT roadmap and goals" },
    { title: "Planning", description: "Create implementation plan" },
    { title: "Execution", description: "Deploy recommended solutions" },
    { title: "Optimization", description: "Fine-tune systems" },
    { title: "Support", description: "Ongoing monitoring and support" },
  ],
},
"ecommerce-listings": {
  icon: ShoppingCart,
  title: "E-Commerce & Marketplace Management",
  description: "Grow sales across online marketplaces",
  longDescription:
    "We help brands succeed on marketplaces like Amazon, Flipkart, Myntra, and eBay through optimized listings, advertising strategies, and performance tracking.",
  features: [
    "Product Listing Optimization",
    "Catalog Management",
    "Marketplace Ads Management",
    "Pricing & Inventory Control",
    "Order & Returns Handling",
    "Sales Analytics & Reporting",
  ],
  benefits: [
    "Higher product visibility",
    "Improved conversion rates",
    "Increased online revenue",
    "Better inventory control",
    "Reduced operational errors",
    "Scalable marketplace growth",
  ],
  process: [
    { title: "Audit", description: "Analyze existing listings" },
    { title: "Optimization", description: "Enhance titles, images, content" },
    { title: "Ads Setup", description: "Launch marketplace campaigns" },
    { title: "Monitoring", description: "Track performance metrics" },
    { title: "Optimization", description: "Improve ROI continuously" },
    { title: "Scaling", description: "Expand to new categories" },
  ],
},
"digital-marketing-services": {
  icon: Shield,
  title: "Digital Marketing Services",
  description: "Boost brand visibility and engagement",
  longDescription:
    "Our digital marketing services help businesses grow their online presence through targeted campaigns, content strategies, and data-driven marketing initiatives.",
  features: [
    "Marketing Strategy Planning",
    "Campaign Management",
    "Content Marketing",
    "Paid Advertising",
    "Analytics & Reporting",
    "Conversion Optimization",
  ],
  benefits: [
    "Stronger online presence",
    "Increased brand awareness",
    "Higher customer engagement",
    "Improved lead quality",
    "Better ROI on marketing spend",
    "Sustainable digital growth",
  ],
  process: [
    { title: "Research", description: "Understand audience & goals" },
    { title: "Strategy", description: "Define marketing roadmap" },
    { title: "Execution", description: "Launch campaigns" },
    { title: "Tracking", description: "Monitor performance" },
    { title: "Optimization", description: "Improve results" },
    { title: "Scaling", description: "Expand successful channels" },
  ],
},
"seo-services": {
  icon: Search,
  title: "SEO Services",
  description: "Improve search rankings and traffic",
  longDescription:
    "Our SEO services help businesses rank higher on search engines, attract qualified traffic, and achieve long-term organic growth.",
  features: [
    "Keyword Research",
    "On-Page SEO",
    "Technical SEO",
    "Content Optimization",
    "Link Building",
    "SEO Reporting",
  ],
  benefits: [
    "Higher search rankings",
    "Increased organic traffic",
    "Better website authority",
    "Improved user experience",
    "Higher conversion rates",
    "Long-term growth",
  ],
  process: [
    { title: "Audit", description: "Analyze website performance" },
    { title: "Research", description: "Identify target keywords" },
    { title: "Optimization", description: "Fix on-page & technical issues" },
    { title: "Content", description: "Optimize and create content" },
    { title: "Linking", description: "Build quality backlinks" },
    { title: "Tracking", description: "Monitor rankings & traffic" },
  ],
},
"performance-marketing": {
  icon: ArrowRight,
  title: "Performance Marketing",
  description: "ROI-driven paid marketing campaigns",
  longDescription:
    "We run data-driven performance marketing campaigns focused on conversions, revenue, and measurable business outcomes.",
  features: [
    "Google Ads Management",
    "Meta Ads Campaigns",
    "Conversion Tracking",
    "Landing Page Optimization",
    "A/B Testing",
    "ROI Analytics",
  ],
  benefits: [
    "Maximum ROI",
    "Scalable paid campaigns",
    "Better audience targeting",
    "Lower acquisition costs",
    "Measurable performance",
    "Faster growth",
  ],
  process: [
    { title: "Planning", description: "Define goals & KPIs" },
    { title: "Setup", description: "Create ad campaigns" },
    { title: "Launch", description: "Go live with ads" },
    { title: "Testing", description: "Optimize creatives & copy" },
    { title: "Scaling", description: "Increase budget on winners" },
    { title: "Reporting", description: "Track ROI & conversions" },
  ],
},
"lead-generation": {
  icon: Cloud,
  title: "Lead Generation",
  description: "Generate high-quality business leads",
  longDescription:
    "Our lead generation solutions attract, engage, and convert prospects using targeted strategies and conversion-focused campaigns.",
  features: [
    "Audience Targeting",
    "Landing Page Funnels",
    "Paid Lead Campaigns",
    "CRM Integration",
    "Email Automation",
    "Lead Qualification",
  ],
  benefits: [
    "High-quality leads",
    "Lower cost per lead",
    "Improved sales pipeline",
    "Better conversion rates",
    "Scalable lead flow",
    "Sales-ready prospects",
  ],
  process: [
    { title: "Targeting", description: "Identify ideal audience" },
    { title: "Funnel Design", description: "Create conversion funnels" },
    { title: "Campaigns", description: "Launch lead ads" },
    { title: "Capture", description: "Collect lead data" },
    { title: "Nurture", description: "Qualify and nurture leads" },
    { title: "Handover", description: "Deliver to sales team" },
  ],
},
"social-media-marketing": {
  icon: Shield,
  title: "Social Media Marketing",
  description: "Build engagement and brand loyalty",
  longDescription:
    "We help brands grow and engage audiences across social platforms with creative content and targeted campaigns.",
  features: [
    "Social Media Strategy",
    "Content Creation",
    "Community Management",
    "Paid Social Campaigns",
    "Influencer Marketing",
    "Analytics & Insights",
  ],
  benefits: [
    "Stronger brand presence",
    "Higher engagement rates",
    "Improved customer trust",
    "Consistent brand messaging",
    "Increased conversions",
    "Audience growth",
  ],
  process: [
    { title: "Planning", description: "Define platform strategy" },
    { title: "Content", description: "Create engaging content" },
    { title: "Publishing", description: "Schedule and post" },
    { title: "Engagement", description: "Interact with audience" },
    { title: "Ads", description: "Run paid campaigns" },
    { title: "Optimization", description: "Improve performance" },
  ],
},
"branding-creative": {
  icon: Palette,
  title: "Branding & Creative Strategy",
  description: "Make your brand unforgettable",
  longDescription: "Our Branding & Creative services help you build a distinctive brand identity that resonates with your target audience and drives customer loyalty. From logo design to comprehensive brand guidelines, we create cohesive visual identities that tell your story and differentiate you from competitors.",
  features: [
    "Logo & Brand Identity Design",
    "Ad Creatives & Visual Assets",
    "Social Media Designs",
    "Brand Positioning & Strategy",
    "Brand Messaging & Copywriting",
    "Creative Campaign Development"
  ],
  benefits: [
    "Distinctive brand identity",
    "Increased brand recognition",
    "Stronger emotional connection with audience",
    "Consistent brand messaging",
    "Higher perceived value",
    "Competitive advantage"
  ],
  process: [
    { title: "Discovery", description: "Understand your brand and market" },
    { title: "Strategy", description: "Develop comprehensive brand strategy" },
    { title: "Design", description: "Create visual identity and assets" },
    { title: "Development", description: "Build brand guidelines" },
    { title: "Implementation", description: "Apply across all touchpoints" },
    { title: "Optimization", description: "Refine based on performance" }
  ]
},
"web-development": {
  icon: Globe,
  title: "Website Design & Development",
  description: "Build high-converting websites",
  longDescription: "We create stunning, high-performance websites that not only look great but also drive conversions and deliver exceptional user experiences. Our websites are built with modern technologies, optimized for speed, and designed to convert visitors into customers.",
  features: [
    "Responsive Web Design",
    "E-commerce Websites",
    "UI/UX Optimization",
    "Website Speed Optimization",
    "SEO-Friendly Architecture",
    "CMS Integration"
  ],
  benefits: [
    "Better user experience",
    "Higher conversion rates",
    "Improved SEO rankings",
    "Faster page load times",
    "Mobile-friendly design",
    "Easy content management"
  ],
  process: [
    { title: "Discovery", description: "Understand your business goals" },
    { title: "Design", description: "Create wireframes and mockups" },
    { title: "Development", description: "Build with latest technologies" },
    { title: "Content", description: "Implement all content and media" },
    { title: "Testing", description: "QA across all devices" },
    { title: "Launch", description: "Deploy and monitor performance" }
  ]
},







};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="section-container py-20 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="section-container">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  {service.longDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                  What We Offer
                </h2>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                  Benefits
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-secondary/50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                Our Process
              </h2>
              <div className="flex justify-center mt-4">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <div className="w-4 h-1 bg-primary/50 rounded-full ml-1" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 relative"
                >
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-foreground mb-2 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title.toLowerCase()} services can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/services">
                  Explore Other Services
                  <ArrowRight className="w-4 h-4 ml-2" />
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

export default ServiceDetail;
