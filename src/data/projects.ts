
export const projects = [
    {
        slug: "jio-brahmos-web",

        // Card page
        title: "Brahmos",
        subtitle: "Jio Loan Application Webview",
        category: "Banking & Finance",
        description:
            "Mobile-first personal loan onboarding experience embedded inside the Jio native app.",

        heroImage: "/images/work/jio-brahmos-webview/jio_logo.svg",

        // Detail page
        overview:
            "Built a mobile-first loan application experience embedded within a native fintech application. The journey guides users through identity verification, authentication, personal details, employment information, agreement acceptance, and document upload using a secure, step-by-step onboarding flow.",

        domain: "Banking & Finance",
        client: "Jio Financial Services",

        logo: "/images/work/jio-brahmos-webview/jio_logo.svg",

        techStack: [
            "React 19",
            "TypeScript 6",
            "Vite 8",
            "React Router v7",
            "Zustand v5",
            "TanStack Query v5",
            "Axios",
            "React Hook Form",
            "Zod",
            "Tailwind CSS v4",
            "shadcn/ui",
            "Radix UI",
            "i18next",
            "Vitest",
        ],

        features: [
            "Secure user authentication with OTP verification",
            "Multi-step loan application journey",
            "Real-time form validation and progress tracking",
            "Employment and income information capture",
            "Digital agreement acceptance",
            "Document upload with guided workflow",
            "Responsive mobile-first experience"
        ],
        challenges: [
            "Delivering a smooth onboarding experience inside a mobile WebView",
            "HManaging complex multi-step forms while preserving user progress",
            "Ensuring reliable authentication and session continuity",
            "Building reusable and maintainable form components",
        ],
        learnings: [
            "Designing scalable multi-step workflows",
            "Building resilient authentication flows",
            "Improving form usability and accessibility",
            "Collaborating within a large enterprise development team"
        ],
        showcase: [
            {
                title: "OTP Verification",
                description:
                    "Mobile number is verified through a secure OTP step before sensitive loan data is collected.",
                image: "/images/work/jio-brahmos-webview/img-3.webp",
            },
            {
                title: "Identity Verification",
                description:
                    "Users provide PAN and personal information before continuing the onboarding journey.",
                image: "/images/work/jio-brahmos-webview/img-1.webp",
            },
            {
                title: "Personal Details",
                description:
                    "Structured forms capture user profile information with validation and clear progress feedback.",
                image: "/images/work/jio-brahmos-webview/img-3.webp",
            },
            {
                title: "Loan Offer Selection",
                description:
                    "Customers can adjust loan amount and tenure while reviewing EMI details in real time.",
                image: "/images/work/jio-brahmos-webview/img-4.webp",
            },
            {
                title: "Employment Information",
                description:
                    "Work and income details are collected to assess eligibility and tailor the loan offer.",
                image: "/images/work/jio-brahmos-webview/img-5.webp",
            },
            {
                title: "Document Upload",
                description:
                    "Required KYC and supporting documents are uploaded with guided steps and status tracking.",
                image: "/images/work/jio-brahmos-webview/img-7.webp",
            },
        ]
    },
    {
        slug: "hero-hamrahi",

        title: "Hero Hamrahi",

        subtitle: "Mobile Customer Application Design",

        category: "Product Design",

        description:
            "Designed a modern mobile application for Hero Hamrahi focused on delivering an intuitive customer experience with streamlined navigation and task-oriented workflows.",

        heroImage: "/images/work/hero-hamrahi/hero.webp",

        overview:
            "Created high-fidelity mobile UI designs in Figma for the Hero Hamrahi application. The design emphasized usability, visual consistency, and a simplified customer journey while following modern mobile design principles.",

        domain: "Automotive",

        client: "Hero MotoCorp",

        logo: "/images/work/hero-hamrahi/logo.svg",

        tools: [
            "Figma",
            "Design System",
            "Auto Layout",
            "Components",
            "Prototyping"
        ],

        contributions: [
            "Designed end-to-end mobile user flows",
            "Created reusable UI components",
            "Built a scalable design system",
            "Designed responsive mobile layouts",
            "Created interactive prototypes",
            "Collaborated with product and engineering teams"
        ],

        highlights: [
            "Modern visual language",
            "Reusable component library",
            "Accessible layouts",
            "Consistent spacing and typography",
            "Mobile-first experience"
        ],

        gallery: [
            {
                title: "Dashboard",
                description: "Customer home experience.",
                image: "/images/work/hero-hamrahi/dashboard.webp"
            },
            {
                title: "Service Booking",
                description: "Simple booking workflow.",
                image: "/images/work/hero-hamrahi/service.webp"
            },
            {
                title: "Profile",
                description: "Account management interface.",
                image: "/images/work/hero-hamrahi/profile.webp"
            }
        ]
    },
    {
        slug: "hero-housing-finance-connector",

        title: "Hero Housing Finance",

        subtitle: "Connector App Design",

        category: "Product Design",

        description:
            "Designed the mobile experience for field connectors to simplify customer onboarding and loan processing.",

        overview:
            "Focused on creating efficient task-based workflows for field executives. The application was designed to minimize friction during customer onboarding and document collection.",

        domain: "Financial Services",

        client: "Hero Housing Finance",

        tools: [
            "Figma",
            "Auto Layout",
            "Components",
            "Interactive Prototype"
        ],

        contributions: [
            "Mobile workflow design",
            "Loan onboarding screens",
            "Form experience",
            "Document upload flow",
            "Component library"
        ],

        gallery: [
            {
                title: "Dashboard",
                description: "Customer home experience.",
                image: "/images/work/hero-housing-finance-connector/dashboard.webp"
            },
            
            {
                title: "Service Booking",
                description: "Simple booking workflow.",
                image: "/images/work/hero-housing-finance-connector/service.webp"
            },
            {
                title: "Profile",
                description: "Account management interface.",
                image: "/images/work/hero-housing-finance-connector/profile.webp"
            }
        ]
    }
];