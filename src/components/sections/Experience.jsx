import { FileText } from "lucide-react";

// Later, add your PDF at:
// src/assets/documents/resume.pdf
//
// Until that file exists, the button remains disabled.
const resumeFiles = import.meta.glob(
    "../../assets/documents/*.pdf",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

const resumeUrl =
    resumeFiles["../../assets/documents/resume.pdf"];

const experience = [
    {
        company: "Sport Chek",
        role: "Footwear Advisor",
        dates: "October 2025 – Present",
        description:
            "Help customers find footwear suited to their needs, answer product questions, and provide a welcoming shopping experience. Support stock organization and daily store operations.",
    },
    {
        company: "ALDO",
        role: "Sales Associate",
        dates: "November 2023 – Present",
        description:
            "Assist customers with product selection, purchases, and returns. Process transactions, support inventory management, and use M-Find to locate products while collaborating with the store team.",
    },
];

const education = [
    {
        school: "Saskatchewan Polytechnic",
        qualification:
            "Diploma · Computer Systems Technology",
        dates: "Graduated 2026",
    },
    {
        school: "Saskatoon Business College (SBC)",
        qualification:
            "Diploma · Graphic Design Specialist",
        dates: "2022 – 2023",
    },
];

export default function Experience() {
    const resumeButtonClass =
        "inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm";

    return (
        <div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    Experience & Education
                </h2>

                {resumeUrl ? (
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`${resumeButtonClass} bg-white/10 hover:bg-white/15 transition`}
                    >
                        <FileText size={18} />
                        View PDF Resume
                    </a>
                ) : (
                    <div>
                        <button
                            type="button"
                            disabled
                            aria-describedby="resume-status"
                            className={`${resumeButtonClass} opacity-50 cursor-not-allowed`}
                        >
                            <FileText size={18} />
                            View PDF Resume
                        </button>

                        <p
                            id="resume-status"
                            className="mt-2 text-xs text-white/60"
                        >
                            PDF coming soon
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Experience */}
                <div className="glass rounded-3xl p-6 sm:p-7">
                    <h3 className="text-xl font-semibold">
                        Experience
                    </h3>

                    <div className="mt-6 space-y-7">
                        {experience.map((job) => (
                            <article
                                key={job.company}
                                className="border-l border-purple-300/40 pl-5"
                            >
                                <p className="text-sm text-purple-200">
                                    {job.dates}
                                </p>

                                <h4 className="mt-1 text-lg font-semibold">
                                    {job.role}
                                </h4>

                                <p className="mt-1 text-white/90">
                                    {job.company}
                                </p>

                                <p className="mt-3 text-white/75 leading-relaxed">
                                    {job.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Education and certification */}
                <div className="glass rounded-3xl p-6 sm:p-7">
                    <h3 className="text-xl font-semibold">
                        Education
                    </h3>

                    <div className="mt-6 space-y-6">
                        {education.map((item) => (
                            <article key={item.school}>
                                <h4 className="text-lg font-semibold">
                                    {item.school}
                                </h4>

                                <p className="mt-1 text-white/80">
                                    {item.qualification}
                                </p>

                                <p className="mt-1 text-sm text-purple-200">
                                    {item.dates}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-7 border-t border-white/15 pt-5">
                        <h3 className="text-xl font-semibold">
                            Certification
                        </h3>

                        <h4 className="mt-3 font-medium">
                            AWS Certified Solutions Architect –
                            Associate
                        </h4>

                        <p className="mt-1 text-sm text-white/70">
                            Amazon Web Services · SAA-C03
                        </p>

                        <span className="mt-3 inline-block rounded-full bg-purple-300/10 px-3 py-1 text-sm text-purple-200">
                            In progress
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}