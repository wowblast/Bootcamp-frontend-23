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
      port: 'auto',
    
    },
    /*
    The webpack-dev-server provides you with a rudimentary web server and the ability to use live reloading
    
    STATIC: This option allows configuring options for serving static files from the directory (no necesary  )
    PORT: DEFAULT (9000 if no necesary)
    */
  };
  
};
