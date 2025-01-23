'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const carCategories = [
  { name: 'SUV', image: '/suv.png' },
  { name: 'Camionete', image: '/camionete.png' },
  { name: 'Carro Popular', image: '/carro-popular.png' },
  { name: 'Comercial', image: '/comercial.png' },
  { name: 'Luxo', image: '/luxo.png' },
  { name: 'Máquinas', image: '/maquinas.png' },
]

const featuredCars = [
  { id: 1, name: 'Jeep Compass', category: 'SUV', price: 200, image: '/suv.png' },
  { id: 2, name: 'Ford Ranger', category: 'Camionete', price: 220, image: '/camionete.png' },
  { id: 3, name: 'Chevrolet Onix', category: 'Carro Popular', price: 120, image: '/carro-popular.png' },
  { id: 4, name: 'Fiat Fiorino', category: 'Comercial', price: 150, image: '/comercial.png' },
  { id: 5, name: 'Mercedes-Benz C-Class', category: 'Luxo', price: 350, image: '/luxo.png' },
  { id: 6, name: 'Escavadeira Hidráulica', category: 'Máquinas', price: 600, image: '/maquinas.png' },
]

export default function CarrosEmDestaque() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredCars = activeCategory === 'Todos' 
    ? featuredCars 
    : featuredCars.filter(car => car.category === activeCategory)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Carros em Destaque
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore nossa seleção premium de veículos, desde carros populares até máquinas pesadas. 
          Encontre o veículo perfeito para sua próxima necessidade.
        </p>

        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
          <Button
            variant={activeCategory === 'Todos' ? "default" : "outline"}
            onClick={() => setActiveCategory('Todos')}
            className="whitespace-nowrap"
          >
            Todos
          </Button>
          {carCategories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name)}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative h-64"> {/* Updated line: Changed h-48 to h-64 */}
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-orange-500">{car.category}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                    <p className="text-gray-600 mb-4">A partir de R$ {car.price}/dia</p>
                    <Button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700">
                      Reservar Agora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700">
            <Link href="/carros">Ver Todos os Carros</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}