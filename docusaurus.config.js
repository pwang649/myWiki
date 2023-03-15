// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Home',
  tagline: 'Peter\'s Wiki',
  url: 'https://pwang649.github.io/',
  baseUrl: '/myWiki',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pwang649', // Usually your GitHub org/user name.
  projectName: 'myWiki', // Usually your repo name.
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes:[
    '@docusaurus/theme-mermaid',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pwang649/myWiki/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      algolia: {
        // The application ID provided by Algolia
        appId: 'TXBBQ7HM4Y',
  
        // Public API key: it is safe to commit it
        apiKey: 'ebf46340f126116ffe7f28858e4c70bd',
  
        indexName: 'mywiki',
  
        // Optional: see doc section below
        contextualSearch: false,
  
        //... other Algolia params
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: 'https://pwang649.github.io', label: 'About', position: 'left'},
          {
            to: 'blog',
            //docId: 'index',
            position: 'left',
            label: 'Blog',
          },
          {
            href: 'https://github.com/pwang649',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
    ],
};

module.exports = config;
