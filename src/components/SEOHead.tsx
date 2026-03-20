import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  jsonLd?: object;
}

const SEOHead = ({ title, description, canonical, keywords, jsonLd }: SEOHeadProps) => {
  const baseUrl = "https://fms-higienizacoes.lovable.app";
  const fullCanonical = `${baseUrl}${canonical}`;
  const ogImage = `${baseUrl}/og-image.png`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FMS Higienizações",
    "description": description,
    "telephone": "+55-48-98805-7404",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Mal. Rondon, 930 - Barreiros",
      "addressLocality": "São José",
      "addressRegion": "SC",
      "postalCode": "88117-030",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.5969,
      "longitude": -48.6115
    },
    "areaServed": [
      { "@type": "City", "name": "Florianópolis" },
      { "@type": "City", "name": "São José" },
      { "@type": "City", "name": "Palhoça" },
      { "@type": "City", "name": "Biguaçu" }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150"
    },
    ...jsonLd
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="FMS Higienizações" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="BR-SC" />
      <meta name="geo.placename" content="São José, Santa Catarina" />
      <meta name="geo.position" content="-27.5969;-48.6115" />
      <meta name="ICBM" content="-27.5969, -48.6115" />

      <script type="application/ld+json">
        {JSON.stringify(defaultJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
