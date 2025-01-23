'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react'

const blogPosts = [
  { 
    title: "Os 10 carros mais econômicos de 2024",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Descubra quais são os veículos que vão te fazer economizar na bomba este ano.",
    category: "Economia"
  },
  { 
    title: "Dicas para manter seu carro em ótimo estado",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Aprenda como cuidar do seu veículo para garantir sua durabilidade e desempenho.",
    category: "Manutenção"
  },
  { 
    title: "O futuro dos carros elétricos no Brasil",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Análise das tendências e desafios para a adoção de veículos elétricos no país.",
    category: "Tecnologia"
  },
  { 
    title: "As melhores rotas para road trips no Brasil",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Planeje sua próxima aventura com estas incríveis sugestões de viagens de carro.",
    category: "Viagens"
  },
  { 
    title: "Comparativo: SUVs x Sedans - Qual é o melhor para você?",
    image: "/placeholder.svg?height=400&width=600",
    excerpt: "Uma análise detalhada para ajudar você a escolher o tipo de carro ideal para suas necessidades.",
    category: "Comparativos"
  }
]

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => 
      (prevIndex + newDirection + blogPosts.length) % blogPosts.length
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog de Notícias Automotivas
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Fique por dentro das últimas novidades do mundo automotivo
        </motion.p>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={blogPosts[currentIndex].image}
                  alt={blogPosts[currentIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full mb-2">
                    {blogPosts[currentIndex].category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{blogPosts[currentIndex].title}</h3>
                  <p className="text-white/80">{blogPosts[currentIndex].excerpt}</p>
                </div>
              </div>
              <div className="space-y-4">
                {blogPosts.map((post, index) => (
                  <Card 
                    key={index} 
                    className={`cursor-pointer transition-all duration-300 ${
                      index === currentIndex ? 'bg-orange-100 shadow-md' : 'hover:bg-orange-50'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="text-lg">{post.title}</span>
                        {index === currentIndex && <ArrowRight className="text-orange-500" />}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <Button
            variant="outline"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full p-2"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full p-2"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
            Ver Todas as Notícias
          </Button>
        </div>
      </div>
    </section>
  )
}