import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { AREAS, GROUPS, locationPath } from '@/data/locations';

const URL = 'https://epoxy-masters.com/service-areas';
const T = 'Epoxy Flooring Service Areas | St. Petersburg & Pinellas County';
const D = 'Epoxy flooring across St. Petersburg neighborhoods, the Pinellas beaches and mid-Pinellas. Also serving Bradenton, Lakewood Ranch & Sarasota.';

const ServiceAreas = () => (
  <Layout>
    <Helmet>
      <title>{T}</title><meta name="description" content={D} /><link rel="canonical" href={URL} />
      <meta property="og:title" content={T} /><meta property="og:description" content={D} /><meta property="og:url" content={URL} />
    </Helmet>
    <section className="pt-28 pb-12 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Epoxy Flooring Service Areas in St. Petersburg &amp; Pinellas County</h1>
        <p className="text-lg text-muted-foreground mb-6">Garage, commercial and decorative floors across St. Pete, the beaches and mid-Pinellas. We also serve Bradenton, Lakewood Ranch and Sarasota.</p>
        <Button asChild size="lg"><a href="tel:+19415181657"><Phone className="h-4 w-4 mr-2" />Call (941) 518-1657</a></Button>
      </div>
    </section>
    <section className="py-14">
      <div className="container mx-auto px-4 space-y-12">
        {GROUPS.map(g => {
          const list = AREAS.filter(a => a.group === g.name);
          const zips = [...new Set(list.flatMap(a => a.zips))].sort();
          return (
            <div key={g.name}>
              <h2 className="text-2xl font-display font-bold mb-1">{g.name}</h2>
              <p className="text-muted-foreground mb-4">{g.intro}</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
                {list.map(a => (
                  <li key={a.slug} className="bg-card border border-border rounded-xl p-4">
                    {a.content
                      ? <Link to={locationPath(a.slug)} className="font-semibold text-primary hover:underline">Epoxy flooring in {a.name}</Link>
                      : <span className="font-semibold">{a.name}</span>}
                    <p className="text-xs text-muted-foreground mt-1">ZIP {a.zips.join(', ')}</p>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">ZIPs: {zips.join(', ')}</p>
            </div>
          );
        })}
      </div>
    </section>
  </Layout>
);
export default ServiceAreas;
