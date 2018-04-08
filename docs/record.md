 {
      path: '/',
      name: 'Main',
      component: Main
    }
    name和component的区别

* 引入resetcss
* class 名字一样会导致css污染

* 利用嵌套路由解决路由污染问题
* 利用mode:history去掉url中#
* 提取全局颜色
* 20180402添加边框阴影
* background-image url('bg_cash.png')图片显示不了
utils.js添加 publicPath: '../../'
 if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }
