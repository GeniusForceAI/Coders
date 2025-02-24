import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import YouTubeVideo from '@site/src/components/YouTubeVideo';
import PodcastSEO from '@site/src/components/PodcastSEO';
import { episodes } from '@site/src/data/podcasts';
import styles from './podcast.module.css';

export default function AiProjectManagement(): JSX.Element {
  const episode = episodes['ai-project-management'];

  return (
    <>
      <PodcastSEO 
        title={episode.title}
        description={episode.description}
      />
      <Layout title={episode.title}>
        <main className="container margin-vert--lg">
          <article className={styles.episodeContainer}>
            <div className={styles.episodeHeader}>
              <Link to="/Coders/podcasts" className={styles.backLink}>
                ← Back to Episodes
              </Link>
              <h1>{episode.title}</h1>
              <div className={styles.episodeMeta}>
                <span>{episode.date}</span>
                <span>{episode.duration}</span>
              </div>
            </div>
            
            <div className={styles.episodeContent}>
              <YouTubeVideo 
                videoId={episode.videoId} 
                title={episode.title} 
              />
              
              <div className={styles.episodeDescription}>
                <p>{episode.description}</p>
              </div>
              
              <div className={styles.episodeTranscript}>
                <h2>Episode Content</h2>
                <div className={styles.transcriptText}>
                  {episode.transcript.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </div>

              <div className={styles.episodeResources}>
                <h2>Additional Resources</h2>
                <ul>
                  {episode.resources.map((resource, index) => (
                    <li key={index}>
                      <Link to={resource.link}>
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </main>
      </Layout>
    </>
  );
}
