
import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import { cn } from '@/lib/utils';

type Skill = {
  category: string;
  items: string[];
};

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsRef.current?.classList.add('stagger-visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills: Skill[] = [
    {
      category: "Design",
      items: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems", "Figma", "Adobe XD", "Illustrator", "Photoshop"]
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue", "Next.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "GraphQL", "RESTful APIs"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Webpack", "Vite", "Jest", "CI/CD", "Responsive Design", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="My Expertise"
          title="Skills & Technologies"
          description="The tools, technologies, and methodologies I use to bring digital products to life."
        />
        
        <div 
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children"
        >
          {skills.map((skillGroup, idx) => (
            <SkillCategory key={idx} category={skillGroup.category} items={skillGroup.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ category, items }: Skill) => {
  return (
    <div className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
      <h3 className="text-xl font-semibold mb-4 pb-3 border-b">{category}</h3>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/70"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
