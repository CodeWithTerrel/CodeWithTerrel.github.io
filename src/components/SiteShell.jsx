import { useEffect, useRef, useState } from "react";
import BottomNav from "./BottomNav.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Divider from "./Divider.jsx";

export default function SiteShell() {
    const shellRef = useRef(null);
    const [glow, setGlow] = useState({ x: 50, y: 30 });

    useEffect(() => {
        const el = shellRef.current;

        const onMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setGlow({ x, y });
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <div
            ref={shellRef}
            className="min-h-screen relative"
            style={{
                background:
                    "radial-gradient(1400px 900px at 50% 0%, rgba(40,10,80,0.55), rgba(0,0,0,0) 60%), linear-gradient(180deg, #07010f, #05010b 55%, #040109)",
            }}
        >
            {/* Cursor reactive glow */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: `radial-gradient(520px 520px at ${glow.x}% ${glow.y}%, rgba(180,120,255,0.18), rgba(80,40,180,0.10), rgba(0,0,0,0) 70%)`,
                    transition: "background 60ms linear",
                }}
            />

            <main className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8 pb-28">
                {/* HOME: takes full viewport so About doesn't show until scroll */}
                <section id="home" className="min-h-screen flex items-center pt-10 scroll-mt-24">
                    <Hero />
                </section>

                <Divider />

                <section id="about" className="py-16 scroll-mt-24">
                    <About />
                </section>

                <Divider />

                <section id="skills" className="py-16 scroll-mt-24">
                    <Skills />
                </section>

                <Divider />

                <section id="projects" className="py-16 scroll-mt-24">
                    <Projects />
                </section>

                <Divider />

                <section id="contact" className="py-16 scroll-mt-24">
                    <Contact />
                </section>
            </main>

            <BottomNav />
        </div>
    );
}