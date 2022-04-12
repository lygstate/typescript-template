import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './examples/empty.demo.ts',
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          // https://webpack.js.org/configuration/module/#resolvefullyspecified
          fullySpecified: false,
        },
      }, {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  // https://github.com/webpack/webpack/issues/4899#issuecomment-609737316
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.mjs'],
  },
  output: {
    filename: 'empty.demo.js',
    path: path.resolve(__dirname, 'dist-webpack'),
  },
};
export default config;
