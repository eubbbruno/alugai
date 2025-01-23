'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from 'lucide-react'

const comparativeData = [
  { feature: 'Preço Diário Médio', alugai: 'R$ 80', traditional: 'R$ 120' },
  { feature: 'Seguro Incluso', alugai: true, traditional: true },
  { feature: 'Quilometragem Livre', alugai: true, traditional: false },
  { feature: 'Entrega no Local', alugai: true, traditional: false },
  { feature: 'Cancelamento Gratuito', alugai: true, traditional: false },
]

export default function ComparativoPrecos() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.14'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-orange-300 rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-orange-400 rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      {/* Adicione as seguintes 5 bolas flutuantes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-12 h-12 bg-orange-200 rounded-full opacity-15"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-orange-500 rounded-full opacity-10"
        animate={{
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-14 h-14 bg-orange-100 rounded-full opacity-20"
        animate={{
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -120, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute top-10 right-1/3 w-16 h-16 bg-orange-300 rounded-full opacity-15"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-1/4 w-18 h-18 bg-orange-400 rounded-full opacity-10"
        animate={{
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 60, 0],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Comparativo de Preços
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Veja como a Alugaí oferece mais vantagens por um preço mais acessível 
          em comparação com locadoras tradicionais.
        </p>

        <Card className="overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm">
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-100">
                  <th className="p-4 text-left font-semibold text-orange-800">Característica</th>
                  <th className="p-4 text-center font-semibold text-orange-800">Alugaí</th>
                  <th className="p-4 text-center font-semibold text-orange-800">Locadora Tradicional</th>
                </tr>
              </thead>
              <tbody>
                {comparativeData.map((item, index) => (
                  <motion.tr 
                    key={index}
                    className="border-b border-orange-100 last:border-b-0"
                    onHoverStart={() => setHoveredRow(index)}
                    onHoverEnd={() => setHoveredRow(null)}
                    animate={{
                      backgroundColor: hoveredRow === index ? 'rgba(255, 237, 213, 0.4)' : 'rgba(255, 255, 255, 0)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="p-4">{item.feature}</td>
                    <td className="p-4 text-center">
                      {typeof item.alugai === 'boolean' ? (
                        item.alugai ? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />
                      ) : (
                        <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300">
                          {item.alugai}
                        </Badge>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof item.traditional === 'boolean' ? (
                        item.traditional ? <Check className="inline-block text-green-500" /> : <X className="inline-block text-red-500" />
                      ) : (
                        <Badge variant="outline" className="bg-gray-100 text-gray-800 border-gray-300">
                          {item.traditional}
                        </Badge>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}