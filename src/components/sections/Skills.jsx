const Tile = ({ title, children, className }) => {
    return (
        <div
            className={[
                "glass rounded-3xl p-6 sm:p-7",
                "border border-white/15",
                "transition-all duration-300",
                "hover:border-white/40 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_30px_rgba(180,120,255,0.18)]",
                className,
            ].join(" ")}
        >
            <h3 className="text-lg font-semibold text-white/90">{title}</h3>
            <div className="mt-3 text-white/75 leading-relaxed">{children}</div>
        </div>
    );
};

export default function Skills() {
    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5">
                {/* Row 1: left smaller, right longer */}
                <Tile title="Web Development" className="md:col-span-5">
                    React, HTML, CSS, JavaScript, NodeJs, Python, responsive UI, component-driven design, and clean front-end structure with modern tooling.
                </Tile>

                <Tile title="Languages" className="md:col-span-7">
                    English and French. Comfortable communicating technical ideas clearly and working in diverse teams.
                </Tile>

                {/* Row 2: left longer, right smaller */}
                <Tile title="Programming & Technical" className="md:col-span-7">
                    Java, JavaScript, client-server projects, database work, testing workflows, and using AI to accelerate development
                    (idea generation, debugging, documentation, and building smarter features).
                </Tile>

                <Tile title="Soft Skills" className="md:col-span-5">
                    Strong communication, teamwork, fast learning, problem-solving, and staying organized under deadlines.
                </Tile>
            </div>
        </div>
    );
}