import { useMemo, useState } from "react";

const projectsSeed = [
    {
        title: "Smart Grocery Manager (Android)",
        oneLine: "Track grocery items, expiry dates, and item notifications with a clean UI.",
        type: "Developer Project",
        description:
            "An Android app that manages grocery items with categories, expiry tracking, and notifications. Focused on reliability, UX clarity, and local data storage.",
        tech: ["Java", "Android Studio", "RecyclerView", "SQLite/Local Storage", "Notifications"],
    },
    {
        title: "Fitness Tracker App (Android)",
        oneLine: "Dashboard tracking distance goals, history, and settings with simulated movement.",
        type: "Developer Project",
        description:
            "A fitness tracking app with a dashboard view, progress toward goals, history, and settings. Includes simulated movement and saved progress.",
        tech: ["Java", "Android", "SharedPreferences", "UI Layouts (XML)"],
    },
    {
        title: "AI Tutor App (LLM Integration)",
        oneLine: "Exploring LLM-based tutoring features like quizzes, flashcards, and chat.",
        type: "Developer Project",
        description:
            "A concept-driven tutoring application integrating LLM workflows to generate summary cards, flash cards, quizzes, and conversational help.",
        tech: ["Node/Backend Concepts", "Auth Tokens", "LLM Tools", "API Integration"],
    },
    {
        title: "Local Service Hub (Marketplace)",
        oneLine: "A Fiverr-like marketplace concept with provider/customer roles and listings.",
        type: "Developer Project",
        description:
            "A marketplace project idea focusing on service listings, user roles, and scalable structure for future integrations like payments and search.",
        tech: ["React", "Node/Express", "Database Concepts", "UI/UX Design"],
    },
    {
        title: "Client-Server File Transfer",
        oneLine: "Menu-driven client-server app supporting upload, download, and file listing.",
        type: "Developer Project",
        description:
            "A multi-threaded client-server application that handles file uploads/downloads and listing, using structured commands and clear server dispatch logic.",
        tech: ["Java", "Sockets", "Multithreading", "Object Streams"],
    },
    {
        title: "Web Game Hub + Cypress Testing",
        oneLine: "Dynamic UI navigation patterns with Cypress tests for stability.",
        type: "Developer Project",
        description:
            "A web project that includes UI navigation logic and automated testing using Cypress to validate components and interactions.",
        tech: ["HTML", "CSS", "JavaScript", "Cypress", "Bootstrap"],
    },
];

function Modal({ open, onClose, project }) {
    if (!open || !project) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/70" onClick={onClose} />

            <div className="relative z-[61] w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 text-black">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold">{project.title}</h3>
                        <p className="mt-1 text-sm text-black/70">{project.type}</p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg px-3 py-2 bg-black/5 hover:bg-black/10 transition"
                    >
                        Close
                    </button>
                </div>

                <div className="mt-5">
                    <h4 className="font-semibold">Description</h4>
                    <p className="mt-2 text-black/80 leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-5">
                    <h4 className="font-semibold">Technologies Used</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-sm">
                {t}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const projects = useMemo(() => projectsSeed.slice(0, 6), []);
    const [active, setActive] = useState(null);

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
            <p className="mt-2 text-white/70">A small selection of recent project</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((p) => (
                    <div
                        key={p.title}
                        className={[
                            "glass rounded-3xl p-6",
                            "border border-white/15",
                            "transition-all duration-300",
                            "hover:border-white/40 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_30px_rgba(180,120,255,0.18)]",
                        ].join(" ")}
                    >
                        <div className="h-40 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center text-white/60">
                            Project Image Placeholder
                        </div>

                        <div className="mt-4 flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white/90">{p.title}</h3>
                                <p className="mt-1 text-sm text-white/70">{p.oneLine}</p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setActive(p)}
                                className="shrink-0 rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white/90 transition"
                            >
                                See more details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal open={!!active} onClose={() => setActive(null)} project={active} />
        </div>
    );
}