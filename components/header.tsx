"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Car, Menu, X, User, Globe } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This should be managed by your auth system
  const [language, setLanguage] = useState("pt");

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CarroJá</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/carros" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Procurar Carros
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/anunciar" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Anunciar meu Carro
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Car className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/quem-somos">Quem Somos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/como-funciona">Como Funciona</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/duvidas">Dúvidas</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center space-x-2">
              {isLoggedIn ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link href="/perfil">Meu Perfil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/reservas">Minhas Reservas</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button onClick={() => setIsLoggedIn(false)}>Sair</button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>Entrar</Button>
                  <Button>Cadastrar</Button>
                </>
              )}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage("pt")}>
                  Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/carros"
              className="block px-4 py-2 hover:bg-accent rounded-md"
            >
              Procurar Carros
            </Link>
            <Link
              href="/anunciar"
              className="block px-4 py-2 hover:bg-accent rounded-md"
            >
              Anunciar meu Carro
            </Link>
            <Link
              href="/quem-somos"
              className="block px-4 py-2 hover:bg-accent rounded-md"
            >
              Quem Somos
            </Link>
            <Link
              href="/como-funciona"
              className="block px-4 py-2 hover:bg-accent rounded-md"
            >
              Como Funciona
            </Link>
            <Link
              href="/duvidas"
              className="block px-4 py-2 hover:bg-accent rounded-md"
            >
              Dúvidas
            </Link>
            <div className="space-y-2">
              {isLoggedIn ? (
                <>
                  <Link href="/perfil" className="block px-4 py-2 hover:bg-accent rounded-md">
                    Meu Perfil
                  </Link>
                  <Link href="/reservas" className="block px-4 py-2 hover:bg-accent rounded-md">
                    Minhas Reservas
                  </Link>
                  <Button className="w-full" variant="ghost" onClick={() => setIsLoggedIn(false)}>
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Button className="w-full" variant="ghost" onClick={() => setIsLoggedIn(true)}>
                    Entrar
                  </Button>
                  <Button className="w-full">Cadastrar</Button>
                </>
              )}
            </div>
            <div className="flex justify-center space-x-2">
              <Button variant="ghost" size="sm" onClick={() => setLanguage("pt")}>
                PT
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setLanguage("en")}>
                EN
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}