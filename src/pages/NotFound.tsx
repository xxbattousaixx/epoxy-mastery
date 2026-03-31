import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | EpoxyMasters</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="mb-4 text-8xl font-display font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Check out our <Link to="/services" className="text-primary underline">epoxy flooring services</Link> or <Link to="/contact" className="text-primary underline">contact us</Link> for help.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/">
              <Button variant="cta" size="lg">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <a href="tel:+19415181657">
              <Button variant="outline" size="lg">
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
