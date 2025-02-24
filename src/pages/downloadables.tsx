import React from 'react';
import Layout from '@theme/Layout';
import styles from './downloadables.module.css';

interface DownloadableItem {
  title: string;
  description: string;
  category: string;
  fileName: string;
}

const DOWNLOADABLES: DownloadableItem[] = [
  {
    title: 'AI Prompt Engineering Templates',
    description: 'Advanced templates for crafting effective AI prompts, including chain-of-thought and few-shot learning examples',
    category: 'AI Prompts',
    fileName: 'ai-prompt-templates.zip'
  },
  {
    title: 'Code Review Automation Scripts',
    description: 'Python and shell scripts for automating code reviews with AI assistance and best practices integration',
    category: 'Code',
    fileName: 'code-review-automation.zip'
  },
  {
    title: 'Bug Analysis Workflows',
    description: 'Structured workflows and decision trees for AI-powered bug analysis and automated debugging processes',
    category: 'Workflows',
    fileName: 'bug-analysis-flows.pdf'
  },
  {
    title: 'Training Data Sets',
    description: 'Curated datasets for fine-tuning AI models, including code snippets and documented examples',
    category: 'Data',
    fileName: 'training-datasets.zip'
  },
  {
    title: 'Development Environment Configs',
    description: 'Pre-configured development environment settings and Docker containers for AI development',
    category: 'Code',
    fileName: 'dev-env-configs.zip'
  },
  {
    title: 'AI System Architecture Templates',
    description: 'Reference architectures and design patterns for building scalable AI systems',
    category: 'Workflows',
    fileName: 'ai-architecture-templates.pdf'
  }
];

function DownloadCard({ item }: { item: DownloadableItem }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.category}>{item.category}</div>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>
        <button className={styles.downloadButton}>
          Download
          <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L7 11H17L12 16Z" fill="currentColor"/>
            <path d="M12 4V12M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Downloadables(): JSX.Element {
  return (
    <Layout
      title="Downloadables"
      description="Download AI development resources, templates, and tools">
      <main>
        <div className={styles.hero}>
          <h1>AI Development Resources</h1>
          <p>Download curated resources to enhance your AI development workflow</p>
        </div>
        <div className={styles.container}>
          <div className={styles.resourceCategories}>
            <h2>Essential Resources</h2>
            <p>Access our collection of templates, datasets, and tools for AI-powered development</p>
          </div>
          <div className={styles.grid}>
            {DOWNLOADABLES.map((item, idx) => (
              <DownloadCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
