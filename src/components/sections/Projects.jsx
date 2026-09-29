import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { projects } from "../../data/projects.js";

function ProjectImage({ image, title, className }) {
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        setFailed(false);
    }, [image?.src]);

    if (!image?.src || failed) {
        return (
            <div
                className={`${className} flex flex-col items-center justify-center gap-3 bg-white/5 text-white/60`}
            >
                <Images size={30} aria-hidden="true" />

                <span className="text-sm">
                    {failed
                        ? "Image unavailable"
                        : "Project images coming soon"}
                </span>
            </div>
        );
    }

    return (
        <img
            src={image.src}
            alt={image.alt || title}
            className={className}
            loading="lazy"
            onError={() => setFailed(true)}
        />
    );
}

function ProjectDetails({ project, onClose }) {
    const dialogRef = useRef(null);
    const [imageIndex, setImageIndex] = useState(0);
    const images = project.images || [];

    const changeImage = (direction) => {
        if (images.length < 2) return;

        setImageIndex(
            (current) =>
                (current + direction + images.length) % images.length
        );
    };

    useEffect(() => {
        const dialog = dialogRef.current;
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;

        dialog.showModal();
        document.body.style.overflow = "hidden";

        return () => {
            dialog.close();
            document.body.style.overflow = previousOverflow;
            previousFocus?.focus();
        };
    }, []);

    const handleKeyDown = (event) => {
        if (images.length < 2) return;

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            changeImage(-1);
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            changeImage(1);
        }
    };

    return createPortal(
        <dialog
            ref={dialogRef}
            aria-labelledby="project-title"
            onCancel={onClose}
            onKeyDown={handleKeyDown}
            onClick={(event) => {
                if (event.target === dialogRef.current) {
                    onClose();
                }
            }}
            className="project-dialog rounded-3xl border border-white/20 bg-[#10091c] p-0 text-white shadow-2xl"
            style={{
                width: "calc(100% - 2rem)",
                maxWidth: "75rem",
                maxHeight: "94dvh",
                overflowY: "auto",
                overscrollBehavior: "contain",
            }}
        >
            <div className="p-5 sm:p-8 lg:p-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm text-purple-200">
                            {project.type}
                        </p>

                        <h3
                            id="project-title"
                            className="mt-1 text-2xl sm:text-3xl font-semibold"
                        >
                            {project.title}
                        </h3>

                        {project.status && (
                            <span className="mt-3 inline-block rounded-full bg-purple-300/10 px-3 py-1 text-sm text-purple-200">
                                {project.status}
                            </span>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close project details"
                        className="shrink-0 rounded-xl bg-white/10 p-3 hover:bg-white/20 transition"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Larger image carousel */}
                <div
                    className="mt-6"
                    role="region"
                    aria-label={`${project.title} images`}
                    aria-roledescription="carousel"
                >
                    <ProjectImage
                        image={images[imageIndex]}
                        title={project.title}
                        className="h-64 sm:h-[420px] lg:h-[560px] w-full rounded-2xl object-contain bg-black/20"
                    />

                    {images.length > 0 && (
                        <div className="mt-4 flex items-center justify-center gap-4 sm:gap-6">
                            {images.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => changeImage(-1)}
                                    aria-label="Previous image"
                                    className="shrink-0 rounded-xl bg-white/10 p-3 hover:bg-white/20 transition"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            )}

                            <p
                                className="text-center text-sm text-white/75"
                                aria-live="polite"
                            >
                                {imageIndex + 1} / {images.length}

                                <span className="mt-1 block">
                                    {images[imageIndex].alt}
                                </span>
                            </p>

                            {images.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => changeImage(1)}
                                    aria-label="Next image"
                                    className="shrink-0 rounded-xl bg-white/10 p-3 hover:bg-white/20 transition"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            )}
                        </div>
                    )}
                </div>

                {/* Description */}
                <div className="mt-8">
                    <h4 className="text-lg font-semibold">
                        About the project
                    </h4>

                    <p className="mt-3 text-white/75 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Features */}
                {project.features && (
                    <div className="mt-7">
                        <h4 className="text-lg font-semibold">
                            {project.featuresTitle || "Key features"}
                        </h4>

                        <ul className="mt-3 list-disc pl-5 space-y-2 text-white/75">
                            {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Planned additions */}
                {project.planned && (
                    <div className="mt-7">
                        <h4 className="text-lg font-semibold">
                            Planned additions
                        </h4>

                        <ul className="mt-3 list-disc pl-5 space-y-2 text-white/75">
                            {project.planned.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technologies */}
                <div className="mt-7">
                    <h4 className="text-lg font-semibold">
                        Technologies & Focus
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                        {project.tech.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/85"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </dialog>,
        document.body
    );
}

export default function Projects() {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
                Projects
            </h2>

            <p className="mt-2 text-white/70">
                A selection of software projects and hands-on
                infrastructure work.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <article
                        key={project.id}
                        className="glass rounded-3xl p-5 sm:p-6 flex flex-col border border-white/15 transition-all duration-300 hover:border-white/40"
                    >
                        <ProjectImage
                            image={project.images?.[0]}
                            title={project.title}
                            className="h-48 w-full rounded-2xl border border-white/20 object-cover object-top"
                        />

                        <div className="mt-4 flex-1">
                            <p className="text-xs uppercase tracking-wider text-purple-200">
                                {project.type}
                            </p>

                            <h3 className="mt-2 text-lg font-semibold text-white/90">
                                {project.title}
                            </h3>

                            {project.status && (
                                <span className="mt-2 inline-block rounded-full bg-purple-300/10 px-3 py-1 text-xs text-purple-200">
                                    {project.status}
                                </span>
                            )}

                            <p className="mt-2 text-sm text-white/70 leading-relaxed">
                                {project.oneLine}
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setActiveProject(project)}
                            aria-label={`See more details about ${project.title}`}
                            className="mt-5 self-start rounded-xl px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/15 text-sm text-white/90 transition"
                        >
                            See more details
                        </button>
                    </article>
                ))}
            </div>

            {activeProject && (
                <ProjectDetails
                    key={activeProject.id}
                    project={activeProject}
                    onClose={() => setActiveProject(null)}
                />
            )}
        </div>
    );
}