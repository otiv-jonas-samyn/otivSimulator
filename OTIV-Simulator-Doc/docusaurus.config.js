// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Otiv Simulator',
  tagline: 'documentation',
  favicon: 'img/OTIV.jpg',

  url: 'https://github.com/', // Your GitHub Pages URL
  baseUrl: '/otivSimulator/', // The base URL for your project
  
  organizationName: 'otiv-jonas-samyn', // Usually your GitHub org/user name.
  projectName: 'otivSimulator', // Usually your repo name.
  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/OTIV.jpg',
      navbar: {
        title: 'Otiv Simulator',
        logo: {
          alt: 'OTIV logo',
          src: 'img/OTIV.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/OTIVai/OTIV-Simulator',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/OTIVai/OTIV-Simulator',
              }
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'OTIV',
                href: 'https://www.otiv.ai',
              },
              {
                label: 'X',
                href: 'https://x.com/otivai',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/otiv/posts/?feedView=all',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/otiv_ai/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simulator Documentation Page. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
