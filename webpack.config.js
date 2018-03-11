const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DotenvPlugin = require('webpack-dotenv-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: './stylesheets/app.css'
});

module.exports = {
  entry: ["./src/app/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        include: [
          path.resolve(__dirname, './node_modules'),
          path.resolve(__dirname, 'src', 'stylesheets')
        ],
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new DotenvPlugin({
      sample: './.env.sample',
      path: './.env'
    }),
    extractPlugin
  ],
  node: {
    fs: 'empty'
  },
};