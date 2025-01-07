import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search, Shield, Zap, Award, Clock, MessageCircle, Car } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CarCard } from "@/components/car-card";
import { CityCard } from "@/components/city-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80"
            alt="Carro em uma estrada"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Alugue o carro perfeito para sua próxima aventura
            </h1>
            <p className="text-xl mb-8">
              Encontre carros únicos de proprietários locais confiáveis em todo o Brasil
            </p>

            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Onde você está?"
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="date"
                    placeholder="Data inicial"
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Select>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Horário" />
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
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="date"
                    placeholder="Data final"
                    className="pl-10"
                  />
                </div>
                <Button className="w-full">
                  <Search className="mr-2 h-4 w-4" /> Buscar Carros
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que escolher o CarroJá?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguro Completo</h3>
              <p className="text-muted-foreground">
                Proteção total com seguro incluso em todas as viagens
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Grande Variedade</h3>
              <p className="text-muted-foreground">
                Milhares de carros disponíveis em todo o Brasil
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rápido e Fácil</h3>
              <p className="text-muted-foreground">
                Reserve em minutos e retire seu carro no mesmo dia
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proprietários Verificados</h3>
              <p className="text-muted-foreground">
                Todos os proprietários são verificados e avaliados
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Como Funciona
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Alugar um carro nunca foi tão fácil. Siga estes simples passos e comece sua aventura sobre rodas!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-1 bg-primary/20 hidden md:block" />
            {[
              {
                title: "Escolha seu carro",
                description: "Navegue por nossa ampla seleção de veículos e escolha o que melhor atende às suas necessidades.",
                icon: Search,
                image: "/choose-car.png"
              },
              {
                title: "Faça sua reserva",
                description: "Reserve o carro desejado com facilidade através de nossa plataforma segura.",
                icon: Calendar,
                image: "/search-car.png"
              },
              {
                title: "Aproveite sua viagem",
                description: "Retire o veículo no local combinado e aproveite sua viagem com tranquilidade.",
                icon: Car,
                image: "/pickup-car.png"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <step.icon className="h-10 w-10 text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4">{step.description}</CardDescription>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={200}
                        height={200}
                        className="mx-auto rounded-lg"
                      />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button size="lg" className="animate-pulse">
              Comece Agora
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Carros em Destaque
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Os carros mais populares e bem avaliados da nossa plataforma
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/carros">Ver Todos os Carros</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Principais Cidades
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Encontre carros disponíveis nas principais cidades do Brasil
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cities.map((city) => (
              <CityCard key={city.slug} {...city} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tem um carro parado?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Transforme seu carro em renda extra. Proprietários ganham em média R$ 1.500 por mês alugando seus carros na plataforma.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/anunciar">Anuncie seu Carro</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80"
                alt="Proprietário entregando chaves"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Programa de Fidelidade
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ganhe recompensas e descontos exclusivos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recompensas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Acumule pontos a cada aluguel e troque por descontos em futuras locações.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Descontos para Clientes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Clientes frequentes recebem descontos exclusivos e acesso antecipado a promoções.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Histórias de Proprietários
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Veja como o CarroJá está mudando a vida dos proprietários
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "João Silva", story: "Comecei a alugar meu carro nos fins de semana e já consegui uma renda extra significativa." },
              { name: "Maria Oliveira", story: "O CarroJá me ajudou a pagar as despesas do meu carro novo. Recomendo a todos!" },
              { name: "Carlos Santos", story: "A plataforma é fácil de usar e o suporte é excelente. Estou muito satisfeito com os resultados." }
            ].map((owner, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{owner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>"{owner.story}"</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Programa de Indicações
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Indique amigos e ganhe descontos
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Indique e Ganhe</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Indique seus amigos para o CarroJá e ganhe créditos para suas próximas locações. 
                Quanto mais amigos você indicar, mais você economiza!
              </CardDescription>
              <Button className="mt-4">Saiba Mais</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Comparativo de Preços
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Veja como nossos preços se comparam às locadoras tradicionais
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-2 text-left">Categoria</th>
                  <th className="p-2 text-left">CarroJá</th>
                  <th className="p-2 text-left">Locadora Tradicional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: "Econômico", carroJa: "R$ 80/dia", traditional: "R$ 120/dia" },
                  { category: "Intermediário", carroJa: "R$ 120/dia", traditional: "R$ 180/dia" },
                  { category: "SUV", carroJa: "R$ 200/dia", traditional: "R$ 300/dia" },
                  { category: "Luxo", carroJa: "R$ 350/dia", traditional: "R$ 500/dia" }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted"}>
                    <td className="p-2">{row.category}</td>
                    <td className="p-2">{row.carroJa}</td>
                    <td className="p-2">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Blog de Notícias Automotivas
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Fique por dentro das últimas novidades do mundo automotivo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Os 10 carros mais econômicos de 2024", image: "/placeholder.svg?height=200&width=300" },
              { title: "Dicas para manter seu carro em ótimo estado", image: "/placeholder.svg?height=200&width=300" },
              { title: "O futuro dos carros elétricos no Brasil", image: "/placeholder.svg?height=200&width=300" }
            ].map((post, index) => (
              <Card key={index}>
                <Image src={post.image} alt={post.title} width={300} height={200} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline">Ler Mais</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button>Ver Todas as Notícias</Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Carros Populares
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Os modelos mais procurados com melhor custo-benefício
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {popularCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </div>
      </section>

      {/* Chat Online Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button className="rounded-full w-16 h-16" size="icon">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </>
  );
}

const cities = [
  {
    name: "São Paulo",
    slug: "sao-paulo",
    image: "https://images.unsplash.com/photo-1578002573559-689b0abc4148?auto=format&fit=crop&q=80",
    carsCount: 2547
  },
  {
    name: "Rio de Janeiro",
    slug: "rio-de-janeiro",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80",
    carsCount: 1832
  },
  {
    name: "Curitiba",
    slug: "curitiba",
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&q=80",
    carsCount: 945
  },
  {
    name: "Balneário Camboriú",
    slug: "balneario-camboriu",
    image: "https://images.unsplash.com/photo-1626543750227-5e5c2ab6d2a8?auto=format&fit=crop&q=80",
    carsCount: 634
  },
  {
    name: "Londrina",
    slug: "londrina",
    image: "https://images.unsplash.com/photo-1629907912711-9845e6e762a9?auto=format&fit=crop&q=80",
    carsCount: 423
  }
];

const featuredCars = [
  {
    id: 1,
    name: "BMW X6",
    location: "São Paulo, SP",
    price: "450",
    year: "2023",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Mercedes C300",
    location: "Rio de Janeiro, RJ",
    price: "400",
    year: "2023",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Porsche Cayenne",
    location: "Belo Horizonte, MG",
    price: "600",
    year: "2022",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
  },
];

const popularCars = [
  {
    id: 4,
    name: "Hyundai HB20",
    location: "São Paulo, SP",
    price: "120",
    year: "2022",
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Chevrolet Onix",
    location: "Curitiba, PR",
    price: "110",
    year: "2023",
    transmission: "Manual",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Fiat Pulse",
    location: "Brasília, DF",
    price: "150",
    year: "2023",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Volkswagen Polo",
    location: "Porto Alegre, RS",
    price: "130",
    year: "2022",
    transmission: "Automático",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80",
  },
];