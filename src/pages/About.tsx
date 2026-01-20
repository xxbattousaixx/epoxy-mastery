import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Zap, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

import installation1 from '@/assets/gallery/installation-1.jpg';
import residentialFloor1 from '@/assets/gallery/residential-floor-1.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();

  const reasons = [
    { icon: Shield, key: 'quality' },
    { icon: Zap, key: 'fast' },
    { icon: DollarSign, key: 'price' },
  ];

  return (
    <Layout>
      <SEO 
        title="About Us - Our Story & Mission"
        description="Learn about EpoxyMasters - Bradenton, Lakewood Ranch, and Sarasota's trusted epoxy flooring experts. Quality craftsmanship and customer satisfaction guaranteed."
        keywords="about EpoxyMasters, epoxy flooring company, Bradenton flooring contractors, Sarasota epoxy specialists, floor coating experts, Florida"
        url="/about"
      />
      {/* Hero Section */}
      <section className="relative py-32 pt-40 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={installation1} 
                  alt="Our team at work" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl font-bold">{t('about.subtitle')}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('about.description')}
              </p>
              
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-xl text-primary">{t('about.mission')}</h3>
                  <p className="text-muted-foreground">{t('about.missionText')}</p>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-primary">{t('about.vision')}</h3>
                  <p className="text-muted-foreground">{t('about.visionText')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('about.whyUs')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center hover:shadow-gold transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <reason.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">
                  {t(`about.reasons.${reason.key}`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`about.reasons.${reason.key}Desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${residentialFloor1})` }}
        >
          <div className="absolute inset-0 bg-epoxy-charcoal/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.subtitle')}
            </h2>
            <p className="text-epoxy-steel text-lg max-w-2xl mx-auto mb-10">
              {t('contact.description')}
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="shadow-gold">
                {t('nav.getQuote')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
