import React from 'react';
import { 
  Code2, 
  Cpu, 
  Newspaper, 
  Terminal, 
  Globe, 
  Github, 
  Layout, 
  BrainCircuit, 
  BarChart3,
  Users
} from 'lucide-react';
import { Project, EducationEntry, SkillCategory, Certification } from './types.ts';

export const PROJECTS: Project[] = [
  {
    title: "Arcade Learn",
    description: "AI Powered Career & Skills Advisor. An AI-based platform guiding students with personalized career roadmaps and skill suggestions.",
    icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
    tags: ["AI", "React", "NLP", "Career Pathing"]
  },
  {
    title: "Krishi Mitra",
    description: "AI Farmer Support System providing crop recommendations, disease detection, and market price predictions for modern agriculture.",
    icon: <Cpu className="w-8 h-8 text-purple-600" />,
    tags: ["Machine Learning", "Agriculture", "Python", "Data Analysis"]
  },
  {
    title: "Nexity60",
    description: "60 Seconds AI News Summarizer. Converts long-form news into quick, digestible 1-minute summaries using advanced NLP techniques.",
    icon: <Newspaper className="w-8 h-8 text-indigo-600" />,
    tags: ["NLP", "Summarization", "Web Scraper", "Frontend"]
  }
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: "BTech (Computer Science Engineering)",
    institution: "KL University",
    year: "2024 - 2028 (Expected)",
    percentage: "93.86%"
  },
  {
    degree: "HSC (Class XII)",
    institution: "Army Public School Golconda",
    year: "2024",
    percentage: "91%"
  },
  {
    degree: "SSC (Class X)",
    institution: "Army Public School Golconda",
    year: "2022",
    percentage: "95%"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    items: ["C", "Java", "Python"]
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "ReactJS"]
  },
  {
    category: "Tools & Platforms",
    items: ["MS Excel", "MS Word", "PowerPoint", "GitHub", "Git"]
  },
  {
    category: "Domain Expertise",
    items: ["AI & NLP Basics", "Digital Marketing", "Software Development", "Data Structures"]
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { provider: "IBM", name: "Introduction to AI" },
  { provider: "IBM", name: "HTML, CSS & JavaScript" },
  { provider: "IBM", name: "Git & GitHub" },
  { provider: "Board Infinity", name: "Spring Boot & MVC" },
  { provider: "Packt", name: "ReactJS Development" }
];

export const SOCIAL_LINKS = {
  email: "gandijahnavi886@gmail.com",
  linkedin: "https://www.linkedin.com/in/g-jahnavi-a4638234b/",
  github: "https://github.com/jahnavii088"
};