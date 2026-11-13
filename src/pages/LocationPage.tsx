import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import QuoteForm from '@/components/QuoteForm';
import { Button } from '@/components/ui/button';
import { Location, LOCATIONS, getLocation, locationPath } from '@/data/locations';
import { getGuide } from '@/data/guides';
import { SERVICE_INFO } from '@/data/services';
import garage from '@/assets/gallery/garage-floor-1.jpg';
import metallic from '@/assets/gallery/metallic-epoxy-1.jpg';
import commercial from '@/assets/gallery/commercial-floor-1.jpg';
import flake from '@/assets/gallery/flake-floor-1.jpg';

const IMG: Record<string, string> = { garage, metallic, commercial, industrial: commercial, quartz: flake, solid: garage, glitter: metallic, '3d': metallic };

const STEPS = ['Moisture test & slab inspection', 'Diamond grinding & surface prep', 'Crack & spall repair', 'Primer matched to your slab', 'Base coat + flake, quartz, metallic or color', 'Cove base where needed', 'UV-stable top coat on every job'];

const LocationPage: React.FC<{ loc: Location }> = ({ loc }) => {
  const path = locationPath(loc.slug);
  const url = `https://epoxy-masters.com${path}`;
  const hero = IMG[loc.focus[0]];
  const faqs = [
    ...loc.faqs,
    { q: `Do you offer free quotes in ${loc.name}?`, a: `Yes. Call +1 (941) 518-1657 or use the form and we\'ll schedule a free on-site visit in ${loc.name}.` },
  ];
  const schema = [
    {
      '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Epoxy flooring installation',
      name: `Epoxy Flooring in ${loc.name}, FL`, url,
      provider: { '@id': 'https://epoxy-masters.com/#business' },
      areaServed: { '@type': 'City', name: `${loc.name}, FL` },
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://epoxy-masters.com/' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://epoxy-masters.com/service-areas' },
        { '@type': 'ListItem', position: 3, name: loc.name, item: url },
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        title={`Epoxy Flooring ${loc.name}, FL – Garage & Metallic`}
        description={`Epoxy flooring in ${loc.name}, FL: garage coatings, metallic, flake & commercial floors. Moisture-tested, top coat on every job. Free quote.`}
        url={path}
        keywords={`epoxy flooring ${loc.name}, epoxy garage floor ${loc.name} FL, metallic epoxy ${loc.name}, floor coating ${loc.name}`}
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      <section className="relative pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/service-areas" className="hover:text-primary">Service Areas</Link> / <span>{loc.name}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">Epoxy Flooring in {loc.name}, FL</h1>
            <p className="text-lg text-muted-foreground mb-6">{loc.intro}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {['Free on-site quote', 'Moisture testing', 'Fast install', 'Top coat on every job'].map(b => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="tel:+19415181657"><Phone className="h-4 w-4 mr-2" />Call (941) 518-1657</a></Button>
              <Button asChild size="lg" variant="outline"><a href="#quote">Free quote</a></Button>
            </div>
          </div>
          <div id="quote" className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-lg scroll-mt-28">
            <h2 className="text-xl font-display font-semibold mb-1">Get a free {loc.name} quote</h2>
            <p className="text-sm text-muted-foreground mb-4">We call back the same day.</p>
            <QuoteForm area={`${loc.name}, FL`} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img src={hero} alt={`${SERVICE_INFO[loc.focus[0]].name} in ${loc.name}, FL`} loading="lazy" className="rounded-xl w-full h-80 object-cover" />
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Local know-how</p>
            <h2 className="text-3xl font-display font-bold mb-4">{loc.challenge.title}</h2>
            <p className="text-muted-foreground mb-4">{loc.challenge.body}</p>
            <p className="text-muted-foreground"><strong className="text-foreground">Typical {loc.name} properties:</strong> {loc.homes}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8">Where we work in {loc.name}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {loc.areas.map(a => (
              <div key={a.name} className="bg-card border border-border rounded-xl p-6">
                <MapPin className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-display font-semibold text-lg mb-2">{a.name}</h3>
                <p className="text-muted-foreground text-sm">{a.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">ZIP codes: {loc.zips}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-8">Epoxy services in {loc.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loc.focus.map(k => (
              <Link key={k} to="/services" className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors">
                <img src={IMG[k]} alt={`${SERVICE_INFO[k].name} ${loc.name}`} loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display font-semibold mb-2 group-hover:text-primary">{SERVICE_INFO[k].name}</h3>
                  <p className="text-sm text-muted-foreground">{SERVICE_INFO[k].text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Our process</h2>
            <ol className="space-y-3">
              {STEPS.map((s, i) => (
                <li key={s} className="flex gap-3"><span className="h-7 w-7 shrink-0 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-semibold">{i + 1}</span><span className="pt-0.5">{s}</span></li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">{loc.name} epoxy FAQ</h2>
            <div className="space-y-5">
              {faqs.map(f => (
                <div key={f.q}><h3 className="font-semibold mb-1">{f.q}</h3><p className="text-muted-foreground text-sm">{f.a}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Helpful guides</h2>
            <ul className="space-y-2">
              {loc.guides.map(g => { const gd = getGuide(g); return gd && (
                <li key={g}><Link to={`/guides/${g}`} className="text-primary hover:underline inline-flex items-center gap-1">{gd.title}<ArrowRight className="h-3 w-3" /></Link></li>
              ); })}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-4">Nearby service areas</h2>
            <div className="flex flex-wrap gap-2">
              {loc.nearby.map(n => { const nl = getLocation(n); return nl && (
                <Link key={n} to={locationPath(n)} className="px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary text-sm">Epoxy flooring {nl.name}</Link>
              ); })}
              <Link to="/service-areas" className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm">All areas</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-3">Ready for a new floor in {loc.name}?</h2>
          <p className="mb-6 opacity-90">Free on-site quote. Fast, clean install.</p>
          <Button asChild size="lg" variant="secondary"><a href="tel:+19415181657"><Phone className="h-4 w-4 mr-2" />(941) 518-1657</a></Button>
        </div>
      </section>
    </Layout>
  );
};

export const locationRoutes = LOCATIONS.map(l => ({ path: locationPath(l.slug), loc: l }));
export default LocationPage;
