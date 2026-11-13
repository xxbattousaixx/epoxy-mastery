import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle2, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import QuoteForm from '@/components/QuoteForm';
import AreaLinks from '@/components/AreaLinks';
import { Button } from '@/components/ui/button';
import { Area, OptionKey, getArea, locationPath } from '@/data/locations';
import garage from '@/assets/gallery/garage-floor-1.jpg';
import flakeImg from '@/assets/gallery/flake-floor-1.jpg';
import metallicImg from '@/assets/gallery/metallic-epoxy-1.jpg';
import commercialImg from '@/assets/gallery/commercial-floor-1.jpg';
import industrialImg from '@/assets/gallery/industrial-floor-1.jpg';
import outdoorImg from '@/assets/gallery/outdoor-floor-1.jpg';

const BASE = 'https://epoxy-masters.com';
const PHONE = '(941) 518-1657';

const OPTIONS: { key: OptionKey; name: string; what: string }[] = [
  { key: 'flake', name: 'Flake / chip epoxy', what: 'Colored vinyl chips broadcast into epoxy, then sealed. Textured, forgiving and very durable.' },
  { key: 'metallic', name: 'Metallic epoxy', what: 'Reflective pigments worked by hand into flowing, marble-like patterns. Every floor is unique.' },
  { key: 'solid', name: 'Solid color epoxy', what: 'One uniform, high-build color. Clean, bright and easy to keep up.' },
  { key: 'commercial', name: 'Commercial & industrial', what: 'Thicker, chemical-resistant systems with optional line striping and anti-slip texture.' },
  { key: 'polyaspartic', name: 'Exterior polyaspartic', what: 'A fast-curing, UV-stable coating that won\'t yellow in direct Florida sun.' },
];

const STEPS = [
  ['On-site measurement & slab check', 'We measure, look for cracks, spalls, old coatings and stains, and talk through how you use the space.'],
  ['Moisture test', 'Readings tell us whether the slab needs a moisture-tolerant primer.'],
  ['Diamond grinding — not acid etching', 'Grinding opens the concrete so the coating bonds mechanically.'],
  ['Crack & spall repair', 'Damage is filled and ground flush so it doesn\'t show through.'],
  ['Base coat', 'A primer and base coat matched to your slab.'],
  ['Flake, metallic or color coat', 'The look you chose goes down: broadcast flake, hand-worked metallic or solid color.'],
  ['UV-stable topcoat', 'A tough, clear topcoat on every job — polyaspartic where sun hits the floor.'],
  ['Cure & handover', 'Walk on it in about a day; drive on it after several days. We give you exact timing.'],
];

const COMPARE = {
  cols: ['Epoxy flake system', 'Polyaspartic', 'Paint / DIY kit', 'Bare concrete'],
  rows: [
    ['Durability', 'High', 'High', 'Low', 'Stains & dusts'],
    ['UV / sun resistance', 'Good with UV topcoat', 'Excellent', 'Poor', 'Fades & stains'],
    ['Hot-tire resistance', 'High', 'High', 'Often lifts', 'n/a'],
    ['Slip resistance', 'Textured, adjustable', 'Adjustable', 'Slick when wet', 'Fair'],
    ['Install time', '2–3 days', '1–2 days', '1–2 days', 'None'],
    ['Lifespan', 'Many years', 'Many years', 'Short', 'Wears over time'],
  ],
};

const GALLERY = [
  { src: flakeImg, alt: 'Flake epoxy garage floor with blue and gray chips' },
  { src: metallicImg, alt: 'Glossy metallic epoxy floor with flowing gold tones' },
  { src: industrialImg, alt: 'Gray industrial epoxy floor in a warehouse' },
  { src: outdoorImg, alt: 'Coated outdoor concrete surface' },
];

const IMG: Record<OptionKey, string> = { flake: flakeImg, metallic: metallicImg, solid: garage, commercial: commercialImg, polyaspartic: outdoorImg };

const LocationPage: React.FC<{ area: Area }> = ({ area }) => {
  const c = area.content!;
  const path = locationPath(area.slug);
  const url = `${BASE}${path}`;
  const title = `Epoxy Flooring ${area.name}, FL | Garage & Commercial Floors`;
  const desc = `${area.name} garage floor epoxy, flake and metallic floors. Free quote, durable Florida-ready coatings. Call ${PHONE}.`;
  const nearby = area.nearby.map(getArea).filter(Boolean) as Area[];

  const schema = [
    { '@context': 'https://schema.org', '@type': 'LocalBusiness', '@id': `${BASE}/#business`, name: 'EpoxyMasters', url: BASE, telephone: '+1-941-518-1657', email: 'edmena24@gmail.com',
      areaServed: { '@type': 'Place', name: `${area.name}, FL`, address: { '@type': 'PostalAddress', addressRegion: 'FL', postalCode: area.zips[0], addressCountry: 'US' } } },
    { '@context': 'https://schema.org', '@type': 'Service', serviceType: 'Epoxy flooring installation', name: `Epoxy Flooring in ${area.name}, FL`, url, provider: { '@id': `${BASE}/#business` }, areaServed: { '@type': 'Place', name: `${area.name}, FL` } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: c.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${BASE}/service-areas` },
      { '@type': 'ListItem', position: 3, name: area.name, item: url },
    ] },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* 1. Hero + 2. Quote form */}
      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/service-areas" className="hover:text-primary">Service Areas</Link> / <span>{area.name}</span>
            </nav>
            <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">Garage, commercial &amp; decorative floors</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-5">Epoxy Flooring in {area.name}, FL</h1>
            {c.intro.map((p, i) => <p key={i} className="text-lg text-muted-foreground mb-3">{p}</p>)}
            <p className="text-muted-foreground mb-6">Part of our <Link to="/service-areas" className="text-primary hover:underline">St. Petersburg &amp; Pinellas County service area</Link>.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-8">
              {['Free on-site quotes', 'Moisture testing on every slab', 'UV-stable topcoats', 'Serving St. Petersburg & Pinellas'].map(b => (
                <li key={b} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="tel:+19415181657"><Phone className="h-4 w-4 mr-2" />Call {PHONE}</a></Button>
              <Button asChild size="lg" variant="outline"><a href="#quote">Get a free quote</a></Button>
            </div>
          </div>
          <div id="quote" className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-lg scroll-mt-28">
            <h2 className="text-xl font-display font-semibold mb-1">Get a free epoxy floor quote</h2>
            <p className="text-sm text-muted-foreground mb-4">{area.name} · ZIP {area.zips.join(', ')}</p>
            <QuoteForm area={`${area.name}, FL`} />
          </div>
        </div>
      </section>

      {/* 3. Floor options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-3">Epoxy floor options for {area.name} homes and businesses</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">{c.optionsIntro}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {OPTIONS.map(o => (
              <div key={o.key} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
                <img src={IMG[o.key]} alt={`${o.name} example`} loading="lazy" className="h-36 w-full object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold mb-2">{o.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{o.what}</p>
                  <p className="text-sm mb-4"><strong>Best for:</strong> {c.optionFit[o.key]}</p>
                  <Link to="/services" className="mt-auto text-sm text-primary hover:underline">More on {o.name.toLowerCase()}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing + 5. Why */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">What epoxy flooring costs in {area.name}</h2>
            {c.pricing.map((p, i) => <p key={i} className="text-muted-foreground mb-3">{p}</p>)}
            <p className="font-semibold mt-4">Free on-site quote with a written price.</p>
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">{c.why.title}</h2>
            {c.why.paras.map((p, i) => <p key={i} className="text-muted-foreground mb-4">{p}</p>)}
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-2">Our process</h2>
          <p className="text-muted-foreground mb-8">{c.processNote}</p>
          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="bg-card border border-border rounded-xl p-5">
                <span className="h-8 w-8 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center mb-3">{i + 1}</span>
                <h3 className="font-semibold mb-1">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Compare */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-2">Epoxy vs. other options</h2>
          <p className="text-muted-foreground mb-6">{c.compareNote}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-card border border-border rounded-xl">
              <thead><tr className="border-b border-border"><th className="text-left p-3"></th>{COMPARE.cols.map(h => <th key={h} className="text-left p-3 font-semibold">{h}</th>)}</tr></thead>
              <tbody>{COMPARE.rows.map(r => <tr key={r[0]} className="border-b border-border last:border-0">{r.map((cell, i) => i === 0 ? <th key={i} className="text-left p-3 font-medium">{cell}</th> : <td key={i} className="p-3 text-muted-foreground">{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8. Gallery strip */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-6">Floor finishes we install</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map(g => <Link key={g.alt} to="/gallery"><img src={g.src} alt={g.alt} loading="lazy" className="rounded-xl h-44 w-full object-cover hover:opacity-90" /></Link>)}
          </div>
          <Link to="/gallery" className="inline-block mt-4 text-primary hover:underline">Browse the full epoxy floor gallery</Link>
        </div>
      </section>

      {/* 9. Neighborhoods */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-6">{area.name} neighborhoods we serve</h2>
          <ul className="flex flex-wrap gap-3 mb-4">
            {c.neighborhoods.map(n => <li key={n} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm"><MapPin className="h-4 w-4 text-primary" />{n}</li>)}
          </ul>
          <p className="text-sm text-muted-foreground mb-4">ZIP {area.zips.join(', ')}</p>
          <p className="text-sm">
            <strong>Nearby:</strong>{' '}
            {nearby.map((n, i) => (
              <React.Fragment key={n.slug}>
                {n.content ? <Link to={locationPath(n.slug)} className="text-primary hover:underline">epoxy floors in {n.name}</Link> : <span className="text-muted-foreground">{n.name}</span>}
                {i < nearby.length - 1 ? ' · ' : ''}
              </React.Fragment>
            ))}
          </p>
        </div>
      </section>

      {/* 11. FAQ (10. Reviews omitted until real reviews are provided) */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold mb-8">{area.name} epoxy flooring questions</h2>
          <div className="space-y-6">
            {c.faqs.map(f => <div key={f.q}><h3 className="font-semibold text-lg mb-1">{f.q}</h3><p className="text-muted-foreground">{f.a}</p></div>)}
          </div>
        </div>
      </section>

      {/* 12. Near you */}
      <div className="bg-secondary"><AreaLinks currentSlug={area.slug} /></div>

      {/* 13. CTA */}
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-3">Get your {area.name} floor quote</h2>
          <p className="mb-6 opacity-90">{c.cta}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary"><a href="tel:+19415181657"><Phone className="h-4 w-4 mr-2" />Call {PHONE}</a></Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"><Link to="/contact">Request a quote online</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default LocationPage;
