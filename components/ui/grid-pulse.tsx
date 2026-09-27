"use client";

import { useEffect, useRef } from "react";

interface GridPulseProps {
  cell?: number;
  reach?: number;
  ambient?: number;
  maxLit?: number;
  className?: string;
}

interface LitCell {
  x: number;
  y: number;
  strength: number;
  life: number;
  maxLife: number;
  hueOffset: number;
}

export function GridPulse({
  cell = 26,
  reach = 2.4,
  ambient = 1,
  maxLit = 120,
  className,
}: GridPulseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const litCells = new Map<string, LitCell>();
    const pointer = { x: -1000, y: -1000, active: false };
    let bounds = canvas.getBoundingClientRect();
    let animationFrame = 0;
    let lastFrame = performance.now();
    let nextAmbient = lastFrame;
    let hue = 205;
    let isIntersecting = true;
    let documentVisible = !document.hidden;

    const limitCells = () => {
      while (litCells.size > maxLit) {
        const oldest = litCells.keys().next().value;
        if (oldest === undefined) break;
        litCells.delete(oldest);
      }
    };

    const lightCell = (
      x: number,
      y: number,
      strength: number,
      life: number,
      hueOffset: number,
    ) => {
      const key = `${x}:${y}`;
      const current = litCells.get(key);
      if (current) {
        current.life = Math.max(current.life, life);
        current.maxLife = Math.max(current.maxLife, life);
        current.strength = Math.max(current.strength, strength);
        return;
      }

      litCells.set(key, {
        x,
        y,
        strength,
        life,
        maxLife: life,
        hueOffset,
      });
      limitCells();
    };

    const resize = () => {
      bounds = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(bounds.width * dpr));
      canvas.height = Math.max(1, Math.round(bounds.height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawGrid = () => {
      context.strokeStyle = "rgba(255,255,255,0.018)";
      context.lineWidth = 1;
      context.beginPath();
      for (let x = 0; x <= bounds.width; x += cell) {
        context.moveTo(x + 0.5, 0);
        context.lineTo(x + 0.5, bounds.height);
      }
      for (let y = 0; y <= bounds.height; y += cell) {
        context.moveTo(0, y + 0.5);
        context.lineTo(bounds.width, y + 0.5);
      }
      context.stroke();
    };

    const addPointerCells = () => {
      if (!pointer.active) return;
      const centerX = Math.floor(pointer.x / cell);
      const centerY = Math.floor(pointer.y / cell);
      const radius = Math.ceil(reach);

      for (let offsetX = -radius; offsetX <= radius; offsetX += 1) {
        for (let offsetY = -radius; offsetY <= radius; offsetY += 1) {
          const distance = Math.hypot(offsetX, offsetY);
          if (distance > reach) continue;
          lightCell(
            centerX + offsetX,
            centerY + offsetY,
            Math.max(0.12, 1 - distance / (reach + 0.4)),
            620,
            distance * 13,
          );
        }
      }
    };

    const addAmbientCell = () => {
      const columns = Math.max(1, Math.ceil(bounds.width / cell));
      const rows = Math.max(1, Math.ceil(bounds.height / cell));
      lightCell(
        Math.floor(Math.random() * columns),
        Math.floor(Math.random() * rows),
        0.42 + Math.random() * 0.24,
        1800 + Math.random() * 1200,
        Math.random() * 90 - 45,
      );
    };

    const render = (now: number) => {
      const delta = Math.min(64, now - lastFrame);
      lastFrame = now;
      context.clearRect(0, 0, bounds.width, bounds.height);
      drawGrid();

      if (!reducedMotion.matches) {
        addPointerCells();
        if (ambient > 0 && now >= nextAmbient) {
          for (let index = 0; index < ambient; index += 1) addAmbientCell();
          nextAmbient = now + 850;
        }
        hue = (hue + delta * 0.006) % 360;
      }

      for (const [key, litCell] of litCells) {
        const progress = Math.max(0, litCell.life / litCell.maxLife);
        const alpha = litCell.strength * progress * 0.2;
        context.fillStyle = `hsla(${(hue + litCell.hueOffset) % 360}, 72%, 62%, ${alpha})`;
        context.fillRect(
          litCell.x * cell + 1.5,
          litCell.y * cell + 1.5,
          Math.max(1, cell - 3),
          Math.max(1, cell - 3),
        );

        if (!reducedMotion.matches) litCell.life -= delta;
        if (litCell.life <= 0) litCells.delete(key);
      }
    };

    const animate = (now: number) => {
      if (isIntersecting && documentVisible) render(now);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active =
        pointer.x >= 0 &&
        pointer.x <= bounds.width &&
        pointer.y >= 0 &&
        pointer.y <= bounds.height;
    };

    const onVisibilityChange = () => {
      documentVisible = !document.hidden;
      lastFrame = performance.now();
    };

    const resizeObserver = new ResizeObserver(resize);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isIntersecting = entry.isIntersecting;
      lastFrame = performance.now();
    });

    resizeObserver.observe(canvas);
    intersectionObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    resize();

    if (reducedMotion.matches) {
      for (let index = 0; index < Math.min(8, maxLit); index += 1) {
        addAmbientCell();
      }
    }
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [ambient, cell, maxLit, reach]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`h-full w-full ${className ?? ""}`}
    />
  );
}
