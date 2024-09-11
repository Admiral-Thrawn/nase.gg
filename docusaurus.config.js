import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  //Site info
  title: 'NASE.gg',
  tagline: 'A FFXIV High-end Duty Repository for NA Party Finder and info hub for the NASE Discord.',
  favicon: 'img/favicon.ico',
  //Production URL
  url: 'https://nase.netlify.app',
  baseUrl: '/',
  //GitHub info
  organizationName: 'naseffxiv', 
  projectName: 'nase.gg', 
  //Exception handling
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
          path: 'ffxivResources',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/naseffxiv/nase.gg/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      //Social Card
      image: 'img/nase-social-card.png',
      navbar: {
        title: 'NASE.gg',
        logo: {
          alt: 'NASE logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'FFXIV Resources',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'savageSidebar',
                label: 'Savage Raids',
              },
              {
                type: 'docSidebar',
                sidebarId: 'extremeSidebar',
                label: 'Extreme Trials',
              },
              {
                type: 'docSidebar',
                sidebarId: 'criterionSidebar',
                label: 'Criterion Dungeons',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'NASE Info',
            position: 'left',
            items: [
              {
                label: 'About us',
                href: '/about'
              },
              {
                label: 'Learning Parties',
                href: '/learning'
              },
            ]
          },
          {
            position: 'right',
            to: 'https://github.com/naseffxiv/nase.gg',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            position: 'right',
            to: 'https://discord.gg/JyfaBQ9XU5',
            className: 'header-discord-link',
            'aria-label': 'NASE Discord',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'FFXIV Resources',
            items: [
              {
                label: 'Savage Raids',
                to: '/aac',
              },
              {
                label: 'Extreme Trials',
                to: '/dawntrail-trials',
              },
              {
                label: 'Criterion Dungeons',
                to: '/endwalker-criterion',
              },
            ],
          },
          {
            title: 'NASE Info',
            items: [
              {
                label: 'About NASE',
                to: '/about',
              },
              {
                label: 'Learning Oppurtunities',
                to: '/learning',
              },
            ],
          },
          {
            title: 'Community',
            items: [

              {
                label: 'Discord Server',
                href: 'https://discord.gg/JyfaBQ9XU5',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/naseffxiv/nase.gg',
              },
            ],
          },
        ],
        copyright: `FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. | © SQUARE ENIX CO., LTD. All rights reserved. | All content © their respective authors.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
