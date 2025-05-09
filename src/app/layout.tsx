import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Tiro_Devanagari_Sanskrit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
// import { AIChatbot } from '@/components/ai/ai-chatbot'; // Removed import
import { Toaster } from "@/components/ui/toaster";


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const tiroSanskrit = Tiro_Devanagari_Sanskrit({
  variable: '--font-tiro-devanagari-sanskrit',
  subsets: ['latin'],
  weight: ['400'], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: 'Vaikuntha Digital',
  description: 'A digital Vaikuntha dedicated to Mahavishnu.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="mac7aLjz9hgBPOeatEJp8fZ6RL2GRi8PeWQfgcITzFU" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${tiroSanskrit.variable} antialiased font-sans`}>
         <ThemeProvider
            attribute="class"
            defaultTheme="dark" // Set default to cosmic dark mode
            enableSystem
            disableTransitionOnChange
          >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
            {/* AIChatbot component removed from here */}
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
