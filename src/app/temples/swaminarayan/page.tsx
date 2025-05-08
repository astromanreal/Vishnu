
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Palette, Users, BookOpen, HeartHandshake, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { getTempleBySlug, type Temple } from '@/data/temples';
import { notFound } from 'next/navigation';

// Define specific content sections based on the provided data
const contentSections = [
    {
        title: "Swaminarayan's Philosophy and Temple Establishment",
        icon: BookOpen,
        text: "Swaminarayan, the founder of the Swaminarayan Sampraday, established temples (mandirs) as part of his philosophy of theism and deity worship. He constructed nine temples in Ahmedabad, Bhuj, Muli, Vadtal, Junagadh, Dholera, Dholka, Gadhpur, and Jetalpur, installing images of various Hindu gods like Nara-Narayana, Lakshmi Narayana, Radha Krishna, Radha Ramana, Revti-Baldevji, and Madan Mohan. These original temples fall under either the Nar Narayan Dev Gadi (Ahmedabad) or the Lakshmi Narayan Dev Gadi (Vadtal)."
    },
    {
        title: "Architectural Heritage",
        icon: Building,
        text: "A prominent feature is the temple architecture. Temples constructed during Swaminarayan's life and since primarily feature forms of Krishna. A notable exception is the Hanuman temple at Sarangpur. Temples include walkways for circumambulation (pradakshina), often decorated with intricate designs and marble. The main shrine is divided by railings, separating men and women for focused worship. Accommodations for sadhus are typically built nearby. Stones were often quarried from distant locations."
    },
    {
        title: "Worship and Devotion",
        icon: HeartHandshake,
        text: "Swaminarayan emphasized devotion (upasana) alongside detachment (vairagya). Mandirs serve as permanent places of worship, centers for religious gatherings, instruction, study of Sanskrit, devotional music, and Vedic literature. They also function as centers for social services, providing alms, medicine, and clothes."
    },
     {
        title: "Global Presence",
        icon: MapPin,
        text: "Today, there are over a thousand Swaminarayan temples spread across five continents, operating under the two main Gadis (seats) established by Swaminarayan."
    },
];


export default async function SwaminarayanTemplesPage() {
  const temple = await getTempleBySlug('swaminarayan');

  if (!temple) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden shadow-lg mb-12">
        <div className="relative h-64 md:h-96">
          <Image
            src={temple.imageUrl || `https://picsum.photos/seed/swaminarayan-overview/1200/400`}
            alt={temple.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint={temple.imageHint}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
            <CardTitle className="text-3xl md:text-5xl font-bold font-serif text-white mb-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              {temple.name}
            </CardTitle>
             {temple.location && (
               <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-200">
                   <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" /> {temple.location}
                   </span>
              </div>
             )}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center gap-2">
                 <Building className="h-5 w-5 text-accent" />
                 About Swaminarayan Temples
              </CardTitle>
               <CardDescription className="text-lg text-muted-foreground pt-1">
                 {temple.description}
               </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {contentSections.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-semibold text-xl mb-2 text-primary/90 flex items-center gap-2">
                         <section.icon className="h-5 w-5" /> {section.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                            {section.text}
                        </p>
                     </div>
                ))}
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
              <CardTitle className="text-xl font-serif">Key Aspects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
               <div className="flex items-start">
                 <Palette className="h-4 w-4 mr-2 mt-1 text-accent flex-shrink-0" />
                 <span>Focus on intricate architecture and deity worship (primarily Krishna forms).</span>
               </div>
               <div className="flex items-center">
                 <Users className="h-4 w-4 mr-2 text-accent" />
                 <span>Separate worship areas for men and women.</span>
               </div>
                <div className="flex items-start">
                 <HeartHandshake className="h-4 w-4 mr-2 mt-1 text-accent flex-shrink-0" />
                 <span>Serve as centers for religious, educational, and social activities.</span>
               </div>
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
                 <div className="pt-4 text-xs text-muted-foreground italic">
                    Note: This page provides a general overview. Specific details may vary between individual temples. For official information, refer to the respective temple trusts or the main Swaminarayan Sampraday organizations.
                 </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
