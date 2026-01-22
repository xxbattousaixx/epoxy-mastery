import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import ChromaticRippleHero from '@/components/ChromaticRippleHero';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

// After images (finished epoxy floors)
import metallicEpoxy1 from '@/assets/gallery/metallic-epoxy-1.jpg';
import metallicEpoxy2 from '@/assets/gallery/metallic-epoxy-2.jpg';
import industrialFloor1 from '@/assets/gallery/industrial-floor-1.jpg';
import flakeFloor1 from '@/assets/gallery/flake-floor-1.jpg';
import countertop1 from '@/assets/gallery/countertop-1.jpg';
import countertop2 from '@/assets/gallery/countertop-2.jpg';
import residentialFloor1 from '@/assets/gallery/residential-floor-1.jpg';
import commercialFloor1 from '@/assets/gallery/commercial-floor-1.jpg';
import garageFloor1 from '@/assets/gallery/garage-floor-1.jpg';
import bathroomFloor1 from '@/assets/gallery/bathroom-floor-1.jpg';
import galaxyFloor1 from '@/assets/gallery/galaxy-floor-1.jpg';
import officeFloor1 from '@/assets/gallery/office-floor-1.jpg';
import outdoorFloor1 from '@/assets/gallery/outdoor-floor-1.jpg';

// Before images (plain concrete floors)
import beforeGarage1 from '@/assets/gallery/before-garage-1.jpg';
import beforeIndustrial1 from '@/assets/gallery/before-industrial-1.jpg';
import beforeOffice1 from '@/assets/gallery/before-office-1.jpg';

// Before/After transformation pairs - same space, plain concrete → finished epoxy
const transformations = [
  {
    before: beforeGarage1,
    after: metallicEpoxy1,
    title: 'Garage: Plain Concrete → Metallic Epoxy',
  },
  {
    before: beforeIndustrial1,
    after: flakeFloor1,
    title: 'Warehouse: Worn Concrete → Flake System',
  },
  {
    before: beforeOffice1,
    after: commercialFloor1,
    title: 'Commercial: Raw Floor → Showroom Finish',
  },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const categories = ['all', 'residential', 'commercial', 'industrial', 'countertops'];

  const galleryItems = [
    { src: metallicEpoxy1, category: 'residential', title: 'Metallic Gold Swirl', desc: '3D metallic epoxy with gold/silver swirls.' },
    { src: metallicEpoxy2, category: 'residential', title: 'Copper Bronze Basement', desc: 'Rich copper-bronze metallic finish.' },
    { src: industrialFloor1, category: 'industrial', title: 'Warehouse Floor', desc: 'Heavy-duty industrial coating.' },
    { src: flakeFloor1, category: 'residential', title: 'Blue Flake Garage', desc: 'Premium decorative flake system.' },
    { src: countertop1, category: 'countertops', title: 'Ocean Wave Island', desc: 'Deep blue resin countertop.' },
    { src: countertop2, category: 'countertops', title: 'Black & Gold Bar', desc: 'Luxury gold flake bar top.' },
    { src: residentialFloor1, category: 'residential', title: 'Modern Living Room', desc: 'Warm tan polished epoxy.' },
    { src: commercialFloor1, category: 'commercial', title: 'Auto Showroom', desc: 'Ultra-clean white flake system.' },
    { src: garageFloor1, category: 'residential', title: 'Red Checkered Garage', desc: 'Bold red/black pattern.' },
    { src: bathroomFloor1, category: 'residential', title: 'Marble Effect Bath', desc: 'Waterproof marble-effect floor.' },
    { src: galaxyFloor1, category: 'residential', title: 'Galaxy Theme', desc: 'Purple metallic with star effects.' },
    { src: officeFloor1, category: 'commercial', title: 'Corporate Office', desc: 'Professional grey epoxy.' },
    { src: outdoorFloor1, category: 'residential', title: 'Pool Patio', desc: 'Slip-resistant outdoor coating.' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  // ImageGallery Schema for SEO
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'EpoxyMasters Floor Gallery',
    description: 'Before and after epoxy floor transformations in Bradenton, Lakewood Ranch, and Sarasota FL',
    url: 'https://epoxy-masters.com/gallery',
    image: galleryItems.map(item => ({
      '@type': 'ImageObject',
      name: item.title,
      description: item.desc,
    })),
  };

  return (
    <Layout>
      <SEO 
        title="Epoxy Floor Gallery | Before & After Transformations"
        description="See stunning before/after epoxy floor transformations. Metallic epoxy, garage floors, industrial coatings in Bradenton, Sarasota & Lakewood Ranch FL."
        keywords="epoxy floor gallery, before after epoxy, floor transformation, metallic epoxy photos, garage floor Bradenton, epoxy Sarasota, floor coating Lakewood Ranch"
        url="/gallery"
      />
      
      {/* Additional Schema */}
      <script type="application/ld+json">
        {JSON.stringify(imageGallerySchema)}
      </script>

      {/* Hero Section */}
      <section className="relative py-24 pt-36 overflow-hidden">
        <ChromaticRippleHero />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-[1]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground drop-shadow-lg">
              Floor Transformations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from Bradenton, Sarasota & Lakewood Ranch projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-3xl font-bold mb-2">Before & After</h2>
            <p className="text-muted-foreground">Drag to reveal transformations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformations.map((item, index) => (
              <BeforeAfterSlider
                key={index}
                beforeImage={item.before}
                afterImage={item.after}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="capitalize"
              >
                {t(`gallery.categories.${category}`)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.03 }}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.src} 
                    alt={`${item.title} - Epoxy flooring in Florida`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-epoxy-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready for Your Transformation?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Free estimates for Bradenton, Sarasota & Lakewood Ranch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="tel:+19415181657">
                <Phone className="h-4 w-4" /> (941) 518-1657
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-8 w-8" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full rounded-xl"
              />
              <div className="mt-3 text-center">
                <h3 className="text-white font-display text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/70 mt-1">{selectedImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
