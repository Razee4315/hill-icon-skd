import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
}) => {
  const siteTitle = 'Hill Icon Skardu';
  const defaultDescription = 'Hill Icon - Premium accommodation, transport, and tour services in Skardu. Experience the breathtaking beauty of Northern Pakistan with our luxury services.';
  const defaultKeywords = 'Skardu, accommodation, hotel, guest house, transport, tours, Pakistan, Northern Areas, Karakoram, luxury travel, Hill Icon';
  const siteUrl = 'https://hilliconskardu.com';
  const defaultImage = 'https://raw.githubusercontent.com/saqlainkhan011/hill-icon-skd/main/src/assets/front.jpg';

  const finalTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Premium Accommodation & Tours`;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hill Icon Skardu",
    "description": finalDescription,
    "image": defaultImage,
    "url": siteUrl,
    "telephone": "+923487997495",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Roung Chumik, Skardu",
      "addressLocality": "Skardu",
      "addressRegion": "Gilgit-Baltistan",
      "postalCode": "16100",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.2782813,
      "longitude": 75.6519939
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "PKR 8,000 - PKR 15,000",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47",
      "bestRating": "5"
    },
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "Mountain View"},
      {"@type": "LocationFeatureSpecification", "name": "Free WiFi"},
      {"@type": "LocationFeatureSpecification", "name": "24/7 Room Service"},
      {"@type": "LocationFeatureSpecification", "name": "Restaurant"},
      {"@type": "LocationFeatureSpecification", "name": "Free Parking"}
    ],
    "sameAs": [
      "https://www.facebook.com/hillicon",
      "https://www.instagram.com/hill_icon_resort/"
    ]
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;
