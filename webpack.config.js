const path = require("path");
const entryPath = "ES6_React_Basic-/05_Dzien_3/02_Pierwsza_aplikacja/01_Zadanie_1";

module.exports = {
  devtool: "eval-cheap-module-source-map",
  entry: `./${entryPath}/js/app.js`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
  },
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
