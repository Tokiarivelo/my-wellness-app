const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join, resolve } = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // Où sera émis le bundle
  output: {
    path: join(__dirname, 'dist'),
  },
  // Indique à Webpack de prendre en compte vos alias TS
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolve(__dirname, 'tsconfig.app.json'),
        extensions: ['.ts', '.js'],
      }),
    ],
  },

  module: {
    rules: [
      // ── Ignore les fichiers .js du client Prisma pour source-map-loader
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: [
          /[\\/]generated[\\/]client[\\/]/, // ou /[\\/]generated-prisma[\\/]prisma[\\/]client[\\/]/
        ],
      },
      // … d’autres règles éventuelles (ts-loader, etc.)
    ],
  },

  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      // assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
      // note : pas besoin de redéclarer tsconfigPaths ici,
      // on l'a déjà branché juste au-dessus
    }),
  ],
};
