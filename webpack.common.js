const { join, resolve } = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: join(__dirname, "src/index.tsx"),
  output: {
    path: resolve(__dirname, "./dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x$/i,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
        exclude: /node_modules|bower_components/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "postcss-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: join(__dirname, "src/index.html"),
      filename: "index.html",
    }),
  ],
};

