
'use client';

import Link from 'next/link';
import { Mail, Settings, Bot, BookOpen, Home, Users, Menu, Sparkles, CalendarDays, Building } from 'lucide-react'; // Removed MapIcon, Star
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { AIChatbot } from '@/components/ai/ai-chatbot';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          {/* Mobile Menu Trigger (visible on small screens) */}
          <div className="md:hidden mr-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" /> Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/avatars">
                    <Users className="mr-2 h-4 w-4" /> Avatars
                  </Link>
                </DropdownMenuItem>
                 {/* Removed Divya Desams Link */}
                 {/* Removed Abhimana Kshethrams Link */}
                <DropdownMenuItem asChild>
                  <Link href="/stotras">
                    <BookOpen className="mr-2 h-4 w-4" /> Stotras
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                  <Link href="/mantras">
                    <Sparkles className="mr-2 h-4 w-4" /> Mantras
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events">
                    <CalendarDays className="mr-2 h-4 w-4" /> Events
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/temples">
                    <Building className="mr-2 h-4 w-4" /> Temples
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Logo and Desktop Navigation */}
          <div className="mr-4 flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              {/* Placeholder Logo */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                <path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                <path d="M12 6v12"></path><path d="M6 12h12"></path>
              </svg>
              <span className="font-bold sm:inline-block text-lg font-serif">
                Vaikuntha Digital
              </span>
            </Link>
            {/* Desktop Navigation Links (hidden on small screens) */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                <Home className="inline-block mr-1 h-4 w-4" /> Home
              </Link>
              <Link
                href="/avatars"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                <Users className="inline-block mr-1 h-4 w-4" /> Avatars
              </Link>
               {/* Removed Divya Desams Link */}
               {/* Removed Abhimana Kshethrams Link */}
              <Link
                href="/stotras"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                <BookOpen className="inline-block mr-1 h-4 w-4" /> Stotras
              </Link>
              <Link
                href="/mantras"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                <Sparkles className="inline-block mr-1 h-4 w-4" /> Mantras
              </Link>
               <Link
                href="/events"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                <CalendarDays className="inline-block mr-1 h-4 w-4" /> Events
              </Link>
               <Link
                href="/temples"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                <Building className="inline-block mr-1 h-4 w-4" /> Temples
              </Link>
            </nav>
          </div>

          {/* Right Side Icons */}
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              {/* AI Chatbot Trigger Button */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Ask Vishnu AI Assistant"
                onClick={() => setIsChatbotOpen(true)}
              >
                <Bot className="h-5 w-5" />
              </Button>
              <Link href="/contact" passHref>
                <Button variant="ghost" size="icon" aria-label="Contact">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <ThemeToggle />
              <Link href="/settings" passHref>
                <Button variant="ghost" size="icon" aria-label="Settings">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {/* Render AIChatbot Dialog (controlled by state) */}
      <AIChatbot isOpen={isChatbotOpen} onOpenChange={setIsChatbotOpen} />
    </>
  );
}
