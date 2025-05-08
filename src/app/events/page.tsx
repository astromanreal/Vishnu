

import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // Import Button
import { ArrowRight } from 'lucide-react'; // Import ArrowRight
import { getAllEvents, type VishnuEvent } from '@/data/events'; // Import the event data service

export default async function EventsPage() {
  const events: VishnuEvent[] = await getAllEvents(); // Fetch all events

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-serif text-primary">
        Divine Events & Leelas
      </h1>

      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        Explore significant events and divine plays (Leelas) from the Puranas and Epics, showcasing the actions and interventions of Lord Vishnu and his avatars.
      </p>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => ( // Removed index, using slug as key
             // Link uses the event slug now
            <Link href={`/events/${event.slug}`} key={event.slug} passHref>
              <Card className="hover:shadow-lg transition-shadow duration-300 glowing-border flex flex-col overflow-hidden group">
                <CardHeader className="relative h-48 p-0">
                  <Image
                    src={event.imageUrl || `https://picsum.photos/400/250?random=${encodeURIComponent(event.title)}`}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={event.imageHint || event.keywords.slice(0, 2).join(' ')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <CardTitle className="absolute bottom-4 left-4 text-white text-xl font-bold font-serif z-10">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 flex-grow flex flex-col justify-between">
                  <CardDescription className="mb-4 text-sm line-clamp-4">{event.description}</CardDescription>
                  <div className="mt-auto pt-2 flex flex-col items-start"> {/* Use flex-col and items-start */}
                    {event.keywords && event.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3"> {/* Add margin-bottom */}
                        {event.keywords.slice(0, 4).map((keyword, kwIndex) => ( // Limit keywords shown
                          <Badge key={kwIndex} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {/* Button remains as visual cue, link handles navigation */}
                    <Button variant="link" size="sm" className="p-0 text-accent mt-1 group-hover:underline cursor-pointer"> {/* Adjusted margin, added cursor */}
                      Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground mt-12">
          <p>No events available at the moment. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
