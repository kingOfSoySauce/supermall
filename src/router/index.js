import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from 'D:/newDesktop/前端/project/11-15/supermall/src/views/cart/Cart.vue'
import Home from 'views/home/Home.vue'
const Cart = () => import('D:/newDesktop/前端/project/11-15/supermall/src/views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')

//解决vue-router重复点击报错问题（this.$router.replace()）
const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch((err) => err)
}


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: { keepAlive: true },
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
