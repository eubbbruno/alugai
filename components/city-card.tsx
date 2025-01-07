"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";

interface CityCardProps {
  name: string;
  image: string;
  carsCount: number;
  slug: string;
}

export function CityCard({ name, image, carsCount, slug }: CityCardProps) {
  const carText = carsCount === 1 ? "carro disponível" : "carros disponíveis";

  return (
    <Card className="group relative overflow-hidden h-[200px] transition-transform duration-300 ease-in-out hover:scale-[1.02]">
      <Link href={`/carros/${slug}`} className="block h-full" aria-label={`Ver carros em ${name}`}>
        <Image
          src={image}
          alt={`Imagem de ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={slug === "sao-paulo" || slug === "rio-de-janeiro"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-white/90">{carsCount} {carText}</p>
        </div>
      </Link>
    </Card>
  );
}