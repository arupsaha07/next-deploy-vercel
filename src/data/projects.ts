import { Database, FileText, KeyRound, RefreshCw, ShieldCheck, Smartphone } from "lucide-react";

export const projects = [
    {
        slug: "jio-brahmos-web",

        // Card page
        title: "Brahmos",
        subtitle: "Jio Loan Application Webview",
        category: "Banking & Finance",
        shortDescription:
            "Mobile-first personal loan onboarding experience embedded inside the Jio native app.",

        // Detail page
        overview:
            "A mobile-first webview app embedded inside a Jio native app that guides users through a personal loan application journey. It handles the full flow from identity validation → mobile OTP → personal details → loan amount selection → work details → loan agreement → document upload. The app is launched by the native shell with a signed key, exchanges it for an auth token, and progresses the user through a linear multi-stage loan onboarding process.",

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
            "Identity validation",
            "OTP verification",
            "Personal details collection",
            "Loan amount selection",
            "Employment information",
            "Agreement acceptance",
            "Document upload flow",
        ],

        architecture: {
            authenticationFlow: [
                {
                    icon: Smartphone,
                    title: "Native App",
                    description: "Launches secure WebView",
                },
                {
                    icon: KeyRound,
                    title: "Signed Key",
                    description: "Passed from host application",
                },
                {
                    icon: ShieldCheck,
                    title: "Auth Token",
                    description: "Creates authenticated session",
                },
            ],

            applicationFlow: [
                {
                    icon: FileText,
                    title: "Loan Journey",
                    description: "Linear multi-step onboarding",
                },
                {
                    icon: Database,
                    title: "Zustand Persist",
                    description: "Stores progress locally",
                },
                {
                    icon: RefreshCw,
                    title: "TanStack Query",
                    description: "Handles API communication",
                },
            ],
        },

        metrics: [
            "Multi-stage onboarding flow",
            "Automatic token refresh",
            "State persistence with Zustand",
            "English + Hindi support",
        ],

        challenges: [
            "Maintaining session continuity inside WebView",
            "Handling token expiry gracefully",
            "Managing large multi-step forms",
        ],

        solutions: [
            "Axios interceptor for token refresh",
            "Zustand persistence for progress retention",
            "React Hook Form + Zod validation",
        ],

        learnings: [
            "Building resilient onboarding journeys",
            "Separating client and server state",
            "Creating reusable form patterns",
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
                title: "Agreement Acceptance",
                description:
                    "Users review terms and digitally accept the loan agreement before moving to document upload.",
                image: "/images/work/jio-brahmos-webview/img-6.webp",
            },
            {
                title: "Document Upload",
                description:
                    "Required KYC and supporting documents are uploaded with guided steps and status tracking.",
                image: "/images/work/jio-brahmos-webview/img-7.webp",
            },
        ]
    },
];