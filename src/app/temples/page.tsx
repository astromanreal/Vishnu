

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import Button
import { Building, MapPin, ArrowRight, Star, Map as MapIcon } from 'lucide-react'; // Renamed Map import to MapIcon
import { getAllTemples, type Temple } from '@/data/temples'; // Import the temple data service
import Link from 'next/link'; // Import Link

export default async function TemplesPage() {
  const temples: Temple[] = await getAllTemples(); // Fetch all temples

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-serif text-primary">
        Sacred Vishnu Temples
      </h1>

      <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
        Explore significant temples dedicated to Lord Vishnu across the world, each holding unique history and spiritual importance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {temples.map((temple) => {
           const isDivyaDesamCard = temple.name === '108 Divya Desams';
           const isAbhimanaCard = temple.name === '108 Abhimana Kshethram';
           const isBadrinathCard = temple.name === 'Badrinath Temple';
           const isJagannathPuriCard = temple.name === 'Jagannath Temple, Puri';
           const isVenkateswaraCard = temple.name === 'Venkateswara Temple, Tirumala';
           const isSrirangamCard = temple.name === 'Ranganathaswamy Temple, Srirangam';
           const isSwaminarayanCard = temple.name === 'Swaminarayan Temples';
           const isBirlaMandirCard = temple.name === 'Birla Mandir';
           const isPrambananCard = temple.name === 'Candi Wisnu, Prambanan'; // Corrected name
           const isPadmanabhaswamyCard = temple.name === 'Padmanabhaswamy Temple';
           const isAngkorWatCard = temple.name === 'Angkor Wat'; // Check for Angkor Wat
           const isDeogarhCard = temple.name === 'Dashavatara Temple, Deogarh'; // Check for Deogarh
           const isPundarikakshanCard = temple.name === 'Pundarikakshan Perumal Temple'; // Check for Pundarikakshan
           const isKallalagarCard = temple.name === 'Kallalagar Temple, Madurai'; // Check for Kallalagar
           const isGuruvayurCard = temple.name === 'Guruvayur Temple, Thrissur'; // Check for Guruvayur
           const isAnanthapuraCard = temple.name === 'Ananthapura Lake Temple, Kasaragod'; // Check for Ananthapura


           // Determine link destination
           let linkHref = "#"; // Default no link
           if (isDivyaDesamCard) {
             linkHref = "/divya-desams";
           } else if (isAbhimanaCard) {
             linkHref = "/abhimana-kshethrams";
           } else if (isBadrinathCard) {
             linkHref = "/temples/badrinath";
           } else if (isJagannathPuriCard) {
             linkHref = "/temples/jagannath-puri";
           } else if (isVenkateswaraCard) {
             linkHref = "/temples/venkateswara-tirumala";
           } else if (isSrirangamCard) {
             linkHref = "/temples/srirangam";
           } else if (isSwaminarayanCard) {
             linkHref = "/temples/swaminarayan";
           } else if (isBirlaMandirCard) {
             linkHref = "/temples/birla-mandir";
           } else if (isPrambananCard) {
             linkHref = "/temples/prambanan";
           } else if (isPadmanabhaswamyCard) {
             linkHref = "/temples/padmanabhaswamy";
           } else if (isAngkorWatCard) {
             linkHref = "/temples/angkor-wat";
           } else if (isDeogarhCard) {
             linkHref = "/temples/deogarh";
           } else if (isPundarikakshanCard) { // Add link for Pundarikakshan
             linkHref = "/temples/pundarikakshan";
           } else if (isKallalagarCard) { // Add link for Kallalagar
             linkHref = "/temples/kallalagar";
           } else if (isGuruvayurCard) { // Add link for Guruvayur
              linkHref = "/temples/guruvayur";
           } else if (isAnanthapuraCard) { // Add link for Ananthapura
             linkHref = "/temples/ananthapura";
           }


           const buttonDisabled = linkHref === "#"; // Disable button if no link defined
           const cardIsLinked = !buttonDisabled; // Card is linked if button is not disabled

           // Use MapIcon instead of Map
           const icon = isDivyaDesamCard ? <MapIcon className="h-4 w-4 mr-1 text-accent/70" /> : isAbhimanaCard ? <Star className="h-4 w-4 mr-1 text-accent/70" /> : <Building className="h-4 w-4 mr-1 text-accent/70" />;

          const templeCard = (
            <Card
              key={temple.name} // Key should be on the outermost element
              className={`flex flex-col overflow-hidden group transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-xl glowing-border h-full ${cardIsLinked ? 'cursor-pointer' : ''}`} // Added h-full and conditional cursor
              style={{ perspective: '1000px' }} // Add perspective for 3D effect
            >
              <CardHeader className="relative p-0 h-56">
                 <div className="absolute inset-0 overflow-hidden rounded-t-lg">
                    <Image
                      src={temple.imageUrl || `https://picsum.photos/seed/${encodeURIComponent(temple.name)}/400/300`}
                      alt={temple.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                      data-ai-hint={temple.imageHint}
                      unoptimized // Use unoptimized for picsum.photos
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                 </div>
                <CardTitle className="absolute bottom-4 left-4 text-white text-xl md:text-2xl font-bold font-serif z-10 group-hover:text-accent transition-colors duration-300"> {/* Adjusted text size */}
                  {temple.name}
                </CardTitle>
                <span className="absolute top-4 right-4 bg-primary/80 text-primary-foreground text-xs font-semibold px-2 py-1 rounded z-10 backdrop-blur-sm">
                  <MapPin className="inline-block h-3 w-3 mr-1" /> {temple.location}
                </span>
              </CardHeader>
              <CardContent className="pt-4 flex-grow flex flex-col justify-between bg-card/80 backdrop-blur-sm rounded-b-lg">
                <CardDescription className="mb-4 text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 line-clamp-4">
                  {temple.description}
                </CardDescription>
                 {/* Visual cue for exploration */}
                 <div className="mt-auto pt-2 flex items-center justify-between text-xs text-muted-foreground">
                     <div className="flex items-center opacity-70 group-hover:opacity-100 transition-opacity">
                         {icon} {/* Using the icon variable */}
                         <span>{cardIsLinked ? 'Explore Details' : 'Details Coming Soon'}</span>
                     </div>
                     {/* Visual Arrow */}
                     {/* Conditionally render button or span if disabled */}
                      {!buttonDisabled ? (
                         <Button variant="link" size="sm" className="p-0 text-accent opacity-70 group-hover:opacity-100 group-hover:underline" tabIndex={-1} >
                             Explore <ArrowRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${cardIsLinked ? 'group-hover:translate-x-1' : ''}`} />
                         </Button>
                      ) : (
                        <span className="flex items-center text-muted-foreground/50"> {/* Fallback for disabled */}
                            (Soon) <ArrowRight className="ml-1 h-4 w-4 opacity-50" />
                        </span>
                      )}
                 </div>
              </CardContent>
            </Card>
          );

          // Wrap the card with the link if it has a dedicated page
          if (cardIsLinked) {
            return (
              <Link href={linkHref} key={temple.name} passHref className="block h-full"> {/* Added block and h-full */}
                {templeCard}
              </Link>
            );
          } else {
            // For other temples, just render the card (it will have a disabled visual cue)
            // Key is already on the Card component itself
            return templeCard;
          }
        })}
      </div>
    </div>
  );
}

