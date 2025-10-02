import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  count?: number;
  speed?: number;
  tail?: number;
};

type Comet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  trail: { x: number; y: number }[];
};

export default function Particles({
  className,
  count = 60,
  speed = 1.1,
  tail = 14,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const cometsRef = useRef<Comet[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    // Récupère tes couleurs depuis Radix
    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue("--primary").trim() || "#7C3AED";
    const glow = styles.getPropertyValue("--primary-hover").trim() || primary;

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rand(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    function resetComet(c?: Comet) {
      const W = canvas.width / dpr;
      const H = canvas.height / dpr;
      const angle = rand(-0.5, 0.5) + Math.PI * 0.8; // diagonale ↘
      const v = rand(0.35, 0.9) * speed;

      const comet: Comet = {
        x: rand(-W * 0.1, W * 1.1),
        y: rand(-H * 0.1, H * 1.1),
        vx: Math.cos(angle) * v,
        vy: Math.sin(angle) * v,
        size: rand(1.4, 2.6),
        trail: [],
      };
      if (c) Object.assign(c, comet);
      return comet;
    }

    function init() {
      resize();
      cometsRef.current = new Array(count).fill(0).map(() => resetComet());
    }

    let last = performance.now();
    function tick(now: number) {
      const dt = Math.min(32, now - last) / 16.67;
      last = now;

      const W = canvas.width / dpr;
      const H = canvas.height / dpr;

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";

      for (const c of cometsRef.current) {
        c.x += c.vx * dt;
        c.y += c.vy * dt;

        if (c.x < -40 || c.x > W + 40 || c.y < -40 || c.y > H + 40) {
          resetComet(c);
          continue;
        }

        c.trail.push({ x: c.x, y: c.y });
        if (c.trail.length > tail) c.trail.shift();

        for (let i = 0; i < c.trail.length - 1; i++) {
          const p1 = c.trail[i];
          const p2 = c.trail[i + 1];
          const t = i / c.trail.length;

          const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          grad.addColorStop(0, primary);
          grad.addColorStop(1, glow);

          ctx.strokeStyle = grad;
          ctx.globalAlpha = 0.25 + t * 0.45;
          ctx.lineWidth = c.size * (1.1 + t * 2);
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }

        ctx.globalAlpha = 0.9;
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size + 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      rafRef.current = requestAnimationFrame(tick);
    }

    init();
    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [count, speed, tail]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "pointer-events-none"}
      aria-hidden="true"
    />
  );
}
