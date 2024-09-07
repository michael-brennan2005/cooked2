"use client";

import { ReactNode } from "react";

type CardProps = {
  img: string;
  title: string;
  duration: string;
  createRecipe: () => void;
};

export default function Card({ img, title, duration }: CardProps) {
  return (
    <div className="relative bg-primary w-[336px] h-[337px] rounded-lg overflow-hidden">
      <img src={img} className="w-full h-[273px]" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between w-full">
        <h1>{title}</h1>
        <h2>{duration}</h2>
      </div>
    </div>
  );
}
