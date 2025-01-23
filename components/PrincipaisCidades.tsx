'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const cities = [
  { name: 'São Paulo', slug: 'sao-paulo', image: '/sao-paulo.png' },
  { name: 'Rio de Janeiro', slug: 'rio-de-janeiro', image: '/rio-de-janeiro.png' },
  { name: 'Belo Horizonte', slug: 'belo-horizonte', image: '/belo-horizonte.png' },
  { name: 'Salvador', slug: 'salvador', image: '/salvador.png' },
  { name: 'Brasília', slug: 'brasilia', image: '/brasilia.png' },
  { name: 'Curitiba', slug: 'curitiba', image: '/curitiba.png' },
  { name: 'Fortaleza', slug: 'fortaleza', image: '/fortaleza.png' },
  { name: 'Porto Alegre', slug: 'porto-alegre', image: '/porto-alegre.png' },
  { name: 'Londrina', slug: 'londrina', image: '/londrina.png' },
  { name: 'Balneário Camboriú', slug: 'balneario-camboriu', image: '/balneario-camboriu.png' },
]

export default function PrincipaisCidades() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Principais Cidades
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubra a liberdade de dirigir em qualquer lugar do Brasil. 
          <p></p>Encontre carros disponíveis nas principais cidades do país.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cities.map((city) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredCity(city.slug)}
              onHoverEnd={() => setHoveredCity(null)}
            >
              <Link href={`/cidades/${city.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-40">
                      <Image
                        src={city.image}
                        alt={city.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white text-lg font-semibold">{city.name}</h3>
                      </div>
                    </div>
                    <motion.div 
                      className="p-4 bg-white"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: hoveredCity === city.slug ? 'auto' : 0,
                        opacity: hoveredCity === city.slug ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-orange-500" />
                        Explorar opções em {city.name}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}