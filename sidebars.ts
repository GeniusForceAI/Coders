import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

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
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'Introduction',
        },
      ],
    },
    {
      type: 'category',
      label: 'Project Management',
      items: [
        {
          type: 'doc',
          id: 'project-management/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'project-management/task-breakdown',
          label: 'Task Breakdown',
        },
        {
          type: 'doc',
          id: 'project-management/estimation',
          label: 'Estimation',
        },
        {
          type: 'doc',
          id: 'project-management/sprint-planning',
          label: 'Sprint Planning',
        },
        {
          type: 'doc',
          id: 'project-management/code-review',
          label: 'Code Review',
        },
        {
          type: 'doc',
          id: 'project-management/technical-debt',
          label: 'Technical Debt',
        },
        {
          type: 'doc',
          id: 'project-management/documentation',
          label: 'Documentation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cognitive Load Management',
      items: [
        {
          type: 'doc',
          id: 'cognitive-load/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'cognitive-load/context-switching-optimization',
          label: 'Context Switching',
        },
        {
          type: 'doc',
          id: 'cognitive-load/mental-model-building',
          label: 'Mental Models',
        },
        {
          type: 'doc',
          id: 'cognitive-load/information-architecture',
          label: 'Information Architecture',
        },
        {
          type: 'doc',
          id: 'cognitive-load/decision-fatigue-prevention',
          label: 'Decision Fatigue',
        },
        {
          type: 'doc',
          id: 'cognitive-load/focus-management',
          label: 'Focus Management',
        },
        {
          type: 'doc',
          id: 'cognitive-load/knowledge-base-organization',
          label: 'Knowledge Base',
        },
      ],
    },
    {
      type: 'category',
      label: 'AI-Enhanced Workflows',
      items: [
        {
          type: 'doc',
          id: 'ai-workflows/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'ai-workflows/prompt-engineering-for-pm',
          label: 'Prompt Engineering',
        },
        {
          type: 'doc',
          id: 'ai-workflows/ai-assisted-code-review',
          label: 'AI Code Review',
        },
        {
          type: 'doc',
          id: 'ai-workflows/automated-documentation',
          label: 'Auto Documentation',
        },
        {
          type: 'doc',
          id: 'ai-workflows/smart-task-prioritization',
          label: 'Task Prioritization',
        },
        {
          type: 'doc',
          id: 'ai-workflows/meeting-summarization',
          label: 'Meeting Summaries',
        },
        {
          type: 'doc',
          id: 'ai-workflows/code-context-analysis',
          label: 'Context Analysis',
        },
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Core Concepts',
    //   items: [
    //     'concepts/ai-workflows',
    //     'concepts/cognitive-load',
    //     'concepts/project-management',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'AI Integration',
    //   items: [
    //     'ai/prompts',
    //     'ai/jira-integration',
    //     'ai/vscode-extension',
    //   ],
    // },
    {
      type: 'category',
      label: 'Team Collaboration',
      items: [
        {
          type: 'doc',
          id: 'team-collaboration/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'team-collaboration/async-communication',
          label: 'Async Communication',
        },
        {
          type: 'doc',
          id: 'team-collaboration/knowledge-sharing',
          label: 'Knowledge Sharing',
        },
        {
          type: 'doc',
          id: 'team-collaboration/code-ownership',
          label: 'Code Ownership',
        },
        {
          type: 'doc',
          id: 'team-collaboration/pair-programming-with-ai',
          label: 'AI Pair Programming',
        },
        {
          type: 'doc',
          id: 'team-collaboration/cross-functional-collaboration',
          label: 'Cross-functional Teams',
        },
        {
          type: 'doc',
          id: 'team-collaboration/team-velocity-optimization',
          label: 'Velocity Optimization',
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
          id: 'quality-assurance/ai-driven-testing-strategies',
          label: 'AI Testing',
        },
        {
          type: 'doc',
          id: 'quality-assurance/code-quality-metrics',
          label: 'Quality Metrics',
        },
        {
          type: 'doc',
          id: 'quality-assurance/performance-monitoring',
          label: 'Performance',
        },
        {
          type: 'doc',
          id: 'quality-assurance/security-best-practices',
          label: 'Security',
        },
        {
          type: 'doc',
          id: 'quality-assurance/automated-qa-workflows',
          label: 'Automated QA',
        },
        {
          type: 'doc',
          id: 'quality-assurance/error-prevention',
          label: 'Error Prevention',
        },
      ],
    },
    {
      type: 'category',
      label: 'Development Lifecycle',
      items: [
        {
          type: 'doc',
          id: 'development-lifecycle/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'development-lifecycle/requirements-analysis',
          label: 'Requirements',
        },
        {
          type: 'doc',
          id: 'development-lifecycle/feature-planning',
          label: 'Feature Planning',
        },
        {
          type: 'doc',
          id: 'development-lifecycle/implementation-strategies',
          label: 'Implementation',
        },
        {
          type: 'doc',
          id: 'development-lifecycle/release-management',
          label: 'Releases',
        },
        {
          type: 'doc',
          id: 'development-lifecycle/deployment-automation',
          label: 'Deployment',
        },
        {
          type: 'doc',
          id: 'development-lifecycle/maintenance-planning',
          label: 'Maintenance',
        },
      ],
    },
    {
      type: 'category',
      label: 'Productivity Tools',
      items: [
        {
          type: 'doc',
          id: 'productivity-tools/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'productivity-tools/ide-integration',
          label: 'IDE Integration',
        },
        {
          type: 'doc',
          id: 'productivity-tools/git-workflows',
          label: 'Git Workflows',
        },
        {
          type: 'doc',
          id: 'productivity-tools/ci-cd-pipeline',
          label: 'CI/CD',
        },
        {
          type: 'doc',
          id: 'productivity-tools/project-tracking',
          label: 'Project Tracking',
        },
        {
          type: 'doc',
          id: 'productivity-tools/time-management',
          label: 'Time Management',
        },
        {
          type: 'doc',
          id: 'productivity-tools/automation-scripts',
          label: 'Automation',
        },
      ],
    },
    {
      type: 'category',
      label: 'AI Integration Patterns',
      items: [
        {
          type: 'doc',
          id: 'ai-patterns/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'ai-patterns/llm-selection',
          label: 'LLM Selection',
        },
        {
          type: 'doc',
          id: 'ai-patterns/prompt-templates',
          label: 'Prompt Templates',
        },
        {
          type: 'doc',
          id: 'ai-patterns/context-management',
          label: 'Context Management',
        },
        {
          type: 'doc',
          id: 'ai-patterns/response-processing',
          label: 'Response Processing',
        },
        {
          type: 'doc',
          id: 'ai-patterns/error-handling',
          label: 'Error Handling',
        },
        {
          type: 'doc',
          id: 'ai-patterns/ai-ethics-limitations',
          label: 'Ethics & Limitations',
        },
      ],
    },
    {
      type: 'category',
      label: 'Metrics & Analytics',
      items: [
        {
          type: 'doc',
          id: 'metrics/index',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'metrics/performance-tracking',
          label: 'Performance',
        },
        {
          type: 'doc',
          id: 'metrics/quality-metrics',
          label: 'Quality',
        },
        {
          type: 'doc',
          id: 'metrics/team-productivity',
          label: 'Team Productivity',
        },
        {
          type: 'doc',
          id: 'metrics/project-health',
          label: 'Project Health',
        },
        {
          type: 'doc',
          id: 'metrics/ai-effectiveness',
          label: 'AI Effectiveness',
        },
        {
          type: 'doc',
          id: 'metrics/roi-measurement',
          label: 'ROI',
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
          id: 'best-practices/code-organization',
          label: 'Code Organization',
        },
        {
          type: 'doc',
          id: 'best-practices/project-structure',
          label: 'Project Structure',
        },
        {
          type: 'doc',
          id: 'best-practices/communication-protocols',
          label: 'Communication',
        },
        {
          type: 'doc',
          id: 'best-practices/ai-usage-guidelines',
          label: 'AI Guidelines',
        },
        {
          type: 'doc',
          id: 'best-practices/security-considerations',
          label: 'Security',
        },
        {
          type: 'doc',
          id: 'best-practices/scalability-planning',
          label: 'Scalability',
        },
      ],
    },
  ],
};

export default sidebars;
