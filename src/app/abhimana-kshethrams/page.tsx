import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from 'lucide-react';
import { getAllAbhimanaKshethrams, type AbhimanaKshethram } from '@/data/abhimana-kshethrams';
import { Badge } from '@/components/ui/badge';

export default async function AbhimanaKshethramsPage() {
  const kshethrams: AbhimanaKshethram[] = await getAllAbhimanaKshethrams(); // Fetch all Kshethrams

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-serif text-primary">
        The 108 Abhimana Kshethrams
      </h1>

      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        Explore the 108 sacred temples revered in Vaishnavism, known as Abhimana Kshethrams, holding significant spiritual importance though not exclusively mentioned by the Alvars like the Divya Desams.
      </p>

       {/* Summary Section (Optional) */}
       <Card className="mb-12 bg-secondary/30 p-6 rounded-lg shadow">
         <CardHeader className="pb-2">
           <CardTitle className="text-2xl font-semibold text-primary/90 font-serif flex items-center gap-2">
             <Star className="h-6 w-6 text-yellow-400"/> Overview
           </CardTitle>
         </CardHeader>
         <CardContent className="flex flex-wrap gap-4 text-sm">
            <Badge variant="outline" className="text-base">Total: 108</Badge>
            <Badge variant="secondary" className="text-base">Region: Primarily India</Badge>
            <Badge variant="secondary" className="text-base">Deity: Various forms of Vishnu</Badge>
         </CardContent>
       </Card>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {kshethrams.map((kshethram) => (
          // Link might go to a detail page in the future if created, e.g., `/abhimana-kshethrams/${kshethram.id}`
          // For now, the card itself is displayed without a specific link action.
          <Card
            key={kshethram.id}
            className="flex flex-col overflow-hidden h-full transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl glowing-border group"
          >
            <CardHeader className="relative p-0 h-48">
              <div className="absolute inset-0 overflow-hidden rounded-t-lg">
                <Image
                  src={kshethram.imageUrl || `https://picsum.photos/seed/${kshethram.id}-${kshethram.name.split(',')[0].toLowerCase().replace(/[^a-z0-9]+/g, '-')}/400/300`}
                  alt={kshethram.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  data-ai-hint={kshethram.imageHint}
                  unoptimized // Use unoptimized if picsum URLs are highly variable and might exceed free tier limits
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              <CardTitle className="absolute bottom-3 left-3 text-white text-lg font-bold font-serif z-10 group-hover:text-accent transition-colors duration-300">
                {kshethram.id}. {kshethram.name}
              </CardTitle>
              {/* Location could be added as a badge if available and desired */}
              {/* <span className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs font-semibold px-2 py-1 rounded z-10 backdrop-blur-sm">
                 Location if available
              </span> */}
            </CardHeader>
            <CardContent className="pt-4 flex-grow flex flex-col justify-between bg-card/80 backdrop-blur-sm rounded-b-lg">
              <CardDescription className="mb-3 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 line-clamp-3">
                <strong>Deity:</strong> {kshethram.deity}
              </CardDescription>
               {/* Placeholder for future detail link */}
               <div className="mt-auto pt-1 flex items-center justify-end text-xs text-muted-foreground">
                 <Button variant="link" size="sm" className="p-0 text-accent group-hover:underline opacity-70 group-hover:opacity-100 transition-opacity" disabled>
                   Explore (Soon) <ArrowRight className="ml-1 h-4 w-4" />
                 </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
