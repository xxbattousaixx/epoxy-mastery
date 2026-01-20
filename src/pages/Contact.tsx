import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ChromaticRippleHero from '@/components/ChromaticRippleHero';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: selectedService,
      message: formData.get('message') as string,
    };

    try {
      const { data: response, error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) {
        throw error;
      }

      toast({
        title: t('contact.form.success'),
        description: "We'll get back to you within 24 hours.",
      });
      
      (e.target as HTMLFormElement).reset();
      setSelectedService('');
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: t('contact.form.error'),
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      href: 'https://maps.google.com/?q=Bradenton,Sarasota,Florida,USA',
    },
    { 
      icon: Phone, 
      label: t('contact.info.phone'),
      href: 'tel:+19415181657',
    },
    { 
      icon: Mail, 
      label: t('contact.info.email'),
      href: 'mailto:edmena24@gmail.com',
    },
    { 
      icon: Clock, 
      label: t('contact.info.hours'),
      href: null,
    },
  ];

  const whatsappLink = 'https://wa.me/19415181657?text=' + encodeURIComponent('Hello! I\'m interested in your epoxy flooring services.');

  return (
    <Layout>
      <SEO 
        title="Contact Us - Get a Free Epoxy Flooring Quote"
        description="Contact EpoxyMasters for a free epoxy flooring quote. Serving Cabimas, Zulia and surrounding areas. Call, email, or fill out our contact form for fast response."
        keywords="contact epoxy flooring, free floor coating quote, epoxy installation estimate, Cabimas flooring contact, Venezuela epoxy quote"
        url="/contact"
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
                        placeholder="+1 (941) 518-1657"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">{t('contact.form.service')}</Label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226817.35387366825!2d-82.70640675!3d27.3364347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c340117a077705%3A0x7d6a2dce6a83bbee!2sSarasota%2C%20FL!5e0!3m2!1sen!2sus!4v1705420800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location - Bradenton, Lakewood Ranch & Sarasota, Florida"
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
