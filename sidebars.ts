import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Fundamentals',
      items: [
        {
          type: 'doc',
          id: 'fundamentals/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'fundamentals/machine-learning-basics',
          label: 'Machine Learning Basics',
        },
        {
          type: 'doc',
          id: 'fundamentals/deep-learning',
          label: 'Deep Learning',
        },
        {
          type: 'doc',
          id: 'fundamentals/data-preparation',
          label: 'Data Preparation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Industries',
      items: [
        {
          type: 'doc',
          id: 'industries/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'industries/healthcare',
          label: 'Healthcare',
        },
        {
          type: 'doc',
          id: 'industries/fintech',
          label: 'Fintech',
        },
        {
          type: 'doc',
          id: 'industries/ecommerce',
          label: 'E-Commerce',
        },
        {
          type: 'doc',
          id: 'industries/edtech',
          label: 'EdTech',
        },
        {
          type: 'doc',
          id: 'industries/real-estate',
          label: 'Real Estate',
        },
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      items: [
        {
          type: 'doc',
          id: 'best-practices/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'best-practices/code-quality',
          label: 'Code Quality',
        },
        {
          type: 'doc',
          id: 'best-practices/testing',
          label: 'Testing',
        },
        {
          type: 'doc',
          id: 'best-practices/security',
          label: 'Security',
        },
        {
          type: 'doc',
          id: 'best-practices/performance',
          label: 'Performance',
        },
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        {
          type: 'doc',
          id: 'advanced-topics/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'advanced-topics/scaling-ai',
          label: 'Scaling AI Systems',
        },
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        {
          type: 'doc',
          id: 'deployment/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'deployment/edge-deployment',
          label: 'Edge Deployment',
        },
      ],
    },
    {
      type: 'category',
      label: 'API Design',
      items: [
        {
          type: 'doc',
          id: 'api-design/index',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Case Studies',
      items: [
        {
          type: 'doc',
          id: 'case-studies/index',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        {
          type: 'doc',
          id: 'troubleshooting/index',
          label: 'Overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Quality Assurance',
      items: [
        {
          type: 'doc',
          id: 'quality-assurance/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'quality-assurance/code-quality-metrics',
          label: 'Code Quality Metrics',
        },
        {
          type: 'doc',
          id: 'quality-assurance/automated-qa-workflows',
          label: 'Automated QA Workflows',
        },
        {
          type: 'doc',
          id: 'quality-assurance/performance-monitoring',
          label: 'Performance Monitoring',
        },
        {
          type: 'doc',
          id: 'quality-assurance/error-prevention',
          label: 'Error Prevention',
        },
        {
          type: 'doc',
          id: 'quality-assurance/security-best-practices',
          label: 'Security Best Practices',
        },
        {
          type: 'doc',
          id: 'quality-assurance/ai-driven-testing-strategies',
          label: 'AI-Driven Testing Strategies',
        },
      ],
    },
    {
      type: 'category',
      label: 'Windsurf',
      items: [
        {
          type: 'doc',
          id: 'windsurf/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'windsurf/getting-started',
          label: 'Getting Started',
        },
        {
          type: 'doc',
          id: 'windsurf/code-generation',
          label: 'Code Generation',
        },
        {
          type: 'doc',
          id: 'windsurf/interface',
          label: 'Interface',
        },
        {
          type: 'doc',
          id: 'windsurf/collaboration',
          label: 'Collaboration',
        },
      ],
    },
    {
      type: 'doc',
      id: 'contributing',
      label: 'Contributing',
    },
  ],
};

export default sidebars;
