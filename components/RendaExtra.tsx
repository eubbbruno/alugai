import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function RendaExtra() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-800">
                Transforme seu carro em renda extra!
              </h2>
              <p className="text-xl mb-8 text-orange-700">
                Proprietários estão ganhando em média <span className="font-bold text-2xl text-orange-900">R$ 1.500 por mês</span> alugando seus carros na plataforma.
              </p>
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
                <Link href="/anunciar">Anuncie seu carro agora</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/happy-man-car.png"
                alt="Proprietário feliz entregando as chaves de um carro"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}