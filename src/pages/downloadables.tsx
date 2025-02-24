import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import styles from './downloadables.module.css';

interface DownloadableItem {
  title: string;
  description: string;
  category: string;
  fileName: string;
  icon: string;
}

const DOWNLOADABLES: DownloadableItem[] = [
  {
    title: 'AI Prompt Engineering Templates',
    description: 'Advanced templates for crafting effective AI prompts, including chain-of-thought and few-shot learning examples',
    category: 'AI Prompts',
    fileName: 'ai-prompt-templates.zip',
    icon: 'prompt-engineering.svg'
  },
  {
    title: 'Code Review Automation Scripts',
    description: 'Python and shell scripts for automating code reviews with AI assistance and best practices integration',
    category: 'Code',
    fileName: 'code-review-scripts.zip',
    icon: 'code-review.svg'
  },
  {
    title: 'Bug Analysis Workflows',
    description: 'Structured workflows and decision trees for AI-powered bug analysis and automated debugging processes',
    category: 'Workflows',
    fileName: 'bug-analysis-workflows.zip',
    icon: 'bug-analysis.svg'
  },
  {
    title: 'Training Data Sets',
    description: 'Curated datasets for training and fine-tuning AI models, including labeled examples and validation sets',
    category: 'Data',
    fileName: 'training-datasets.zip',
    icon: 'training-datasets.svg'
  },
  {
    title: 'Development Environment Configs',
    description: 'Pre-configured development environment settings and tools for AI development workflows',
    category: 'Code',
    fileName: 'dev-env-configs.zip',
    icon: 'dev-env-configs.svg'
  },
  {
    title: 'AI System Architecture Templates',
    description: 'Reference architectures and design patterns for building scalable AI systems',
    category: 'Workflows',
    fileName: 'ai-architecture-templates.zip',
    icon: 'ai-architecture-templates.svg'
  }
];

const ALL_CATEGORIES = Array.from(new Set(DOWNLOADABLES.map(item => item.category)));

function DownloadablesPage(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDownloadables = useMemo(() => {
    return DOWNLOADABLES.filter(item => {
      const matchesSearch = (
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Layout title="Downloadables">
      <div className={styles.hero}>
        <h1>AI Development Resources</h1>
        <p>Download curated resources to enhance your AI development workflow</p>
      </div>

      <div className={styles.container}>
        <div className={styles.resourceCategories}>
          <h2>Essential Resources</h2>
          <p>Access our collection of templates, datasets, and tools for AI-powered development</p>
          
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <svg 
                className={styles.searchIcon}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <select
                className={styles.categorySelect}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                {ALL_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.grid}>
            {filteredDownloadables.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardContent}>
                  <span className={styles.category}>{item.category}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <img 
                    src={require('@site/static/img/' + item.icon).default}
                    alt={item.title} 
                    className={styles.cardIcon}
                  />
                  <p className={styles.description}>{item.description}</p>
                  <button className={styles.downloadButton}>
                    <svg 
                      className={styles.downloadIcon} 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                    >
                      <path 
                        d="M12 16L7 11H17L12 16Z M12 4V12 M4 20H20" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                      />
                    </svg>
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DownloadablesPage;
