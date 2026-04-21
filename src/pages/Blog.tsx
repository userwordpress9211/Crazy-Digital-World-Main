import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Clock, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

/* ===============================
   API CONFIG
================================ */
const API_BASE_URL = "https://admincrazydigitalworld.guptatechweb.com/api";

/* ===============================
   TYPES
================================ */
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url: string;
  author: string;
  published_at: string;
}

/* ===============================
   UTILITY FUNCTIONS
================================ */
const getImageUrl = (imageUrl: string): string => {
  // If already a full URL (starts with http/https), return as-is
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // If relative path starting with /uploads, prepend base URL
  if (imageUrl.startsWith('/uploads')) {
    return `https://admincrazydigitalworld.guptatechweb.com${imageUrl}`;
  }
  
  // If relative path without leading slash
  if (imageUrl.startsWith('uploads/')) {
    return `https://admincrazydigitalworld.guptatechweb.com/${imageUrl}`;
  }
  
  // Default fallback
  return imageUrl;
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

/* ===============================
   CATEGORIES (STATIC UI)
================================ */
const categories = [
  "All",
  "Web Development",
  "Full Stack",
  "SEO",
  "AI & Mobile",
  "Cloud",
  "Security",
];

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  /* ===============================
     FETCH BLOGS FROM API
  =================================*/
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");
        
        const response = await fetch(`${API_BASE_URL}/posts`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        console.log("Fetched blogs:", data); // Debug log
        
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* ================= HERO ================= */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                Our <span className="text-primary">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Insights, tutorials, and industry updates from our team of experts.
                Stay ahead with the latest in technology and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES ================= */}
        <section className="py-8 bg-background border-b border-border">
          <div className="section-container">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === selectedCategory
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BLOG GRID ================= */}
        <section className="py-16 bg-background">
          <div className="section-container">

            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground">Loading blog posts...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="max-w-md mx-auto text-center py-20">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-destructive mb-2">
                    Error Loading Posts
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!loading && !error && blogs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No blog posts found.
                </p>
              </div>
            )}

            {/* Blog Cards */}
            {!loading && !error && blogs.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="group bg-card border border-border rounded-xl overflow-hidden card-hover"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={getImageUrl(blog.image_url)}
                        alt={blog.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback image if the main image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop";
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-medium">
                        Blog
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(blog.published_at)}
                        </span>

                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {calculateReadTime(blog.content)}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold font-heading text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {blog.content.substring(0, 120)}...
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {blog.author}
                        </span>

                        <Link
                          to={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                        >
                          Read
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="py-16 bg-secondary/50">
          <div className="section-container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Get the latest insights and updates delivered to your inbox.
              </p>

              <form className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
