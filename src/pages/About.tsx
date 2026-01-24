import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Zap, DollarSign, ArrowRight, Wrench, Layers, Droplets, Palette, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import ChromaticRippleHero from '@/components/ChromaticRippleHero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import installation1 from '@/assets/gallery/installation-1.jpg';
import residentialFloor1 from '@/assets/gallery/residential-floor-1.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();

  const reasons = [
    { icon: Shield, key: 'quality' },
    { icon: Zap, key: 'fast' },
    { icon: DollarSign, key: 'price' },
  ];

  const resinSystems = [
    { key: 'silica', icon: Layers },
    { key: 'quartz', icon: Sparkles },
    { key: 'flake', icon: Palette },
    { key: 'glitter', icon: Sparkles },
    { key: 'metallic', icon: Droplets },
    { key: 'solidColor', icon: Palette },
    { key: 'threeD', icon: Layers },
  ];

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is surface preparation important for epoxy flooring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Proper surface preparation is critical for epoxy adhesion and longevity. We use diamond grinding to create the ideal surface profile, remove contaminants, and conduct moisture testing to ensure the concrete is ready. Without proper prep, epoxy can peel, bubble, or fail prematurely.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of resin systems do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer a wide variety of resin systems including: Silica sand for industrial durability, Quartz aggregate for decorative strength, Flake systems for multi-color patterns, Glitter for sparkle effects, Metallic epoxy for stunning 3D designs, Solid color for clean professional looks, and 3D epoxy for artistic custom floors.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does epoxy flooring take to cure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Epoxy curing times vary by system. Typically, you can walk on the floor within 24 hours and return to light use in 48-72 hours. Full chemical cure and maximum durability is achieved in 7 days. Temperature and humidity affect cure times - we apply a protective top coat to all jobs for optimal curing and longevity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you perform moisture testing before installation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, moisture testing is a standard part of our surface preparation process. Excess moisture in concrete can cause epoxy delamination and coating failure. We use professional moisture meters and calcium chloride tests to ensure your slab is within acceptable moisture levels before application.',
        },
      },
      {
        '@type': 'Question',
        name: 'What primer types are used for epoxy flooring?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We use various primer types based on substrate conditions: Penetrating primers for porous concrete, Moisture-tolerant primers for slabs with higher moisture content, High-build primers to fill minor imperfections, and Bonding primers for previously coated surfaces. The right primer ensures maximum adhesion and coating performance.',
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO 
        title="About Us - Our Story & Mission"
        description="Learn about EpoxyMasters - Bradenton, Lakewood Ranch, and Sarasota's trusted epoxy flooring experts. Quality craftsmanship and customer satisfaction guaranteed."
        keywords="about EpoxyMasters, epoxy flooring company, Bradenton flooring contractors, Sarasota epoxy specialists, floor coating experts, Florida"
        url="/about"
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

      {/* Surface Preparation & Crack Repair */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('about.expertise.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('about.expertise.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Surface Preparation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-2xl">
                    {t('about.expertise.surfacePrep.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t('about.expertise.surfacePrep.description')}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {(t('about.expertise.surfacePrep.methods', { returnObjects: true }) as string[]).map((method, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {method}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Crack Repair */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-2xl">
                    {t('about.expertise.crackRepair.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t('about.expertise.crackRepair.description')}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {(t('about.expertise.crackRepair.methods', { returnObjects: true }) as string[]).map((method, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {method}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cove Base */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Droplets className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-2xl">
                    {t('about.expertise.coveBase.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {t('about.expertise.coveBase.description')}
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {(t('about.expertise.coveBase.benefits', { returnObjects: true }) as string[]).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primer Varieties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl font-bold">
                {t('about.primers.title')}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t('about.primers.description')}
              </p>
              
              <div className="space-y-4">
                {(t('about.primers.types', { returnObjects: true }) as Array<{name: string; desc: string}>).map((primer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-4 rounded-xl"
                  >
                    <h4 className="font-display font-semibold text-primary">{primer.name}</h4>
                    <p className="text-muted-foreground text-sm">{primer.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-4xl font-bold">
                {t('about.topcoat.title')}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t('about.topcoat.description')}
              </p>
              
              <div className="glass-card p-6 rounded-2xl">
                <ul className="space-y-3">
                  {(t('about.topcoat.benefits', { returnObjects: true }) as string[]).map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-primary shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resin Systems */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('about.resinSystems.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('about.resinSystems.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resinSystems.map((system, index) => (
              <motion.div
                key={system.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center hover:shadow-gold transition-all duration-300 group cursor-default">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                      <system.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-1">
                      {t(`about.resinSystems.types.${system.key}.name`)}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t(`about.resinSystems.types.${system.key}.desc`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
