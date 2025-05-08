import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from 'lucide-react';
import { getAllAvatars, type Avatar } from '@/services/avatar';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


const dashavatarNames = [
  'Matsya', 'Kurma', 'Varaha', 'Narasimha', 'Vamana',
  'Parashurama', 'Rama', 'Krishna', 'Buddha', 'Kalki'
];

export default async function DashavatarPage() {
  const allAvatars: Avatar[] = await getAllAvatars();
  const dashavatars = allAvatars.filter(avatar => dashavatarNames.includes(avatar.name));

  // Ensure avatars are in the canonical order
  const sortedDashavatars = dashavatarNames.map(name =>
    dashavatars.find(avatar => avatar.name === name)
  ).filter((avatar): avatar is Avatar => avatar !== undefined);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-serif text-primary">
         The Ten Primary Avatars (Dashavatar)
      </h1>

       <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
         The Dashavatar refers to the ten primary incarnations of Lord Vishnu who descend to Earth across different Yugas (ages) to restore cosmic order (Dharma) and vanquish evil. Explore each of these pivotal forms.
       </p>

       {/* Note about variations */}
        <Alert className="max-w-2xl mx-auto mb-12 bg-secondary/30 border-accent/50">
          <Info className="h-4 w-4 text-accent" />
          <AlertTitle className="font-semibold text-primary">Note on Variations</AlertTitle>
          <AlertDescription className="text-muted-foreground text-sm">
            While this page displays the most commonly cited Dashavatar list including Buddha, some Puranic traditions list Balarama (Krishna's brother) as the ninth avatar instead. Lists of avatars can vary across different scriptures.
          </AlertDescription>
        </Alert>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"> {/* Adjusted grid for 5 columns on larger screens */}
        {sortedDashavatars.map((avatar) => (
          <Link href={`/avatars/${avatar.name.toLowerCase()}`} key={avatar.name} passHref>
            <Card className="hover:shadow-xl transition-shadow duration-300 glowing-border cursor-pointer h-full flex flex-col group overflow-hidden">
              <CardHeader className="relative h-56 p-0">
                 <Image
                  src={avatar.imageUrl || `https://picsum.photos/400/300?random=${avatar.name}`} // Use provided or placeholder
                  alt={avatar.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                   data-ai-hint={`vishnu dashavatar ${avatar.name}`}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <CardTitle className="absolute bottom-4 left-4 text-white text-2xl font-bold font-serif z-10">
                  {avatar.name}
                </CardTitle>
                 <span className="absolute top-4 right-4 bg-primary/80 text-primary-foreground text-xs font-semibold px-2 py-1 rounded z-10">
                   {avatar.yuga}
                 </span>
              </CardHeader>
              <CardContent className="pt-4 flex-grow flex flex-col justify-between">
                 {/* Updated CardDescription to use avatar.description */}
                 <CardDescription className="mb-4 text-sm line-clamp-3">{avatar.description}</CardDescription>
                <div className="mt-auto">
                   <p className="text-xs text-muted-foreground mb-2"><strong>Symbolism:</strong> {avatar.symbolism}</p>
                  <Button variant="link" className="p-0 text-accent group-hover:underline">
                    Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                 </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

       {/* Link back to all avatars */}
       <div className="text-center mt-16">
           <Link href="/avatars" passHref>
               <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                   View All Avatars <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
           </Link>
       </div>
    </div>
  );
}
