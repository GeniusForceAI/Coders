export type PodcastEpisode = {
  title: string;
  slug: string;
  date: string;
  duration: string;
  description: string;
  videoId?: string; // YouTube video ID
  transcript: string[];
  resources: {
    title: string;
    link: string;
  }[];
};

export const episodes: Record<string, PodcastEpisode> = {
  'ai-project-management': {
    title: 'AI in Project Management',
    slug: 'ai-project-management',
    date: 'March 15, 2024',
    duration: '45 min',
    description: 'Explore how artificial intelligence is transforming modern project management and development workflows.',
    videoId: 'to9iVovmBmo', // Example video as placeholder
    transcript: [
      'In this episode, we dive deep into how AI is revolutionizing project management.',
      'Learn about AI-powered estimation, risk assessment, and resource optimization.',
    ],
    resources: [
      {
        title: 'Project Management Guide',
        link: '/Coders/docs/project-management/intro',
      },
      {
        title: 'AI Tools for PMs',
        link: '/Coders/docs/ai-patterns/project-tools',
      },
    ],
  },
  'future-of-code-review': {
    title: 'The Future of Code Review',
    slug: 'future-of-code-review',
    date: 'March 8, 2024',
    duration: '38 min',
    description: 'Discover how AI-powered tools are revolutionizing the code review process and improving code quality.',
    videoId: 'to9iVovmBmo', // Example video as placeholder
    transcript: [
      'Join us as we explore cutting-edge developments in AI-assisted code review.',
      'Learn about automated analysis, bug detection, and smart suggestions.',
    ],
    resources: [
      {
        title: 'Code Review Guidelines',
        link: '/Coders/docs/development-lifecycle/code-review',
      },
      {
        title: 'AI Code Analysis Tools',
        link: '/Coders/docs/ai-patterns/code-analysis',
      },
    ],
  },
  'devops-evolution': {
    title: 'DevOps Evolution',
    slug: 'devops-evolution',
    date: 'March 1, 2024',
    duration: '42 min',
    description: 'Learn about the latest trends in DevOps and how AI is streamlining deployment pipelines.',
    videoId: 'to9iVovmBmo', // Example video as placeholder
    transcript: [
      'Explore the evolution of DevOps practices and how AI is transforming the landscape.',
      'Discover deployment optimization, infrastructure management, and monitoring.',
    ],
    resources: [
      {
        title: 'DevOps Best Practices',
        link: '/Coders/docs/development-lifecycle/devops',
      },
      {
        title: 'AI in DevOps',
        link: '/Coders/docs/ai-patterns/devops-automation',
      },
    ],
  },
  'agile-development-2024': {
    title: 'Agile Development in 2024',
    slug: 'agile-development-2024',
    date: 'February 23, 2024',
    duration: '40 min',
    description: 'How modern tools and AI are reshaping agile methodologies and team collaboration.',
    videoId: 'to9iVovmBmo', // Example video as placeholder
    transcript: [
      'Explore how AI is transforming agile development practices in 2024.',
      'Learn about sprint planning, story point estimation, and team optimization.',
    ],
    resources: [
      {
        title: 'Modern Agile Guide',
        link: '/Coders/docs/development-lifecycle/agile',
      },
      {
        title: 'AI Tools for Agile Teams',
        link: '/Coders/docs/ai-patterns/agile-tools',
      },
    ],
  },
};
