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
}

export const services: ServiceItem[] = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Data-driven paid advertising campaigns that deliver measurable ROI across all digital channels.",
    slug: "performance-marketing",
    color: "#1EA6DA",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Comprehensive search engine optimization to improve rankings and drive organic traffic.",
    slug: "seo-services",
    color: "#2EC4F1",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Strategic social media campaigns that build engagement, brand awareness, and drive conversions.",
    slug: "social-media-marketing",
    color: "#3B82F6",
  },
  {
    icon: Target,
    title: "Lead Generation",
    description:
      "Targeted lead generation campaigns that attract and convert high-quality prospects.",
    slug: "lead-generation",
    color: "#1EA6DA",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "High-converting websites built with modern technologies and user-centric design principles.",
    slug: "web-development",
    color: "#2EC4F1",
  },
  {
    icon: Palette,
    title: "Branding & Creative Strategy",
    description:
      "Complete brand identity development and creative campaigns that make your business unforgettable.",
    slug: "branding-creative",
    color: "#3B82F6",
  },
];
