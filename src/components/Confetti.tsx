"use client";

import { useEffect, useState } from "react";

const RAINBOW_COLORS = [
  "#FF0000", "#FF4500", "#FF8C00", "#FFD700", "#FFFF00",
  "#7FFF00", "#00FF00", "#00CED1", "#1E90FF", "#4169E1",
  "#8A2BE2", "#9400D3", "#FF00FF", "#FF1493", "#FF69B4",
];

const SHAPES = ["square", "circle", "triangle", "star"];

interface Piece {
  id: number;
  x: number;
  color: string;
  shape: string;
  delay: number;
  duration: number;
  size: number;
  swayAmount: number;
}

export default function Confetti({ active }: { active: boolean }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!active) {
      setPieces([]);
      return;
    }

    const newPieces: Piece[] = [];
    for (let i = 0; i < 80; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        color: RAINBOW_COLORS[Math.floor(Math.random() * RAINBOW_COLORS.length)],
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        delay: Math.random() * 1.5,
        duration: 2 + Math.random() * 2,
        size: 8 + Math.random() * 12,
        swayAmount: -40 + Math.random() * 80,
      });
    }
    setPieces(newPieces);

    const timer = setTimeout(() => setPieces([]), 5000);
    return () => clearTimeout(timer);
  }, [active]);

  if (pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.x}%`,
            top: "-20px",
            width: p.size,
            height: p.shape === "circle" ? p.size : p.size * 0.6,
            backgroundColor: p.shape !== "triangle" ? p.color : "transparent",
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "star" ? "2px" : "0",
            borderLeft: p.shape === "triangle" ? `${p.size / 2}px solid transparent` : undefined,
            borderRight: p.shape === "triangle" ? `${p.size / 2}px solid transparent` : undefined,
            borderBottom: p.shape === "triangle" ? `${p.size}px solid ${p.color}` : undefined,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `translateX(${p.swayAmount}px)`,
            boxShadow: p.shape !== "triangle" ? `0 0 ${p.size / 2}px ${p.color}40` : undefined,
          }}
        />
      ))}
    </div>
  );
}
