import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Genius Force',
  tagline: 'Build revenue-generating AI tools in 24 hours',
  favicon: 'img/genius_force_atom_black_circle.svg',

  // Set the production url of your site here
  url: 'https://geniusforceai.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/Coders/',
  trailingSlash: true,

  // GitHub pages deployment config.
  organizationName: 'GeniusForceAI',
  projectName: 'Coders',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: process.env.NODE_ENV === 'production' ? 'warn' : 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/GeniusForceAI/Coders/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/GeniusForceAI/Coders/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Remove all redirects for now
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/')) {
            // Only redirect if the path doesn't start with /tutorials/ or /podcasts/
            return !existingPath.startsWith('/tutorials/') && !existingPath.startsWith('/podcasts/') 
              ? [`/tutorials${existingPath.replace('/docs/', '/')}`] 
              : undefined;
          }
          if (existingPath.includes('/prompts/')) {
            // Only redirect if the path doesn't start with /downloadables/
            return !existingPath.startsWith('/downloadables/') 
              ? [`/downloadables${existingPath.replace('/prompts/', '/')}`] 
              : undefined;
          }
          return undefined;
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      // Primary Meta Tags
      {name: 'title', content: 'Genius Force - AI Development Tools'},
      {name: 'description', content: 'Build revenue-generating AI tools in 24 hours'},
      
      // Open Graph / Facebook
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://geniusforceai.github.io/Coders'},
      {property: 'og:title', content: 'Genius Force - AI Development Tools'},
      {property: 'og:description', content: 'Build revenue-generating AI tools in 24 hours'},
      {property: 'og:image', content: 'https://geniusforceai.github.io/Coders/img/social-card.png'},
      {property: 'og:site_name', content: 'Genius Force'},
      
      // Twitter Card
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:url', content: 'https://geniusforceai.github.io/Coders'},
      {name: 'twitter:title', content: 'Genius Force - AI Development Tools'},
      {name: 'twitter:description', content: 'Build revenue-generating AI tools in 24 hours'},
      {name: 'twitter:image', content: 'https://geniusforceai.github.io/Coders/img/social-card.png'},
      
      // Additional Meta Tags
      {name: 'theme-color', content: '#00F5FF'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-title', content: 'Genius Force'},
    ],
    image: 'img/social-card.png',
    navbar: {
      title: 'Genius Force',
      logo: {
        alt: 'Genius Force Logo',
        src: 'img/genius_force_atom_black_circle.svg',
        srcDark: 'img/genius_force_atom_white_circle.svg',
      },
      hideOnScroll: false,
      style: 'dark',
      items: [
        {
          to: '/fundamentals',
          label: 'Tutorials',
          position: 'left',
        },
        {
          to: 'courses',
          label: 'Courses',
          position: 'left',
        },
        {
          to: 'downloadables',
          label: 'Downloadables',
          position: 'left',
        },
        {
          to: 'podcasts',
          label: 'Podcasts',
          position: 'left',
        },
        {
          href: 'https://github.com/AutoNateAI/Shippe-Coder',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Tutorials',
              to: '/fundamentals',
            },
            {
              label: 'Courses',
              to: 'courses',
            },
            {
              label: 'Downloadables',
              to: 'downloadables',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/geniusforce',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/geniusforceai',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/geniusforceai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Podcasts',
              to: 'podcasts',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Genius Force AI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
      ],
    },
    customCss: [
      './src/css/custom.css',
    ],
  },
};

export default config;
