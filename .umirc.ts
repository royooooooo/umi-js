import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/

const config: IConfig = {
  treeShaking: true,
  // routes: [
  //   { path: '/', component: './index' },
  //   {
  //     path: '/users',
  //     component: './users/index',
  //   },
  //   {
  //     path: 'users/detail',
  //     component: './users/detail',
  //   },
  //   { path: 'users/:id', component: './users/$id.tsx' },
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          immer: true
        },
        dynamicImport: true,
        title: 'umi-js',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};

export default config;
