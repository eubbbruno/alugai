import './globals.css';
import type { Metadata } from 'next';
import { Sora, Cabin } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
});

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
});

export const metadata: Metadata = {
  title: 'CarroJá - Alugue carros de proprietários locais',
  description: 'Encontre o carro perfeito para suas necessidades, direto de proprietários locais confiáveis.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable} ${cabin.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
