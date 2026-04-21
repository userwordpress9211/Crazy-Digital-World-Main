import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, ArrowLeft, Heart, Utensils, Plane, Building2, Truck, Share2 } from "lucide-react";

const industriesData: Record<string, {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  challenges: string[];
  solutions: string[];
  features: string[];
  caseStudies: { title: string; result: string }[];
  technologies: string[];
}> = {
  "healthcare": {
    icon: Heart,
    title: "Healthcare Solutions",
    description: "Secure, scalable, and compliant healthcare apps",
    longDescription: "We build comprehensive healthcare technology solutions that transform patient care, streamline operations, and ensure regulatory compliance. Our healthcare apps are designed to meet the stringent requirements of HIPAA while delivering exceptional user experiences for patients, providers, and administrators.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    challenges: [
      "Managing patient data securely across multiple systems",
      "Ensuring HIPAA compliance and data privacy",
      "Integrating with legacy EMR/EHR systems",
      "Providing accessible telemedicine solutions",
      "Handling high-volume appointment scheduling",
      "Real-time patient monitoring and alerts",
    ],
    solutions: [
      "End-to-end encrypted patient data management",
      "HIPAA-compliant architecture and audit trails",
      "HL7 FHIR API integrations for seamless data exchange",
      "Video consultation platforms with virtual waiting rooms",
      "AI-powered scheduling optimization",
      "IoT integration for remote patient monitoring",
    ],
    features: [
      "Telemedicine & Remote Consultation",
      "Electronic Health Records (EHR/EMR)",
      "Appointment Scheduling Systems",
      "Patient Portal & Mobile Apps",
      "Lab Results & Prescription Management",
      "Health Analytics & Reporting",
      "Insurance Claim Processing",
      "Medical Billing Integration",
    ],
    caseStudies: [
      { title: "Hospital Network Digital Transformation", result: "60% reduction in patient wait times" },
      { title: "Telemedicine Platform Launch", result: "10,000+ virtual consultations in first month" },
      { title: "EMR Integration Project", result: "95% data accuracy improvement" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS HIPAA", "HL7 FHIR", "WebRTC", "Docker", "Kubernetes"],
  },
  "food-restaurant": {
    icon: Utensils,
    title: "Food & Restaurant Apps",
    description: "Custom mobile apps for food delivery and restaurant discovery",
    longDescription: "Transform your food business with our cutting-edge restaurant and food delivery applications. From order management to customer engagement, we create solutions that enhance dining experiences and streamline operations for restaurants, cloud kitchens, and food delivery services.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop",
    challenges: [
      "Managing high-volume orders during peak hours",
      "Real-time delivery tracking and driver coordination",
      "Menu management across multiple locations",
      "Customer retention and loyalty programs",
      "Integration with POS systems",
      "Handling dietary preferences and allergies",
    ],
    solutions: [
      "Scalable order management with smart queuing",
      "GPS-based real-time tracking with ETA predictions",
      "Centralized menu management dashboard",
      "AI-powered loyalty and recommendation engine",
      "Seamless POS and payment gateway integrations",
      "Advanced filtering for dietary requirements",
    ],
    features: [
      "Online Ordering & Menu Management",
      "Real-time Order Tracking",
      "Kitchen Display Systems",
      "Driver Management & Route Optimization",
      "Customer Loyalty Programs",
      "Table Reservation Systems",
      "Inventory Management",
      "Analytics & Sales Reports",
    ],
    caseStudies: [
      { title: "Restaurant Chain App Launch", result: "45% increase in online orders" },
      { title: "Food Delivery Platform", result: "30% faster delivery times" },
      { title: "Kitchen Management System", result: "25% reduction in food waste" },
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Google Maps API", "Stripe", "Square POS", "Node.js", "MongoDB"],
  },
  "travel-hospitality": {
    icon: Plane,
    title: "Travel & Hospitality Solutions",
    description: "Build immersive travel platforms for bookings and concierge services",
    longDescription: "Create memorable travel experiences with our comprehensive hospitality technology solutions. We build platforms that simplify booking processes, enhance guest experiences, and optimize operations for hotels, airlines, travel agencies, and tour operators.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop",
    challenges: [
      "Complex booking and inventory management",
      "Multi-language and multi-currency support",
      "Integration with global distribution systems",
      "Personalized travel recommendations",
      "Real-time availability and pricing",
      "Guest experience personalization",
    ],
    solutions: [
      "Unified booking engine with dynamic pricing",
      "AI-powered translation and currency conversion",
      "GDS and OTA integrations (Amadeus, Sabre)",
      "Machine learning recommendation engine",
      "Real-time inventory sync across channels",
      "Guest preference tracking and personalization",
    ],
    features: [
      "Flight & Hotel Booking Systems",
      "Itinerary Planning & Management",
      "Virtual Concierge Services",
      "Property Management Systems",
      "Revenue Management Tools",
      "Guest Communication Platforms",
      "Travel Insurance Integration",
      "Review & Rating Systems",
    ],
    caseStudies: [
      { title: "Boutique Hotel Chain Platform", result: "35% increase in direct bookings" },
      { title: "Travel Agency Digital Transformation", result: "50% reduction in booking time" },
      { title: "Airline Companion App", result: "4.8 star rating on app stores" },
    ],
    technologies: ["React", "Vue.js", "Python", "Amadeus API", "Stripe", "AWS", "Elasticsearch", "Redis"],
  },
  "real-estate": {
    icon: Building2,
    title: "Real Estate Applications",
    description: "Smart real estate apps with cutting-edge features",
    longDescription: "Revolutionize property transactions with our innovative real estate technology solutions. From virtual property tours to CRM integrations, we build platforms that connect buyers, sellers, and agents while streamlining the entire real estate journey.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop",
    challenges: [
      "Showcasing properties effectively online",
      "Managing large property portfolios",
      "Qualifying and nurturing leads",
      "Document management and e-signatures",
      "Market analysis and property valuation",
      "Agent and client communication",
    ],
    solutions: [
      "360° virtual tours and AR visualization",
      "Centralized property management dashboard",
      "AI-powered lead scoring and automation",
      "Integrated document management with e-sign",
      "Real-time market analytics and comparables",
      "Built-in messaging and notification system",
    ],
    features: [
      "Property Listing Management",
      "Virtual Property Tours (360°/VR)",
      "Advanced Search & Filters",
      "CRM & Lead Management",
      "Property Valuation Tools",
      "Document Management",
      "Agent Portals & Dashboards",
      "Mortgage Calculator Integration",
    ],
    caseStudies: [
      { title: "Real Estate Marketplace Launch", result: "200% increase in qualified leads" },
      { title: "Property Management Platform", result: "40% reduction in vacancy rates" },
      { title: "Virtual Tour Integration", result: "75% more engagement per listing" },
    ],
    technologies: ["React", "Three.js", "WebXR", "Matterport API", "Salesforce", "DocuSign", "PostgreSQL", "AWS"],
  },
  "supply-chain-logistics": {
    icon: Truck,
    title: "Supply Chain & Logistics",
    description: "Streamlined logistics and inventory apps for supply chain optimization",
    longDescription: "Optimize your supply chain from end to end with our comprehensive logistics technology solutions. We build platforms that provide real-time visibility, automate workflows, and improve efficiency across warehousing, transportation, and last-mile delivery operations.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop",
    challenges: [
      "Lack of real-time visibility across supply chain",
      "Inefficient route planning and fleet management",
      "Manual warehouse operations",
      "Poor supplier communication and coordination",
      "Inaccurate demand forecasting",
      "High transportation and inventory costs",
    ],
    solutions: [
      "End-to-end supply chain visibility platform",
      "AI-powered route optimization algorithms",
      "IoT-enabled smart warehouse management",
      "Supplier portal with real-time collaboration",
      "Machine learning demand forecasting",
      "Cost analytics and optimization engine",
    ],
    features: [
      "Real-time Shipment Tracking",
      "Warehouse Management Systems",
      "Route Optimization",
      "Fleet Management",
      "Inventory Management",
      "Supplier Portal",
      "Demand Forecasting",
      "Delivery Proof & Documentation",
    ],
    caseStudies: [
      { title: "Logistics Company Digital Platform", result: "30% reduction in delivery costs" },
      { title: "Warehouse Automation Project", result: "50% faster order fulfillment" },
      { title: "Fleet Management System", result: "20% improvement in fleet utilization" },
    ],
    technologies: ["React", "Node.js", "Python", "TensorFlow", "IoT", "GPS APIs", "SAP Integration", "MongoDB"],
  },
  "social-media": {
    icon: Share2,
    title: "Social Media Platforms",
    description: "Engaging and interactive social networking apps",
    longDescription: "Build the next generation of social experiences with our social media platform development expertise. We create engaging, scalable, and feature-rich social networks that connect communities and drive user engagement through innovative features and AI-powered personalization.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
    challenges: [
      "Scaling to millions of concurrent users",
      "Content moderation and safety",
      "Real-time messaging and notifications",
      "User engagement and retention",
      "Monetization and advertising",
      "Privacy and data protection",
    ],
    solutions: [
      "Microservices architecture for infinite scale",
      "AI-powered content moderation system",
      "WebSocket-based real-time communication",
      "Gamification and AI recommendation engine",
      "Ad platform with targeting capabilities",
      "Privacy-first design with user controls",
    ],
    features: [
      "User Profiles & Social Graphs",
      "News Feed & Content Discovery",
      "Real-time Messaging & Chat",
      "AR Filters & Effects",
      "Live Streaming",
      "Stories & Short-form Video",
      "Community & Group Management",
      "Analytics & Insights",
    ],
    caseStudies: [
      { title: "Niche Social Network Launch", result: "1M+ users in first 6 months" },
      { title: "Community Platform Redesign", result: "3x increase in daily active users" },
      { title: "Content Moderation AI", result: "99.5% harmful content detection rate" },
    ],
    technologies: ["React Native", "GraphQL", "WebSocket", "TensorFlow", "Redis", "Kafka", "Elasticsearch", "AWS"],
  },
};

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? industriesData[slug] : null;

  if (!industry) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="section-container py-20 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Industry Not Found</h1>
            <p className="text-muted-foreground mb-8">The industry you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/industries">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Industries
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={industry.image}
              alt={industry.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          </div>
          <div className="section-container relative z-10">
            <Link 
              to="/industries" 
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Industries
            </Link>
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                  {industry.title}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {industry.longDescription}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Challenges */}
              <div className="bg-secondary/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                  Industry Challenges
                </h2>
                <ul className="space-y-4">
                  {industry.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-destructive text-sm font-medium">{index + 1}</span>
                      </span>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-primary/5 rounded-2xl p-8">
                <h2 className="text-2xl font-bold font-heading text-foreground mb-6">
                  Our Solutions
                </h2>
                <ul className="space-y-4">
                  {industry.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-secondary/50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                Key Features
              </h2>
              <div className="flex justify-center mt-4">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <div className="w-4 h-1 bg-primary/50 rounded-full ml-1" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industry.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                Success Stories
              </h2>
              <div className="flex justify-center mt-4">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <div className="w-4 h-1 bg-primary/50 rounded-full ml-1" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {industry.caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 text-center"
                >
                  <h3 className="font-semibold text-foreground mb-3">{study.title}</h3>
                  <p className="text-2xl font-bold text-primary">{study.result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-secondary/50">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                Technologies We Use
              </h2>
              <div className="flex justify-center mt-4">
                <div className="w-12 h-1 bg-primary rounded-full" />
                <div className="w-4 h-1 bg-primary/50 rounded-full ml-1" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {industry.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-card border border-border rounded-full px-6 py-2 text-muted-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your {industry.title.replace(' Solutions', '').replace(' Applications', '').replace(' Apps', '').replace(' Platforms', '')} Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you overcome challenges and achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="xl" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/30  hover:bg-primary-foreground/10" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryDetail;
