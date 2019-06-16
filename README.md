## webpack 基本配置
1. yarn init 
2. 建立src index.html 等文件夹
3. yarn add jquery
4. 添加 html js 的内容
5. 添加 webpack.config.js ，配置其中的内容
6. 安装 webpack
```
yarn add webpack --dev
```
7. 安装 webpack-dev-server html-webpack-plugin
```
yarn add webpack-dev-server html-webpack-plugin --dev
```
8. 在 package.json 中添加 scripts 
```
"dev": "webpack-dev-server --open --port 3000 --hot"
```
然后 npm run dev 就能启动项目
9. 添加 css 文件和 图片文件，引入对应的loader
```
yarn add style-loader css-loader sass-loader node-sass url-loader file-loader --dev
```
10. 添加解析 ES6 的loader
```
yarn add babel-core @babel/core @babel/plugin-proposal-object-rest-spread @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react babel-loader --dev
yarn add @babel/runtime 
```
配置 webpack.config.js ，添加 .babelrc 文件
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-transform-runtime"
  ]
}
```
如上完成一个基本的 webpack 的配置，可以实现打包ES6 sass css 图片等
## webapck优化

每次发布都将上次发布的清除
```
yarn add clean-webpack-plugin --dev
```
在webpack.config.js中引入，并添加一个plugin
```
const cleanWebpackPlugin=require('clean-webpack-plugin')

new cleanWebpackPlugin(['dist'])//数组里面的内容指的是要删除的文件名
```

抽离第三方包(webpack4.x貌似不能这样用)
```
entry:{
  app:path.join(__dirname,'./src/main.js'),
  vendors: ['jquery'] //把要抽离的第三方包抽离出来
}
```

# webpack4变化太大，搞晕了

