import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookText } from 'lucide-react';
import { getAvatar, type Avatar } from '@/services/avatar';
import { getStotrasByDeity, type Stotra } from '@/services/stotra';
import { notFound } from 'next/navigation';
import { getAvatarArticles, AvatarArticle } from '@/data/avatar-articles';

export default async function NarasimhaPage() {
  let avatar: Avatar | null = null;
  let relatedStotras: Stotra[] = [];
  let articles: AvatarArticle[] = [];

  try {
    avatar = await getAvatar('Narasimha');
    if (avatar) {
      relatedStotras = await getStotrasByDeity(avatar.name);
      articles = getAvatarArticles(avatar.name.toLowerCase());
    }
  } catch (error) {
    console.error(`Error fetching data for "Narasimha":`, error);
    notFound();
  }

  if (!avatar) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Image Section */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden shadow-lg">
             <div className="relative aspect-video"> {/* Changed aspect ratio to video (16:9) */}
              <Image
                src={avatar.imageUrl || `https://picsum.photos/800/450?random=${avatar.name}`} // Adjusted placeholder size
                alt={avatar.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint={`vishnu avatar ${avatar.name} detail`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <CardTitle className="absolute bottom-4 left-4 text-white text-3xl font-bold font-serif z-10">{avatar.name}</CardTitle>
              <Badge variant="secondary" className="absolute top-4 right-4 text-sm z-10">{avatar.yuga}</Badge>
            </div>
          </Card>
        </div>

        {/* Details & Articles Section */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
               {/* Updated CardDescription to use avatar.description */}
               <CardDescription className="text-lg text-muted-foreground pt-2">{avatar.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-base">
              <div>
                <h3 className="font-semibold text-xl mb-2 text-primary/90 font-serif">Symbolism</h3>
                <p className="text-muted-foreground">{avatar.symbolism}</p>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-primary/90 font-serif">Purpose of Incarnation</h3>
                <p className="text-muted-foreground">{avatar.purpose}</p>
              </div>
             </CardContent>
          </Card>

           {/* Articles Section */}
           {articles.length > 0 && (
             <Card>
               <CardHeader>
                 <CardTitle className="text-2xl font-serif">Stories & Leelas</CardTitle>
               </CardHeader>
               <CardContent className="space-y-6">
                 {articles.map((article, index) => (
                   <article key={index} className="border-l-4 border-accent pl-4 py-2 bg-secondary/20 rounded-r-md">
                     <h4 className="font-semibold text-lg mb-1 text-primary">{article.title}</h4>
                     <p className="text-sm text-muted-foreground">{article.summary}</p>
                   </article>
                 ))}
               </CardContent>
             </Card>
           )}

           {/* Related Mantras & Stotras Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Related Mantras & Stotras</CardTitle>
            </CardHeader>
            <CardContent>
              {relatedStotras.length > 0 ? (
                <ul className="space-y-3">
                  {relatedStotras.map((stotra) => (
                    <li key={stotra.slug}>
                      <Link href={`/stotras/${stotra.slug}`} passHref>
                        <Button variant="link" className="p-0 text-accent hover:underline flex items-center space-x-2 text-base">
                           <BookText className="h-4 w-4" />
                          <span>{stotra.title}</span>
                        </Button>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                         ({stotra.language}) - Composer: {stotra.composer}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No specific stotras currently linked to {avatar.name}.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
