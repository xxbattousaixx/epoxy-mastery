import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone } from 'lucide-react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import QuoteForm from '@/components/QuoteForm';
import { Button } from '@/components/ui/button';
import { getGuide } from '@/data/guides';
import { LOCATIONS, locationPath } from '@/data/locations';
import NotFound from './NotFound';

const GuidePage = () => {
  const { slug = '' } = useParams();
  const g = getGuide(slug);
  if (!g) return <NotFound />;
  const url = `https://epoxy-masters.com/guides/${g.slug}`;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Article', headline: g.title, description: g.description, dateModified: g.updated, datePublished: g.updated, mainEntityOfPage: url, author: { '@type': 'Organization', name: 'EpoxyMasters' }, publisher: { '@id': 'https://epoxy-masters.com/#business' } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: g.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://epoxy-masters.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://epoxy-masters.com/guides' },
      { '@type': 'ListItem', position: 3, name: g.title, item: url },
    ] },
  ];
  return (
    <Layout>
      <SEO title={g.metaTitle} description={g.description} url={`/guides/${g.slug}`} type="article" article={{ publishedTime: g.updated, modifiedTime: g.updated, author: 'EpoxyMasters' }} />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>
      <article className="pt-28 pb-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 max-w-none">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/guides" className="hover:text-primary">Guides</Link>
            </nav>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">{g.title}</h1>
            <p className="text-sm text-muted-foreground mb-8">{g.category} · {g.readMins} min read · Updated {g.updated}</p>
            <div className="border-l-4 border-primary bg-secondary rounded-r-xl p-5 mb-10">
              <p className="font-semibold mb-1">Quick answer</p>
              <p className="text-muted-foreground">{g.answer}</p>
            </div>
            {g.sections.map(s => (
              <section key={s.h} className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-3">{s.h}</h2>
                {s.p.map((p, i) => <p key={i} className="text-muted-foreground mb-3 leading-relaxed">{p}</p>)}
                {s.list && <ul className="list-disc pl-6 space-y-1 text-muted-foreground">{s.list.map(l => <li key={l}>{l}</li>)}</ul>}
              </section>
            ))}
            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold mb-4">FAQ</h2>
              {g.faqs.map(f => <div key={f.q} className="mb-4"><h3 className="font-semibold">{f.q}</h3><p className="text-muted-foreground">{f.a}</p></div>)}
            </section>
            <section>
              <h2 className="text-xl font-display font-bold mb-3">Related guides</h2>
              <ul className="space-y-2 mb-8">{g.related.map(r => { const rg = getGuide(r); return rg && <li key={r}><Link className="text-primary hover:underline" to={`/guides/${r}`}>{rg.title}</Link></li>; })}</ul>
              <h2 className="text-xl font-display font-bold mb-3">We install epoxy floors in</h2>
              <div className="flex flex-wrap gap-2">{LOCATIONS.map(l => <Link key={l.slug} to={locationPath(l.slug)} className="text-sm px-3 py-1 rounded-full border border-border hover:border-primary hover:text-primary">{l.name}</Link>)}</div>
            </section>
          </div>
          <aside className="lg:sticky lg:top-28 h-fit bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-display font-semibold mb-1">Free floor quote</h2>
            <p className="text-sm text-muted-foreground mb-4">Florida epoxy pros. Same-day callback.</p>
            <QuoteForm area={`Guide: ${g.title}`} />
            <Button asChild variant="outline" className="w-full mt-3"><a href="tel:+19415181657"><Phone className="h-4 w-4 mr-2" />(941) 518-1657</a></Button>
          </aside>
        </div>
      </article>
    </Layout>
  );
};
export default GuidePage;
