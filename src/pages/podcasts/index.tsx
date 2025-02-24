import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import PodcastSEO from '@site/src/components/PodcastSEO';
import { episodes } from '@site/src/data/podcasts';
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

export default function Podcasts(): JSX.Element {
  return (
    <>
      <PodcastSEO 
        title="GForce Podcasts - AI and Development Insights"
        description="Listen to our podcast series about AI, development, and project management. Get insights and discussions about the latest trends in software development."
      />
      <Layout
        title="Podcasts"
        description="Listen to our podcasts about AI, development, and project management">
        <main className={styles.podcastsContainer}>
          <div className={styles.podcastsHero}>
            <h1>Podcasts</h1>
            <p>Insights and discussions about AI in development and project management</p>
          </div>
          
          <div className={styles.podcastsGrid}>
            {episodesData.map((episode, idx) => (
              <div key={idx} className={styles.podcastCard}>
                <div className={styles.podcastContent}>
                  <h3>{episode.title}</h3>
                  <p>{episode.description}</p>
                  <div className={styles.podcastMeta}>
                    <span>{episode.date}</span>
                    <span>•</span>
                    <span>{episode.duration}</span>
                  </div>
                  <Link to={`/Coders/podcasts/${episode.slug}`} className={styles.listenButton}>
                    Listen Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}
