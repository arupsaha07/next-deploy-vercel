import {
    Bot,
    Workflow,
    Globe,
    LayoutDashboard,
    Palette,
    Database,
    Sparkles,
    ShieldCheck,
  } from "lucide-react";
  
  export const services = [
    {
      title: "AI Automation",
      description:
        "Custom AI-powered workflows using n8n, APIs, and LLMs to automate repetitive business operations.",
      icon: Bot,
      tags: ["n8n", "OpenAI", "Automation", "AI Agents"],
    },
    {
      title: "Full Stack Applications",
      description:
        "Modern scalable web applications using Next.js, React, Node.js, and TypeScript.",
      icon: Globe,
      tags: ["Next.js", "React", "Node.js", "TypeScript"],
    },
    {
      title: "Dashboard & Portals",
      description:
        "Interactive admin panels, customer dashboards, finance portals, and internal tools.",
      icon: LayoutDashboard,
      tags: ["Dashboard", "Analytics", "Admin Panel", "Portal"],
    },
    {
      title: "Workflow Systems",
      description:
        "End-to-end workflow architecture integrating CRMs, APIs, notifications, and business logic.",
      icon: Workflow,
      tags: ["Business Logic", "API Integration", "CRM", "Automation"],
    },
    {
      title: "UI Engineering",
      description:
        "Premium responsive UI with Tailwind CSS, animations, dark themes, and app-like experiences.",
      icon: Palette,
      tags: ["Tailwind", "Responsive", "Animation", "Modern UI"],
    },
    {
      title: "Authentication & Backend",
      description:
        "Secure authentication systems, database integration, role-based access, and API architecture.",
      icon: ShieldCheck,
      tags: ["Supabase", "Auth", "JWT", "Database"],
    },
  ];