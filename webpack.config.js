const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')


module.exports = {
  entry:path.join(__dirname,'./src/js/main.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  plugins:[
    new htmlWebpackPlugin({
      template: path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    })
  ],
  module:{
    rules: [
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
      {test:/\.(png|gif|bmp|jpg)$/,use:'url-loader'},
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}