const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    home: "./src/pages/home/home.js",
    about: "./src/pages/about/about.js",
    contact: "./src/pages/contact/contact.js",
    profile: "./src/pages/profile/profile.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js", // home.bundle.js, about.bundle.js и т. д.
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pages/home/home.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/pages/about/about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/pages/contact/contact.html",
      chunks: ["contact"],
    }),
    new HtmlWebpackPlugin({
      filename: "profile.html",
      template: "./src/pages/profile/profile.html",
      chunks: ["profile"],
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
  },
};
