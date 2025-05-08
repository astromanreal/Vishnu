import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { getAllAvatars, type Avatar } from '@/services/avatar'; // Ensure service exists

// Define the canonical order of Dashavatars
const dashavatarNames = [
  'Matsya', 'Kurma', 'Varaha', 'Narasimha', 'Vamana',
  'Parashurama', 'Rama', 'Krishna', 'Buddha', 'Kalki'
];

export default async function AvatarsPage() {
  const avatars: Avatar[] = await getAllAvatars(); // Fetch all avatars
  const dashavatars = avatars.filter(avatar => dashavatarNames.includes(avatar.name));

  // Ensure Dashavatars are in the canonical order
  const sortedDashavatars = dashavatarNames.map(name =>
    dashavatars.find(avatar => avatar.name === name)
  ).filter((avatar): avatar is Avatar => avatar !== undefined);


  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 font-serif text-primary">
         The Avatars of Vishnu
      </h1>

       {/* Optional: Add introductory text about avatars */}
       <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
         Explore the divine incarnations of Lord Vishnu, who descends to Earth in various forms to uphold Dharma and protect the righteous. Discover the stories, symbolism, and purpose behind each avatar.
       </p>

      {/* Dashavatar Highlight Section */}
      <section className="mb-16 bg-secondary/30 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary/90 font-serif">
          The Ten Primary Avatars (Dashavatar)
        </h2>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-4 justify-center items-center mb-6">
          {sortedDashavatars.map((avatar) => (
            <Link href={`/avatars/${avatar.name.toLowerCase()}`} key={avatar.name} passHref>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                 <div className="relative h-16 w-16 mb-2 rounded-full overflow-hidden border-2 border-accent/50 group-hover:border-accent group-hover:shadow-md transition-all">
                  <Image
                    src={avatar.imageUrl || `https://picsum.photos/64/64?random=${avatar.name}`}
                    alt={avatar.name}
                    layout="fill"
                    objectFit="cover"
                     className="group-hover:scale-110 transition-transform"
                     data-ai-hint={`vishnu avatar ${avatar.name} icon`}
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {avatar.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/avatars/dashavatar" passHref>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Explore Dashavatar in Detail <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* All Avatars Grid */}
       <h2 className="text-3xl font-bold text-center mb-8 text-primary">All Recorded Avatars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {avatars.map((avatar) => (
          <Link href={`/avatars/${avatar.name.toLowerCase()}`} key={avatar.name} passHref>
            <Card className="hover:shadow-xl transition-shadow duration-300 glowing-border cursor-pointer h-full flex flex-col group overflow-hidden">
              <CardHeader className="relative h-56 p-0">
                 <Image
                  src={avatar.imageUrl || `https://picsum.photos/400/300?random=${avatar.name}`} // Use provided or placeholder
                  alt={avatar.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                   data-ai-hint={`vishnu avatar ${avatar.name}`}
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
    </div>
  );
}
