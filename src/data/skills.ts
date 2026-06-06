import {
    Paintbrush,
    GitBranch,
    Globe,
    Layers3,
    Server,
    Workflow,
  } from "lucide-react";
  
  export const skills = [
    {
      title: "Frontend",
      icon: Globe,
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Styling",
      icon: Layers3,
      items: [
        "Tailwind CSS",
        "SCSS",
        "Bootstrap",
        "Responsive Design",
        "UI Systems",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      items: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    },
    {
      title: "Tools",
      icon: GitBranch,
      items: ["Git", "GitHub", "Bitbucket", "Jira", "Vercel"],
    },
    {
      title: "Design",
      icon: Paintbrush,
      items: ["Figma", "Photoshop", "Illustrator", "Modern UI/UX"],
    },
    {
      title: "AI & Automation",
      icon: Workflow,
      items: ["n8n", "AI Workflows", "ChatGPT APIs", "Automation Systems"],
    },
  ];