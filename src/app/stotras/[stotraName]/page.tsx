import { getStotra, type Stotra, type StotraVerse } from '@/services/stotra'; // Ensure service exists
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// Icons like PlayCircle, PauseCircle, etc. are removed as they are no longer needed
import { notFound } from 'next/navigation';

interface StotraDetailPageProps {
  params: {
    stotraName: string; // This will be the slug, e.g., "shree-hari-stotram"
  };
}

// Helper to format slug back to a more readable name if needed, or use title from data
// Kept for potential future use, but using title directly from data now.
function formatStotraName(slug: string): string {
   return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


export default async function StotraDetailPage({ params }: StotraDetailPageProps) {
   let stotra: Stotra | null = null;

    try {
     // Fetch stotra using the slug from params
     stotra = await getStotra(params.stotraName);
   } catch (error) {
     console.error(`Stotra "${params.stotraName}" not found:`, error);
     notFound(); // Trigger Next.js 404 page
   }

   // Should not happen if getStotra throws, but good practice
   if (!stotra) {
       notFound();
   }


  return (
    <div className="container mx-auto px-4 py-12">
       <Card className="mb-8 shadow-lg">
          <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold font-serif text-primary">{stotra.title}</CardTitle>
               <CardDescription className="text-lg text-muted-foreground mt-2">
                  Read the sacred verses of {stotra.title}. ({stotra.language})
               </CardDescription>
               <div className="text-sm text-muted-foreground mt-1">
                  <span>Deity: {stotra.deity}</span> | <span>Composer: {stotra.composer}</span>
               </div>
          </CardHeader>
           {/* CardContent containing the player is removed */}
       </Card>


      <div className="space-y-6">
        {stotra.verses.map((verse, index) => (
          <VerseDisplay key={index} verse={verse} index={index} />
        ))}
      </div>
    </div>
  );
}

// Separate component for displaying each verse
// No changes needed here as it only displays text
function VerseDisplay({ verse, index }: { verse: StotraVerse, index: number }) {
  return (
     <Card className="p-6 transition-all duration-300 ease-in-out hover:shadow-md glowing-border bg-card/50 hover:bg-card/80">
       <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start"> {/* Changed items-center to items-start */}
         <div className="md:col-span-1 text-center md:text-left pt-1"> {/* Added padding top */}
           <span className="text-2xl font-bold text-accent">{index + 1}</span>
         </div>
         <div className="md:col-span-11 space-y-3">
            <p className="text-2xl font-['Tiro_Devanagari_Sanskrit',_serif] text-primary leading-relaxed">{verse.sanskrit}</p>
           <p className="text-lg italic text-muted-foreground">{verse.transliteration}</p>
           <p className="text-base text-foreground/90">{verse.englishMeaning}</p>
         </div>
       </div>
     </Card>
  );
}


// Optional: Generate static paths if you know all stotra slugs beforehand
export async function generateStaticParams() {
   const { getAllStotras } = await import('@/services/stotra');
   const stotras = await getAllStotras();
   return stotras.map((stotra) => ({
     stotraName: stotra.slug,
   }));
}
