import { menus } from './menu';

export default {
  publicPath: '/lyb-hooks/',
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/lyb-hooks/Bicycle.png',
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
    liybHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    includes: ['packages/hooks/src', 'docs'],
  },
  navs: [
    { title: '指南', path: '/guide' },
    { title: 'Hooks', path: '/hooks' },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      },
    ],
    '/hooks': menus,
  },
  mode: 'site',
  title: 'lyb-hooks',
  logo: process.env.NODE_ENV === 'development' ? '/Bicycle.png' : '/lyb-hooks/Bicycle.png',
};
