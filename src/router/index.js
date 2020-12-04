import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const Login = () => import('../views/login/Login.vue')
Vue.use(VueRouter)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
//push 
const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      showFooter: true
  }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      showFooter: true
  }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      showFooter: true
  }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      showFooter: true
  }
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
  {
    path:'/login',
    component:Login
  }
 
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
