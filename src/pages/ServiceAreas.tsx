import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { LOCATIONS, locationPath } from '@/data/locations';

const ServiceAreas = () => (
  <Layout>
    <SEO title="Epoxy Flooring Service Areas – Pinellas & Tampa Bay" description="Epoxy flooring across St. Petersburg, Clearwater, Largo and 13 more Pinellas County cities, plus Bradenton, Lakewood Ranch and Sarasota." url="/service-areas" />
    <section className="pt-28 pb-12 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Service Areas</h1>
        <p className="text-lg text-muted-foreground mb-6">Epoxy and resin floors across St. Petersburg and Pinellas County, plus Bradenton, Lakewood Ranch and Sarasota.</p>
        <Button asChild size="lg"><a href="tel:+19415181657"><Phone className="h-4 w-4 mr-2" />Call (941) 518-1657</a></Button>
      </div>
    </section>
    <section className="py-14">
      <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {LOCATIONS.map(l => (
          <Link key={l.slug} to={locationPath(l.slug)} className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-colors">
            <MapPin className="h-5 w-5 text-primary mb-2" />
            <h2 className="font-display font-semibold">Epoxy Flooring {l.name}</h2>
            <p className="text-xs text-muted-foreground mt-1">{l.zips}</p>
          </Link>
        ))}
      </div>
      <p className="container mx-auto px-4 mt-8 text-muted-foreground">Also serving <Link to="/contact" className="text-primary hover:underline">Bradenton, Lakewood Ranch and Sarasota</Link>.</p>
    </section>
  </Layout>
);
export default ServiceAreas;
