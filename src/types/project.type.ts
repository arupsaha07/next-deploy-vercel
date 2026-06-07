import { LucideIcon } from "lucide-react";

export interface FlowItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProjectFlows {
  authenticationFlow?: FlowItem[];
  applicationFlow?: FlowItem[];
  agentFlow?: FlowItem[];
  workflowFlow?: FlowItem[];
  processingFlow?: FlowItem[];
}

export interface ShowcaseItem {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  shortDescription: string;
  overview: string;
  domain?: string;
  client?: string;
  logo?: string;
  techStack: string[];
  features: string[];
  flows?: ProjectFlows;
  challenges?: string[];
  solutions?: string[];
  learnings?: string[];
  metrics?: string[];
  showcase?: ShowcaseItem[];
}
