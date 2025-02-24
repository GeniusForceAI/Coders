import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface DefaultSEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function DefaultSEO({ 
  title = 'Genius Force - AI-Powered Development Tools',
  description = 'Building revenue-generating AI tools. From concept to profitable product in 24 hours.',
  image
}: DefaultSEOProps): JSX.Element {
  const defaultImage = useBaseUrl('/img/default-preview.png');
  const previewImage = image ? useBaseUrl(image) : defaultImage;
  const siteUrl = 'https://geniusforceai.github.io/Coders'; // Update with your actual domain

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${previewImage}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}${previewImage}`} />
    </Head>
  );
}
