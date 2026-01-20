import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import ChromaticRippleHero from '@/components/ChromaticRippleHero';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import metallicEpoxy1 from '@/assets/gallery/metallic-epoxy-1.jpg';
import industrialFloor1 from '@/assets/gallery/industrial-floor-1.jpg';
import flakeFloor1 from '@/assets/gallery/flake-floor-1.jpg';
import countertop1 from '@/assets/gallery/countertop-1.jpg';
import garageFloor1 from '@/assets/gallery/garage-floor-1.jpg';
import commercialFloor1 from '@/assets/gallery/commercial-floor-1.jpg';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'epoxy',
      image: industrialFloor1,
    },
    {
      key: 'metallic',
      image: metallicEpoxy1,
    },
    {
      key: 'flake',
      image: flakeFloor1,
    },
    {
      key: 'polyaspartic',
      image: garageFloor1,
    },
    {
      key: 'countertops',
      image: countertop1,
    },
    {
      key: 'industrial',
      image: commercialFloor1,
    },
  ];

  return (
    <Layout>
      <SEO 
        title="Epoxy Flooring Services - Metallic, Industrial & Residential"
        description="Complete epoxy flooring services: metallic epoxy, industrial coatings, garage floors, polyaspartic coatings, and custom countertops. Free quotes in Cabimas, Zulia."
        keywords="epoxy flooring services, metallic epoxy installation, industrial floor coating, garage floor epoxy, polyaspartic coating, epoxy countertops, Cabimas services"
        url="/services"
      />
      {/* Hero Section */}
      <section className="relative py-32 pt-40 overflow-hidden">
        <ChromaticRippleHero />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-[1]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground drop-shadow-lg">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-gold transition-all duration-300 group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={t(`services.categories.${service.key}.title`)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">
                      {t(`services.categories.${service.key}.title`)}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {t(`services.categories.${service.key}.description`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(t(`services.categories.${service.key}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link to="/contact" className="w-full">
                      <Button variant="outline" className="w-full">
                        {t('nav.getQuote')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('services.cta.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              {t('services.cta.description')}
            </p>
            <Link to="/contact">
              <Button variant="cta" size="lg">
                {t('services.cta.button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
