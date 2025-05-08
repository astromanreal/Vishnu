
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from 'next/link'; // Added import for Link

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 font-serif text-primary">
        Legal Information
      </h1>

      <div className="space-y-12">
        {/* Privacy Policy Section */}
        <Card id="privacy-policy">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Privacy Policy</CardTitle>
            <CardDescription>Last Updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Welcome to Vaikuntha Digital ("we", "us", "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL] (the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h3 className="font-semibold text-lg text-foreground/90">Information We Collect</h3>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                 <li><strong>Usage Data:</strong> Information about how you use the Site, such as interaction with AI features.</li>
             </ul>


             <h3 className="font-semibold text-lg text-foreground/90">Use of Your Information</h3>
             <p>
               Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
             </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                 <li>Create and manage your account.</li>
                 <li>Email you regarding your account or order.</li>
                 <li>Improve the operation of the Site.</li>
                 <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                 <li>Respond to customer service requests.</li>
                 {/* Add other relevant uses */}
              </ul>


            <h3 className="font-semibold text-lg text-foreground/90">Disclosure of Your Information</h3>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
             </p>
               <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                  <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance. (e.g., Google Generative AI).</li>
                  {/* Add other relevant disclosures */}
               </ul>


             <h3 className="font-semibold text-lg text-foreground/90">Security of Your Information</h3>
             <p>
               We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
             </p>

             <h3 className="font-semibold text-lg text-foreground/90">Contact Us</h3>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at: <Link href="/contact" className="text-accent hover:underline">our contact page</Link>.
              </p>
          </CardContent>
        </Card>

        <Separator />

        {/* Terms of Service Section */}
        <Card id="terms-of-service">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Terms of Service</CardTitle>
             <CardDescription>Last Updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the [Your Website URL] website (the "Service") operated by Vaikuntha Digital ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.
            </p>

            <h3 className="font-semibold text-lg text-foreground/90">Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Vaikuntha Digital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                 <li>attempt to decompile or reverse engineer any software contained on Vaikuntha Digital's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
             <p className="mt-2">
               This license shall automatically terminate if you violate any of these restrictions and may be terminated by Vaikuntha Digital at any time.
             </p>


            <h3 className="font-semibold text-lg text-foreground/90">Disclaimer</h3>
            <p>
               The materials on Vaikuntha Digital's website are provided on an 'as is' basis. Vaikuntha Digital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
             </p>
             <p>
              Further, Vaikuntha Digital does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. Information provided by AI assistants may contain inaccuracies.
            </p>

            <h3 className="font-semibold text-lg text-foreground/90">Limitations</h3>
             <p>
               In no event shall Vaikuntha Digital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vaikuntha Digital's website, even if Vaikuntha Digital or a Vaikuntha Digital authorized representative has been notified orally or in writing of the possibility of such damage.
             </p>

             <h3 className="font-semibold text-lg text-foreground/90">Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction, e.g., State of California, Country] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>

            <h3 className="font-semibold text-lg text-foreground/90">Changes</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>

             <h3 className="font-semibold text-lg text-foreground/90">Contact Us</h3>
             <p>
               If you have any questions about these Terms, please contact us at: <Link href="/contact" className="text-accent hover:underline">our contact page</Link>.
             </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
