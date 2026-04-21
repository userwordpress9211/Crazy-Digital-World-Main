import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Star,
  TrendingUp,
  Users,
  Award,
  Target,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Sparkles
} from "lucide-react";
import { 
  ClipboardList, 
  Scale, 
  DollarSign, 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  ShieldIcon,
} from "lucide-react";

const servicesData: Record<string, {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  stats: { label: string; value: string; icon: React.ComponentType<{ className?: string }> }[];
  process: { title: string; description: string; icon: React.ComponentType<{ className?: string }> }[];
  technologies: string[];
  useCases: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}> = {
  "operations-workflow-automation": {
    icon: ClipboardList,
    title: "Operations & Workflow Automation",
    subtitle: "Intelligent Automation for Modern Businesses",
    description: "Streamline your business operations with automated workflows",
    longDescription: "Transform your business operations with our cutting-edge automation solutions. We help organizations eliminate manual bottlenecks, reduce operational costs, and accelerate business processes through intelligent workflow automation. Our solutions integrate seamlessly with your existing systems while providing real-time visibility and control.",
    features: [
      "Business Process Automation & Optimization",
      "Intelligent Workflow Design & Implementation",
      "Advanced Task Management Systems",
      "Document Processing & Automation",
      "Seamless Integration with Enterprise Tools",
      "Real-time Analytics & Performance Monitoring",
      "Custom Rule Engine Development",
      "Automated Notification Systems",
    ],
    benefits: [
      "Reduce operational costs by up to 40%",
      "Eliminate manual errors and improve accuracy by 95%",
      "Free up staff time for strategic initiatives",
      "Improve process visibility and control",
      "Scale operations without adding headcount",
      "Faster turnaround times on key processes",
      "Enhanced compliance and auditability",
      "Better customer satisfaction",
    ],
    stats: [
      { label: "Cost Reduction", value: "40%", icon: TrendingUp },
      { label: "Time Saved", value: "60%", icon: Clock },
      { label: "Accuracy Rate", value: "99%", icon: Target },
      { label: "ROI Timeline", value: "6 mo", icon: BarChart3 },
    ],
    process: [
      { 
        title: "Discovery & Analysis", 
        description: "We conduct a comprehensive analysis of your current workflows, identify bottlenecks, and map automation opportunities",
        icon: Search
      },
      { 
        title: "Strategy & Design", 
        description: "Our team designs optimized workflows with clear automation rules and integration points",
        icon: Lightbulb
      },
      { 
        title: "Development & Configuration", 
        description: "We build and configure custom automation solutions using best-in-class technologies",
        icon: Code
      },
      { 
        title: "Testing & Quality Assurance", 
        description: "Rigorous testing across all scenarios to ensure flawless operation",
        icon: CheckCircle
      },
      { 
        title: "Deployment & Training", 
        description: "Smooth rollout with comprehensive training for your team",
        icon: Rocket
      },
      { 
        title: "Optimization & Support", 
        description: "Continuous monitoring and optimization with 24/7 support",
        icon: Settings
      },
    ],
    technologies: [
      "Zapier", "Microsoft Power Automate", "UiPath", "Automation Anywhere",
      "Monday.com", "Asana API", "Python", "Node.js", "REST APIs"
    ],
    useCases: [
      {
        title: "E-commerce Order Processing",
        description: "Automated order fulfillment from customer purchase to shipping notification, reducing processing time by 75%."
      },
      {
        title: "HR Onboarding Automation",
        description: "Streamlined employee onboarding process including document collection, system access provisioning, and training scheduling."
      },
      {
        title: "Customer Support Ticketing",
        description: "Intelligent ticket routing, automated responses, and escalation management for improved customer satisfaction."
      },
    ],
    faqs: [
      {
        question: "How long does implementation typically take?",
        answer: "Implementation timelines vary based on complexity, but most projects are completed within 4-12 weeks. We provide a detailed timeline during the discovery phase."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Yes! We specialize in integrating with popular enterprise systems including CRM, ERP, project management tools, and custom applications through APIs."
      },
      {
        question: "What kind of support do you provide post-implementation?",
        answer: "We offer comprehensive support packages including 24/7 monitoring, bug fixes, optimization, and continuous improvement recommendations."
      },
    ],
  },
  "custom-software-development": {
    icon: Code,
    title: "Custom Software Development",
    subtitle: "Tailored Solutions for Unique Business Challenges",
    description: "Build tailored software solutions for your business",
    longDescription: "We create powerful, scalable custom software solutions that perfectly align with your business objectives. Our experienced development team uses cutting-edge technologies and agile methodologies to deliver enterprise-grade applications that drive efficiency, innovation, and growth.",
    features: [
      "Enterprise Web Application Development",
      "Custom CRM & ERP Systems",
      "API Development & Microservices",
      "Legacy System Modernization",
      "SaaS Product Development",
      "Third-party Integration Services",
      "Cloud-Native Architecture",
      "Progressive Web Applications",
    ],
    benefits: [
      "Software perfectly tailored to your processes",
      "Competitive advantage through unique capabilities",
      "Seamless integration with existing systems",
      "Scalable architecture for future growth",
      "Full ownership and control of your software",
      "Long-term cost savings vs off-the-shelf",
      "Faster time-to-market for new features",
      "Better data security and compliance",
    ],
    stats: [
      { label: "Client Satisfaction", value: "98%", icon: Star },
      { label: "On-Time Delivery", value: "95%", icon: Clock },
      { label: "Code Quality", value: "A+", icon: Award },
      { label: "Active Projects", value: "50+", icon: Users },
    ],
    process: [
      { 
        title: "Requirements Gathering", 
        description: "Deep dive into your business needs, user stories, and technical requirements",
        icon: FileText
      },
      { 
        title: "Technical Architecture", 
        description: "Design scalable, secure architecture with modern tech stack selection",
        icon: Layers
      },
      { 
        title: "Agile Development", 
        description: "Iterative development with bi-weekly sprints and regular demonstrations",
        icon: Code
      },
      { 
        title: "Quality Assurance", 
        description: "Comprehensive testing including unit, integration, and user acceptance testing",
        icon: CheckCircle
      },
      { 
        title: "Deployment & DevOps", 
        description: "Smooth deployment with CI/CD pipeline and infrastructure setup",
        icon: Cloud
      },
      { 
        title: "Maintenance & Evolution", 
        description: "Ongoing support, updates, and feature enhancements",
        icon: RefreshCw
      },
    ],
    technologies: [
      "React", "Node.js", "Python", "Java", "PostgreSQL", "MongoDB",
      "AWS", "Azure", "Docker", "Kubernetes", "GraphQL", "TypeScript"
    ],
    useCases: [
      {
        title: "Healthcare Patient Management System",
        description: "HIPAA-compliant custom platform managing patient records, appointments, and billing for a multi-location clinic network."
      },
      {
        title: "Real Estate Property Platform",
        description: "Comprehensive property management solution with tenant portal, maintenance tracking, and financial reporting."
      },
      {
        title: "Manufacturing ERP System",
        description: "End-to-end ERP solution for production planning, inventory management, and supply chain coordination."
      },
    ],
    faqs: [
      {
        question: "What technologies do you specialize in?",
        answer: "We work with modern technologies including React, Node.js, Python, Java, and cloud platforms like AWS and Azure. We select the best tech stack based on your specific requirements."
      },
      {
        question: "How do you ensure code quality?",
        answer: "We follow industry best practices including code reviews, automated testing, continuous integration, and maintain comprehensive documentation throughout development."
      },
      {
        question: "Can you help with ongoing maintenance?",
        answer: "Absolutely! We offer flexible maintenance packages including bug fixes, security updates, performance optimization, and new feature development."
      },
    ],
  },
  "mobile-app-development": {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "Create Engaging Mobile Experiences",
    description: "Create powerful mobile applications",
    longDescription: "We design and develop high-performance mobile applications that users love. Our team creates intuitive, feature-rich apps for iOS and Android that drive engagement, retention, and business growth. From native apps to cross-platform solutions, we deliver mobile experiences that exceed expectations.",
    features: [
      "Native iOS Development (Swift/SwiftUI)",
      "Native Android Development (Kotlin/Jetpack)",
      "Cross-Platform Apps (React Native/Flutter)",
      "Mobile UI/UX Design & Prototyping",
      "App Store Optimization (ASO)",
      "Push Notifications & In-App Messaging",
      "Mobile Analytics & Crash Reporting",
      "Backend API Development",
    ],
    benefits: [
      "Reach customers on their preferred devices",
      "Increase user engagement and retention",
      "Create new revenue channels",
      "Enhanced brand presence and recognition",
      "Superior customer experience",
      "Competitive advantage in your market",
      "Direct communication channel with users",
      "Valuable user behavior insights",
    ],
    stats: [
      { label: "Apps Launched", value: "100+", icon: Rocket },
      { label: "Avg Rating", value: "4.7★", icon: Star },
      { label: "Downloads", value: "2M+", icon: Users },
      { label: "Retention Rate", value: "75%", icon: TrendingUp },
    ],
    process: [
      { 
        title: "Concept & Strategy", 
        description: "Define app vision, target audience, core features, and monetization strategy",
        icon: Lightbulb
      },
      { 
        title: "UX/UI Design", 
        description: "Create intuitive, beautiful interfaces with interactive prototypes",
        icon: Palette
      },
      { 
        title: "Development", 
        description: "Build robust, scalable mobile applications with clean code",
        icon: Code
      },
      { 
        title: "Testing & QA", 
        description: "Comprehensive testing on multiple devices, OS versions, and scenarios",
        icon: CheckCircle
      },
      { 
        title: "App Store Launch", 
        description: "Handle submission, optimization, and launch on App Store and Play Store",
        icon: Rocket
      },
      { 
        title: "Growth & Optimization", 
        description: "Monitor metrics, gather feedback, and continuously improve the app",
        icon: TrendingUp
      },
    ],
    technologies: [
      "Swift", "Kotlin", "React Native", "Flutter", "Firebase",
      "RESTful APIs", "GraphQL", "Push Notifications", "SQLite", "Realm"
    ],
    useCases: [
      {
        title: "Fitness & Wellness App",
        description: "Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features. 500K+ downloads."
      },
      {
        title: "On-Demand Service Platform",
        description: "Uber-like platform connecting service providers with customers, including real-time tracking and in-app payments."
      },
      {
        title: "Educational Learning App",
        description: "Interactive learning platform with gamification, progress tracking, and offline mode for students."
      },
    ],
    faqs: [
      {
        question: "Should I build native or cross-platform?",
        answer: "It depends on your requirements. Native apps offer better performance and platform-specific features, while cross-platform development is more cost-effective. We'll help you choose based on your needs."
      },
      {
        question: "How long does app development take?",
        answer: "Timeline varies by complexity. A simple app takes 2-3 months, while complex apps with advanced features may take 6-9 months. We provide detailed estimates after requirements gathering."
      },
      {
        question: "Do you help with app store submission?",
        answer: "Yes! We handle the entire submission process including creating store listings, screenshots, descriptions, and ensuring compliance with App Store and Play Store guidelines."
      },
    ],
  },
  "web-development": {
    icon: Globe,
    title: "Web Development",
    subtitle: "Modern Web Solutions That Convert",
    description: "Design and develop high-performance websites",
    longDescription: "We create stunning, high-performance websites that drive business results. Our web development services combine beautiful design with cutting-edge technology to deliver responsive, fast, and SEO-optimized websites that convert visitors into customers.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions (Shopify, WooCommerce)",
      "Progressive Web Apps (PWA)",
      "Content Management Systems (WordPress, Strapi)",
      "SEO Optimization & Performance",
      "Responsive Design for All Devices",
      "Website Maintenance & Support",
      "Web Analytics Integration",
    ],
    benefits: [
      "Professional online presence",
      "Increased organic traffic and visibility",
      "Higher conversion rates",
      "Mobile-optimized experience",
      "Improved brand credibility",
      "24/7 availability for customers",
      "Better customer engagement",
      "Competitive market advantage",
    ],
    stats: [
      { label: "Websites Built", value: "200+", icon: Globe },
      { label: "Avg Load Time", value: "< 2s", icon: Zap },
      { label: "SEO Score", value: "95+", icon: TrendingUp },
      { label: "Uptime", value: "99.9%", icon: Shield },
    ],
    process: [
      { 
        title: "Discovery & Planning", 
        description: "Understand your goals, target audience, and create sitemap and wireframes",
        icon: Map
      },
      { 
        title: "Design & Prototyping", 
        description: "Create stunning visual designs and interactive prototypes for approval",
        icon: Palette
      },
      { 
        title: "Development", 
        description: "Build responsive, fast, and SEO-optimized website with clean code",
        icon: Code
      },
      { 
        title: "Content Integration", 
        description: "Add content, images, videos and optimize for search engines",
        icon: FileText
      },
      { 
        title: "Testing & Launch", 
        description: "Thorough testing across devices and browsers before going live",
        icon: Rocket
      },
      { 
        title: "Support & Growth", 
        description: "Ongoing maintenance, updates, and optimization for better results",
        icon: TrendingUp
      },
    ],
    technologies: [
      "React", "Next.js", "WordPress", "Shopify", "HTML5/CSS3",
      "Tailwind CSS", "Node.js", "PHP", "MySQL", "Vercel/Netlify"
    ],
    useCases: [
      {
        title: "Corporate Website Redesign",
        description: "Modern, responsive corporate site with CMS, blog, and lead generation forms. 150% increase in organic traffic."
      },
      {
        title: "E-commerce Store",
        description: "Full-featured online store with payment integration, inventory management, and order tracking. $2M+ annual revenue."
      },
      {
        title: "Portfolio & Booking Platform",
        description: "Stunning portfolio website for creative agency with integrated booking system and client portal."
      },
    ],
    faqs: [
      {
        question: "What's the typical website development timeline?",
        answer: "A standard business website takes 4-8 weeks, while complex e-commerce or custom applications may take 12-16 weeks. We provide detailed timelines after discussing your requirements."
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops. Mobile-first design is our standard approach."
      },
      {
        question: "Can you help with website hosting and domain?",
        answer: "Yes, we can help you choose and set up reliable hosting, register domains, and configure everything needed to get your website live."
      },
    ],
  },
  "database-management": {
    icon: Database,
    title: "Database Management",
    subtitle: "Secure & Scalable Data Solutions",
    description: "Expert database design, optimization, and management",
    longDescription: "We provide comprehensive database management services to ensure your data is secure, accessible, and performing optimally. From database design to migration and ongoing optimization, we handle all aspects of your data infrastructure.",
    features: [
      "Database Design & Architecture",
      "Performance Optimization & Tuning",
      "Database Migration Services",
      "Backup & Disaster Recovery",
      "Security & Compliance Management",
      "Data Warehousing Solutions",
      "Real-time Data Synchronization",
      "24/7 Monitoring & Support",
    ],
    benefits: [
      "Improved query performance up to 10x",
      "Enhanced data security and compliance",
      "99.99% uptime and reliability",
      "Reduced storage costs",
      "Better scalability for growth",
      "Automated backup and recovery",
      "Real-time data insights",
      "Peace of mind with expert management",
    ],
    stats: [
      { label: "Databases Managed", value: "500+", icon: Database },
      { label: "Uptime", value: "99.99%", icon: Shield },
      { label: "Performance Gain", value: "10x", icon: Zap },
      { label: "Data Protected", value: "50TB+", icon: ShieldIcon },
    ],
    process: [
      { 
        title: "Assessment & Audit", 
        description: "Comprehensive analysis of current database infrastructure and performance",
        icon: Search
      },
      { 
        title: "Design & Planning", 
        description: "Create optimal database schema and architecture for your needs",
        icon: Layers
      },
      { 
        title: "Implementation", 
        description: "Set up or migrate databases with zero downtime",
        icon: Database
      },
      { 
        title: "Optimization", 
        description: "Fine-tune queries, indexes, and configurations for peak performance",
        icon: Zap
      },
      { 
        title: "Security Hardening", 
        description: "Implement robust security measures and compliance controls",
        icon: Shield
      },
      { 
        title: "Ongoing Management", 
        description: "24/7 monitoring, maintenance, and continuous optimization",
        icon: Settings
      },
    ],
    technologies: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "Amazon RDS",
      "Azure SQL", "Oracle", "Cassandra", "Elasticsearch", "DynamoDB"
    ],
    useCases: [
      {
        title: "E-commerce Database Optimization",
        description: "Optimized high-traffic e-commerce database handling 10K+ transactions per minute with 99.99% uptime."
      },
      {
        title: "Healthcare Data Migration",
        description: "Seamless migration of patient records from legacy system to modern HIPAA-compliant cloud database."
      },
      {
        title: "Financial Data Warehouse",
        description: "Built comprehensive data warehouse for financial analytics and reporting with real-time data synchronization."
      },
    ],
    faqs: [
      {
        question: "What database platforms do you support?",
        answer: "We work with all major database platforms including PostgreSQL, MySQL, MongoDB, Oracle, SQL Server, and cloud-based solutions like AWS RDS and Azure SQL."
      },
      {
        question: "How do you ensure data security?",
        answer: "We implement multiple security layers including encryption at rest and in transit, access controls, regular security audits, and compliance with industry standards like GDPR and HIPAA."
      },
      {
        question: "Can you help with database migration?",
        answer: "Yes! We specialize in zero-downtime database migrations. We handle everything from planning to execution, ensuring your data is safely transferred to the new system."
      },
    ],
  },
  "cloud-solutions": {
    icon: Cloud,
    title: "Cloud Solutions",
    subtitle: "Transform Your Business with Cloud Technology",
    description: "Comprehensive cloud migration and management services",
    longDescription: "Accelerate your digital transformation with our comprehensive cloud solutions. We help businesses migrate to the cloud, optimize cloud infrastructure, and leverage cloud-native technologies to improve agility, reduce costs, and drive innovation.",
    features: [
      "Cloud Strategy & Consulting",
      "Cloud Migration Services",
      "Multi-Cloud Architecture",
      "Cloud Infrastructure Management",
      "DevOps & CI/CD Pipeline",
      "Cloud Security & Compliance",
      "Cost Optimization",
      "Serverless Architecture",
    ],
    benefits: [
      "Reduce IT infrastructure costs by 30-40%",
      "Improve scalability and flexibility",
      "Enhanced disaster recovery capabilities",
      "Better collaboration and accessibility",
      "Automatic updates and patches",
      "Pay-as-you-go pricing model",
      "Faster deployment and time-to-market",
      "Enterprise-grade security",
    ],
    stats: [
      { label: "Cloud Migrations", value: "150+", icon: Cloud },
      { label: "Cost Savings", value: "35%", icon: TrendingUp },
      { label: "Uptime", value: "99.95%", icon: Shield },
      { label: "Faster Deployment", value: "5x", icon: Zap },
    ],
    process: [
      { 
        title: "Cloud Assessment", 
        description: "Evaluate current infrastructure and define cloud strategy",
        icon: FileText
      },
      { 
        title: "Architecture Design", 
        description: "Design optimal cloud architecture for your workloads",
        icon: Layers
      },
      { 
        title: "Migration Planning", 
        description: "Create detailed migration plan with minimal disruption",
        icon: Map
      },
      { 
        title: "Migration Execution", 
        description: "Execute migration with rigorous testing and validation",
        icon: Cloud
      },
      { 
        title: "Optimization", 
        description: "Optimize performance, security, and costs",
        icon: Zap
      },
      { 
        title: "Managed Services", 
        description: "Ongoing monitoring, management, and support",
        icon: Settings
      },
    ],
    technologies: [
      "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes",
      "Terraform", "Jenkins", "GitLab CI", "CloudFormation", "Ansible"
    ],
    useCases: [
      {
        title: "Enterprise Cloud Migration",
        description: "Migrated 50+ applications from on-premise to AWS, reducing infrastructure costs by 40% while improving performance."
      },
      {
        title: "Microservices Architecture",
        description: "Transformed monolithic application into cloud-native microservices using Kubernetes, improving scalability and resilience."
      },
      {
        title: "Hybrid Cloud Solution",
        description: "Implemented hybrid cloud architecture combining on-premise and cloud resources for optimal performance and compliance."
      },
    ],
    faqs: [
      {
        question: "Which cloud platform is best for my business?",
        answer: "The best platform depends on your specific needs. AWS offers the most comprehensive services, Azure integrates well with Microsoft products, and Google Cloud excels in data analytics. We'll help you choose based on your requirements."
      },
      {
        question: "How long does cloud migration take?",
        answer: "Timeline varies by complexity and size. Small applications can be migrated in 2-4 weeks, while enterprise-wide migrations may take 3-6 months. We create a phased approach to minimize disruption."
      },
      {
        question: "Will cloud migration cause downtime?",
        answer: "We design migration strategies to minimize or eliminate downtime. Using techniques like blue-green deployment and phased migration, we ensure business continuity throughout the process."
      },
    ],
  },
  "cybersecurity-solutions": {
    icon: ShieldIcon,
    title: "Cybersecurity Solutions",
    subtitle: "Protect Your Digital Assets",
    description: "Protect your business with comprehensive security",
    longDescription: "Safeguard your business from evolving cyber threats with our comprehensive cybersecurity solutions. We provide end-to-end security services including vulnerability assessments, penetration testing, security monitoring, and incident response to protect your valuable digital assets.",
    features: [
      "Security Audits & Assessments",
      "Penetration Testing & Ethical Hacking",
      "Compliance Management (GDPR, HIPAA, SOC 2)",
      "Incident Response & Forensics",
      "Security Awareness Training",
      "24/7 Threat Monitoring",
      "Data Loss Prevention (DLP)",
      "Identity & Access Management",
    ],
    benefits: [
      "Protection from cyber threats and attacks",
      "Regulatory compliance assurance",
      "Reduced risk of costly data breaches",
      "Peace of mind for stakeholders",
      "Business continuity and resilience",
      "Customer trust and confidence",
      "Competitive advantage",
      "Lower insurance premiums",
    ],
    stats: [
      { label: "Threats Blocked", value: "1M+", icon: Shield },
      { label: "Response Time", value: "< 1hr", icon: Clock },
      { label: "Security Score", value: "A+", icon: Award },
      { label: "Compliance Rate", value: "100%", icon: CheckCircle },
    ],
    process: [
      { 
        title: "Security Audit", 
        description: "Comprehensive assessment of your current security posture",
        icon: Search
      },
      { 
        title: "Risk Analysis", 
        description: "Identify vulnerabilities, threats, and potential impact",
        icon: AlertTriangle
      },
      { 
        title: "Security Roadmap", 
        description: "Develop prioritized plan to address security gaps",
        icon: Map
      },
      { 
        title: "Implementation", 
        description: "Deploy security controls and protective measures",
        icon: Shield
      },
      { 
        title: "Testing & Validation", 
        description: "Conduct penetration testing to validate security controls",
        icon: CheckCircle
      },
      { 
        title: "Continuous Monitoring", 
        description: "24/7 threat monitoring and rapid incident response",
        icon: Eye
      },
    ],
    technologies: [
      "SIEM Tools", "Penetration Testing Tools", "Firewalls", "IDS/IPS",
      "Encryption", "MFA", "VPN", "EDR", "Vulnerability Scanners", "SOAR"
    ],
    useCases: [
      {
        title: "Financial Services Security",
        description: "Implemented comprehensive security framework for fintech company, achieving SOC 2 Type II compliance and zero breaches."
      },
      {
        title: "Healthcare Data Protection",
        description: "Secured patient health records with HIPAA-compliant infrastructure, encryption, and access controls."
      },
      {
        title: "E-commerce Security",
        description: "Protected online store from fraud and attacks using advanced threat detection and PCI DSS compliance measures."
      },
    ],
    faqs: [
      {
        question: "How often should we conduct security assessments?",
        answer: "We recommend annual comprehensive security audits and quarterly vulnerability scans. For high-risk industries, more frequent assessments may be necessary."
      },
      {
        question: "What is penetration testing?",
        answer: "Penetration testing is ethical hacking where our security experts simulate real-world attacks to identify vulnerabilities before malicious actors can exploit them."
      },
      {
        question: "Do you provide security training for employees?",
        answer: "Yes! We offer comprehensive security awareness training covering phishing, social engineering, password hygiene, and best practices to create a security-conscious culture."
      },
    ],
  },
};

// Import icons that weren't imported
import { 
  Search, 
  Lightbulb, 
  Rocket, 
  Settings, 
  FileText, 
  Layers, 
  RefreshCw,
  Palette,
  Map,
  Eye,
  AlertTriangle
} from "lucide-react";

const ServiceDetailEnhanced = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="section-container py-20 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
              <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
              <Button asChild size="lg">
                <Link to="/services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Services
                </Link>
              </Button>
            </div>
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
        {/* Enhanced Hero Section with Gradient Background */}
        <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          
          <div className="section-container relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80 mb-8">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
              <span>/</span>
              <span className="text-primary-foreground font-medium">{service.title}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-primary-foreground border-white/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Premium Service
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 font-heading">
                  {service.title}
                </h1>
                <p className="text-xl text-primary-foreground/90 mb-6">
                  {service.subtitle}
                </p>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  {service.longDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="shadow-lg" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10">
                    View Case Studies
                  </Button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {service.stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                      <StatIcon className="w-8 h-8 text-primary-foreground mb-3" />
                      <div className="text-3xl font-bold text-primary-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-primary-foreground/80">
                        {stat.label}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center mb-16">
              <Badge className="mb-4">What We Deliver</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Comprehensive Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our solution includes everything you need to succeed
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/50 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with Alternating Layout */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Why Choose Us</Badge>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
                  Business Benefits That Matter
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our services deliver measurable results that impact your bottom line
                </p>
                
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-all">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-foreground font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3" />
                <Card className="relative p-8 bg-card">
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent className="w-12 h-12 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Expert Team</h3>
                      <p className="text-sm text-muted-foreground">Certified professionals</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Client Satisfaction</span>
                        <span className="text-sm font-bold text-primary">98%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[98%]" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">On-Time Delivery</span>
                        <span className="text-sm font-bold text-primary">95%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[95%]" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">Code Quality</span>
                        <span className="text-sm font-bold text-primary">100%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-full" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-center gap-3">
                      <Award className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-semibold text-foreground">Industry Recognition</div>
                        <div className="text-sm text-muted-foreground">Award-winning solutions</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center mb-16">
              <Badge className="mb-4">How We Work</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Our Proven Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured approach to deliver exceptional results
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform -translate-x-1/2" />
              
              <div className="space-y-12">
                {service.process.map((step, index) => {
                  const StepIcon = step.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={index} className={`relative grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                        <Card className="p-6 hover:shadow-xl transition-all border-2 hover:border-primary/50">
                          <div className={`flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                              <StepIcon className="w-7 h-7 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-primary mb-1">
                                Step {index + 1}
                              </div>
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                {step.title}
                              </h3>
                              <p className="text-muted-foreground">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </div>

                      {/* Timeline Dot */}
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <Badge className="mb-4">Technology Stack</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Cutting-Edge Technologies
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We use the latest and most reliable technologies
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="px-6 py-3 text-base hover:bg-primary hover:text-primary-foreground transition-all cursor-default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="text-center mb-16">
              <Badge className="mb-4">Success Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Real-World Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how we've helped businesses like yours succeed
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.useCases.map((useCase, index) => (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all border-2 hover:border-primary/50 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {useCase.description}
                  </p>
                  <Button variant="link" className="mt-4 p-0 h-auto text-primary hover:gap-2" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="section-container max-w-4xl">
            <div className="text-center mb-16">
              <Badge className="mb-4">Got Questions?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about our {service.title.toLowerCase()} services
              </p>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">Q</span>
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-9">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-primary-foreground mb-8">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Limited Time Offer</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-heading">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Get a free consultation and discover how our {service.title.toLowerCase()} services can drive your success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="xl" variant="secondary" className="shadow-xl" asChild>
                  <Link to="/contact">
                    Schedule Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10" asChild>
                  <Link to="/services">
                    Explore Other Services
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free Project Estimate</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="w-5 h-5" />
                  <span>Quick Response Time</span>
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

export default ServiceDetailEnhanced;
