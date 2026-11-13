import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { GUIDES } from '@/data/guides';

const CATS = ['Costs & Planning', 'Systems & Finishes', 'Florida Floors', 'Care & Maintenance'] as const;

const Guides = () => (
  <Layout>
    <SEO title="Epoxy Flooring Guides – Costs, Systems & Florida Tips" description="Straight answers on epoxy flooring: cost factors, epoxy vs polyaspartic, Florida moisture, cure times, cleaning and more." url="/guides" />
    <section className="pt-28 pb-10 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Epoxy Flooring Guides</h1>
        <p className="text-lg text-muted-foreground">Straight answers before you choose a floor.</p>
      </div>
    </section>
    <section className="py-12">
      <div className="container mx-auto px-4 space-y-12">
        {CATS.map(c => (
          <div key={c}>
            <h2 className="text-2xl font-display font-bold mb-5">{c}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GUIDES.filter(g => g.category === c).map(g => (
                <Link key={g.slug} to={`/guides/${g.slug}`} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                  <h3 className="font-display font-semibold text-lg mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{g.description}</p>
                  <span className="text-xs text-primary">{g.readMins} min read</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);
export default Guides;
