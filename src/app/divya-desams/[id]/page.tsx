
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin as MapPinIcon, Building } from 'lucide-react'; // Renamed MapPin import
import { getDivyaDesamById, getAllDivyaDesams, type DivyaDesam } from '@/data/divya-desams';
import { notFound } from 'next/navigation';

interface DivyaDesamDetailPageProps {
  params: {
    id: string; // The ID from the URL
  };
}

export default async function DivyaDesamDetailPage({ params }: DivyaDesamDetailPageProps) {
  const { id } = params;
  const desam = await getDivyaDesamById(id);

  if (!desam) {
    notFound();
  }

  // Special handling for Celestial Desams - render slightly differently or add a note
  const isCelestial = desam.state === 'Celestial';

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden shadow-lg mb-12">
        <div className="relative h-64 md:h-96">
          <Image
            src={desam.imageUrl || `https://picsum.photos/seed/${desam.id}/1200/400`}
            alt={desam.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint={desam.imageHint}
            priority // Prioritize loading the main image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
            <CardTitle className="text-3xl md:text-5xl font-bold font-serif text-white mb-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              {desam.id}. {desam.name}
            </CardTitle>
             <div className="flex items-center space-x-4 text-sm text-gray-200">
                <Badge variant="secondary">{desam.state}</Badge>
                 <span className="flex items-center">
                     {/* Use MapPinIcon */}
                    <MapPinIcon className="h-4 w-4 mr-1" /> {desam.location}
                 </span>
            </div>
          </div>
        </div>
      </Card>

       {isCelestial && (
        <Card className="mb-8 bg-blue-900/20 border-blue-500/50 text-center">
            <CardContent className="p-4 text-blue-200 text-sm">
                 This Divya Desam exists in the celestial realm (Vaikuntha or Kshira Sagara) and is beyond physical perception, revered through faith and scripture.
            </CardContent>
        </Card>
       )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Content - More details can be added here if available */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                 <Building className="h-5 w-5 text-accent" />
                 Temple Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                 <h3 className="font-semibold text-lg mb-1 text-primary/90">Presiding Deities</h3>
                 <p className="text-muted-foreground">{desam.deities}</p>
              </div>

               {/* Placeholder for more details */}
               {!isCelestial ? (
                 <p className="text-sm text-muted-foreground italic pt-4">
                   More historical and architectural details about {desam.name} can be added here when available. This Divya Desam holds immense significance in Vaishnavism.
                 </p>
               ) : (
                 <p className="text-sm text-muted-foreground italic pt-4">
                    As a celestial realm, the description relies on scriptural accounts of Vaikuntha or the Ocean of Milk, symbolizing the ultimate spiritual destination.
                 </p>
               )}
            </CardContent>
          </Card>
        </div>

         {/* Sidebar - Placeholder for Related Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-serif">Related Information</CardTitle>
            </CardHeader>
            <CardContent>
               {/* Links to Alvars, related avatars, festivals etc. can go here */}
               <p className="text-sm text-muted-foreground">Information about related Alvars, festivals, or specific legends associated with this Divya Desam can be displayed here.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all Divya Desams
export async function generateStaticParams() {
  const desams = await getAllDivyaDesams();
  return desams.map((desam) => ({
    id: desam.id.toString(),
  }));
}

// Optional: Ensure dynamic segments are treated as static exports
export const dynamicParams = true;
