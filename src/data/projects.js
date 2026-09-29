export const projects = [
    {
        id: "aldo",
        title: "ALDO Management System",
        type: "Progressive Web App",
        oneLine:
            "A mobile-first store tool for M-Find tracking, employee access, and bathroom scheduling.",
        description:
            "An internal store-management application that brings everyday team tasks into one interface. Employees can track M-Find checkout and returns, review daily activity, and manage bathroom assignments. Role-based access separates administrator tools from regular employee features.",
        features: [
            "Employee login with administrator and regular employee roles.",
            "M-Find ready list, checkout and return tracking.",
            "Activity history grouped by day.",
            "Bathroom assignments, notes, and completion tracking.",
            "Installable mobile-first PWA.",
        ],
        tech: [
            "React",
            "Vite",
            "Supabase",
            "PWA",
            "Cloudflare Pages",
        ],
        images: [],
    },
    {
        id: "caremap",
        title: "CareMap",
        type: "Web Application",
        status: "Under development",
        oneLine:
            "Helping parents discover childcare providers and request a place on a waitlist.",
        description:
            "A childcare discovery platform currently under development. The planned MVP focuses on searchable provider listings, manually updated availability, and waitlist requests requiring provider approval. One account can support both parent and provider roles.",
        featuresTitle: "Planned MVP features",
        features: [
            "Searchable childcare provider listings.",
            "Provider-managed availability updates.",
            "Parent and provider roles within one account.",
            "Waitlist requests with provider approval.",
            "In-app notifications.",
            "Map-based discovery planned for a later phase.",
        ],
        tech: [
            "UI/UX Design",
            "Requirements Analysis",
            "System Design",
            "Web Development",
        ],
        images: [],
    },
    {
        id: "homelab",
        title: "Home Lab",
        type: "Infrastructure & Self-Hosting",
        status: "Ongoing",
        oneLine:
            "A Proxmox-based Dell OptiPlex lab for virtualization and self-hosted services.",
        description:
            "A personal home lab built around a Dell OptiPlex running Proxmox. It provides a hands-on environment for exploring virtualization, Linux administration, networking, and self-hosted applications.",
        featuresTitle: "Current foundation",
        features: [
            "Dell OptiPlex server.",
            "Proxmox virtualization environment.",
        ],
        planned: [
            "Ubuntu Server and Docker for running services.",
            "Portainer for managing containers.",
            "Jellyfin for organizing and streaming a personal media library.",
            "AdGuard Home for network-wide DNS filtering.",
            "Nextcloud/WebDAV for file storage and access.",
            "Tailscale for private remote access.",
            "Download automation for authorized content.",
        ],
        tech: [
            "Proxmox",
            "Dell OptiPlex",
            "Virtualization",
        ],
        images: [],
    },
    {
        id: "aitutor",
        title: "AI Tutor App (LLM Integration)",
        type: "CST Capstone Project",
        oneLine:
            "AI-assisted study resources with instructor control over student-facing content.",
        description:
            "A team capstone project that generates learning resources from course documents. Instructors can review generated content before making it available to students.",
        features: [
            "Document-based summaries and study guides.",
            "Generated flashcards and quizzes.",
            "Instructor review and content visibility controls.",
            "Course and module organization.",
        ],
        tech: [
            "React",
            "Tailwind CSS",
            "FastAPI",
            "Haystack",
            "ChromaDB",
            "Ollama",
            "SQLite",
        ],
        images: [],
    },
    {
        id: "gamehub",
        title: "Web Game Hub + Cypress Testing",
        type: "Developer Project",
        oneLine:
            "A web game hub with interactive navigation and automated testing.",
        description:
            "A web project combining interactive game interfaces, navigation, and automated Cypress testing to validate application behaviour.",
        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Cypress",
            "Bootstrap",
        ],
        images: [],
    },
];