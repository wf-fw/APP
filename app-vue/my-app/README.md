
##制作首页APP组件
1.完成header区域，使用的是mint-ui中的header组件
2.制作底部额table区域，使用的是mui中的tabbar.html
在中间区域放router-view来展示路由匹配到的组件

##改造table为router-link

##设置路由高亮

##点击table中的路由链接，展示对应的链接组件

##制作首页轮播图布局

##改造九宫格区域样式

##改造新闻资讯 路由链接

##新闻资讯页面制作
1.绘制界面  使用Mui中的media-list.HTML
2.使用vue-resource获取数据
3.渲染真是数据

##实现新闻资讯列表点击跳转到新闻详情
1.把列表中的每一项改造为router-link，同时每一项应该提供唯一的ID标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在路由模块中，将新闻详情的路由地址和组件页面对应起来


##实现 新闻详情的 页面布局 和 数据渲染


##单独封装一个comment.vue评论子组件
先创建一个单独的 comment.vue 组件模板
在需要使用 comment 组件的页面中，先动手导入comment组件
    +import comment from ‘./comment.vue’
在父组件中，使用 comments 属性，将刚才导入comment组件，注册为自己的子组件
将注册子组件的时候，注册名称，以标签形式，在页面中引用即可


获取所有的评论数据显示到页面中
