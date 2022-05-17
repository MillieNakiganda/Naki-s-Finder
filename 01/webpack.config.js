const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
   entry: "./app/assets/scripts/index.js",
   module: {
       rules : [
           {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
              test: /\.(js)$/,
              use: "babel-loader"
          },
       ]
    },
    output: {
        path: path.resolve(__dirname, "app"),
        filename : "bundle.js" 
    },
    
    plugins: [new HtmlWebpackPlugin({
        inject: true,
        template: resolveAppPath('app/index.html'),
      })],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    
};
