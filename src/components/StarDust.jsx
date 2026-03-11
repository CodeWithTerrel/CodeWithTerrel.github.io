import { useEffect, useRef } from "react";

export default function StarDust({ density = 90 }) {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: true });

        const resize = () => {
            const dpr = Math.max(1, window.devicePixelRatio || 1);
            canvas.width = Math.floor(canvas.parentElement.clientWidth * dpr);
            canvas.height = Math.floor(canvas.parentElement.clientHeight * dpr);
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        window.addEventListener("resize", resize);

        const w = () => canvas.parentElement.clientWidth;
        const h = () => canvas.parentElement.clientHeight;

        const particles = Array.from({ length: density }).map(() => ({
            x: Math.random() * w(),
            y: Math.random() * h(),
            r: Math.random() * 1.3 + 0.4,
            vx: (Math.random() - 0.5) * 0.18,
            vy: (Math.random() - 0.5) * 0.18,
            a: Math.random() * 0.5 + 0.12,
        }));

        const tick = () => {
            ctx.clearRect(0, 0, w(), h());

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -10) p.x = w() + 10;
                if (p.x > w() + 10) p.x = -10;
                if (p.y < -10) p.y = h() + 10;
                if (p.y > h() + 10) p.y = -10;

                ctx.fillStyle = `rgba(255,255,255,${p.a})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("resize", resize);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [density]);

    return <canvas ref={canvasRef} className="absolute inset-0" />;
}