import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  noIndex?: boolean;
}

const BASE_URL = 'https://epoxy-masters.com';
const DEFAULT_TITLE = 'EpoxyMasters - Premium Epoxy & Resin Flooring | Cabimas, Venezuela';
const DEFAULT_DESCRIPTION = 'Transform your floors into works of art with EpoxyMasters. Premium epoxy and resin flooring solutions in Cabimas, Zulia. Metallic epoxy, garage coatings, industrial floors. Fast installation, 5-year warranty.';
const DEFAULT_KEYWORDS = 'epoxy flooring, resin flooring, metallic epoxy, garage floor coating, industrial flooring, decorative concrete, floor coating, Cabimas, Zulia, Venezuela, pisos epóxicos, revestimiento de pisos';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = 'website',
  article,
  noIndex = false,
}) => {
  const fullTitle = title ? `${title} | EpoxyMasters` : DEFAULT_TITLE;
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'EpoxyMasters',
    alternateName: 'Epoxy Masters Venezuela',
    description: DEFAULT_DESCRIPTION,
    url: BASE_URL,
    telephone: '+58-424-123-4567',
    email: 'info@epoxymasters.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Principal de Cabimas',
      addressLocality: 'Cabimas',
      addressRegion: 'Zulia',
      postalCode: '4013',
      addressCountry: 'VE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.3959,
      longitude: -71.4440,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    image: DEFAULT_IMAGE,
    sameAs: [
      'https://www.instagram.com/epoxymasters',
      'https://www.facebook.com/epoxymasters',
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 10.3959,
        longitude: -71.4440,
      },
      geoRadius: '100000',
    },
    serviceArea: {
      '@type': 'AdministrativeArea',
      name: 'Zulia, Venezuela',
    },
  };

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Epoxy Flooring Installation',
    provider: {
      '@id': `${BASE_URL}/#business`,
    },
    areaServed: {
      '@type': 'State',
      name: 'Zulia',
      containedIn: {
        '@type': 'Country',
        name: 'Venezuela',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Epoxy Flooring Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Metallic Epoxy Flooring',
            description: 'Premium metallic epoxy floor coatings with stunning 3D effects',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial Epoxy Flooring',
            description: 'Heavy-duty epoxy solutions for commercial and industrial spaces',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Garage Floor Coatings',
            description: 'Durable flake and solid color coatings for residential garages',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Epoxy Countertops',
            description: 'Custom epoxy countertops for kitchens, bars, and restaurants',
          },
        },
      ],
    },
  };

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EpoxyMasters',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+58-424-123-4567',
      contactType: 'customer service',
      areaServed: 'VE',
      availableLanguage: ['Spanish', 'English'],
    },
  };

  // Breadcrumb Schema (dynamic based on URL)
  const getBreadcrumbSchema = () => {
    const path = url.replace(BASE_URL, '').split('/').filter(Boolean);
    const breadcrumbItems = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
    ];

    if (path.length > 0) {
      const pageNames: Record<string, string> = {
        about: 'About Us',
        services: 'Services',
        gallery: 'Gallery',
        blog: 'Blog',
        contact: 'Contact',
      };

      path.forEach((segment, index) => {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: index + 2,
          name: pageNames[segment] || segment,
          item: `${BASE_URL}/${path.slice(0, index + 1).join('/')}`,
        });
      });
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    };
  };

  // Article Schema (for blog posts)
  const articleSchema = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        image,
        author: {
          '@type': 'Organization',
          name: 'EpoxyMasters',
        },
        publisher: {
          '@type': 'Organization',
          name: 'EpoxyMasters',
          logo: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/logo.png`,
          },
        },
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime || article.publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullUrl,
        },
      }
    : null;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="EpoxyMasters" />
      <meta property="og:locale" content="es_VE" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="zh_CN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}

      {/* Geo Tags */}
      <meta name="geo.region" content="VE-V" />
      <meta name="geo.placename" content="Cabimas" />
      <meta name="geo.position" content="10.3959;-71.4440" />
      <meta name="ICBM" content="10.3959, -71.4440" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(getBreadcrumbSchema())}
      </script>
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
