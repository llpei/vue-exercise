const Home = {
  template: '<h2>首页</h2>'
}
const Event = {
  template: '<h2>商品展示</h2>'
}

const routes = [
  {
    path: '/',
    component: Home,
    name:'home'
  },
  {
    path: "/home",
    redirect:{name:'home'} //或者直接定向到具体路由 "/"
  },
  {
    path: '/shop/phone',
    component: Event,
    name:'phone'
  },
  {
    path: '/shop/computer',
    component: Event,
    name:'computer',
    alias:'computer'
  }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  el:'#app',
  router
})
