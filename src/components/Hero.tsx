
import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current?.classList.add('stagger-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      const yOffset = -80;
      const y = nextSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div 
          ref={heroRef}
          className="max-w-4xl mx-auto text-center stagger-children"
        >
          <span className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-primary/10 rounded-full animate-fade-in">
            Welcome to my portfolio
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Creating thoughtful</span>
            <span className="block">digital experiences</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            I design and build digital products that help businesses solve problems and delight their customers.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium flex items-center gap-2 transition-transform hover:translate-y-[-2px] active:translate-y-[1px]"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#projects');
                if (element) {
                  const yOffset = -80;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 border border-primary/20 rounded-md font-medium hover:bg-primary/5 transition-all"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  const yOffset = -80;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground animate-pulse cursor-pointer"
      >
        <span className="mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
