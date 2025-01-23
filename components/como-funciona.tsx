'use client'

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Car, RotateCcw } from 'lucide-react';

const steps = [
  {
    title: 'Pesquise',
    description: 'Encontre o carro perfeito perto de você.',
    icon: Search,
    image: '/como-funciona-pesquise.png'
  },
  {
    title: 'Reserve',
    description: 'Escolha a data e a hora com poucos cliques.',
    icon: Calendar,
    image: '/como-funciona-reserve.png'
  },
  {
    title: 'Dirija',
    description: 'Pegue o carro diretamente com o proprietário.',
    icon: Car,
    image: '/como-funciona-dirija.png'
  },
  {
    title: 'Devolva',
    description: 'Finalize a locação com facilidade.',
    icon: RotateCcw,
    image: '/como-funciona-devolva.png'
  },
];

export default function ComoFunciona() {
  const [activeStep, setActiveStep] = useState(0);

  const memoizedSteps = useMemo(() => steps, []);

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Como Funciona
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna da imagem (à esquerda) */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-400/10 rounded-2xl transform rotate-12" />
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/30 backdrop-blur-lg shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src={steps[activeStep].image}
                    alt={`Ilustração: ${steps[activeStep].title}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-orange-300/20 rounded-full blur-2xl" />
          </div>

          {/* Coluna do conteúdo (à direita) */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-300/20 rounded-full blur-3xl" />
            <div className="relative bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
              {memoizedSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                    activeStep === index ? 'bg-orange-100' : 'hover:bg-orange-50'
                  } cursor-pointer mb-4`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Passo ${index + 1}: ${step.title}`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveStep(index);
                    }
                  }}
                >
                  <div className="bg-orange-400 rounded-full p-3">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}