'use client'

import { Car, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const footerSections = [
  {
    title: "Categorias de Veículos",
    links: [
      "Carros econômicos", "Carros compactos", "Carros de luxo", "SUVs",
      "Pick-ups", "Minivans", "Carros elétricos", "Utilitários"
    ]
  },
  {
    title: "Marcas de Veículos",
    links: [
      "Audi", "BMW", "Chevrolet", "Fiat", "Ford", "Honda", "Jeep",
      "Mercedes-Benz", "Tesla", "Toyota"
    ]
  },
  {
    title: "Sobre o Alugaí",
    links: [
      "Quem Somos", "Nossa Missão", "Políticas de Privacidade", "Termos de Uso",
      "Imprensa", "Carreiras"
    ]
  },
  {
    title: "Explorar",
    links: [
      "Como Funciona", "Blog de Dicas e Viagens", "Segurança e Confiança",
      "Central de Ajuda"
    ]
  },
  {
    title: "Proprietários",
    links: [
      "Vantagens para Proprietários", "Ferramentas de Gestão",
      "Seguro e Proteção", "FAQ para Proprietários"
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-100 to-white relative overflow-hidden pt-16 pb-8">
      <div className="absolute inset-0 bg-grid-orange-500/[0.05] -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-semibold mb-4 text-lg text-gray-800">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link 
                      href="#"
                      className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-2 md:col-span-3 lg:col-span-6 flex flex-col items-center"
          >
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo-orange.png"
                alt="Alugaí Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex space-x-4">
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                <Link href="/anunciar">Anuncie seu carro</Link>
              </Button>
              <Button asChild className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                <Link href="/alugar">Quero alugar</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h3 className="font-semibold mb-2 text-lg text-gray-800">Social e Contato</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors mr-4">Blog</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors mr-4">App Store</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors mr-4">Google Play</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Central de Suporte</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors mr-4">Política de Privacidade</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors mr-4">Termos de Uso</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors mr-4">Mapa do Site</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors mr-4">Preferências de Cookies</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Não vender ou compartilhar minhas informações pessoais</Link>
            </div>
            <p className="text-sm text-gray-600">
              ©2025 Alugaí. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}