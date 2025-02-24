import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Genius Force',
  tagline: 'Engineering Education, Reimagined',
  favicon: 'img/genius_force_atom_black_circle.svg',

  // Set the production url of your site here
  url: 'https://geniusforceai.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Coders/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GeniusForceAI',
  projectName: 'Coders',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl: 'https://github.com/AutoNateAI/Shippe-Coder/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/AutoNateAI/Shippe-Coder/tree/main/',
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
          {
            from: '/tutorials',
            to: '/docs/intro',
          },
          {
            from: '/tutorials/:path*',
            to: '/docs/:path*',
          },
          {
            from: '/downloadables',
            to: '/prompts',
          },
          {
            from: '/downloadables/:path*',
            to: '/prompts/:path*',
          },
        ],
        createRedirects(existingPath) {
          // Create bi-directional redirects to ensure both old and new paths work
          if (existingPath.includes('/docs/')) {
            return [existingPath.replace('/docs/', '/tutorials/')];
          }
          if (existingPath.includes('/prompts/')) {
            return [existingPath.replace('/prompts/', '/downloadables/')];
          }
          return undefined;
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
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
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorials',
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
              to: 'docs/intro',
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
              label: 'Podcasts',
              to: 'podcasts',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AutoNateAI/Shippe-Coder',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Genius Force. Built with Docusaurus.`,
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
    metadata: [
      // Twitter Card
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Shippi - AI Dev Docs'},
      {name: 'twitter:description', content: 'Ship Better Code, Faster'},
      {name: 'twitter:image', content: 'https://autonateai.github.io/Shippe-Coder/img/social-card.png'},
      
      // Open Graph (Facebook, iMessage, etc)
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Shippi - AI Dev Docs'},
      {property: 'og:description', content: 'Ship Better Code, Faster'},
      {property: 'og:image', content: 'https://autonateai.github.io/Shippe-Coder/img/social-card.png'},
      {property: 'og:image:alt', content: 'Shippi Logo'},
      {property: 'og:url', content: 'https://autonateai.github.io/Shippe-Coder/'},
      {property: 'og:site_name', content: 'Shippi'},
      
      // Apple-specific
      {name: 'apple-mobile-web-app-title', content: 'Shippi'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
    ],
    customCss: [
      './src/css/custom.css',
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
