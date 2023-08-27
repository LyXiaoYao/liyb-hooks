// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/Study/encode/实战项目/2、React Hooks/lyb-hooks/packages/hooks/src/useToggle/demo/demo1.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/Study/encode/实战项目/2、React Hooks/lyb-hooks/packages/hooks/src/useToggle/demo/demo2.tsx?dumi-raw-code';

export default {
  'usetoggle-demo1': {
    component: (require('D:/Study/encode/实战项目/2、React Hooks/lyb-hooks/packages/hooks/src/useToggle/demo/demo1.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode1}},"dependencies":{"react":{"version":"18.2.0"}},"title":"基础用法","description":"<div class=\"markdown\"><p>默认为 boolean 切换，基础用法与 useBoolean 一致。</p></div>","identifier":"usetoggle-demo1"},
  },
  'usetoggle-demo2': {
    component: (require('D:/Study/encode/实战项目/2、React Hooks/lyb-hooks/packages/hooks/src/useToggle/demo/demo2.tsx')).default,
    previewerProps: {"sources":{"_":{"tsx":rawCode2}},"dependencies":{"react":{"version":"18.2.0"}},"title":"在任意两个值之间切换","description":"<div class=\"markdown\"><p>接受两个可选参数，在它们之间进行切换。</p></div>","identifier":"usetoggle-demo2"},
  },
};
