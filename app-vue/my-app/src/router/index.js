import VueRouter from 'vue-router'

import Home from '../components/tabbar/Home.vue'
import Member from '../components/tabbar/Member.vue'
import Search from '../components/tabbar/Search.vue'
import Shopcar from '../components/tabbar/Shopcar.vue'
import NewsList from '../components/news/newslist.vue'
import NewsInfo from '../components/news/newsInfo.vue'


var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path: '/home', component: Home},
    {path: '/member', component: Member},
    {path: '/search', component: Search},
    {path: '/shopcar', component: Shopcar},
    {path: '/home/newslist', component: NewsList},
    {path: '/home/newsinfo/:id', component: NewsInfo},
  ],
  linkActiveClass: 'mui-active'
})


export default router