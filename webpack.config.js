const path = require("path");
const entryPath = "05_Dzien_3/01_Przygotowanie_srodowiska/01_Aplikacja_pokazowa";

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
