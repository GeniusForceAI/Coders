import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { PlayIcon, BookIcon, ChromeIcon, VSCodeIcon } from '@site/src/components/Icons';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Engineering Education, Reimagined</h1>
            <p className="hero__subtitle">
              Learn engineering through AI-powered interactive tutorials and animated lessons.
            </p>
            <div className={styles.headerButtons}>
              <Link
                className="button button--primary"
                to="/docs/intro">
                <PlayIcon /> Start Learning
              </Link>
              <Link
                className="button button--secondary"
                to="/courses">
                <BookIcon /> Browse Courses
              </Link>
            </div>
          </div>
          <div className={styles.heroDesktopAnimation}>
            <img src="img/hero-animation.svg" alt="AI Engineering Education" />
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, description, link, linkText, icon}: {
  title: string;
  description: string;
  link: string;
  linkText: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link
        className="button button--secondary button--sm"
        to={link}>
        {linkText}
      </Link>
    </div>
  );
}

function MainContent() {
  return (
    <div className={styles.mainContent}>
      <section className={styles.workflowSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionText}>
            <h2>Transform Your Engineering Journey</h2>
            <p>Engineering education isn't just about theory. It's about solving real problems, understanding practical implementations, and building working solutions. GForce brings it all together:</p>
            <ul>
              <li>Real problems from top US university communities</li>
              <li>Step-by-step solution walkthroughs with code</li>
              <li>Practical implementations you can use today</li>
            </ul>
            <Link className="button button--primary" to="/docs/workflow">
              Learn About Our Process
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
            <h2>Start Learning Today</h2>
            <p>Join engineers who are transforming their skills with AI-powered education</p>
          </div>
          <div className={styles.ctaBannerButtons}>
            <a 
              href="#" 
              className={styles.vscodeButton} 
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Episodes
            </a>
            <a 
              href="#" 
              className={styles.chromeButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Access Tutorials
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
            <h2>The Data Store</h2>
            <p>Access our vast digital library of curated datasets and tools:</p>
            <ul>
              <li>Interactive data visualizations</li>
              <li>Real-time data streams</li>
              <li>AI-powered discovery tools</li>
            </ul>
            <Link className="button button--primary" to="/docs/data-store">
              Explore The Data Store
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.integrationSection}>
        <div className={styles.sectionContent}>
          <div className={styles.sectionText}>
            <h2>Meet Our Expert Team</h2>
            <p>Learn from industry experts who bring theory to life:</p>
            <ul>
              <li>Maya "Vector" Rodriguez - AI Systems Architecture</li>
              <li>Marcus "Catalyst" Chen - Machine Learning</li>
              <li>Sage "Architect" Zhang - Systems Design</li>
            </ul>
            <Link className="button button--primary" to="/docs/team">
              Meet The Team
            </Link>
          </div>
          <div className={styles.sectionAnimation}>
            <img src="img/integration-animation.svg" alt="Integration Animation" />
          </div>
        </div>
      </section>

      <section className={styles.getStartedSection}>
        <h2>Ready to Level Up Your Skills?</h2>
        <p>Join thousands of engineers learning to solve real-world problems with AI-powered solutions.</p>
        <div className={styles.extensionButtons}>
          <a 
            href="#" 
            className={styles.chromeButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch First Episode
          </a>
          <a
            className={styles.vscodeButton} 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse Tutorials
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
        <span>Ready to transform your workflow?</span>
        <div className={styles.floatingCTAButtons}>
          <a
            className={styles.floatingVSCodeButton} 
            href="https://github.com/tristinrybakVU/shippi-smartcomment-assistant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VSCodeIcon />
            Install VSCode Extension
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
      description="Learn engineering through AI-powered interactive tutorials and animated lessons">
      <HomepageHeader />
      <main>
        <MainContent />
        <FloatingCTA />
      </main>
    </Layout>
  );
}
