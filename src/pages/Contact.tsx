import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle, 
  Shield, Star, CheckCircle, Zap, Users, ChevronDown 
} from 'lucide-react';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    { value: 'metallic-epoxy', label: 'Metallic Epoxy Flooring' },
    { value: 'garage-floor', label: 'Garage Floor Coating' },
    { value: 'industrial', label: 'Industrial & Commercial Flooring' },
    { value: 'flake-epoxy', label: 'Flake Epoxy Systems' },
    { value: 'countertops', label: 'Epoxy Countertops' },
    { value: 'polyaspartic', label: 'Polyaspartic Coatings' },
    { value: 'other', label: 'Other / Not Sure' },
  ];

  const contactInfo = [
    { 
      icon: MapPin, 
      label: 'Bradenton, Lakewood Ranch & Sarasota, FL',
      sublabel: 'Serving all of Manatee & Sarasota Counties',
      href: 'https://maps.google.com/?q=Bradenton,Sarasota,Florida,USA',
    },
    { 
      icon: Phone, 
      label: '(941) 518-1657',
      sublabel: 'Call or Text Anytime',
      href: 'tel:+19415181657',
    },
    { 
      icon: Mail, 
      label: 'edmena24@gmail.com',
      sublabel: 'Email for Quotes',
      href: 'mailto:edmena24@gmail.com',
    },
    { 
      icon: Clock, 
      label: 'Mon-Fri: 8AM-6PM | Sat: 9AM-2PM',
      sublabel: 'Same-Day Response Guaranteed',
      href: null,
    },
  ];

  const trustBadges = [
    { icon: Shield, label: 'Licensed & Insured' },
    { icon: Star, label: '5-Star Rated' },
    { icon: Zap, label: 'Fast Turnaround' },
    { icon: Users, label: '100+ Projects Completed' },
  ];

  const testimonials = [
    {
      name: 'Mike R.',
      location: 'Lakewood Ranch',
      text: 'Amazing work on my garage floor! The metallic finish looks incredible and the team was professional from start to finish.',
      rating: 5,
    },
    {
      name: 'Sarah T.',
      location: 'Bradenton',
      text: 'Best decision we made for our business. The industrial epoxy floor has held up perfectly after 2 years of heavy use.',
      rating: 5,
    },
    {
      name: 'David L.',
      location: 'Sarasota',
      text: 'Quick, clean, and professional. Our new countertops are the centerpiece of our kitchen renovation.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'How much does epoxy flooring cost in Bradenton & Sarasota?',
      answer: 'Epoxy flooring costs typically range from $4-$12 per square foot depending on the system. Garage floors start around $1,500-$3,000, while metallic epoxy and custom finishes are $8-$15 per square foot. Contact us for a free, detailed quote for your specific project.',
    },
    {
      question: 'How long does epoxy flooring installation take?',
      answer: 'Most residential garage floors take 2-3 days including cure time. Commercial and industrial projects vary based on size but typically 3-5 days. We work efficiently to minimize disruption to your home or business.',
    },
    {
      question: 'Is epoxy flooring durable enough for Florida\'s climate?',
      answer: 'Absolutely! Our epoxy systems are specifically formulated for Florida\'s heat and humidity. They resist UV damage, hot tire marks, and moisture—perfect for our Gulf Coast climate in Bradenton, Lakewood Ranch, and Sarasota.',
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes! We provide free, no-obligation estimates for all projects in Manatee and Sarasota counties. We\'ll assess your space, discuss options, and provide a detailed quote—usually within 24 hours of your inquiry.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve Bradenton, Lakewood Ranch, Sarasota, Palmetto, Parrish, Ellenton, and all surrounding areas in Manatee and Sarasota counties. We also take on select projects in Hillsborough and Pinellas counties.',
    },
  ];

  // FAQ Schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const whatsappLink = 'https://wa.me/19415181657?text=' + encodeURIComponent('Hi! I\'m interested in getting a free quote for epoxy flooring.');

  return (
    <Layout>
      <SEO 
        title="Contact Us - Free Epoxy Flooring Quote | Bradenton & Sarasota FL"
        description="Get a FREE epoxy flooring quote in Bradenton, Lakewood Ranch & Sarasota, FL. Same-day response! Call (941) 518-1657. Metallic epoxy, garage floors, industrial coatings. Licensed & insured."
        keywords="epoxy flooring quote Bradenton, free estimate epoxy Sarasota, garage floor coating Lakewood Ranch, metallic epoxy Florida, contact epoxy contractor, epoxy flooring near me, floor coating estimate FL"
        url="/contact"
      />
      
      {/* Inject FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section with Strong CTA */}
      <section className="relative py-24 pt-36 overflow-hidden">
        <ChromaticRippleHero />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-[1]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Urgency Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Free Quotes • Same-Day Response</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground drop-shadow-lg">
              Get Your <span className="text-gradient">Free Quote</span> Today
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Transform your floors with premium epoxy coatings. Serving Bradenton, Lakewood Ranch & Sarasota, FL.
            </p>

            {/* Primary Phone CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a href="tel:+19415181657" className="w-full sm:w-auto">
                <Button variant="cta" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 shadow-gold animate-glow">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (941) 518-1657
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Text on WhatsApp
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground animate-bounce" />
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center gap-3 text-center"
              >
                <badge.icon className="h-6 w-6 text-primary shrink-0" />
                <span className="font-medium text-sm md:text-base">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 shadow-elevated">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">Request Your Free Quote</h2>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input 
                        id="name" 
                        name="name"
                        required 
                        placeholder="John Smith"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        type="tel" 
                        required
                        placeholder="(941) 555-0123"
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-medium">Service Needed *</Label>
                      <Select value={selectedService} onValueChange={setSelectedService} required>
                        <SelectTrigger className="h-12">
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
                    <Label htmlFor="message" className="text-sm font-medium">Project Details</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project: approximate size, type of space (garage, showroom, etc.), preferred colors..."
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full h-14 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Get My Free Quote
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    <CheckCircle className="inline h-3 w-3 mr-1 text-primary" />
                    No obligation • 100% free estimate • Response within 24 hours
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Testimonials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <li key={index}>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <info.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{info.label}</p>
                            <p className="text-sm text-muted-foreground">{info.sublabel}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4 p-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{info.label}</p>
                            <p className="text-sm text-muted-foreground">{info.sublabel}</p>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonials */}
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold mb-4">
                  What Our Customers Say
                </h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-muted/30 rounded-xl"
                    >
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">"{testimonial.text}"</p>
                      <p className="text-sm font-medium">
                        {testimonial.name} <span className="text-muted-foreground">• {testimonial.location}</span>
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 border-[#25D366]/30">
                <h3 className="font-display text-lg font-semibold mb-2">
                  Prefer to Text?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant answers! Chat with us directly on WhatsApp.
                </p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E]">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our epoxy flooring services in Bradenton, Lakewood Ranch, and Sarasota.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="glass-card rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Our Service Area
            </h2>
            <p className="text-muted-foreground">
              Proudly serving Manatee & Sarasota Counties
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-elevated h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226817.35387366825!2d-82.70640675!3d27.3364347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c340117a077705%3A0x7d6a2dce6a83bbee!2sSarasota%2C%20FL!5e0!3m2!1sen!2sus!4v1705420800000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EpoxyMasters Service Area - Bradenton, Lakewood Ranch & Sarasota, Florida"
            />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-epoxy-charcoal to-epoxy-slate">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Floors?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Don't wait! Get your free, no-obligation quote today and discover why homeowners and businesses across Bradenton, Lakewood Ranch, and Sarasota choose EpoxyMasters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19415181657">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (941) 518-1657
                </Button>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-epoxy-charcoal">
                  <Send className="mr-2 h-5 w-5" />
                  Fill Out the Form
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
