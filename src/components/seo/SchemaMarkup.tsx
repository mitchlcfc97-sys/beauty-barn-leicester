import React from 'react';
import { BUSINESS_INFO } from '@/data/business';
import { TREATMENTS } from '@/data/treatments';
import { SPA_PACKAGES } from '@/data/spa-packages';

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["DaySpa", "BeautySalon", "HealthAndBeautyBusiness"],
    "@id": "https://www.thebeautybarnleicester.co.uk/#organization",
    "name": BUSINESS_INFO.name,
    "alternateName": "The Beauty Barn",
    "description": BUSINESS_INFO.description,
    "url": "https://www.thebeautybarnleicester.co.uk",
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "priceRange": "££",
    "image": "https://www.thebeautybarnleicester.co.uk/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.locality,
      "addressRegion": BUSINESS_INFO.address.region,
      "postalCode": BUSINESS_INFO.address.postalCode,
      "addressCountry": BUSINESS_INFO.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.geo.latitude,
      "longitude": BUSINESS_INFO.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday"],
        "opens": "09:00",
        "closes": "16:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "09:00",
        "closes": "17:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Spa & Beauty Treatments Menu",
      "itemListElement": [
        ...SPA_PACKAGES.map((pkg) => ({
          "@type": "Offer",
          "name": pkg.name,
          "description": pkg.description,
          "price": pkg.pricePerPerson.toString(),
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://www.thebeautybarnleicester.co.uk/spa-days"
        })),
        ...TREATMENTS.map((t) => ({
          "@type": "Offer",
          "name": t.name,
          "description": t.description,
          "price": t.priceNum.toString(),
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://www.thebeautybarnleicester.co.uk/treatments"
        }))
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
