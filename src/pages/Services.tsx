import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
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
      price: '$4',
    },
    {
      key: 'metallic',
      image: metallicEpoxy1,
      price: '$8',
    },
    {
      key: 'flake',
      image: flakeFloor1,
      price: '$5',
    },
    {
      key: 'polyaspartic',
      image: garageFloor1,
      price: '$7',
    },
    {
      key: 'countertops',
      image: countertop1,
      price: '$60',
    },
    {
      key: 'industrial',
      image: commercialFloor1,
      price: '$3',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 pt-40 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
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
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-display font-bold">
                      {t('services.pricing.from')} {service.price}
                    </div>
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
                        {t('services.pricing.getQuote')}
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

      {/* Pricing Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('services.pricing.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              All prices include surface preparation, materials, and professional installation.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 font-display font-semibold">Service</th>
                    <th className="text-right py-4 font-display font-semibold">Starting Price</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.key} className="border-b border-border/50">
                      <td className="py-4">
                        <span className="font-medium">{t(`services.categories.${service.key}.title`)}</span>
                      </td>
                      <td className="py-4 text-right">
                        <span className="text-primary font-display font-bold">{service.price}</span>
                        <span className="text-muted-foreground text-sm"> {t('services.pricing.perSqFt')}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-6">
                  Final pricing depends on surface condition, square footage, and selected finish.
                </p>
                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    {t('nav.getQuote')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
