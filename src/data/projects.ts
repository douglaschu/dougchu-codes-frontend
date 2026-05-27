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
     {
          slug: "eject-external-drives",
          title: "Eject-O-Matic 5000",
          description:
               "An experiment in LLM-assisted coding to solve a particular use case: writing an Apple Automator script to eject my local machine's external hard drives via either icon click or keyboard shortcut.",
          url: "https://github.com/douglaschu/macos-eject-external-drives",
          repoUrl: "https://github.com/douglaschu/macos-eject-external-drives",
          tech: ["shell", "macOS", "automator"],
          stack: "backend",
          featured: true,
     },
     {
          slug: "fantasy-football",
          title: "FantasyBros: Fantasy Football, Crowdsourced.",
          description:
               "A fantasy football website built on crowdsourced user rankings.",
          url: "https://github.com/shane-2/Fantasy_Football",
          repoUrl: "https://github.com/douglaschu/final-fantasy-football",
          tech: [
               "C#",
               ".NET",
               "ASP.NET",
               "Razor",
               "Azure",
               "Docker",
               "SQL",
               "REST APIs",
               "CSS",
               "HTML5",
          ],
          stack: "fullstack",
          featured: false,
     },
     {
          slug: "cookie-delivery",
          title: "The Great Christmas Cookie Delivery",
          description:
               "A holiday-themed take-home technical challenge implementing Dijkstra's shortest-path algorithm in GoLang, which I learned for the first time in one week to complete.",
          url: "https://github.com/douglaschu/cookiedelivery/",
          repoUrl: "https://github.com/douglaschu/cookiedelivery/",
          tech: ["GoLang", "graph algorithms"],
          stack: "backend",
          featured: true,
     },
     {
          slug: "Pipli.ne",
          title: "Pipeli.ne: Project Tracking Made Easy",
          description:
               "A project management tool built for Seamless, a Michigan-based iOT startup incubator.",
          url: "https://astarr19.github.io/pipeli.ne/",
          repoUrl: "https://github.com/douglaschu/pipeli.ne",
          tech: ["Angular", "TypeScript", "CSS", "HTML5"],
          stack: "fullstack",
          featured: false,
     },
     {
          slug: "movie-website",
          title: "NAMW: Not Another Movie  Website",
          description:
               "A legally distinct Letterboxd clone for looking up movies and making watchlists, built in Angular.",
          url: "https://astarr19.github.io/movieDB-Angular/movie-list",
          repoUrl: "https://github.com/douglaschu/movieDB-Angular",
          tech: ["Angular", "TypeScript", "CSS", "HTML5"],
          stack: "fullstack",
          featured: false,
     },
];

export function getAllProjects(): Project[] {
     return projects;
}
