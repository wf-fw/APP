import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入Mint-ui的组件
import MINT from 'mint-ui'
Vue.use(MINT)

//导入mint-ui的样式
import 'mint-ui/lib/style.css'

//导入mint-ui的头部组件
import { Header} from 'mint-ui'
Vue.component(Header.name,Header)

//导入mint-ui的table（底部）组件
import { Swipe, SwipeItem, Button} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

//导入MUI的样式
import './lib/dist/css/mui.min.css'
import './lib/dist/css/icons-extra.css'

//导入格式化时间的插件
import moment from 'moment'

//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)

//设置请求根路径

//导入自己的router.js路由模块
import router from './router/index.js'

//导入App根组件
import app from './App'

var vm = new Vue({
  el:'#app',
  router,
  render: c => c(app),

})
