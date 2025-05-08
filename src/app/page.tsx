
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { VishnuSummary } from '@/components/home/vishnu-summary';
import { Avatar, getAllAvatars } from '@/services/avatar';
import { FeaturedContent } from '@/components/home/featured-content';

export default async function Home() {
  // Fetch all avatars to dynamically get descriptions and images
  const allAvatars: Avatar[] = await getAllAvatars();

  // Define the names of avatars to feature
  const featuredAvatarNames = [
    'Dashavatar', // Special case - links to dashavatar page
    'Narasimha',
    'Parashurama',
    'Rama',
    'Krishna',
    'Kalki',
  ];

  // Prepare data for featured avatars, including images
  const featuredAvatars = featuredAvatarNames.map(name => {
    if (name === 'Dashavatar') {
      return {
        name: 'Dashavatar',
        description: 'Explore the ten primary avatars of Vishnu.',
        link: '/avatars/dashavatar',
        imageHint: 'vishnu avatars collage',
        // Use the new Google Drive link
        imageUrl: `https://lh3.googleusercontent.com/d/1KlxakL6cUtXhT_i6o2RyIfLhg_YVBzWc`,
      };
    }
    const avatar = allAvatars.find(a => a.name === name);
    return {
      name: avatar?.name ?? name,
      description: avatar?.description ?? `Learn more about ${name}.`,
      link: `/avatars/${name.toLowerCase()}`,
      imageHint: avatar ? `vishnu avatar ${avatar.name}` : `vishnu avatar ${name}`,
      imageUrl: avatar?.imageUrl, // Use the actual image URL from data
    };
  }).filter(avatar => avatar !== undefined); // Filter out potential undefined if find fails unexpectedly


  return (
    <div className="space-y-12">
      {/* Animated Cosmic Scene Placeholder */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
         <Image
            src="https://i.pinimg.com/736x/81/19/21/81192114d75852ff1e3bfd9828937272.jpg"
            alt="Cosmic Ocean"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-60 z-0" // Increased opacity from 30 to 60
            data-ai-hint="vishnu cosmic ocean"
            priority // Prioritize loading hero image
          />
          {/* Floating Symbols */}
          <div className="absolute top-10 left-10 w-12 h-12 floating-symbol opacity-50">
             <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path></svg> {/* Simple Chakra Placeholder */}
          </div>
           <div className="absolute bottom-10 right-10 w-16 h-16 floating-symbol opacity-60">
             <svg viewBox="0 0 24 24" fill="currentColor" className="text-pink-400"><path d="M21.99 9.73c0 1.54-.53 2.97-1.43 4.12-.9 1.14-2.1 1.98-3.56 2.53l-.1.03c-2.6 1-5.48 1.01-8.1.03l-.1-.03c-1.46-.55-2.66-1.39-3.56-2.53C4.25 12.7 3.72 11.27 3.72 9.73c0-2.81 1.88-5.27 4.56-6.16.6-.2 1.25-.3 1.94-.3.7 0 1.36.11 2 .33.63.21 1.2.53 1.7.94.5-.41 1.07-.73 1.7-.94.64-.22 1.3-.33 2-.33.69 0 1.34.1 1.94.3 2.68.89 4.56 3.35 4.56 6.16zM12 16c2.28-.02 4.4-.88 6-2.35 1.03-.95 1.78-2.16 2-3.51.11-.7-.06-1.4-.45-2-.38-.59-.93-1.03-1.55-1.27-.8-.31-1.68-.29-2.48.06-.54.23-1.01.58-1.39 1.03-.59.67-.88 1.51-.88 2.37 0 .85.29 1.67.85 2.32.38.44.86.78 1.39.99 1.18.48 2.48.36 3.56-.08l.18-.07c.15-.06.31-.1.47-.13.17-.03.34-.04.51-.04.43 0 .85.1 1.24.29.4.19.73.46.98.8.25.34.4.73.44 1.15.03.41-.04.82-.21 1.2-.17.38-.41.72-.71 1-.66.61-1.46 1.02-2.33 1.19-1.04.2-2.11.18-3.13-.07-1.03-.25-2-.7-2.87-1.31-.87-.61-1.61-1.39-2.2-2.3-.58.91-1.32 1.69-2.19 2.3-.87.61-1.84 1.06-2.87 1.31-1.01.24-2.08.27-3.12.07-.87-.17-1.67-.58-2.33-1.19-.3-.28-.54-.62-.71-1-.17-.38-.24-.79-.21-1.2.03-.42.19-.81.44-1.15.25-.34.58-.61.98-.8.39-.19.81-.29 1.24-.29.17 0 .34.01.51.04.16.03.32.07.47.13l.18.07c1.08.44 2.38.56 3.56.08.53-.21 1.01-.55 1.39-.99.56-.65.85-1.47.85-2.32s-.29-1.7-.88-2.37c-.38-.45-.85-.8-1.39-1.03-.8-.34-1.68-.37-2.48-.06-.62.24-1.17.68-1.55 1.27-.39.6-.56 1.3-.45 2 .22 1.35.97 2.56 2 3.51 1.6 1.47 3.72 2.33 6 2.35z"></path></svg> {/* Simple Lotus Placeholder */}
          </div>

          <div className="relative z-10 text-white p-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-300 font-serif" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Vaikuntha Digital</h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
              An interactive journey into the divine realm of Mahavishnu. Explore his avatars, stories, and wisdom.
            </p>
          </div>
      </section>

      {/* Featured Content Section */}
      <FeaturedContent />

      {/* Vishnu Summary Section */}
      <VishnuSummary />

      {/* Avatar Section Links */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Explore the Avatars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAvatars.map((avatar) => (
            <Link href={avatar.link} key={avatar.name} passHref>
              <Card className="hover:shadow-lg transition-shadow duration-300 glowing-border cursor-pointer h-full flex flex-col">
                 <CardHeader className="relative h-48">
                   <Image
                    src={avatar.imageUrl || `https://picsum.photos/seed/${avatar.name.toLowerCase()}/300/200`} // Use avatar.imageUrl, fallback to picsum
                    alt={avatar.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint={avatar.imageHint}
                    // Add unoptimized if using many picsum images to avoid hitting limits
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-lg" />
                   <CardTitle className="absolute bottom-4 left-4 text-white text-2xl font-bold font-serif">{avatar.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-4 flex flex-col justify-between">
                  <CardDescription className="mb-4 line-clamp-3">{avatar.description}</CardDescription>
                   <Button variant="link" className="self-start px-0 text-accent">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
           <Link href="/avatars" passHref>
              <Card className="hover:shadow-lg transition-shadow duration-300 glowing-border cursor-pointer h-full flex flex-col items-center justify-center text-center bg-secondary/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold font-serif text-primary">All Avatars</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>View all major and minor avatars.</CardDescription>
                   <Button variant="outline" className="mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                     Explore All <ArrowRight className="ml-2 h-4 w-4" />
                   </Button>
                </CardContent>
              </Card>
            </Link>
        </div>
      </section>

      {/* Section linking to Mantras & Stotras */}
      <section className="text-center">
        <Link href="/stotras" passHref>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Discover Mantras & Stotras
          </Button>
        </Link>
      </section>
    </div>
  );
}

