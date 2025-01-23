'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gift, Percent, Star, TrendingUp } from 'lucide-react'

const rewardItems = [
  { icon: Gift, title: 'Recompensas', description: 'Acumule pontos a cada aluguel e troque por descontos em futuras locações.' },
  { icon: Percent, title: 'Descontos para Clientes', description: 'Clientes frequentes recebem descontos exclusivos e acesso antecipado a promoções.' },
  { icon: Star, title: 'Status VIP', description: 'Alcance o status VIP e desfrute de benefícios premium, como upgrades gratuitos.' },
  { icon: TrendingUp, title: 'Pontos Acumulativos', description: 'Seus pontos não expiram e podem ser acumulados para recompensas maiores.' },
]

export default function ProgramaFidelidade() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Programa de Fidelidade
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ganhe recompensas e descontos exclusivos a cada aluguel. 
          <p></p>Quanto mais você dirige, mais você ganha!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewardItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white hover:bg-orange-50 group">
                <CardHeader className="relative z-10 p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-100 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-200">
                      <item.icon className="w-6 h-6 text-orange-500 transition-all duration-300 group-hover:text-orange-600" />
                    </div>
                    <CardTitle className="text-xl transition-all duration-300 group-hover:translate-x-2">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 p-6 pt-0">
                  <CardDescription className="text-sm transition-all duration-300 opacity-80 group-hover:opacity-100">
                    {item.description}
                  </CardDescription>
                  <motion.div 
                    className="mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredCard === index ? 1 : 0,
                      y: hoveredCard === index ? 0 : 10
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300 transition-all duration-300 group-hover:bg-orange-200 group-hover:text-orange-900">
                      Saiba mais
                    </Badge>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}