import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  DollarSign, 
  Award,
  CheckCircle,
  ChevronDown,
  Play
} from 'lucide-react';
import Layout from '@/components/Layout';
import ScrollThreeD from '@/components/ScrollThreeD';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Import gallery images
import metallicEpoxy1 from '@/assets/gallery/metallic-epoxy-1.jpg';
import industrialFloor1 from '@/assets/gallery/industrial-floor-1.jpg';
import flakeFloor1 from '@/assets/gallery/flake-floor-1.jpg';
import countertop1 from '@/assets/gallery/countertop-1.jpg';
import residentialFloor1 from '@/assets/gallery/residential-floor-1.jpg';
import countertop2 from '@/assets/gallery/countertop-2.jpg';
import heroVideo from '@/assets/hero-video.mp4';
import heroBg from '@/assets/hero-bg.jpg';

const Index: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, title: t('about.reasons.quality'), desc: t('about.reasons.qualityDesc') },
    { icon: Zap, title: t('about.reasons.fast'), desc: t('about.reasons.fastDesc') },
    { icon: DollarSign, title: t('about.reasons.price'), desc: t('about.reasons.priceDesc') },
    { icon: Award, title: t('about.reasons.warranty'), desc: t('about.reasons.warrantyDesc') },
  ];

  const galleryImages = [
    { src: metallicEpoxy1, alt: 'Metallic Epoxy Floor' },
    { src: industrialFloor1, alt: 'Industrial Floor' },
    { src: flakeFloor1, alt: 'Flake Epoxy Floor' },
    { src: countertop1, alt: 'Epoxy Countertop' },
    { src: residentialFloor1, alt: 'Residential Floor' },
    { src: countertop2, alt: 'Bar Countertop' },
  ];

  return (
    <Layout>
      <SEO 
        url="/"
        title="Premium Epoxy & Resin Flooring"
        description="Transform your floors into works of art with EpoxyMasters. Premium epoxy and resin flooring solutions in Bradenton, Lakewood Ranch, and Sarasota, Florida. Metallic epoxy, garage coatings, industrial floors."
        keywords="epoxy flooring, resin flooring, metallic epoxy, garage floor coating, industrial flooring, decorative concrete, Bradenton, Lakewood Ranch, Sarasota, Florida"
      />
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-epoxy-charcoal">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-80"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-epoxy-charcoal/60 via-epoxy-charcoal/40 to-epoxy-charcoal" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary font-medium text-sm mb-6">
              {t('common.premium')} • {t('common.fast')} • {t('common.affordable')}
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-foreground">{t('hero.title')}</span>
              <br />
              <span 
                className="inline-block bg-clip-text text-transparent animate-shimmer"
                style={{
                  backgroundImage: 'linear-gradient(90deg, hsl(38 92% 50%) 0%, hsl(45 100% 70%) 25%, hsl(32 95% 44%) 50%, hsl(45 100% 70%) 75%, hsl(38 92% 50%) 100%)',
                  backgroundSize: '200% 100%',
                }}
              >
                {t('hero.subtitle')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('hero.description')}
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl text-center hover:shadow-gold transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process 3D Section */}
      <section className="relative">
        <div className="text-center py-16 bg-background">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('process.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>
        <ScrollThreeD />
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('gallery.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-epoxy-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-display font-semibold">{img.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="cta" size="lg">
                {t('gallery.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Accordion Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('services.description')}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="epoxy" className="glass-card rounded-2xl border-none px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-semibold text-xl">{t('services.categories.epoxy.title')}</h3>
                      <p className="text-muted-foreground text-sm">{t('services.categories.epoxy.description')}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <img 
                      src={industrialFloor1} 
                      alt="Epoxy Floor" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                    <div>
                      <ul className="space-y-2">
                        {(t('services.categories.epoxy.features', { returnObjects: true }) as string[]).map((feature: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to="/services" className="mt-4 inline-block">
                        <Button variant="outline">{t('common.learnMore')}</Button>
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="metallic" className="glass-card rounded-2xl border-none px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-semibold text-xl">{t('services.categories.metallic.title')}</h3>
                      <p className="text-muted-foreground text-sm">{t('services.categories.metallic.description')}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <img 
                      src={metallicEpoxy1} 
                      alt="Metallic Epoxy Floor" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                    <div>
                      <ul className="space-y-2">
                        {(t('services.categories.metallic.features', { returnObjects: true }) as string[]).map((feature: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to="/services" className="mt-4 inline-block">
                        <Button variant="outline">{t('common.learnMore')}</Button>
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="flake" className="glass-card rounded-2xl border-none px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-semibold text-xl">{t('services.categories.flake.title')}</h3>
                      <p className="text-muted-foreground text-sm">{t('services.categories.flake.description')}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <img 
                      src={flakeFloor1} 
                      alt="Flake System Floor" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                    <div>
                      <ul className="space-y-2">
                        {(t('services.categories.flake.features', { returnObjects: true }) as string[]).map((feature: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to="/services" className="mt-4 inline-block">
                        <Button variant="outline">{t('common.learnMore')}</Button>
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="countertops" className="glass-card rounded-2xl border-none px-6">
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-semibold text-xl">{t('services.categories.countertops.title')}</h3>
                      <p className="text-muted-foreground text-sm">{t('services.categories.countertops.description')}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <img 
                      src={countertop1} 
                      alt="Epoxy Countertop" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                    <div>
                      <ul className="space-y-2">
                        {(t('services.categories.countertops.features', { returnObjects: true }) as string[]).map((feature: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to="/services" className="mt-4 inline-block">
                        <Button variant="outline">{t('common.learnMore')}</Button>
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

export default Index;
