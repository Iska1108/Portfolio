import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const makeParticle = (): Particle => {
      const p: Particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.1,
        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          if (this.x > canvas.width) this.x = 0;
          if (this.x < 0) this.x = canvas.width;
          if (this.y > canvas.height) this.y = 0;
          if (this.y < 0) this.y = canvas.height;
        },
        draw(ctx2d) {
          ctx2d.fillStyle = `rgba(56, 189, 248, ${this.opacity})`;
          ctx2d.beginPath();
          ctx2d.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx2d.fill();
        },
      };
      return p;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 70; i++) particles.push(makeParticle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.1 - dist / 1000})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} id="bg-canvas" />;
}
