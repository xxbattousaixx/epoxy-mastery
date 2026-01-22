import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const Terms: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Terms of Service | EpoxyMasters"
        description="Terms of Service for EpoxyMasters epoxy flooring services in Bradenton, Lakewood Ranch, and Sarasota, Florida."
        url="https://epoxy-masters.com/terms"
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground">
              <strong>Effective Date:</strong> January 2025
            </p>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using this website (epoxy-masters.com), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Services
              </h2>
              <p className="text-muted-foreground">
                EpoxyMasters provides epoxy and resin flooring installation services in Bradenton, Lakewood Ranch, Sarasota, and surrounding areas in Florida. All services are subject to availability and our standard terms and conditions provided during the quote process.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                3. Quotes and Pricing
              </h2>
              <p className="text-muted-foreground">
                All quotes provided are estimates based on the information available at the time. Final pricing may vary based on actual site conditions, material costs, and scope of work. Quotes are valid for 30 days unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All content on this website, including text, graphics, logos, images, and software, is the property of EpoxyMasters and protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                5. User Conduct
              </h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Submit false or misleading information</li>
                <li>Interfere with the proper functioning of the website</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                EpoxyMasters shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website. Our total liability shall not exceed the amount paid for our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                7. Warranty
              </h2>
              <p className="text-muted-foreground">
                We stand behind our work with a 5-year warranty on materials and workmanship, subject to proper maintenance and care. Warranty terms will be provided in writing upon project completion.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                8. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                10. Contact
              </h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, contact us at:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>Email:</strong> edmena24@gmail.com</li>
                <li><strong>Phone:</strong> +1 (941) 518-1657</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
