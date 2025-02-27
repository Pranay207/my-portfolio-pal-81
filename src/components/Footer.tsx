
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary/50 py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-border">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Portfolio</h2>
            <p className="text-muted-foreground max-w-md">
              Creating thoughtful digital experiences that balance form and function.
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
