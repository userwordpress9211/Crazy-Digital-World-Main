import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Loader2,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  CheckCircle
} from "lucide-react";

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
  created_at: string;
  updated_at: string;
}

interface RelatedPost {
  id: number;
  title: string;
  slug: string;
  image_url: string;
  published_at: string;
}

/* ===============================
   UTILITY FUNCTIONS
================================ */
const getImageUrl = (imageUrl: string): string => {
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  if (imageUrl.startsWith('/uploads')) {
    return `https://admincrazydigitalworld.guptatechweb.com${imageUrl}`;
  }
  if (imageUrl.startsWith('uploads/')) {
    return `https://admincrazydigitalworld.guptatechweb.com/${imageUrl}`;
  }
  return imageUrl;
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

const formatShortDate = (dateString: string): string => {
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

const BlogSingleView = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  /* ===============================
     FETCH POST
  =================================*/
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError("No blog post specified");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found");
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPost(data);

        // Fetch related posts
        fetchRelatedPosts(data.id);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(err instanceof Error ? err.message : "Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  /* ===============================
     FETCH RELATED POSTS
  =================================*/
  const fetchRelatedPosts = async (currentPostId: number) => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`);
      if (response.ok) {
        const allPosts = await response.json();
        // Filter out current post and get random 3 posts
        const filtered = allPosts
          .filter((p: BlogPost) => p.id !== currentPostId)
          .slice(0, 3);
        setRelatedPosts(filtered);
      }
    } catch (err) {
      console.error("Error fetching related posts:", err);
    }
  };

  /* ===============================
     SHARE FUNCTIONS
  =================================*/
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post?.title || '';

  const handleShare = async (platform: string) => {
    const url = encodeURIComponent(shareUrl);
    const title = encodeURIComponent(shareTitle);

    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          url: shareUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  /* ===============================
     RENDER CONTENT
  =================================*/
  const renderContent = (content: string) => {
    // Split content by paragraphs (double newline or single newline)
    const paragraphs = content.split(/\n+/).filter(p => p.trim());

    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      
      // Check if it's a heading (starts with #)
      if (trimmed.startsWith('# ')) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold font-heading text-foreground mt-8 mb-4">
            {trimmed.substring(2)}
          </h2>
        );
      }
      
      if (trimmed.startsWith('## ')) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-semibold font-heading text-foreground mt-6 mb-3">
            {trimmed.substring(3)}
          </h3>
        );
      }

      // Check if it's a list item
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        return (
          <li key={index} className="ml-6 mb-2 text-base md:text-lg text-foreground/90">
            {trimmed.substring(2)}
          </li>
        );
      }

      // Regular paragraph
      return (
        <p key={index} className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Loading State */}
        {loading && (
          <div className="section-container py-20">
            <div className="flex flex-col items-center justify-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground">Loading post...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="section-container py-20">
            <div className="max-w-md mx-auto text-center">
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-destructive mb-2">
                  {error === "Blog post not found" ? "Post Not Found" : "Error Loading Post"}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {error}
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Post Content */}
        {!loading && !error && post && (
          <>
            {/* Breadcrumb & Back Button */}
            <section className="py-6 bg-secondary/30">
              <div className="section-container">
                <div className="max-w-4xl mx-auto">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                  </Link>
                </div>
              </div>
            </section>

            {/* Hero Section */}
            <section className="py-12 bg-gradient-to-br from-primary/5 to-secondary/20">
              <div className="section-container">
                <div className="max-w-4xl mx-auto">
                  {/* Category Badge */}
                  <div className="mb-6">
                    <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium">
                      Blog Post
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
                    {post.title}
                  </h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{formatDate(post.published_at)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>{calculateReadTime(post.content)}</span>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="mt-6 flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Share:</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleShare('copy')}
                        className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center relative"
                        aria-label="Copy link"
                      >
                        {copySuccess ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Link2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Featured Image */}
            <section className="py-8">
              <div className="section-container">
                <div className="max-w-4xl mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={getImageUrl(post.image_url)}
                      alt={post.title}
                      className="w-full h-auto max-h-[600px] object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop";
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Article Content */}
            <section className="py-12">
              <div className="section-container">
                <div className="max-w-4xl mx-auto">
                  {/* Main Content */}
                  <article className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="space-y-4">
                      {renderContent(post.content)}
                    </div>
                  </article>

                  {/* Article Footer */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Published on <span className="font-medium">{formatDate(post.published_at)}</span>
                        </p>
                        {post.updated_at !== post.created_at && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Last updated on {formatDate(post.updated_at)}
                          </p>
                        )}
                      </div>
                      
                      {/* Mobile Share Button */}
                      <button
                        onClick={handleNativeShare}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                      >
                        <Share2 className="w-4 h-4" />
                        Share Article
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="py-16 bg-secondary/30">
                <div className="section-container">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-8">
                      Related Articles
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.slug}`}
                          className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                        >
                          <div className="relative overflow-hidden h-48">
                            <img
                              src={getImageUrl(relatedPost.image_url)}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop";
                              }}
                            />
                          </div>
                          <div className="p-4">
                            <p className="text-xs text-muted-foreground mb-2">
                              {formatShortDate(relatedPost.published_at)}
                            </p>
                            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h3>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary">
              <div className="section-container">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                    Want to Read More Insights?
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Explore more articles, tutorials, and industry insights from our team of experts.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      View All Posts
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogSingleView;