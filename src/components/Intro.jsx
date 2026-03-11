import { useEffect, useMemo, useRef, useState } from "react";

export default function Intro({ onDone }) {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);

    const [phase, setPhase] = useState("show"); // show -> blurOut -> done

    const CONFIG = useMemo(() => {
        return {
            durationShowMs: 2600,
            durationBlurOutMs: 1500,
            particleCount: 130,
            maxSpeed: 0.26,
            shootingStarDurationMs: 900,
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: true });

        let shootingStarStart = null;

        const resize = () => {
            const dpr = Math.max(1, window.devicePixelRatio || 1);
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        const w = () => window.innerWidth;
        const h = () => window.innerHeight;

        const particles = Array.from({ length: CONFIG.particleCount }).map(() => ({
            x: Math.random() * w(),
            y: Math.random() * h(),
            r: Math.random() * 1.6 + 0.4,
            vx: (Math.random() - 0.5) * CONFIG.maxSpeed,
            vy: (Math.random() - 0.5) * CONFIG.maxSpeed,
            a: Math.random() * 0.65 + 0.12,
        }));

        const drawBackground = () => {
            const g = ctx.createLinearGradient(0, 0, w(), h());
            g.addColorStop(0, "#1a0630");
            g.addColorStop(0.45, "#12062a");
            g.addColorStop(1, "#06010c");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, w(), h());

            const flare = (cx, cy, r, alpha) => {
                const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
                rg.addColorStop(0, `rgba(160, 88, 255, ${alpha})`);
                rg.addColorStop(0.55, `rgba(80, 60, 210, ${alpha * 0.6})`);
                rg.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = rg;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fill();
            };

            flare(w() * 0.62, h() * 0.2, 520, 0.18);
            flare(w() * 0.28, h() * 0.46, 420, 0.14);
            flare(w() * 0.75, h() * 0.62, 520, 0.10);
        };

        const drawShootingStar = (now) => {
            if (!shootingStarStart) return;

            const t = (now - shootingStarStart) / CONFIG.shootingStarDurationMs;
            if (t >= 1) return;

            // smooth easing
            const ease = t * t * (3 - 2 * t);

            const startX = w() * 0.12;
            const startY = h() * 0.88;
            const endX = w() * 0.92;
            const endY = h() * 0.12;

            const x = startX + (endX - startX) * ease;
            const y = startY + (endY - startY) * ease;

            // trail
            const tailLen = 240;
            const angle = Math.atan2(endY - startY, endX - startX);

            const tx = x - Math.cos(angle) * tailLen;
            const ty = y - Math.sin(angle) * tailLen;

            const grad = ctx.createLinearGradient(tx, ty, x, y);
            grad.addColorStop(0, "rgba(255,255,255,0)");
            grad.addColorStop(0.35, "rgba(220,200,255,0.35)");
            grad.addColorStop(1, "rgba(255,255,255,0.9)");

            ctx.strokeStyle = grad;
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(x, y);
            ctx.stroke();

            // bright head
            ctx.fillStyle = "rgba(255,255,255,0.95)";
            ctx.beginPath();
            ctx.arc(x, y, 2.6, 0, Math.PI * 2);
            ctx.fill();
        };

        const tick = (now) => {
            drawBackground();

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -20) p.x = w() + 20;
                if (p.x > w() + 20) p.x = -20;
                if (p.y < -20) p.y = h() + 20;
                if (p.y > h() + 20) p.y = -20;

                ctx.fillStyle = `rgba(255,255,255,${p.a})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }

            drawShootingStar(now);

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        // Trigger shooting star when blurOut begins
        if (phase === "blurOut") {
            shootingStarStart = performance.now();
        }

        return () => {
            window.removeEventListener("resize", resize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [CONFIG, phase]);

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("blurOut"), CONFIG.durationShowMs);
        const t2 = setTimeout(() => {
            setPhase("done");
            onDone();
        }, CONFIG.durationShowMs + CONFIG.durationBlurOutMs);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [CONFIG, onDone]);

    return (
        <div className="fixed inset-0">
            <canvas ref={canvasRef} className="absolute inset-0" />

            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className={[
                        "text-center px-6",
                        "transition-all duration-[1500ms] ease-in-out",
                        phase === "blurOut"
                            ? "opacity-0 blur-md scale-[1.03]"
                            : "opacity-100 blur-0 scale-100",
                    ].join(" ")}
                >
                    <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white/95 drop-shadow-[0_0_16px_rgba(180,120,255,0.25)]">
                        There is a new Developer in Town...
                    </h1>
                    <p className="mt-2 text-sm sm:text-base text-white/65">
                        Loading portfolio experience
                    </p>
                </div>
            </div>
        </div>
    );
}