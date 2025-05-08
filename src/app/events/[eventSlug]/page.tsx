
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getEventBySlug, getAllEvents } from '@/data/events';
import { notFound } from 'next/navigation';
import { Calendar, Tag } from 'lucide-react';

interface EventDetailPageProps {
  params: {
    eventSlug: string;
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { eventSlug } = params;
  const event = await getEventBySlug(eventSlug);

  if (!event) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="overflow-hidden shadow-lg mb-12">
        <div className="relative h-64 md:h-96">
          <Image
            src={event.imageUrl || `https://picsum.photos/1200/400?random=${encodeURIComponent(event.title)}`}
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint={event.imageHint || event.keywords.slice(0, 2).join(' ')}
            priority // Prioritize loading the main image
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10">
            <CardTitle className="text-3xl md:text-5xl font-bold font-serif text-white mb-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              {event.title}
            </CardTitle>
             <div className="flex items-center space-x-2 text-sm text-gray-200">
                <Calendar className="h-4 w-4" />
                <span>Historic/Mythological Event</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Event Details</CardTitle>
            </CardHeader>
            <CardContent>
               {/* Use whitespace-pre-line to respect potential newlines in description */}
              <CardDescription className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {event.description}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Potential related avatars/deities section could go here */}

        </div>

         {/* Sidebar/Keywords */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-serif flex items-center">
                <Tag className="h-5 w-5 mr-2 text-accent" />
                Keywords
              </CardTitle>
            </CardHeader>
            <CardContent>
              {event.keywords && event.keywords.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {event.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No keywords associated with this event.</p>
              )}
            </CardContent>
          </Card>

           {/* Placeholder for related Links/Sources */}
           {/* <Card>
             <CardHeader>
               <CardTitle className="text-xl font-serif">Related Links</CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-sm text-muted-foreground">Further reading or source material links can be added here.</p>
             </CardContent>
           </Card> */}
        </div>
      </div>
    </div>
  );
}

// Generate static paths for all events
export async function generateStaticParams() {
  const events = await getAllEvents();
  return events.map((event) => ({
    eventSlug: event.slug,
  }));
}

// Optional: Ensure dynamic segments are treated as static exports
export const dynamicParams = true; // Can be true or false depending on build strategy
