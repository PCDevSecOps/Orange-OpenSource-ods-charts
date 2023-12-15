import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const defaultConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: './index.ts',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
};

export default [
  {
    ...defaultConfig,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'ods-charts.js',
      library: {
        type: 'umd',
        name: 'ODSCharts',
      },
    },
  },
  {
    ...defaultConfig,
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'ods-charts-module.js',
      library: {
        type: 'module',
      },
    },
    experiments: {
      outputModule: true,
    },
  },
];
