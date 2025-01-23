"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
import { Menu, X, User, Search, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuItems = [
    { href: "/carros", label: "Procurar Carros", icon: Search },
    { href: "/anunciar", label: "Anunciar meu Carro", icon: PlusCircle },
  ];

  return (
    <header className="border-b backdrop-blur-sm bg-white/75 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-orange.png"
              alt="Alugaí Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

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
                <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>
                  <User className="mr-2 h-4 w-4" />
                  Entrar / Cadastrar
                </Button>
              )}
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-orange-500" /> : <Menu className="h-6 w-6 text-orange-500" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 space-y-4"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-4 py-2 hover:bg-orange-100 rounded-md transition-colors duration-200"
                >
                  <item.icon className="mr-2 h-4 w-4 text-orange-500" />
                  {item.label}
                </Link>
              ))}
              <div className="space-y-2">
                {isLoggedIn ? (
                  <>
                    <Link href="/perfil" className="flex items-center px-4 py-2 hover:bg-orange-100 rounded-md transition-colors duration-200">
                      <User className="mr-2 h-4 w-4 text-orange-500" />
                      Meu Perfil
                    </Link>
                    <Link href="/reservas" className="flex items-center px-4 py-2 hover:bg-orange-100 rounded-md transition-colors duration-200">
                      <Search className="mr-2 h-4 w-4 text-orange-500" />
                      Minhas Reservas
                    </Link>
                    <Button className="w-full" variant="ghost" onClick={() => setIsLoggedIn(false)}>
                      Sair
                    </Button>
                  </>
                ) : (
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setIsLoggedIn(true)}>
                    <User className="mr-2 h-4 w-4" />
                    Entrar / Cadastrar
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}