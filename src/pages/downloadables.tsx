import React from 'react';
import Layout from '@theme/Layout';
import styles from './downloadables.module.css';

export default function Downloadables(): JSX.Element {
  return (
    <Layout
      title="AI Prompts"
      description="Download curated prompts to supercharge your AI development workflow">
      <header className={styles.heroBanner}>
        <div className="container">
          <h1>AI Prompts</h1>
          <p>Download curated prompts to supercharge your AI development workflow</p>
        </div>
      </header>

      <main>
        <div className="container margin-vert--lg">
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>AI Development Tools</h2>
            <p className={styles.sectionSubtitle}>Essential prompts and templates for AI-powered development</p>
            
            <div className="row">
              <div className="col col--4">
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3>AI Prompt Engineering Template</h3>
                    <p>A comprehensive template for crafting effective AI prompts</p>
                    <button className="button button--primary">Download</button>
                  </div>
                </div>
              </div>

              <div className="col col--4">
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3>Code Review Guidelines</h3>
                    <p>AI-assisted code review guidelines and best practices</p>
                    <button className="button button--primary">Download</button>
                  </div>
                </div>
              </div>

              <div className="col col--4">
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3>Bug Analysis Template</h3>
                    <p>Structured prompts for AI-powered bug analysis and resolution</p>
                    <button className="button button--primary">Download</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Workflow Automation</h2>
            <p className={styles.sectionSubtitle}>Prompts for automating your development workflow</p>
            
            <div className="row">
              <div className="col col--4">
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3>PR Description Generator</h3>
                    <p>Templates for generating comprehensive PR descriptions</p>
                    <button className="button button--primary">Download</button>
                  </div>
                </div>
              </div>

              <div className="col col--4">
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3>Commit Message Guide</h3>
                    <p>AI prompts for writing clear and consistent commit messages</p>
                    <button className="button button--primary">Download</button>
                  </div>
                </div>
              </div>

              <div className="col col--4">
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3>Documentation Helper</h3>
                    <p>Prompts for generating and improving documentation</p>
                    <button className="button button--primary">Download</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
