import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

const Privacy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO
        title="Privacy Policy | EpoxyMasters"
        description="Privacy Policy for EpoxyMasters epoxy flooring services in Bradenton, Lakewood Ranch, and Sarasota, Florida."
        url="https://epoxy-masters.com/privacy"
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground">
              <strong>Effective Date:</strong> January 2025
            </p>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground">
                EpoxyMasters ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website epoxy-masters.com.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number when you submit our contact form.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, and device type.</li>
                <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to analyze website traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you quotes and information about our services</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                4. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground mb-4">
                We use Google Analytics 4 to analyze website traffic. This service uses cookies to collect anonymous data about:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Pages you visit on our website</li>
                <li>Time spent on each page</li>
                <li>How you arrived at our website</li>
                <li>Your general geographic location (city/region level)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can manage your cookie preferences using the cookie consent banner when you first visit our site, or by adjusting your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                5. Data Sharing
              </h2>
              <p className="text-muted-foreground">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our website and services</li>
                <li><strong>Analytics Partners:</strong> Google Analytics for website traffic analysis</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                6. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                7. Your Rights
              </h2>
              <p className="text-muted-foreground mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for cookie tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                8. Third-Party Links
              </h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policy of every website you visit.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-muted-foreground">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Effective Date" at the top.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                11. Contact Us
              </h2>
              <p className="text-muted-foreground">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2 mt-4">
                <li><strong>Email:</strong> edmena24@gmail.com</li>
                <li><strong>Phone:</strong> +1 (941) 518-1657</li>
                <li><strong>Address:</strong> Bradenton, Lakewood Ranch & Sarasota, Florida</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
