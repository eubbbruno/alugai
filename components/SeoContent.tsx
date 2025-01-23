import { Card, CardContent } from "@/components/ui/card"

export default function SeoContent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="sr-only">Informações sobre Aluguel de Carros com a Alugaí</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Aluguel de carros com a Alugaí</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Encontre o veículo ideal para sua necessidade com os serviços de aluguel de carros da Alugaí. Seja para uma viagem romântica, uma mudança de casa ou uma reunião de negócios, oferecemos opções acessíveis e convenientes para todos os tipos de locatários. Com a Alugaí, você conecta-se diretamente a proprietários locais, garantindo uma experiência simples e prática.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Por que escolher a Alugaí?</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li><span className="font-medium">Sustentável e acessível:</span> A Alugaí promove o compartilhamento de veículos particulares, ajudando a reduzir a necessidade de carros novos nas ruas e contribuindo para um futuro mais sustentável.</li>
                <li><span className="font-medium">Flexibilidade:</span> Alugue por hora ou por dia, conforme sua necessidade, e conte com seguro incluso e opções como motorista adicional sem custo extra.</li>
                <li><span className="font-medium">Localização conveniente:</span> Veículos disponíveis em diversos bairros, cidades e aeroportos de todo o Brasil, oferecendo praticidade para quem busca mobilidade com rapidez.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Como funciona o aluguel pela Alugaí?</h3>
              <p className="text-sm text-gray-600 mb-2">Alugar um carro com a Alugaí é fácil e prático:</p>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                <li><span className="font-medium">Pesquise:</span> Encontre o veículo ideal pelo app ou site, escolhendo a localização e a duração do aluguel.</li>
                <li><span className="font-medium">Reserve:</span> Com poucos cliques, você pode reservar o carro que melhor atende às suas necessidades.</li>
                <li><span className="font-medium">Dirija:</span> Use o aplicativo para desbloquear o veículo, dispensando filas ou processos burocráticos.</li>
                <li><span className="font-medium">Devolva:</span> Finalize sua locação no horário combinado, de maneira simples e sem complicações.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Tipos de veículos disponíveis na Alugaí</h3>
              <p className="text-sm text-gray-600 mb-2">
                Com a Alugaí, você pode alugar desde SUVs e carros de luxo até utilitários para mudanças. Personalize sua busca com filtros, como:
              </p>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li><span className="font-medium">Categoria:</span> Compactos, sedans, SUVs ou vans.</li>
                <li><span className="font-medium">Transmissão:</span> Manual ou automática.</li>
                <li><span className="font-medium">Recursos extras:</span> Carros pet-friendly, com Bluetooth ou suporte para bagagem.</li>
              </ul>
              <p className="text-sm text-gray-600 mt-2">
                Seja para uma viagem de final de semana ou uma necessidade específica, temos o veículo certo para você.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}