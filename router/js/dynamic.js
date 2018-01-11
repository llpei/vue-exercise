const Home = {
  template: '<h2>首页</h2>'
}
// vue-router 使用 path-to-regexp 作为路径匹配引擎，所以支持很多高级的匹配模式
// 有时候，同一个路径可以匹配多个路由，
// 此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。
// 参数的获取两种方式，props 或者同 $route对象中
const Event = {
  props:['id'],
  template: '<h2>活动 {{ $route.params.id }} {{ id }}</h2>',
  beforeRouteEnter(to, from, next){
    console.log(to, from)
    next()
  }
}

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/events',
    component: Event
  },
  {
    path: '/events/:id',
    component: Event,
    props:true
  }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  el:'#app',
  router
})
