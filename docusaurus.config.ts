import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Tumbleweed',
  tagline: 'Tumbleweed CDC pipeline',
  favicon: 'img/tumbleweed_favicon.ico',

  // Set the production url of your site here
  url: 'https://tumbleweed-cdc.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  organizationName: 'tumbleweed-cdc',
  deploymentBranch: 'gh-pages',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'tumbleweed-cdc.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    image: 'img/FaviconTumbleweedTransparent.ico',
    navbar: {
      title: 'Tumbleweed',
      logo: {
        alt: 'Tumbleweed Logo',
        src: 'img/FaviconTumbleweedTransparent.ico',
      },
      items: [
        {
          to: '/docs/introduction',
          label: 'CASE STUDY',
          position: 'right'
        },
        {
          to: "/#team",
          label: "TEAM",
          position: "right",
          activeBasePath: "never-active",
        },
        {
          href: 'https://github.com/tumbleweed-cdc',
          label: 'GITHUB',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
