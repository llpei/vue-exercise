const Home = {
  template: '<h2>首页</h2>'
}

const aHome = {
  template: '<h2>首页 A</h2>'
}

const bHome = {
  template: '<h2>首页 B</h2>'
}

const Event = {
  template: '<h2>活动</h2>'
}
const aEvent = {
  template: '<h2>活动 A</h2>'
}
const bEvent = {
  template: '<h2>活动 B</h2>'
}

const routes = [
  {
    path: '/',
    components: {
      default:Home,
      a:aHome,
      b:bHome
    }
  },
  {
    path: '/events',
    components: {
      default:Event,
      a:aEvent,
      b:bEvent
    }
  }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
const app = new Vue({
  el:'#app',
  router
})
