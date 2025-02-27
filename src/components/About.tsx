
import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import { ArrowRight, Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current?.classList.add('stagger-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="About Me"
          title="My Journey"
          description="My background combines design and technology to create meaningful user experiences."
        />
        
        <div 
          ref={aboutRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center stagger-children"
        >
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl h-[500px]">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                {/* Placeholder for profile image */}
                <div className="w-60 h-60 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-medium text-primary/70">Your Photo</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate designer and developer with a focus on creating intuitive, user-centered digital experiences. With expertise in both visual design and front-end development, I bridge the gap between aesthetics and functionality.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Professional Experience</h3>
                  <p className="text-muted-foreground">Over 5 years of experience in web design and development, working with clients from various industries.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Education</h3>
                  <p className="text-muted-foreground">Bachelor's degree in Computer Science with a focus on Human-Computer Interaction.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Achievements</h3>
                  <p className="text-muted-foreground">Recognized for excellence in design and development with multiple industry awards.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-primary font-medium mt-4 group"
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
              Let's work together
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
