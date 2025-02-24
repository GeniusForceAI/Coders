import React from 'react';
import Head from '@docusaurus/Head';

interface PodcastSEOProps {
  title: string;
  description: string;
  image?: string;
  episode?: {
    number: number;
    duration: string;
    publishDate: string;
  };
}

export default function PodcastSEO({
  title,
  description,
  image = '/img/social-card.png',
  episode,
}: PodcastSEOProps): JSX.Element {
  const siteUrl = 'https://geniusforceai.github.io/Coders';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Podcast-specific metadata */}
      {episode && (
        <>
          <meta property="og:type" content="music.song" />
          <meta property="music:duration" content={episode.duration} />
          <meta property="article:published_time" content={episode.publishDate} />
          <meta property="og:audio:type" content="audio/mpeg" />
        </>
      )}
    </Head>
  );
}
