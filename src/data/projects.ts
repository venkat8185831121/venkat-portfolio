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
    title: "Reflct",
    description: "A minimalist journaling application",
    image: "reflct.png",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    github: "https://github.com/venkat8185831121/reflct.git",
    live: "https://reflctt-delta.vercel.app/",
    details: {
      problem: "Digital journaling apps are often cluttered and complex",
      solution:
        "Created a clean, focused writing experience with powerful features",
      features: [
        "Markdown support",
        "Daily prompts",
        "Mood tracking",
        "Privacy-focused design",
      ],
      impact: "Helping users maintain consistent journaling habits",
    },
  },

  {
    title: "Zcrum",
    description: "A Jira-inspired project management solution",
    image: "zcrum.png",
    tech: ["React", "Redux", "Node.js", "PostgreSQL"],
    github: "https://github.com/venkat8185831121/zcrum.git",
    live: "https://zcrum-bice.vercel.app/",
    details: {
      problem: "Need for a simplified project management tool for small teams",
      solution:
        "Developed a streamlined alternative to complex enterprise tools",
      features: [
        "Kanban and Scrum boards",
        "Sprint planning",
        "Time tracking",
        "Performance analytics",
      ],
      impact: "Helping teams increase productivity by 40%",
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
