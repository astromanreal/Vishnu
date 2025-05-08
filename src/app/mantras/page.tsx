
"use client"; // Make this a client component for state and interaction

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ChevronLeft, ChevronRight, PlayCircle, RefreshCw } from 'lucide-react'; // Re-add PlayCircle
import { getAllMantras, type Mantra } from '@/services/mantra'; // Import the service

export default function MantrasPage() {
  const [mantras, setMantras] = useState<Mantra[]>([]);
  const [currentMantraIndex, setCurrentMantraIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state for fetching

  useEffect(() => {
    setIsMounted(true);
    const fetchMantras = async () => {
      try {
        const fetchedMantras = await getAllMantras();
        setMantras(fetchedMantras);
        if (fetchedMantras.length > 0) {
          // Set initial random mantra only after mounting and fetching
          const randomIndex = Math.floor(Math.random() * fetchedMantras.length);
          setCurrentMantraIndex(randomIndex);
        }
      } catch (error) {
        console.error("Failed to fetch mantras:", error);
        // Handle error state if needed
      } finally {
        setIsLoading(false);
      }
    };
    fetchMantras();
  }, []); // Empty dependency array ensures this runs once on mount

  const showRandomMantra = () => {
    if (mantras.length > 0) {
      const randomIndex = Math.floor(Math.random() * mantras.length);
      setCurrentMantraIndex(randomIndex);
    }
  };

  const showNextMantra = () => {
    if (currentMantraIndex !== null && mantras.length > 0) {
      setCurrentMantraIndex((prevIndex) => (prevIndex! + 1) % mantras.length);
    }
  };

  const showPreviousMantra = () => {
    if (currentMantraIndex !== null && mantras.length > 0) {
      setCurrentMantraIndex((prevIndex) => (prevIndex! - 1 + mantras.length) % mantras.length);
    }
  };

  // Avoid rendering interactive elements before mount or if no mantras
  if (!isMounted || isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <RefreshCw className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
        <p className="text-muted-foreground mt-2">Loading Mantras...</p>
      </div>
    );
  }

  const currentMantra = currentMantraIndex !== null ? mantras[currentMantraIndex] : null;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 font-serif text-primary">
        Sacred Mantras
      </h1>

      <p className="text-center text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
        Chant these powerful seed sounds and verses for focus, devotion, and divine connection. Find peace and resonance within their vibrations. Explore a mantra below or browse the full list.
      </p>

      {/* Interactive Mantra Display Section */}
      {mantras.length > 0 && (
        <Card className="mb-12 bg-secondary/20 shadow-lg glowing-border">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-semibold text-primary/90 flex items-center justify-between">
              <span>Mantra Focus</span>
              <Button variant="ghost" size="icon" onClick={showRandomMantra} aria-label="Show Random Mantra">
                <RefreshCw className="h-5 w-5" />
              </Button>
            </CardTitle>
            <CardDescription>Experience a mantra selected for you.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {currentMantra ? (
              <div className="space-y-3">
                 <h3 className="text-2xl font-['Tiro_Devanagari_Sanskrit',_serif] text-primary leading-relaxed whitespace-pre-line">
                  {currentMantra.sanskrit}
                </h3>
                <p className="text-lg italic text-muted-foreground whitespace-pre-line">
                  {currentMantra.transliteration}
                </p>
                <p className="text-base text-foreground/90">
                  {currentMantra.meaning}
                </p>
                 <p className="text-sm text-muted-foreground">({currentMantra.deity})</p>
              </div>
            ) : (
              <p className="text-muted-foreground">Select a mantra to begin.</p>
            )}
          </CardContent>
           <div className="flex justify-center items-center gap-4 p-4 border-t border-border/50">
              <Button variant="outline" size="icon" onClick={showPreviousMantra} disabled={mantras.length <= 1}>
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous Mantra</span>
              </Button>
               {/* Re-added Play button, kept disabled */}
               <Button variant="default" size="lg" disabled>
                 <PlayCircle className="h-5 w-5 mr-2" />
                 Play (Feature Coming Soon)
               </Button>
              <Button variant="outline" size="icon" onClick={showNextMantra} disabled={mantras.length <= 1}>
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Next Mantra</span>
              </Button>
            </div>
        </Card>
      )}

       <h2 className="text-3xl font-bold text-center mb-8 text-primary">All Mantras</h2>

      {mantras.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mantras.map((mantra, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 glowing-border flex flex-col">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  {/* Use whitespace-pre-line to respect newlines in Sanskrit text */}
                  <CardTitle className="text-xl font-['Tiro_Devanagari_Sanskrit',_serif] text-primary/90 leading-relaxed whitespace-pre-line">{mantra.sanskrit}</CardTitle>
                  <Sparkles className="h-5 w-5 text-accent opacity-80 mt-1 flex-shrink-0 ml-2" />
                </div>
                 {/* Use whitespace-pre-line to respect newlines in transliteration */}
                <CardDescription className="italic pt-1 text-muted-foreground whitespace-pre-line">{mantra.transliteration}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between pt-2">
                <p className="text-sm text-foreground/90 mb-3">{mantra.meaning}</p>
                <div className="text-xs text-muted-foreground space-y-1 mt-auto">
                   <p><strong>Deity:</strong> {mantra.deity}</p>
                  {mantra.description && <p>{mantra.description}</p>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground mt-12">
          <p>No mantras available at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
