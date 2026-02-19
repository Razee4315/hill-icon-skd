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
  const defaultDescription = 'Hill Icon Skardu - Premium hotel accommodation, reliable transport, and guided tours in Skardu, Gilgit-Baltistan. Mountain views, free WiFi, 24/7 room service.';
  const defaultKeywords = 'Hill Icon Skardu, Skardu hotel, Skardu accommodation, luxury hotel Skardu, Skardu transport, Skardu tours, Deosai tour, Shigar tour, Northern Pakistan hotel, Gilgit-Baltistan hotel, Karakoram, K2 base camp';
  const siteUrl = 'https://hilliconskardu.com';
  const defaultImage = 'https://hilliconskardu.com/og-image.jpg';

  const finalTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - Premium Hotel & Tours`;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
};

export default SEO;
