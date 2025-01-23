'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Preciso de seguro para alugar um carro?",
    answer: "Não, o seguro já está incluso no aluguel."
  },
  {
    question: "Posso adicionar outro motorista?",
    answer: "Sim, você pode adicionar motoristas extras sem custo adicional, desde que eles também atendam aos critérios de verificação."
  },
  {
    question: "Como funcionam os cancelamentos?",
    answer: "Você pode cancelar sua reserva sem custo até 24 horas antes do início do aluguel."
  },
  {
    question: "É possível receber o carro em casa ou no aeroporto?",
    answer: "Sim, alguns proprietários oferecem entrega em aeroportos, hotéis ou endereços específicos."
  },
  {
    question: "Quais formas de pagamento a Alugaí aceita?",
    answer: "Aceitamos cartões de crédito e débito com as bandeiras Visa, Mastercard, American Express, e pagamentos por PIX."
  },
  {
    question: "A Alugaí é uma locadora de carros tradicional?",
    answer: "Não. A Alugaí é uma plataforma de aluguel de carros entre pessoas, conectando locatários a proprietários confiáveis em todo o Brasil."
  }
]

export default function PerguntasFrequentes() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dúvidas Frequentes sobre a Alugaí
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ backgroundColor: activeIndex === index ? "rgba(255, 237, 213, 0.5)" : "rgba(255, 255, 255, 0.5)" }}
              transition={{ duration: 0.3 }}
              className="mb-4 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <motion.button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-orange-500" />
                </motion.div>
              </motion.button>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="p-4 text-gray-600 bg-white/70 backdrop-blur-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}