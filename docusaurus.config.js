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
  url: 'https://pwang649.github.io',
  baseUrl: '/myWiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pwang649', // Usually your GitHub org/user name.
  projectName: 'myWiki', // Usually your repo name.
  trailingSlash: false,
  themes:[
    ['docusaurus-live-brython',
    {
      brython_src: 'https://cdn.jsdelivr.net/npm/brython@3.11.0/brython.min.js', // default
      brython_stdlib_src: 'https://cdn.jsdelivr.net/npm/brython@3.11.0/brython_stdlib.js' // default
    }//['@docusaurus/theme-search-algolia'],
  ],
],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      algolia: {
        // The application ID provided by Algolia
        appId: 'TXBBQ7HM4Y',
  
        // Public API key: it is safe to commit it
        apiKey: '5c4ebd3f5b35e8ec626c7a71038ea9f0',
  
        indexName: 'mywiki',
  
        // Optional: see doc section below
        contextualSearch: true,
  
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
    }),
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
