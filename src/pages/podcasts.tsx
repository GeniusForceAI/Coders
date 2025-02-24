import React from 'react';
import Layout from '@theme/Layout';
import { AIProjectManagementIcon, CodeReviewIcon, DevOpsIcon, AgileIcon } from '@site/src/components/PodcastIcons';
import styles from './podcasts.module.css';

type Podcast = {
  title: string;
  description: string;
  date: string;
  duration: string;
  icon: React.ReactNode;
  link: string;
};

const PODCASTS: Podcast[] = [
  {
    title: "AI in Project Management",
    description: "Explore how artificial intelligence is transforming modern project management and development workflows.",
    date: "March 15, 2024",
    duration: "45 min",
    icon: <AIProjectManagementIcon />,
    link: "/Coders/podcasts/ai-project-management"
  },
  {
    title: "The Future of Code Review",
    description: "Discover how AI-powered tools are revolutionizing the code review process and improving code quality.",
    date: "March 8, 2024",
    duration: "38 min",
    icon: <CodeReviewIcon />,
    link: "/Coders/podcasts/future-of-code-review"
  },
  {
    title: "DevOps Evolution",
    description: "Learn about the latest trends in DevOps and how AI is streamlining deployment pipelines.",
    date: "March 1, 2024",
    duration: "42 min",
    icon: <DevOpsIcon />,
    link: "/Coders/podcasts/devops-evolution"
  },
  {
    title: "Agile Development in 2024",
    description: "How modern tools and AI are reshaping agile methodologies and team collaboration.",
    date: "February 23, 2024",
    duration: "40 min",
    icon: <AgileIcon />,
    link: "/Coders/podcasts/agile-development-2024"
  }
];

function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <div className={styles.podcastCard}>
      <div className={styles.podcastIcon}>
        {podcast.icon}
      </div>
      <div className={styles.podcastContent}>
        <h3>{podcast.title}</h3>
        <p>{podcast.description}</p>
        <div className={styles.podcastMeta}>
          <span>{podcast.date}</span>
          <span>•</span>
          <span>{podcast.duration}</span>
        </div>
        <a href={podcast.link} className={styles.listenButton}>
          Listen Now
        </a>
      </div>
    </div>
  );
}

export default function Podcasts(): JSX.Element {
  return (
    <Layout
      title="Podcasts"
      description="Listen to our podcasts about AI, development, and project management">
      <main className={styles.podcastsContainer}>
        <div className={styles.podcastsHero}>
          <h1>Podcasts</h1>
          <p>Insights and discussions about AI in development and project management</p>
        </div>
        
        <div className={styles.podcastsGrid}>
          {PODCASTS.map((podcast, idx) => (
            <PodcastCard key={idx} podcast={podcast} />
          ))}
        </div>
      </main>
    </Layout>
  );
}