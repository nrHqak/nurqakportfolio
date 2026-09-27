"use client";

import { useEffect, useState } from "react";
import { GridPulse } from "@/components/ui/grid-pulse";
import { cn } from "@/lib/utils";

export function NonHeroGridBackground() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting || entry.intersectionRatio < 0.22);
      },
      { threshold: [0, 0.22, 0.5, 1] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-0 bg-black transition-opacity duration-700",
        visible ? "opacity-[0.45]" : "opacity-0",
      )}
    >
      <GridPulse cell={26} reach={2.4} ambient={1} maxLit={120} />
    </div>
  );
}
