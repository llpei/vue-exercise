const Home = {
  template: '<h2>首页</h2>'
}

const Event = {
  template: '<h2>活动</h2>'
}

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/events',
    component: Event
  }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


const app = new Vue({
  el:'#app',
  router
})
