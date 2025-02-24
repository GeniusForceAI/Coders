import React from 'react';
import Layout from '@theme/Layout';
import { CodeReviewIcon } from '@site/src/components/PodcastIcons';
import styles from '../styles.module.css';

export default function PodcastDetail(): JSX.Element {
  return (
    <Layout
      title="The Future of Code Review"
      description="Discover how AI-powered tools are revolutionizing the code review process">
      <main className={styles.podcastDetail}>
        <div className={styles.podcastHeader}>
          <div className={styles.podcastIcon}>
            <CodeReviewIcon />
          </div>
          <h1>The Future of Code Review</h1>
          <div className={styles.podcastMeta}>
            <span>March 8, 2024</span>
            <span>•</span>
            <span>38 min</span>
          </div>
          <div className={styles.playerContainer}>
            <audio
              controls
              className={styles.audioPlayer}
              src="/podcasts/code-review.mp3"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        <div className={styles.podcastContent}>
          {/* Content similar to ai-project-management */}
        </div>
      </main>
    </Layout>
  );
} 