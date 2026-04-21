import { Link, useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search, Mail, FileQuestion } from "lucide-react";
import { useEffect, useState } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const [autoRedirect, setAutoRedirect] = useState(true);

  // Auto redirect countdown
  useEffect(() => {
    if (!autoRedirect) return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigate('/');
    }
  }, [countdown, navigate, autoRedirect]);

  const cancelAutoRedirect = () => {
    setAutoRedirect(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8 relative">
          {/* Large 404 Text */}
          <div className="text-[150px] md:text-[250px] font-bold font-heading leading-none">
            <span className="text-primary/20">4</span>
            <span className="text-primary/30 relative inline-block">
              0
              {/* Spinning Icon inside 0 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-32 md:h-32">
                  <FileQuestion className="w-full h-full text-primary/50 animate-pulse" />
                </div>
              </div>
            </span>
            <span className="text-primary/20">4</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off into the digital wilderness.
          </p>
          <p className="text-sm text-muted-foreground">
            Don't worry, even the best explorers get lost sometimes!
          </p>
        </div>

        {/* Auto Redirect Notice */}
        {autoRedirect && (
          <div className="mb-8 inline-block bg-primary/10 border border-primary/20 rounded-lg px-6 py-3">
            <p className="text-sm text-foreground">
              Redirecting to homepage in{" "}
              <span className="font-bold text-primary text-lg">{countdown}</span>{" "}
              seconds...
            </p>
            <button
              onClick={cancelAutoRedirect}
              className="text-xs text-muted-foreground hover:text-foreground underline mt-1"
            >
              Cancel auto-redirect
            </button>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-secondary/50 transition-all hover:scale-105"
          >
            <Search className="w-5 h-5" />
            View Blog
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-border pt-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Popular Pages
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="text-border">•</span>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <span className="text-border">•</span>
            <Link
              to="/services"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <span className="text-border">•</span>
            <Link
              to="/blog"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <span className="text-border">•</span>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-card border border-border rounded-xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="font-semibold text-foreground mb-2">
            Still can't find what you're looking for?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Our team is here to help. Get in touch and we'll assist you right away.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Support
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>

        {/* Error Code */}
        <div className="mt-12 text-xs text-muted-foreground">
          Error Code: 404 | Page Not Found
        </div>
      </div>
    </div>
  );
};

export default NotFound;
