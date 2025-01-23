import Image from "next/image";
import { MapPin, Calendar, Clock, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Hero() {
  return (
    <section className="relative h-[800px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/litoral-rodovia.png"
          alt="Litoral com rodovia"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-shadow-lg">
            Alugue o carro perfeito para sua próxima aventura
          </h1>
          <p className="text-2xl mb-12 text-shadow">
            Encontre carros únicos de proprietários locais confiáveis em todo o Brasil
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative col-span-1 md:col-span-2">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-orange-500" />
                <Input
                  placeholder="Cidade, endereço, hotel, aeroporto..."
                  className="pl-14 w-full bg-white/50 backdrop-blur-sm border-none h-16 text-lg rounded-2xl text-gray-500"
                />
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-orange-500" />
                  <Input
                    type="date"
                    placeholder="Data de retirada"
                    className="pl-14 bg-white/50 backdrop-blur-sm border-none h-16 text-lg rounded-2xl text-gray-500 date-input"
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-orange-500" />
                  <Select>
                    <SelectTrigger className="pl-14 bg-white/50 backdrop-blur-sm border-none h-16 text-lg rounded-2xl text-gray-500">
                      <SelectValue placeholder="Hora de retirada" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => (
                        <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                          {`${i.toString().padStart(2, '0')}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-orange-500" />
                  <Input
                    type="date"
                    placeholder="Data de devolução"
                    className="pl-14 bg-white/50 backdrop-blur-sm border-none h-16 text-lg rounded-2xl text-gray-500 date-input"
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-orange-500" />
                  <Select>
                    <SelectTrigger className="pl-14 bg-white/50 backdrop-blur-sm border-none h-16 text-lg rounded-2xl text-gray-500">
                      <SelectValue placeholder="Hora de devolução" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 24 }, (_, i) => (
                        <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                          {`${i.toString().padStart(2, '0')}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <Button className="w-full mt-8 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-6 px-8 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <Search className="mr-3 h-7 w-7" /> Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}