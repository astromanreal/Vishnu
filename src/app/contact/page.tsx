
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Twitter, Instagram, Github } from "lucide-react"; // Added Github
import Link from "next/link";

export default function ContactPage() {
  // TODO: Implement actual form submission logic (e.g., using Server Actions)
  async function handleSubmit(formData: FormData) {
    'use server';
    // Process form data here
    console.log("Form submitted:", Object.fromEntries(formData));
    // Potentially send email, save to DB, etc.
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 font-serif text-primary">Get in Touch</h1>

      <blockquote className="text-center text-lg italic text-muted-foreground mb-12 max-w-2xl mx-auto border-l-4 border-accent pl-4">
        "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | <br />
        मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||"
        <footer className="mt-2 text-sm">— Bhagavad Gita, Chapter 2, Verse 47</footer>
      </blockquote>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" name="name" type="text" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input id="subject" name="subject" type="text" placeholder="Subject of your message" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea id="message" name="message" placeholder="Your message..." required rows={5} />
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Details */}
        <div className="space-y-6">
           <Card>
             <CardHeader>
               <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out through other channels.</CardDescription>
             </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <a href="mailto:Astroman6569@gmail.com" className="text-muted-foreground hover:text-foreground">
                    Astroman6569@gmail.com
                  </a>
                </div>
                 <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">+91 8102116569</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Twitter className="h-5 w-5 text-accent" />
                   <a href="https://x.com/Sathyamsarthak" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    @Sathyamsarthak
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Instagram className="h-5 w-5 text-accent" />
                   <a href="https://www.instagram.com/srishikharji/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    @srishikharji
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github className="h-5 w-5 text-accent" />
                   <a href="https://github.com/astromanreal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    astromanreal
                  </a>
                </div>
              </CardContent>
           </Card>
            {/* Optional Map Placeholder */}
            {/* <div className="h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Map Placeholder
            </div> */}
        </div>
      </div>
    </div>
  );
}
