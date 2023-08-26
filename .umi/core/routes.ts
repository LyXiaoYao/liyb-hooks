// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/Code/project/lyb-hooks/node_modules/.pnpm/@umijs+runtime@3.5.41_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      path: '/~demos/:uuid',
      layout: false,
      wrappers: [require('../dumi/layout').default],
      component: (props) => {
        const React = require('react');
        const {
          default: getDemoRenderArgs,
        } = require('D:/Code/project/lyb-hooks/node_modules/.pnpm/@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react-router@6.4.2_react@18.2.0_typescript@5.1.6_umi@3.5.41/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        const { demos } = React.useContext(context);
        const [renderArgs, setRenderArgs] = React.useState([]);

        // update render args when props changed
        React.useLayoutEffect(() => {
          setRenderArgs(getDemoRenderArgs(props, demos));
        }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

        // for listen prefers-color-schema media change in demo single route
        usePrefersColor();

        switch (renderArgs.length) {
          case 1:
            // render demo directly
            return renderArgs[0];

          case 2:
            // render demo with previewer
            return React.createElement(Previewer, renderArgs[0], renderArgs[1]);

          default:
            return `Demo ${props.match.params.uuid} not found :(`;
        }
      },
    },
    {
      path: '/_demos/:uuid',
      redirect: '/~demos/:uuid',
    },
    {
      __dumiRoot: true,
      layout: false,
      path: '/',
      wrappers: [
        require('../dumi/layout').default,
        require('D:/Code/project/lyb-hooks/node_modules/.pnpm/dumi-theme-default@1.1.24_@umijs+preset-dumi@1.1.48_react-dom@18.2.0_react@18.2.0/node_modules/dumi-theme-default/es/layout.js')
          .default,
      ],
      routes: [
        {
          path: '/',
          component: require('D:/Code/project/lyb-hooks/docs/index.md').default,
          exact: true,
          meta: {
            filePath: 'docs/index.md',
            updatedTime: 1692890712000,
            title: '首页',
            hero: {
              image: '/background.png',
              desc: '<div class="markdown"><p>React 业务 Hooks 搭建</p></div>',
              actions: [
                {
                  text: '指南',
                  link: '/guide',
                },
                {
                  text: 'Hooks 列表',
                  link: '/hooks',
                },
              ],
            },
            footer:
              '<div class="markdown"><p>Copyright (c) © 2023 by Github@LyXiaoYao, All Rights Reserved</p></div>',
            slugs: [
              {
                depth: 2,
                value: '✨ 特性',
                heading: '-特性',
              },
              {
                depth: 2,
                value: '📦 安装',
                heading: '-安装',
              },
              {
                depth: 2,
                value: '🔨 使用',
                heading: '-使用',
              },
            ],
          },
          title: '首页 - lyb-hooks',
        },
        {
          path: '/guide',
          component: require('D:/Code/project/lyb-hooks/docs/guide/index.md').default,
          exact: true,
          meta: {
            filePath: 'docs/guide/index.md',
            updatedTime: 1692888127000,
            slugs: [
              {
                depth: 1,
                value: 'lyb-hooks',
                heading: 'lyb-hooks',
              },
              {
                depth: 2,
                value: '⛰️ 能力支持',
                heading: '️-能力支持',
              },
              {
                depth: 3,
                value: '1. 可靠的代码健壮',
                heading: '1-可靠的代码健壮',
              },
              {
                depth: 3,
                value: '2. 完善的文档能力',
                heading: '2-完善的文档能力',
              },
              {
                depth: 3,
                value: '3. 完整的测试用例',
                heading: '3-完整的测试用例',
              },
              {
                depth: 2,
                value: '🌟 设计目的',
                heading: '-设计目的',
              },
              {
                depth: 2,
                value: '⚒️ 技术选型',
                heading: '️-技术选型',
              },
              {
                depth: 3,
                value: '包管理工具 -- pnpm',
                heading: '包管理工具----pnpm',
              },
              {
                depth: 3,
                value: '构建工具 -- webpack & gulp',
                heading: '构建工具----webpack--gulp',
              },
              {
                depth: 3,
                value: '静态文件打包工具 -- dumi',
                heading: '静态文件打包工具----dumi',
              },
              {
                depth: 3,
                value: '测试工具 -- jest',
                heading: '测试工具----jest',
              },
              {
                depth: 2,
                value: '其他',
                heading: '其他',
              },
              {
                depth: 3,
                value: '生成CHANGELOG',
                heading: '生成changelog',
              },
              {
                depth: 2,
                value: '📧 联系',
                heading: '-联系',
              },
            ],
            title: 'lyb-hooks',
            nav: {
              path: '/guide',
              title: 'Guide',
            },
          },
          title: 'lyb-hooks - lyb-hooks',
        },
      ],
      title: 'lyb-hooks',
      component: (props) => props.children,
    },
  ];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
