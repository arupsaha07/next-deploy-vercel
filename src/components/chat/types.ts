export type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
}

export type QuickActionsProps = {
    onSelect: (value: string) => void;
}

export type ChatWindowProps = {
    onClose: () => void;
    messages: Message[];
    onSend: (message: string) => void;
}

export type Project ={
    slug: string;
    title: string;
    subtitle: string;
    description: string;
  
    heroImage: string;
  
    techStack: string[];
  
    meta: {
      role: string;
      duration: string;
      platform: string;
      team: string;
      industry: string;
    };
  
    github?: string;
    liveUrl?: string;
  }

export type HeroSectionProps = {
    project: Project;
}

