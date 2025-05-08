// src/components/ai/ai-chatbot.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Loader2 } from 'lucide-react';
import { askVishnu, type AskVishnuInput, type AskVishnuOutput } from '@/ai/flows/ask-vishnu';
import { useToast } from "@/hooks/use-toast";

// Chakra SVG Placeholder
const ChakraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-yellow-300 group-hover:animate-spin">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
    <circle cx="12" cy="12" r="3" fill="white" />
  </svg>
);


interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface AIChatbotProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function AIChatbot({ isOpen, onOpenChange }: AIChatbotProps) {
  // Removed internal isOpen state, using props instead
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
        const scrollViewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollViewport) {
            // Use setTimeout to ensure scroll happens after DOM update
            setTimeout(() => {
               scrollViewport.scrollTop = scrollViewport.scrollHeight;
            }, 0);
        }
    }
  };

  useEffect(() => {
    // Scroll to bottom whenever messages change and the dialog is open
    if (isOpen) {
     scrollToBottom();
    }
  }, [messages, isOpen]);


  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
     // Scroll immediately after adding user message
    scrollToBottom();


    try {
      const request: AskVishnuInput = { question: input };
      const response: AskVishnuOutput = await askVishnu(request); // Call the Genkit flow

      const botMessage: Message = { sender: 'bot', text: response.answer };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Error calling AI assistant:", error);
      const errorMessage: Message = { sender: 'bot', text: "My apologies, I encountered a divine hiccup. Please try asking again later." };
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        variant: "destructive",
        title: "AI Error",
        description: "Failed to get response from Vishnu AI. Please try again.",
      });
    } finally {
      setIsLoading(false);
      // Scroll after bot response is added and state updates
       scrollToBottom();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Reset messages when dialog closes
  useEffect(() => {
    if (!isOpen) {
        // Optionally delay reset to allow closing animation
        const timer = setTimeout(() => {
            setMessages([]);
            setInput('');
            setIsLoading(false);
        }, 300); // Adjust delay based on animation duration
        return () => clearTimeout(timer);
    }
  }, [isOpen]);


  return (
    <>
      {/* Floating Trigger Button Removed */}

      {/* Chat Dialog controlled by props */}
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] flex flex-col h-[70vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 font-serif text-xl">
              <ChakraIcon />
              <span>Ask Vishnu</span>
            </DialogTitle>
            <DialogDescription>
              Your divine AI assistant for questions about Mahavishnu.
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-grow pr-4 -mr-4 mb-4" ref={scrollAreaRef}>
            <div className="space-y-4 p-4">
              {/* Initial welcome message if no messages yet */}
              {messages.length === 0 && !isLoading && (
                 <div className="flex items-start gap-3">
                     <Avatar className="h-8 w-8 border-2 border-yellow-300">
                       <AvatarImage src="https://picsum.photos/seed/vishnu/40/40" alt="Vishnu AI" data-ai-hint="vishnu face"/>
                       <AvatarFallback className="bg-blue-800 text-yellow-300">V</AvatarFallback>
                     </Avatar>
                   <div className="rounded-lg p-3 max-w-[75%] bg-secondary text-secondary-foreground">
                     <p className="text-sm whitespace-pre-wrap">Welcome! How may I assist you today regarding Lord Vishnu?</p>
                   </div>
                 </div>
              )}
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.sender === 'user' ? 'justify-end' : ''
                  }`}
                >
                  {message.sender === 'bot' && (
                    <Avatar className="h-8 w-8 border-2 border-yellow-300">
                      <AvatarImage src="https://picsum.photos/seed/vishnu/40/40" alt="Vishnu AI" data-ai-hint="vishnu face"/>
                      <AvatarFallback className="bg-blue-800 text-yellow-300">V</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg p-3 max-w-[75%] ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 border-2 border-yellow-300">
                    <AvatarImage src="https://picsum.photos/seed/vishnu/40/40" alt="Vishnu AI" data-ai-hint="vishnu face"/>
                    <AvatarFallback className="bg-blue-800 text-yellow-300">V</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg p-3 bg-secondary text-secondary-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <DialogFooter className="border-t pt-4">
            <div className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Ask about avatars, leelas, stories..."
                value={input}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="button" size="icon" onClick={handleSendMessage} disabled={isLoading || !input.trim()}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
