const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = (env, argv) => {
  console.log(argv);
  return {
    mode: argv.mode == "production" ? "production" : "development",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path:
        argv.mode == "production"
          ? path.resolve(__dirname, "build")
          : path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
  };
  
};
