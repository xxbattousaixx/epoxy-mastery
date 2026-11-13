import React from 'react';
import { Link } from 'react-router-dom';
import { AREAS, GROUPS, locationPath } from '@/data/locations';

/** Grouped "Epoxy flooring near you" block. Only built pages are linked. */
const AreaLinks: React.FC<{ currentSlug?: string; title?: string }> = ({ currentSlug, title = 'Epoxy flooring near you' }) => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-display font-bold mb-8">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {GROUPS.map(g => (
          <div key={g.name}>
            <h3 className="font-display font-semibold text-lg mb-3">{g.name}</h3>
            <ul className="space-y-2 text-sm">
              {AREAS.filter(a => a.group === g.name).map(a => (
                <li key={a.slug}>
                  {a.content && a.slug !== currentSlug ? (
                    <Link to={locationPath(a.slug)} className="text-primary hover:underline">Epoxy flooring in {a.name}</Link>
                  ) : (
                    <span className="text-muted-foreground">{a.name}{a.slug === currentSlug ? ' (this page)' : ''}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link to="/service-areas" className="inline-block mt-8 text-primary font-medium hover:underline">See all St. Petersburg &amp; Pinellas service areas →</Link>
    </div>
  </section>
);
export default AreaLinks;
