import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

import heroBg from '@/assets/hero-bg.jpg';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: t('contact.form.success'),
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const services = [
    { value: 'epoxy', label: t('services.categories.epoxy.title') },
    { value: 'metallic', label: t('services.categories.metallic.title') },
    { value: 'flake', label: t('services.categories.flake.title') },
    { value: 'polyaspartic', label: t('services.categories.polyaspartic.title') },
    { value: 'countertops', label: t('services.categories.countertops.title') },
    { value: 'industrial', label: t('services.categories.industrial.title') },
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      label: t('contact.info.address'),
      href: 'https://maps.google.com/?q=Cabimas,Zulia,Venezuela',
    },
    { 
      icon: Phone, 
      label: t('contact.info.phone'),
      href: 'tel:+584123143681',
    },
    { 
      icon: Mail, 
      label: t('contact.info.email'),
      href: 'mailto:ohnoesninjas@gmail.com',
    },
    { 
      icon: Clock, 
      label: t('contact.info.hours'),
      href: null,
    },
  ];

  const whatsappLink = 'https://wa.me/584123143681?text=' + encodeURIComponent('Hello! I\'m interested in your epoxy flooring services.');

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
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold mb-6">
                  {t('contact.subtitle')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('contact.form.name')}</Label>
                      <Input 
                        id="name" 
                        name="name"
                        required 
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')}</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        required 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        placeholder="+58 0412 314 3681"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">{t('contact.form.service')}</Label>
                      <Select name="service">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover">
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.form.message')}</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required 
                      rows={5}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t('contact.form.sending')
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold mb-6">
                  {t('footer.contact')}
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <li key={index}>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          {info.label}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          {info.label}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp CTA */}
              <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 border-[#25D366]/30">
                <h3 className="font-display text-xl font-semibold mb-4">
                  {t('contact.social.whatsapp')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get instant answers! Chat with us directly on WhatsApp for faster response.
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E]">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t('contact.social.whatsapp')}
                  </Button>
                </a>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62736.90177656424!2d-71.48111649999999!3d10.3971899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8a325b0ea30e1f%3A0x1c9a8bb99c8e4e8f!2sCabimas%2C%20Zulia%2C%20Venezuela!5e0!3m2!1sen!2sus!4v1705420800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
