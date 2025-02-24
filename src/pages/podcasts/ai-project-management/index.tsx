import React from 'react';
import Layout from '@theme/Layout';
import { AIProjectManagementIcon } from '@site/src/components/PodcastIcons';
import styles from '../styles.module.css';

export default function PodcastDetail(): JSX.Element {
  return (
    <Layout
      title="AI in Project Management"
      description="Explore how artificial intelligence is transforming modern project management and development workflows">
      <main className={styles.podcastDetail}>
        <div className={styles.podcastHeader}>
          <div className={styles.podcastIcon}>
            <AIProjectManagementIcon />
          </div>
          <h1>AI in Project Management</h1>
          <div className={styles.podcastMeta}>
            <span>March 15, 2024</span>
            <span>•</span>
            <span>45 min</span>
          </div>
          <div className={styles.playerContainer}>
            <audio
              controls
              className={styles.audioPlayer}
              src="/podcasts/ai-project-management.mp3"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        <div className={styles.podcastContent}>
          <h2>Episode Overview</h2>
          <p>
            In this episode, we dive deep into how artificial intelligence is revolutionizing 
            project management in modern software development. We explore real-world applications, 
            challenges, and future trends.
          </p>

          <h2>Key Topics</h2>
          <ul>
            <li>AI-powered estimation and planning</li>
            <li>Automated risk assessment and mitigation</li>
            <li>Smart resource allocation and optimization</li>
            <li>The future of AI in project management</li>
          </ul>

          <h2>Show Notes</h2>
          <p>
            Links and resources mentioned in this episode:
          </p>
          <ul>
            <li><a href="#">AI Project Management Guide</a></li>
            <li><a href="#">Case Study: AI in Agile Teams</a></li>
            <li><a href="#">Research Paper on AI Estimation</a></li>
          </ul>

          <h2>Transcript</h2>
          <div className={styles.transcript}>
            {/* Transcript content */}
          </div>
        </div>
      </main>
    </Layout>
  );
} 