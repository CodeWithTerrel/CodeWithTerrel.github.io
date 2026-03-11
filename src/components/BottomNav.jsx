import { Home, User, Wrench, FolderKanban, Mail } from "lucide-react";

const items = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "contact", label: "Contact", icon: Mail },
];

export default function BottomNav() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="glass rounded-[28px] px-2.5 py-2 w-full max-w-md sm:max-w-lg">
                <ul className="flex items-center justify-between gap-1.5">
                    {items.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.id} className="flex-1">
                                <button
                                    type="button"
                                    onClick={() => scrollTo(item.id)}
                                    className="w-full rounded-[22px] px-2 py-2 text-white/85 hover:text-white transition flex flex-col items-center gap-1 hover:bg-white/10"
                                >
                                    <Icon size={17} />
                                    <span className="text-[10.5px]">{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}