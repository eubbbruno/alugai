"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useState } from "react";

interface CarCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
  location: string;
  year: string;
  transmission: string;
  mileage: number;
}

export function CarCard({ id, name, image, price, location, year, transmission, mileage }: CarCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('pt-BR').format(mileage);
  };

  return (
    <Card className="group overflow-hidden">
      <div className="relative">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={`Imagem do ${name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
          aria-label={isLiked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">a partir de</p>
            <p className="font-semibold text-lg">{formatPrice(price)}/dia</p>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <p className="text-sm text-muted-foreground">{location}</p>
          <div className="flex gap-3 text-sm text-muted-foreground">
            <span>{year}</span>
            <span>•</span>
            <span>{transmission}</span>
            <span>•</span>
            <span>{formatMileage(mileage)} km</span>
          </div>
        </div>
        <Button asChild className="w-full">
          <Link href={`/carros/${id}`}>Ver Detalhes</Link>
        </Button>
      </div>
    </Card>
  );
}