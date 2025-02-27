
import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import { ExternalLink, Code, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  codeLink?: string;
};

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projectsRef.current?.classList.add('stagger-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      description: "A full-featured online shopping experience with real-time inventory and secure payment processing.",
      image: "bg-gradient-to-br from-pink-100 to-purple-200",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 2,
      title: "Financial Dashboard",
      description: "Interactive analytics dashboard for tracking investments and financial metrics with data visualization.",
      image: "bg-gradient-to-br from-blue-100 to-cyan-200",
      tags: ["Vue", "D3.js", "Express", "PostgreSQL"],
      liveLink: "#",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      description: "Patient-centered mobile application for appointment scheduling and health record management.",
      image: "bg-gradient-to-br from-green-100 to-teal-200",
      tags: ["React Native", "Firebase", "GraphQL", "Figma"],
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="My Work"
          title="Featured Projects"
          description="A selection of my recent work showcasing my design and development capabilities."
        />
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 stagger-children"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-medium group"
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
            Interested in working together?
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
      <div 
        className={cn(
          "h-48 flex items-center justify-center", 
          project.image
        )}
      >
        <span className="text-xl font-medium text-primary/70">Project Image</span>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium bg-primary/10 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex gap-4">
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
          
          {project.codeLink && (
            <a 
              href={project.codeLink} 
              className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Code className="h-4 w-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
