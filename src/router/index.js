import Vue from "vue"
import Router from "vue-router"

//懒加载
const home = ()=>import("../views/home/home")
const fenlei = ()=>import("../views/fenlei/fenlei")
const shop = ()=>import("../views/shop/shop.vue")
const wode = ()=>import("../views/wode/wode")
const detail =()=>import('../views/detail/detail')
// 安装插件
Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    redirect:'/home'
  },
    {
      path: '/home',
      component: home
    },{
      path: '/fenlei',
      component: fenlei
    },
    {
      path: '/shop',
      component: shop
    },
    {
      path: '/wode',
      component:wode

    },
    {
      path:'/detail/:iid',
      component:detail
    }
  ],
  mode:'history'
})
