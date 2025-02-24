import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import DefaultSEO from '@docusaurus/Head';
import SearchBar from '@site/src/components/SearchBar';
import styles from './podcast.module.css';

const episodesData = [
  {
    title: 'AI in Project Management',
    slug: 'ai-project-management',
    date: 'March 15, 2024',
    duration: '45 min',
    description: 'Explore how artificial intelligence is transforming modern project management and development workflows.',
    icon: <div className={styles.stackIcon} />,
  },
  {
    title: 'The Future of Code Review',
    slug: 'future-of-code-review',
    date: 'March 8, 2024',
    duration: '38 min',
    description: 'Discover how AI-powered tools are revolutionizing the code review process and improving code quality.',
    icon: <div className={styles.codeIcon} />,
  },
  {
    title: 'DevOps Evolution',
    slug: 'devops-evolution',
    date: 'March 1, 2024',
    duration: '42 min',
    description: 'Learn about the latest trends in DevOps and how AI is streamlining deployment pipelines.',
    icon: <div className={styles.devopsIcon} />,
  },
  {
    title: 'Agile Development in 2024',
    slug: 'agile-development-2024',
    date: 'February 23, 2024',
    duration: '40 min',
    description: 'How modern tools and AI are reshaping agile methodologies and team collaboration.',
    icon: <div className={styles.agileIcon} />,
  },
];

export default function PodcastsPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEpisodes = episodesData.filter(episode => {
    const searchContent = `${episode.title} ${episode.description}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  return (
    <Layout
      title="Podcasts"
      description="Listen to our latest podcasts about AI development and tools"
    >
      <DefaultSEO 
        title="Genius Force Podcasts - AI Development Insights"
        description="Listen to our latest podcasts about AI development and tools"
        image="/img/social-card.jpg"
      />
      <div className={styles.podcastsContainer}>
        <div className={styles.podcastsHeader}>
          <h1>Podcasts</h1>
          <p>Insights and discussions about AI in development and project management</p>
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="Search episodes..."
          />
        </div>

        <div className={styles.episodesGrid}>
          {filteredEpisodes.map(episode => (
            <Link
              key={episode.slug}
              to={`/podcasts/${episode.slug}`}
              className={styles.episodeCard}
            >
              <div className={styles.episodeIcon}>{episode.icon}</div>
              <div className={styles.episodeContent}>
                <h2 className={styles.episodeTitle}>{episode.title}</h2>
                <p className={styles.episodeDescription}>{episode.description}</p>
                <div className={styles.episodeMeta}>
                  <span>{episode.date}</span>
                  <span>•</span>
                  <span>{episode.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
