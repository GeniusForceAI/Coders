import React from 'react';
import styles from './YouTubeVideo.module.css';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

export default function YouTubeVideo({ videoId, title }: YouTubeVideoProps): JSX.Element {
  if (!videoId) {
    return (
      <div className={styles.uploadPrompt}>
        <div className={styles.uploadContent}>
          <h3>Upload Your Video</h3>
          <p>Share your insights by uploading a video for this episode.</p>
          <p className={styles.uploadInstructions}>
            To add your video:
            <ol>
              <li>Upload your video to YouTube</li>
              <li>Copy the video ID from the URL</li>
              <li>Add it to the episode data</li>
            </ol>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.videoContainer}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.videoFrame}
      />
    </div>
  );
}
