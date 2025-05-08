import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookText, User, ArrowRight } from 'lucide-react'; // Removed Sparkles as it was used for Mantra
import { getAllStotras, type Stotra } from '@/services/stotra';
import { getAllAvatars, type Avatar } from '@/services/avatar';
import { Badge } from '@/components/ui/badge';

// Helper function to get a daily index based on the current date
const getDailyIndex = (arrayLength: number): number => {
  if (arrayLength === 0) return 0;
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  // Simple modulo operation for daily rotation
  return (dayOfYear + today.getFullYear()) % arrayLength;
};

export async function FeaturedContent() {
  // Removed getAllMantras from Promise.all
  const [allStotras, allAvatars] = await Promise.all([
    getAllStotras(),
    getAllAvatars(),
  ]);

  // Removed featuredMantra definition
  const featuredStotra: Stotra | undefined = allStotras[getDailyIndex(allStotras.length)];
  const featuredAvatar: Avatar | undefined = allAvatars[getDailyIndex(allAvatars.length)];

  return (
    <section className="py-12 bg-gradient-to-b from-secondary/10 to-background rounded-lg my-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary font-serif">
        Today's Divine Feature
      </h2>
      {/* Updated grid layout for 2 items */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Featured Mantra Section Removed */}

        {/* Featured Stotra */}
        {featuredStotra && (
           <Link href={`/stotras/${featuredStotra.slug}`} passHref className="block h-full group">
            <Card className="flex flex-col transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl glowing-border hover:shadow-accent/30 h-full">
                <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary/90 group-hover:text-primary">
                    <BookText className="h-5 w-5 text-accent" /> Stotra of the Day
                </CardTitle>
                <CardDescription>Read the verses of {featuredStotra.title}.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm">
                <p className="font-semibold text-base group-hover:text-primary">{featuredStotra.title}</p>
                <p className="text-muted-foreground">({featuredStotra.language}) - Deity: {featuredStotra.deity}</p>
                {/* Display first verse as snippet */}
                {featuredStotra.verses.length > 0 && (
                    <div className="mt-2 border-l-2 border-accent/50 pl-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        <p className="text-sm italic text-muted-foreground line-clamp-3">
                            {featuredStotra.verses[0].transliteration}
                        </p>
                         <p className="text-xs text-foreground/80 line-clamp-2 mt-1">
                            "{featuredStotra.verses[0].englishMeaning}"
                         </p>
                    </div>
                )}
                </CardContent>
                 <div className="p-4 pt-0 mt-auto">
                     <Button variant="link" className="px-0 text-accent group-hover:underline" tabIndex={-1}>
                         Read Stotra <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                     </Button>
                 </div>
            </Card>
          </Link>
        )}

        {/* Featured Avatar */}
        {featuredAvatar && (
           <Link href={`/avatars/${featuredAvatar.name.toLowerCase()}`} passHref className="block h-full group">
            <Card className="flex flex-col transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl glowing-border hover:shadow-accent/30 h-full overflow-hidden">
                <CardHeader className="relative p-0 h-40">
                     <Image
                        src={featuredAvatar.imageUrl || `https://picsum.photos/seed/${featuredAvatar.name}/300/200`}
                        alt={featuredAvatar.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-105"
                         data-ai-hint={`vishnu avatar ${featuredAvatar.name} featured`}
                         unoptimized // Use unoptimized for picsum
                      />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                     <CardTitle className="absolute bottom-3 left-3 text-white text-xl font-bold font-serif z-10 group-hover:text-accent">
                        {featuredAvatar.name}
                     </CardTitle>
                     <Badge variant="secondary" className="absolute top-3 right-3 text-xs z-10">{featuredAvatar.yuga}</Badge>
                </CardHeader>
                 <CardContent className="pt-4 flex-grow space-y-2 text-sm">
                     <CardDescription className="font-semibold text-base">Avatar of the Day</CardDescription>
                     <p className="text-muted-foreground line-clamp-4">{featuredAvatar.description}</p>
                     <p className="text-xs text-muted-foreground pt-1"><strong>Symbolism:</strong> {featuredAvatar.symbolism}</p>
                 </CardContent>
                 <div className="p-4 pt-0 mt-auto">
                     <Button variant="link" className="px-0 text-accent group-hover:underline" tabIndex={-1}>
                         Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                     </Button>
                 </div>
            </Card>
           </Link>
        )}

      </div>
    </section>
  );
}
