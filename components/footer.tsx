import { Car } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CarroJá</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A melhor plataforma de aluguel de carros entre pessoas no Brasil.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Locatários</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/como-funciona" className="text-sm text-muted-foreground hover:text-primary">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="/seguro" className="text-sm text-muted-foreground hover:text-primary">
                  Seguro incluso
                </Link>
              </li>
              <li>
                <Link href="/regras" className="text-sm text-muted-foreground hover:text-primary">
                  Regras de aluguel
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Proprietários</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/anunciar" className="text-sm text-muted-foreground hover:text-primary">
                  Anuncie seu carro
                </Link>
              </li>
              <li>
                <Link href="/ganhos" className="text-sm text-muted-foreground hover:text-primary">
                  Calcule seus ganhos
                </Link>
              </li>
              <li>
                <Link href="/requisitos" className="text-sm text-muted-foreground hover:text-primary">
                  Requisitos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ajuda" className="text-sm text-muted-foreground hover:text-primary">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm text-muted-foreground hover:text-primary">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/emergencia" className="text-sm text-muted-foreground hover:text-primary">
                  Suporte 24h
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 CarroJá. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}