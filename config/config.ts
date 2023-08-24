// import { menus } from './menu';

export default {
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  alias: {
    demoHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['packages/hooks/src', 'docs'],
  },
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
  },
  mode: 'site',
  title: 'demo hooks',
  logo: '/logo.png',
};
