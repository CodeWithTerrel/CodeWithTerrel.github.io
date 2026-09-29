import {
    Home,
    User,
    Wrench,
    FolderKanban,
    BriefcaseBusiness,
    Mail,
} from "lucide-react";

const items = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "projects", label: "Projects", icon: FolderKanban },
    {
        id: "experience",
        label: "Experience",
        icon: BriefcaseBusiness,
    },
    { id: "contact", label: "Contact", icon: Mail },
];

export default function BottomNav() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);

        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4">
            <nav
                aria-label="Main navigation"
                className="glass rounded-[28px] px-2 py-2 w-full max-w-md sm:max-w-xl"
            >
                <ul className="grid grid-cols-6 gap-0 sm:gap-1">
                    {items.map((item) => {
                        const Icon = item.icon;

                        return (
                            <li key={item.id} className="min-w-0">
                                <button
                                    type="button"
                                    onClick={() => scrollTo(item.id)}
                                    className="w-full rounded-[22px] px-1 py-2 text-white/85 hover:text-white transition flex flex-col items-center gap-1 hover:bg-white/10"
                                >
                                    <Icon
                                        size={17}
                                        aria-hidden="true"
                                    />

                                    <span className="text-[9px] sm:text-[11px]">
                                        {item.label}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}