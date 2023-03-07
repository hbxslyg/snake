const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          "ts-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
		extensions: ['.ts', '.js']
	},

  // 开发模式使用，方便查错误
  devtool: "inline-source-map",

};
