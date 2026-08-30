'use client'

import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';
import Image from "next/image";
import { motion } from "framer-motion";
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
            className="object-contain"
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
