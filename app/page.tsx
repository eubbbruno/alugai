'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search, Shield, Zap, Award, Clock, MessageCircle, Car, CheckCircle, CheckCircle2, X } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { CarCard } from "@/components/car-card";
import { CityCard } from "@/components/city-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import NovaManeira from '@/components/NovaManeira';
import ComoFunciona from "@/components/como-funciona";
import Hero from "@/components/Hero";
import CarrosEmDestaque from '@/components/CarrosEmDestaque';
import PrincipaisCidades from '@/components/PrincipaisCidades';
import RendaExtra from '@/components/RendaExtra';
import ProgramaFidelidade from '@/components/ProgramaFidelidade';
import ComparativoPrecos from '@/components/ComparativoPrecos';
import BlogSection from '@/components/BlogSection';
import SeoContent from '@/components/SeoContent';
import PerguntasFrequentes from '@/components/PerguntasFrequentes';

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const movecar = () => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    };

    const interval = setInterval(movecar, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
          className="fixed z-50"
          initial={{ x: "100vw" }}
          animate={{ x: "-100vw" }}
          transition={{ 
            x: {
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            },
          }}
          style={{ y: "calc(800px - 25px)" }}
        >
          <Image
            src="/car1.png"
            alt="Carro em movimento"
            width={100}
            height={50}
            objectFit="contain"
          />
        </motion.div>

      <Hero />

      <NovaManeira />

      <CarrosEmDestaque />

      <ComoFunciona />

      <PrincipaisCidades />

      <RendaExtra />

      <ProgramaFidelidade />

      <ComparativoPrecos />

      <BlogSection />

      <SeoContent />

      <PerguntasFrequentes />

      {/* Chat Online Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button className="rounded-full w-16 h-16" size="icon">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
}

const cities = [
  {
    name: "São Paulo",
    slug: "sao-paulo",
    image: "https://images.unsplash.com/photo-1578002573559-689b0abc4148?auto=format&fit=crop&q=80",
    carsCount: 2547
  },
  {
    name: "Rio de Janeiro",
    slug: "rio-de-janeiro",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80",
    carsCount: 1832
  },
  {
    name: "Curitiba",
    slug: "curitiba",
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&q=80",
    carsCount: 945
  },
  {
    name: "Balneário Camboriú",
    slug: "balneario-camboriu",
    image: "https://images.unsplash.com/photo-1626543750227-5e5c2ab6d2a8?auto=format&fit=crop&q=80",
    carsCount: 634
  },
  {
    name: "Londrina",
    slug: "londrina",
    image: "https://images.unsplash.com/photo-1629907912711-9845e6e762a9?auto=format&fit=crop&q=80",
    carsCount: 423
  }
];

const featuredCars = [
  {
    id: 1,
    name: "BMW X6",
    location: "São Paulo, SP",
    price: "450",
    year: "2023",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Mercedes C300",
    location: "Rio de Janeiro, RJ",
    price: "400",
    year: "2023",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Porsche Cayenne",
    location: "Belo Horizonte, MG",
    price: "600",
    year: "2022",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
  },
];

const popularCars = [
  {
    id: 4,
    name: "Hyundai HB20",
    location: "São Paulo, SP",
    price: "120",
    year: "2022",
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Chevrolet Onix",
    location: "Curitiba, PR",
    price: "110",
    year: "2023",
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Fiat Pulse",
    location: "Brasília, DF",
    price: "150",
    year: "2023",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Volkswagen Polo",
    location: "Porto Alegre, RS",
    price: "130",
    year: "2022",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
  },
];