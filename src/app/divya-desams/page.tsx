
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin as MapPinIcon, ArrowRight, Database } from 'lucide-react'; // Renamed MapPin import
import { getAllDivyaDesams, type DivyaDesam } from '@/data/divya-desams';
import { Badge } from '@/components/ui/badge';

export default async function DivyaDesamsPage() {
  const divyaDesams: DivyaDesam[] = await getAllDivyaDesams(); // Fetch all Divya Desams

  const earthlyDesams = divyaDesams.filter(d => d.state !== 'Celestial');
  const celestialDesams = divyaDesams.filter(d => d.state === 'Celestial');

  const stateCounts = earthlyDesams.reduce((acc, desam) => {
    acc[desam.state] = (acc[desam.state] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);


  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-serif text-primary">
        The 108 Divya Desams
      </h1>

      <p className="text-center text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
        Explore the 108 sacred temples revered by the Alvars, the Tamil poet-saints, as the divine abodes of Lord Vishnu. These temples span across India, Nepal, and the celestial realms.
      </p>

      {/* Summary Section */}
      <Card className="mb-12 bg-secondary/30 p-6 rounded-lg shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-semibold text-primary/90 font-serif flex items-center gap-2">
            <Database className="h-6 w-6"/> Distribution Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 text-sm">
           <Badge variant="outline" className="text-base">Total: 108</Badge>
           <Badge variant="secondary" className="text-base">Earthly: {earthlyDesams.length}</Badge>
           <Badge variant="secondary" className="text-base">Celestial: {celestialDesams.length}</Badge>
           {Object.entries(stateCounts).map(([state, count]) => (
             <Badge key={state} variant="secondary" className="text-base">{state}: {count}</Badge>
           ))}
        </CardContent>
      </Card>

      {/* Earthly Desams */}
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Earthly Divya Desams ({earthlyDesams.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {earthlyDesams.map((desam) => (
           // Wrap the entire Card with Link
           <Link href={`/divya-desams/${desam.id}`} key={desam.id} passHref className="block group">
            <Card
              className="flex flex-col overflow-hidden h-full transition-all duration-500 ease-in-out transform group-hover:-translate-y-1 group-hover:shadow-xl glowing-border"
              style={{ perspective: '1000px' }} // Add perspective for 3D effect
            >
              <CardHeader className="relative p-0 h-48">
                <div className="absolute inset-0 overflow-hidden rounded-t-lg">
                  <Image
                    src={desam.imageUrl || `https://picsum.photos/seed/${desam.id}/400/300`}
                    alt={desam.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                    data-ai-hint={desam.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <CardTitle className="absolute bottom-3 left-3 text-white text-lg font-bold font-serif z-10 group-hover:text-accent transition-colors duration-300">
                  {desam.id}. {desam.name}
                </CardTitle>
                <span className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs font-semibold px-2 py-1 rounded z-10 backdrop-blur-sm">
                   {/* Use MapPinIcon */}
                  <MapPinIcon className="inline-block h-3 w-3 mr-1" /> {desam.location}, {desam.state}
                </span>
              </CardHeader>
              <CardContent className="pt-4 flex-grow flex flex-col justify-between bg-card/80 backdrop-blur-sm rounded-b-lg">
                <CardDescription className="mb-3 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 line-clamp-3">
                  <strong>Deities:</strong> {desam.deities}
                </CardDescription>
                <div className="mt-auto pt-1 flex items-center justify-end text-xs text-muted-foreground">
                    {/* Removed Link from button, Card is linked */}
                    <Button variant="link" size="sm" className="p-0 text-accent group-hover:underline opacity-70 group-hover:opacity-100 transition-opacity" tabIndex={-1}>
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>
              </CardContent>
            </Card>
           </Link>
        ))}
      </div>

      {/* Celestial Desams */}
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Celestial Divya Desams ({celestialDesams.length})</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {celestialDesams.map((desam) => (
           // Wrap the Card with Link, disable navigation for celestial ones
           <Link href={`/divya-desams/${desam.id}`} key={desam.id} passHref className="block group pointer-events-none">
             <Card
               className="flex flex-col overflow-hidden h-full transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl glowing-border bg-gradient-to-br from-primary/10 via-secondary/10 to-background opacity-80 hover:opacity-100"
             >
               <CardHeader className="relative p-0 h-48">
                 <div className="absolute inset-0 overflow-hidden rounded-t-lg">
                   <Image
                     src={desam.imageUrl || `https://picsum.photos/seed/${desam.id}/400/300`}
                     alt={desam.name}
                     layout="fill"
                     objectFit="cover"
                     className="transition-transform duration-500 ease-in-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
                     data-ai-hint={desam.imageHint}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                 </div>
                 <CardTitle className="absolute bottom-3 left-3 text-white text-xl font-bold font-serif z-10 group-hover:text-accent transition-colors duration-300">
                    {desam.id}. {desam.name}
                 </CardTitle>
                  <span className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs font-semibold px-2 py-1 rounded z-10 backdrop-blur-sm">
                     {/* Use MapPinIcon */}
                    <MapPinIcon className="inline-block h-3 w-3 mr-1" /> {desam.location} ({desam.state})
                  </span>
               </CardHeader>
               <CardContent className="pt-4 flex-grow flex flex-col justify-between bg-card/80 backdrop-blur-sm rounded-b-lg">
                 <CardDescription className="mb-3 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    <strong>Deities:</strong> {desam.deities}
                 </CardDescription>
                  <CardDescription className="text-xs italic text-muted-foreground/80">
                    These divine realms are beyond earthly perception but are revered as Divya Desams.
                  </CardDescription>
                  <div className="mt-auto pt-1 flex items-center justify-end text-xs text-muted-foreground">
                     <Button variant="link" size="sm" className="p-0 text-accent group-hover:underline opacity-70 group-hover:opacity-100 transition-opacity" disabled tabIndex={-1}>
                       Explore (Conceptual) <ArrowRight className="ml-1 h-4 w-4" />
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
