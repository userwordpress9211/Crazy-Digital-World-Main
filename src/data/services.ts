import {
  TrendingUp,
  Search,
  Share2,
  Target,
  Globe,
  Palette,
} from "lucide-react";

export interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  slug: string;
  color: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "We create high-converting ad campaigns focused on Leads, Sales, and ROI across all major platforms.",
    slug: "performance-marketing",
    color: "#1EA6DA",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads",
      "YouTube Ads",
    ],
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Rank higher. Get organic traffic. Build authority with a comprehensive SEO strategy.",
    slug: "seo-services",
    color: "#2EC4F1",
    features: [
      "On-page SEO",
      "Off-page SEO",
      "Technical SEO",
      "Local SEO",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We turn followers into customers with strategic content and growth-focused campaigns.",
    slug: "social-media-marketing",
    color: "#3B82F6",
    features: [
      "Content strategy",
      "Reels & creatives",
      "Growth campaigns",
      "Engagement optimization",
    ],
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "We build systems that bring consistent, high-quality leads to your business.",
    slug: "lead-generation",
    color: "#1EA6DA",
    features: [
      "Funnel creation",
      "Landing pages",
      "CRM integration",
      "Automation",
    ],
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Your website is your digital showroom — we build it to convert visitors into customers.",
    slug: "web-development",
    color: "#2EC4F1",
    features: [
      "Business websites",
      "E-commerce stores",
      "UI/UX optimization",
      "Speed & SEO friendly",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Creative Strategy",
    description:
      "Make your brand unforgettable with a strong identity and compelling creative assets.",
    slug: "branding-creative",
    color: "#3B82F6",
    features: [
      "Logo & identity",
      "Ad creatives",
      "Social media designs",
      "Brand positioning",
    ],
  },
];
