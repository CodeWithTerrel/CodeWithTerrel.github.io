import { Github, Linkedin, Mail, Phone } from "lucide-react";

const LINKS = {
    linkedin: "https://www.linkedin.com/in/terrel-lambo-32646b254/",
    github: "https://github.com/YOUR_USERNAME",
    gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=terrellambo4@gmail.com",
};

const PHONE_NUMBER = "+1 6399986395";

export default function Contact() {
    return (
        <div className="glass rounded-3xl p-7 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>

            <div className="mt-6 flex flex-wrap gap-3">
                <a
                    className="glass rounded-2xl px-4 py-3 inline-flex items-center gap-2 hover:bg-white/10 transition"
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Linkedin size={18} />
                    LinkedIn
                </a>

                <a
                    className="glass rounded-2xl px-4 py-3 inline-flex items-center gap-2 hover:bg-white/10 transition"
                    href={LINKS.gmail}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Mail size={18} />
                    Gmail
                </a>

                <a
                    className="glass rounded-2xl px-4 py-3 inline-flex items-center gap-2 hover:bg-white/10 transition"
                    href={LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <Github size={18} />
                    GitHub
                </a>

                {/* Phone: visible on mobile only */}
                <div className="glass rounded-2xl px-4 py-3 inline-flex items-center gap-2 text-white/85 md:hidden">
                    <Phone size={18} />
                    <span>{PHONE_NUMBER}</span>
                </div>
            </div>

            <p className="mt-10 text-sm text-white/60">
                © 2026 Terrel Lambo Matute Esunge. All rights reserved
            </p>
        </div>
    );
}