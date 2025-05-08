
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Landmark, Building, Globe, Shield, Users, Link as LinkIcon } from 'lucide-react';
import { getTempleBySlug, type Temple } from '@/data/temples';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function PrambananTemplePage() {
  const temple = await getTempleBySlug('prambanan');

  if (!temple) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden shadow-lg mb-12">
        <div className="relative h-64 md:h-96">
          <Image
            src={temple.imageUrl || `https://picsum.photos/seed/prambanan-wisnu/1200/400`}
            alt={temple.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint={temple.imageHint}
            priority // Prioritize loading the main image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
            <CardTitle className="text-3xl md:text-5xl font-bold font-serif text-white mb-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              {temple.name}
            </CardTitle>
             <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-200">
                 {temple.location && (
                   <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" /> {temple.location}
                   </span>
                 )}
                 {temple.coordinates && (
                   <span className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" /> {temple.coordinates}
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
                 {temple.description}
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               {temple.architecture && (
                 <div>
                   <h3 className="font-semibold text-lg mb-2 text-primary/90 flex items-center gap-1"><Building className="h-4 w-4" /> Architecture & History</h3>
                   <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-2">
                     {temple.built && <li><strong>Built Around:</strong> {temple.built}</li>}
                     {/* Add dynasty if available in data */}
                     {temple.architecture.type && <li><strong>Type:</strong> {temple.architecture.type}</li>}
                     {temple.architecture.style && <li><strong>Style:</strong> {temple.architecture.style}</li>}
                   </ul>
                 </div>
               )}
               {temple.deity && (
                 <div>
                   <h3 className="font-semibold text-lg mb-1 text-primary/90">Presiding Deity</h3>
                   <p className="text-muted-foreground">{temple.deity}</p>
                </div>
               )}
               {temple.unescoStatus && (
                 <div>
                   <h3 className="font-semibold text-lg mb-1 text-primary/90 flex items-center gap-1"><Shield className="h-4 w-4" /> UNESCO Status</h3>
                   <p className="text-muted-foreground text-sm">{temple.unescoStatus}</p>
                </div>
               )}
                 {temple.website && (
                 <div>
                    <h3 className="font-semibold text-lg mb-1 text-primary/90 flex items-center gap-1"><LinkIcon className="h-4 w-4" /> Website</h3>
                    <Link href={temple.website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm">
                       {temple.website}
                    </Link>
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
               {temple.affiliation && (
                 <div className="flex items-center">
                   <Users className="h-4 w-4 mr-2 text-accent" />
                   <span><strong>Affiliation:</strong> {temple.affiliation}</span>
                 </div>
               )}
               {temple.architecture?.notes?.includes('Trimurti') && (
                 <div className="flex items-start">
                    <Building className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                    <span>Part of the larger Prambanan Trimurti compound.</span>
                 </div>
               )}
               {temple.built && (
                 <div className="flex items-start">
                    <Calendar className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />
                    <span>Originally built around {temple.built}.</span>
                 </div>
               )}
                 {temple.tags && temple.tags.length > 0 && (
                   <div className="pt-4">
                     <h4 className="font-semibold mb-2 text-primary/90">Tags:</h4>
                     <div className="flex flex-wrap gap-2">
                       {temple.tags.map((tag, index) => (
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
