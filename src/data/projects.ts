import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  

  {
    title: "Schedulrr",
    description: "A Calendly clone for seamless meeting scheduling",
    image: "schedulrr.png",
    tech: ["Next.js", "TypeScript", "Prisma", "tRPC"],
    github: "https://github.com/venkat8185831121/SCHEDULRR.git",
    live: "https://schedulrr-seven.vercel.app/",
    details: {
      problem: "Complex meeting scheduling across time zones",
      solution:
        "Created an intuitive scheduling platform with automated time zone handling",
      features: [
        "Multiple calendar integration",
        "Custom availability rules",
        "Automated reminders",
        "Team scheduling",
      ],
      impact: "Reduced meeting scheduling time by 80% for users",
    },
  },
  
  {
    title: "Calclumate",
    description: "A minimalist Calclulation app for investor",
    image: "calclumate.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/venkat8185831121/calcumate-visualizer.git",
    live: "https://calclumate.netlify.app/",
    details: {
      problem: "Digital calclulation  are often cluttered and complex",
      solution:
        "Created a clean, focused chats with powerful features",
      features: [
        "Market support",
        "udeful insights",
        "investment tracking",
        "Privacy-focused design",
      ],
      impact: "Helping users maintain consistent investments",
    },
  },
];
