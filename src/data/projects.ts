export type ProjectStack = "fullstack" | "frontend" | "backend";

export type Project = {
     slug: string;
     title: string;
     description: string;
     image?: string;
     imageAlt?: string;
     url?: string;
     repoUrl?: string;
     blogUrl?: string;
     tech: string[];
     stack: ProjectStack;
     featured?: boolean;
};

const projects: Project[] = [
     {
          slug: "dougchu-codes",
          title: "Doug Chu Codes",
          description: "My personal website. You're already here!",
          url: "https://dougchu.codes",
          repoUrl: "https://github.com/douglaschu/dougchu-codes-frontend",
          tech: ["astro", "react", "typescript", "css", "mdx"],
          stack: "fullstack",
          featured: true,
     },
     {
          slug: "ace-court-bot-bsky",
          title: "Ace Attorney Bot: Bluesky Edition",
          description:
               "An iteration for Bluesky of the Phoenix Wright: Ace Attorney social media bot that renders conversation threads into dramatic courtroom scenes.",
          url: "https://bsky.app/profile/acecourtbot-jr.bsky.social",
          repoUrl: "https://github.com/douglaschu/ace-attorney-bsky-bot-ts",
          tech: ["typescript", "python", "docker", "ml"],
          stack: "backend",
          featured: true,
     },
];

export function getAllProjects(): Project[] {
     return projects;
}
