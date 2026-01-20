import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

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


const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);

  const categories = ['all', 'residential', 'commercial', 'industrial', 'countertops'];

  const galleryItems = [
    { 
      src: metallicEpoxy1, 
      category: 'residential', 
      title: 'Metallic Gold Swirl Floor', 
      desc: 'Stunning 3D metallic epoxy with gold and silver swirls, creating a unique liquid metal effect in this modern garage space.'
    },
    { 
      src: metallicEpoxy2, 
      category: 'residential', 
      title: 'Copper Bronze Basement', 
      desc: 'Rich copper and bronze metallic finish transforming this basement into an elegant entertainment space.'
    },
    { 
      src: industrialFloor1, 
      category: 'industrial', 
      title: 'Warehouse High-Gloss Floor', 
      desc: 'Durable industrial-grade epoxy coating designed to withstand heavy forklift traffic and chemical exposure.'
    },
    { 
      src: flakeFloor1, 
      category: 'residential', 
      title: 'Blue Flake Luxury Garage', 
      desc: 'Premium blue and white decorative flake system with high-gloss topcoat, perfect for showcasing luxury vehicles.'
    },
    { 
      src: countertop1, 
      category: 'countertops', 
      title: 'Ocean Wave Kitchen Island', 
      desc: 'Breathtaking ocean-inspired epoxy countertop with deep blue resin and white marble veining effect.'
    },
    { 
      src: countertop2, 
      category: 'countertops', 
      title: 'Black & Gold Bar Top', 
      desc: 'Sophisticated black epoxy bar countertop with luxurious gold flake accents and high-gloss finish.'
    },
    { 
      src: residentialFloor1, 
      category: 'residential', 
      title: 'Modern Living Room Floor', 
      desc: 'Warm tan polished epoxy floor creating a seamless, elegant surface in this contemporary living space.'
    },
    { 
      src: commercialFloor1, 
      category: 'commercial', 
      title: 'Auto Showroom Floor', 
      desc: 'Ultra-clean white flake system designed for automotive dealerships, providing durability and aesthetic appeal.'
    },
    { 
      src: garageFloor1, 
      category: 'residential', 
      title: 'Classic Red Checkered Garage', 
      desc: 'Bold red and black checkered pattern epoxy floor, creating the ultimate man cave atmosphere.'
    },
    { 
      src: bathroomFloor1, 
      category: 'residential', 
      title: 'Marble Effect Bathroom', 
      desc: 'Elegant white marble-effect epoxy floor in this spa-like bathroom, providing waterproof seamless flooring.'
    },
    { 
      src: galaxyFloor1, 
      category: 'residential', 
      title: 'Galaxy Theme Floor', 
      desc: 'Mesmerizing galaxy-themed metallic epoxy with deep purple hues and scattered star effects.'
    },
    { 
      src: officeFloor1, 
      category: 'commercial', 
      title: 'Corporate Office Floor', 
      desc: 'Professional grey epoxy flooring solution for modern office environments, easy to maintain and durable.'
    },
    { 
      src: outdoorFloor1, 
      category: 'residential', 
      title: 'Pool Patio Coating', 
      desc: 'Decorative stamped coating for outdoor patio areas, providing slip-resistance and UV stability.'
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
              {t('gallery.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('gallery.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                  transition={{ delay: index * 0.05 }}
                  className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-epoxy-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-display font-semibold">{item.title}</p>
                      <p className="text-white/70 text-sm mt-1 line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full rounded-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-display text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/70 mt-2 max-w-2xl mx-auto">{selectedImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
