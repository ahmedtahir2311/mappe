import type { Metadata } from 'next';
import { Geist, Geist_Mono, Nunito } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/lib/theme/ThemeProvider';
import { ClientLayout } from '@/components/module/client-layout';
import { SidebarProvider } from '@/lib/context/sidebar-context';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ahmed Tahir | Full-Stack Developer, AI Enthusiast & Blockchain Expert',
  description:
    'Ahmed Tahir – Full-Stack Developer, AI Enthusiast & Blockchain Innovator. Explore cutting-edge projects in web development, AI, and decentralized tech',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} font-nunito antialiased`}
      >
        <ThemeProvider>
          <SidebarProvider>
            <ClientLayout>{children}</ClientLayout>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
