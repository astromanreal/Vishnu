import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookText, ArrowRight } from 'lucide-react';
import { getAllStotras, type Stotra } from '@/services/stotra'; // Import the service

export default async function StotrasPage() {
  const availableStotras: Stotra[] = await getAllStotras(); // Fetch all stotras

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-serif text-primary">
        Mantras & Stotras
      </h1>

      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        Immerse yourself in the divine vibrations of sacred hymns and chants. Explore the meanings and read the verses.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {availableStotras.map((stotra) => (
          <Link href={`/stotras/${stotra.slug}`} key={stotra.slug} passHref>
            <Card className="hover:shadow-xl transition-shadow duration-300 glowing-border cursor-pointer h-full flex flex-col group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                   <CardTitle className="text-2xl font-bold font-serif text-primary/90 group-hover:text-primary">
                    {stotra.title}
                  </CardTitle>
                   <BookText className="h-6 w-6 text-accent opacity-70 group-hover:opacity-100" />
                </div>
                {/* Using a placeholder description or could generate one */}
                <CardDescription>A sacred hymn dedicated to {stotra.deity}. ({stotra.language})</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                 <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-muted-foreground">Deity: {stotra.deity}</span>
                   <Button variant="link" className="p-0 text-accent group-hover:underline">
                     Read <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                   </Button>
                 </div>
              </CardContent>
            </Card>
          </Link>
        ))}

         {/* Placeholder for coming soon */}
         <Card className="border-dashed border-muted-foreground/50 h-full flex flex-col items-center justify-center text-center">
             <CardHeader>
                <CardTitle className="text-xl font-semibold text-muted-foreground">More Stotras Coming Soon</CardTitle>
             </CardHeader>
              <CardContent>
                 <CardDescription>We are continuously adding more sacred texts.</CardDescription>
              </CardContent>
         </Card>
      </div>
    </div>
  );
}
