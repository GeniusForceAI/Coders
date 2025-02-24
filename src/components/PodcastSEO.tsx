import React from 'react';
import DefaultSEO from './DefaultSEO';

interface PodcastSEOProps {
  title: string;
  description: string;
}

export default function PodcastSEO({ title, description }: PodcastSEOProps): JSX.Element {
  return (
    <DefaultSEO 
      title={title}
      description={description}
      image="/img/podcast-preview.png"
    />
  );
}
