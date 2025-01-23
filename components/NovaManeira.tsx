import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Car } from 'lucide-react';

export default function NovaManeira() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100/50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400/10 rounded-2xl transform rotate-6" />
            <div className="relative bg-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Descubra a nova maneira de alugar um carro
              </h2>
              <p className="text-xl text-gray-700 mb-8">
              Revolucione sua experiência de locação com praticidade, segurança e tecnologia ao seu alcance.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white/40 backdrop-blur-sm rounded-2xl p-4">
                  <div className="bg-orange-100 rounded-xl p-3">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Preços flexíveis</h3>
                    <p className="text-gray-600">Alugue por hora ou dia, com seguro incluso e a opção de adicionar um motorista extra sem custo adicional.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/40 backdrop-blur-sm rounded-2xl p-4">
                  <div className="bg-orange-100 rounded-xl p-3">
                    <CheckCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Zero burocracia</h3>
                    <p className="text-gray-600">Reserve em instantes, mesmo de última hora, sem enfrentar filas ou complicações.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/40 backdrop-blur-sm rounded-2xl p-4">
                  <div className="bg-orange-100 rounded-xl p-3">
                    <Car className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Tecnologia inovadora</h3>
                    <p className="text-gray-600">Desbloqueie o carro e faça a vistoria diretamente pelo aplicativo, com total conveniência.</p>
                  </div>
                </div>
              </div>

              <Button className="mt-8 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-6 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105">
                Saiba como funciona
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-400/10 rounded-2xl transform -rotate-12" />
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/30 backdrop-blur-lg shadow-xl">
              <Image
                src="/girl-happy-trip.png"
                alt="Nova maneira de alugar carros"
                fill
                className="object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-orange-300/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}