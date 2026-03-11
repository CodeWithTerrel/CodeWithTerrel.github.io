import profilePic from "../../assets/images/profile.jpg";
import { Code2, Brush } from "lucide-react";
import StarDust from "../StarDust.jsx";

export default function Hero() {
    return (
        <div className="relative glass-strong rounded-3xl p-6 sm:p-10 overflow-hidden">
            {/* Star dust behind this HOME section */}
            <StarDust density={110} />

            {/* Dark overlay so text stays readable */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                    <h1 className="leading-[0.95] tracking-tight font-semibold">
            <span className="block text-4xl sm:text-6xl md:text-7xl glass-text">
              Terrel Lambo
            </span>
                        <span className="block text-4xl sm:text-6xl md:text-7xl glass-text">
              Matute Esunge
            </span>
                    </h1>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="glass rounded-2xl px-3 py-2 inline-flex items-center gap-2 text-sm text-white/90">
              <Code2 size={18} />
              Developer
            </span>
                        <span className="glass rounded-2xl px-3 py-2 inline-flex items-center gap-2 text-sm text-white/90">
              <Brush size={18} />
              Graphic Designer
            </span>
                    </div>

                    <p className="mt-4 text-sm sm:text-[13px] text-white/65 max-w-2xl">
                        Portfolio website built with React and Tailwind. Glass UI, cosmic atmosphere, and a subtle light-reactive interface.
                    </p>
                </div>

                <div className="lg:col-span-4">
                    <div className="w-full h-[280px] sm:h-[320px] rounded-2xl border border-white/20 bg-white/5 overflow-hidden">
                        <img
                            src={profilePic}
                            alt="Terrel Lambo Matute Esunge"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}