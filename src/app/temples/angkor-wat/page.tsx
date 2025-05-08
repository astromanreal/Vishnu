
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Landmark, Building, Globe, Shield, Users, Building2 as ArchitectureIcon } from 'lucide-react'; // Changed Architecture to Building2 as ArchitectureIcon
import { getTempleBySlug, type Temple } from '@/data/temples';
import { notFound } from 'next/navigation';

export default async function AngkorWatPage() {
  const templeData = await getTempleBySlug('angkor-wat'); // Renamed to templeData to avoid conflict

  if (!templeData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden shadow-lg mb-12">
        <div className="relative h-64 md:h-96">
          <Image
            src={templeData.imageUrl || `https://picsum.photos/seed/angkor-wat/1200/400`}
            alt={templeData.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint={templeData.imageHint}
            priority // Prioritize loading the main image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
            <CardTitle className="text-3xl md:text-5xl font-bold font-serif text-white mb-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              {templeData.name}
            </CardTitle>
             <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-200">
                 {templeData.location && (
                   <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" /> {templeData.location}
                   </span>
                 )}
                 {templeData.coordinates && (
                   <span className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" /> {templeData.coordinates}
                   </span>
                 )}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                 <Landmark className="h-5 w-5 text-accent" />
                 About the Temple
              </CardTitle>
               <CardDescription className="text-lg text-muted-foreground pt-1">
                 {templeData.description}
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {(templeData.builder || templeData.built || templeData.affiliation) && (
                 <div>
                   <h3 className="font-semibold text-lg mb-2 text-primary/90 flex items-center gap-1"><Calendar className="h-4 w-4" /> History</h3>
                   <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-2">
                     {templeData.builder && <li><strong>Builder:</strong> {templeData.builder}</li>}
                     {templeData.built && <li><strong>Built Around:</strong> {templeData.built}</li>}
                     {templeData.affiliation?.startsWith('Originally') && <li><strong>Original Dedication:</strong> {templeData.affiliation.split(',')[0].replace('Originally ', '')}</li>}
                     {templeData.affiliation?.includes('later') && <li><strong>Later Use:</strong> {templeData.affiliation.split('later')[1]?.trim()}</li>}
                   </ul>
                 </div>
               )}
                {templeData.architecture && (
                  <div>
                   <h3 className="font-semibold text-lg mb-2 text-primary/90 flex items-center gap-1"><ArchitectureIcon className="h-4 w-4" /> Architecture</h3>
                   <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-2">
                     {templeData.architecture.style && <li><strong>Style:</strong> {templeData.architecture.style}</li>}
                     {templeData.architecture.notes && templeData.architecture.notes.includes('Mount Meru') && <li><strong>Symbolism:</strong> Represents Mount Meru</li>}
                     {templeData.architecture.notes && templeData.architecture.notes.includes('bas-reliefs') && <li><strong>Key Features:</strong> Extensive bas-reliefs, moat, galleried temple</li>}
                   </ul>
                 </div>
                )}
               {templeData.unescoStatus && (
                 <div>
                   <h3 className="font-semibold text-lg mb-1 text-primary/90 flex items-center gap-1"><Shield className="h-4 w-4" /> UNESCO Status</h3>
                   <p className="text-muted-foreground text-sm">{templeData.unescoStatus}</p>
                </div>
               )}
            </CardContent>
          </Card>
        </div>

         {/* Sidebar - Key Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-serif">Key Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
               {templeData.affiliation && (
                 <div className="flex items-start">
                   <Users className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                   <span><strong>Affiliation:</strong> {templeData.affiliation}</span>
                 </div>
               )}
                <div className="flex items-start">
                  <Building className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                  <span>Largest religious monument in the world.</span>
               </div>
                 {templeData.tags && templeData.tags.length > 0 && (
                   <div className="pt-4">
                     <h4 className="font-semibold mb-2 text-primary/90">Tags:</h4>
                     <div className="flex flex-wrap gap-2">
                       {templeData.tags.map((tag, index) => (
                         <Badge key={index} variant="secondary">{tag}</Badge>
                       ))}
                     </div>
                   </div>
                 )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
