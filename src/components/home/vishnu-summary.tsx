
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Import Badge component
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    ShieldCheck, Users, Heart, Waves, Sun, CalendarDays, Bird, Bot,
    Swords, Crosshair, Shell, Flower, Star, BookOpen, Quote
} from 'lucide-react';

const vishnuData = {
    roles: [
        "God of Preservation",
        "Restorer of Dharma",
        "The Protector of Good",
        "Bestower of Karma",
        "The Supreme Being (Vaishnavism)",
        "Member of Trimurti",
    ],
    otherNames: ["Narayana", "Hari", "Madhava", "Keshava", "Achyuta", "Janardana", "Govinda", /* "Vishnu Sahasranama" */],
    affiliation: ["Parabrahman", "Trimurti", "Brahman", "Bhagavan", "Ishvara", "Dashavatara"],
    abode: ["Vaikuntha", "Kshira Sagara (Ocean of Milk)"],
    mantras: ["Om Namo Narayanaya", "Om Namo Bhagavate Vāsudevāya", "Hari Om"],
    weapons: ["Sudarshana Chakra (discus)", "Kaumodaki (mace)", "Sharanga (bow)", "Nandaka (sword)"],
    symbols: ["Padma (lotus)", "Shaligram", "Panchajanya (conch)"],
    day: "Thursday",
    mounts: ["Garuda (eagle)", "Shesha (serpent)"],
    festivals: [
        "Holi", "Rama Navami", "Krishna Janmashtami", "Narasimha Jayanti", "Deepavali",
        "Onam", "Vivaha Panchami", "Vishu", "Vijayadashami", "Kartik Purnima",
        "Tulasi Vivaha", "Buddha Purnima", "Ananta Chaturdashi", "Shayani Ekadashi",
        "Prabodhini Ekadashi", "Vaikuntha Ekadashi", // and other Ekadashis
    ],
    consort: "Lakshmi and her forms",
    siblings: ["Durga as Yogamaya (ceremonial sister)"],
    children: ["Bala and Utsaha (according to some Puranas)"],
};

export function VishnuSummary() {
    return (
        <section className="py-12 bg-secondary/20 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary font-serif">
                Lord Vishnu: The Preserver
            </h2>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Card 1: Core Identity & Attributes */}
                <Card className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                            <ShieldCheck className="h-5 w-5" /> Roles & Affiliation
                        </CardTitle>
                        <CardDescription>The fundamental nature and position of Vishnu.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {vishnuData.roles.map((role, i) => <li key={i}>{role}</li>)}
                        </ul>
                        <div>
                            <h4 className="font-semibold mb-2 text-sm text-primary/90">Affiliation:</h4>
                            <div className="flex flex-wrap gap-1">
                                {vishnuData.affiliation.map((aff, i) => <Badge key={i} variant="secondary">{aff}</Badge>)}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Card 2: Abode, Attributes & Symbols */}
                <Card className="h-full flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                            <Star className="h-5 w-5" /> Divine Attributes
                        </CardTitle>
                        <CardDescription>Abode, symbols, weapons, and associated elements.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-1 text-primary/90 flex items-center gap-1"><Waves className="h-4 w-4" />Abode:</h4>
                            <p className="text-muted-foreground">{vishnuData.abode.join(', ')}</p>
                        </div>
                         <div>
                            <h4 className="font-semibold mb-1 text-primary/90 flex items-center gap-1"><Swords className="h-4 w-4" />Weapons:</h4>
                             <p className="text-muted-foreground">{vishnuData.weapons.join(', ')}</p>
                         </div>
                         <div>
                             <h4 className="font-semibold mb-1 text-primary/90 flex items-center gap-1"><Flower className="h-4 w-4" />Symbols:</h4>
                             <p className="text-muted-foreground">{vishnuData.symbols.join(', ')}</p>
                         </div>
                         <div className="flex items-center gap-4">
                             <div>
                                 <h4 className="font-semibold mb-1 text-primary/90 flex items-center gap-1"><Bird className="h-4 w-4" />Mounts:</h4>
                                 <p className="text-muted-foreground">{vishnuData.mounts.join(', ')}</p>
                             </div>
                            <div>
                                 <h4 className="font-semibold mb-1 text-primary/90 flex items-center gap-1"><CalendarDays className="h-4 w-4" />Day:</h4>
                                 <p className="text-muted-foreground">{vishnuData.day}</p>
                             </div>
                         </div>
                    </CardContent>
                </Card>

                {/* Card 3: Devotion & Family */}
                 <Card className="h-full flex flex-col">
                     <CardHeader>
                         <CardTitle className="flex items-center gap-2 text-primary">
                             <BookOpen className="h-5 w-5" /> Mantras, Festivals & Family
                         </CardTitle>
                         <CardDescription>Ways of worship and divine relationships.</CardDescription>
                     </CardHeader>
                     <CardContent className="flex-grow space-y-4 text-sm">
                         <div>
                            <h4 className="font-semibold mb-2 text-primary/90 flex items-center gap-1"><Quote className="h-4 w-4" />Mantras:</h4>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                {vishnuData.mantras.map((mantra, i) => <li key={i} className="font-mono">{mantra}</li>)}
                            </ul>
                        </div>
                         <Accordion type="single" collapsible className="w-full">
                             <AccordionItem value="item-1">
                                 <AccordionTrigger className="text-sm font-semibold text-primary/90 py-2"><CalendarDays className="inline h-4 w-4 mr-1"/> Key Festivals</AccordionTrigger>
                                 <AccordionContent>
                                     <div className="flex flex-wrap gap-1 py-2">
                                         {vishnuData.festivals.slice(0, 10).map((festival, i) => <Badge key={i} variant="outline">{festival}</Badge>)}
                                         {vishnuData.festivals.length > 10 && <Badge variant="outline">... and more</Badge>}
                                     </div>
                                 </AccordionContent>
                             </AccordionItem>
                         </Accordion>
                          <div>
                            <h4 className="font-semibold mb-1 text-primary/90 flex items-center gap-1"><Heart className="h-4 w-4" />Consort:</h4>
                            <p className="text-muted-foreground">{vishnuData.consort}</p>
                         </div>
                         <div className="flex items-start gap-4">
                             <div>
                                <h4 className="font-semibold mb-1 text-primary/90 flex items-center gap-1"><Users className="h-4 w-4" />Siblings:</h4>
                                <p className="text-muted-foreground">{vishnuData.siblings.join(', ')}</p>
                            </div>
                             <div>
                                <h4 className="font-semibold mb-1 text-primary/90 flex items-center gap-1"><Users className="h-4 w-4" />Children:</h4>
                                <p className="text-muted-foreground">{vishnuData.children.join(', ')}</p>
                            </div>
                         </div>
                         <div>
                            <h4 className="font-semibold mb-2 text-primary/90 flex items-center gap-1"><Bot className="h-4 w-4" />Other Names:</h4>
                            <div className="flex flex-wrap gap-1">
                                {vishnuData.otherNames.slice(0, 7).map((name, i) => <Badge key={i} variant="secondary">{name}</Badge>)}
                                <Badge variant="secondary">... many more</Badge>
                            </div>
                        </div>

                     </CardContent>
                 </Card>
            </div>
        </section>
    );
}
