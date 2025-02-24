import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import { PlayIcon, BookIcon, ChromeIcon, VSCodeIcon } from '@site/src/components/Icons';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div>
            <h1>Unleash Your<br/>Genius Force</h1>
            <p>Build million-dollar AI apps in record time. Join the elite community of developers transforming ideas into profitable products.</p>
            <div className={styles.heroButtons}>
              <Link className={styles.primaryButton} to="/courses">
                Watch Series
              </Link>
              <Link className={styles.secondaryButton} to="/tutorials">
                Try Tutorials
              </Link>
            </div>
          </div>
          <div className={styles.heroVideo}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/to9iVovmBmo"
                title="Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, icon: Icon}) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <section className={styles.workflowSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionText}>
            <h2>Transform Your Development Journey</h2>
            <p>Experience the future of engineering education with Windsurf, our AI coding companion. We combine practical learning with revenue generation:</p>
            <ul>
              <li>Build real-world AI tools that generate revenue in 24 hours</li>
              <li>Learn through animated series and interactive tutorials</li>
              <li>Master AI-driven development and marketing strategies</li>
            </ul>
            <Link className="button button--primary" to="docs/workflow">
              Explore Our Process
            </Link>
          </div>
          <div className={styles.sectionAnimation}>
            <img src="img/workflow-animation.svg" alt="Workflow Animation" />
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerContent}>
          <div className={styles.ctaBannerText}>
            <h2>Start Building Today</h2>
            <p>Join developers who are mastering AI while creating profitable tools</p>
          </div>
          <div className={styles.ctaBannerButtons}>
            <a 
              href="#" 
              className={styles.watchButton}
            >
              Watch Series
            </a>
            <a 
              href="#" 
              className={styles.tutorialButton}
            >
              Try Tutorials
            </a>
          </div>
        </div>
      </section>

      <section className={styles.aiSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionAnimation}>
            <img src="img/ai-animation.svg" alt="AI Animation" />
          </div>
          <div className={styles.sectionText}>
            <h2>The AI Toolkit</h2>
            <p>Access our comprehensive suite of AI development resources:</p>
            <ul>
              <li>Windsurf AI coding companion for rapid development</li>
              <li>Market-ready templates and frameworks</li>
              <li>Revenue generation strategies and tools</li>
            </ul>
            <Link className="button button--primary" to="docs/data-store">
              Access Tools
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.integrationSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionText}>
            <h2>Learn From The Best</h2>
            <p>Our experts combine theory with practical revenue generation:</p>
            <ul>
              <li>Maya "Vector" Rodriguez - AI Systems & Revenue Strategy</li>
              <li>Marcus "Catalyst" Chen - ML Implementation & Market Fit</li>
              <li>Sage "Architect" Zhang - Systems Design & Scaling</li>
            </ul>
            <Link className="button button--primary" to="docs/team">
              Meet The Team
            </Link>
          </div>
          <div className={styles.sectionAnimation}>
            <img src="img/integration-animation.svg" alt="Integration Animation" />
          </div>
        </div>
      </section>

      <section className={styles.getStartedSection}>
        <h2>Ready to Master AI Development?</h2>
        <p>Join our community of engineers building profitable AI solutions while learning through animation.</p>
        <div className={styles.extensionButtons}>
          <a 
            href="#" 
            className={styles.chromeButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Series
          </a>
          <a
            className={styles.vscodeButton} 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Windsurf
          </a>
        </div>
      </section>
    </div>
  );
}

function FloatingCTA() {
  return (
    <div className={styles.floatingCTA}>
      <div className={styles.floatingCTAContent}>
        <span>Transform your development workflow with AI</span>
        <div className={styles.floatingCTAButtons}>
          <a
            className={styles.tryWindsurfButton} 
            href="#"
          >
            Try Windsurf
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <MainContent />
        <FloatingCTA />
      </main>
    </Layout>
  );
}
