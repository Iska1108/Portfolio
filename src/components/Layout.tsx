import { useMemo } from "react";
import type { ReactNode } from "react";
import Particles from "./Particles";

export default function Layout({ children }: { children: ReactNode }) {
  const count = useMemo(() => Math.round((window.innerWidth / 1200) * 65), []);

  return (
    <div className="relative min-h-screen bg-bg-app text-text">
      {/* Particules sur tout l’écran */}
      <Particles
        className="fixed inset-0 z-10 pointer-events-none"
        count={count}
        speed={1.1}
        tail={16}
      />

      {/* halos décoratifs */}
      <div className="pointer-events-none fixed inset-0 z-20">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary blur-3xl opacity-10" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary-hover blur-3xl opacity-10" />
      </div>

      {/* contenu principal */}
      <div className="relative z-30">{children}</div>
    </div>
  );
}
