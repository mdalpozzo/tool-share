// const path = require('path');

// const SRC_DIR = path.join(__dirname, '/client/src');
// const DIST_DIR = path.join(__dirname, '/client/public');

// module.exports = {
//   mode: 'development',
//   entry: [`${SRC_DIR}/App.jsx`],
//   output: {
//     path: DIST_DIR,
//     // publicPath: '/',
//     filename: 'bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {},
//           },
//         ],
//       },
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'env', 'stage-0'],
//           plugins: ['transform-class-properties'],
//         },
//       },
//       {
//         test: /\.(s*)css$/,
//         exclude: /node_modules/,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
// };
