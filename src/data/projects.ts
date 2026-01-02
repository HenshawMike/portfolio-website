import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Zone brand e-commerce website',
    category: 'web-apps',
    year: '2025',
    slug: 'zone-brand-ecommerce-website',
    coverImage: '/images/z0.png',
    description: 'e-commerce for a clothing brand that is in business',
    techStack: [ 'Typescript','Next.js', 'React', 'Supabase','Tailwind CSS', 'Netlify'],
    github: 'https://github.com/HenshawMike/zone-shop',
    liveDemo: 'https://zone-shop.netlify.app',
    images: [
      {
        id: '1-1',
        src: '/images/z1.png',
        alt: 'Zone brand e-commerce website',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: '/images/z2.png',
        alt: 'Zone brand e-commerce website',
        aspectRatio: 'landscape'
      },
      {
        id: '1-3',
        src: '/images/z0.png',
        alt: 'Zone e-commerce website',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '2',
    title: 'NERA',
    category: 'ai-ml',
    year: '2025',
    slug: 'real estate assitant',
    coverImage: '/images/nera01.png',
    description: 'This is a project built to aid and guide people that are into real estate, with a machine model trained to predict prices of house for sale ',
    techStack: ['Python', 'React', 'Linear Regression', 'lightGBM','Render', 'Supabase','Tailwind CSS', 'Netlify'],
    github: 'https://github.com/HenshawMike/nera',
    liveDemo:'https://nera-ai.netlify.app',
    images: [
      {
        id: '2-1',
        src: '/images/nera2.png',
        alt: 'NERA-model',
        aspectRatio: 'landscape'
      },
      {
        id: '2-2',
        src: '/images/nera1.png',
        alt: 'NERA-chat',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '3',
    title: 'Domtornyluxehairmpire',
    category: 'web-apps',
    year: '2025',
    slug: 'A wig brand website',
    coverImage: '/images/d2.png',
    description: 'A wig brand webapp that is in business',
    techStack: ['Firebase', 'Next.js', 'React', 'Tailwind CSS', 'Netlify'],
    github: 'https://github.com/HenshawMike/wig',
    liveDemo:'https://domtornyluxehairmpire.netlify.app',
    images: [
      {
        id: '3-1',
        src: 'images/d1.png',
        alt: 'wig-site',
        aspectRatio: 'landscape'
      },
      {
        id: '3-2',
        src: 'images/d3.png',
        alt: 'wig-site',
        aspectRatio: 'landscape'
      }

    ]
  },
  { 
    id:'4',
    title: 'multi-agent-research-assistant',
    category: 'ai-agent',
    year: '2026',
    slug: 'multi-agent-research-assistant',
    coverImage: '/images/ml3.png',
    description: 'A multi-agent system that can assist in research',
    techStack: ['Python', 'Streamlit'],
    github: 'https://github.com/HenshawMike/multi-agent-research-assistant',
    liveDemo:'https://multi-agent-research-assistant-s.streamlit.app/',
    images: [
      {
        id: '4-1',
        src: 'images/ml03.png',
        alt: 'multi-agent-research-assistant',
        aspectRatio: 'landscape'
      },
      {
        id: '4-2',
        src: '/images/ml4.png',
        alt: 'multi-agent-research-assistant',
        aspectRatio: 'landscape'
      }

    ]
  },
  
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
