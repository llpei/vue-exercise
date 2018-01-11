const Home = {
  template: '<h2>首页</h2>'
}

const aHome = {
  template: `
    <transition name="fade" :duration="{ enter: 1500, leave: 1800 }">
      <h2>首页 A</h2>
    </transition>
  `
}

const bHome = {
  template: '<h2>首页 B</h2>'
}

const Event = {
  template: '<h2>活动</h2>'
}
const aEvent = {
  template: `
    <transition name="fade" :duration="{ enter: 1500, leave: 1800 }">
      <h2>活动 A</h2>
    </transition>
  `
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
const dataSource = {

}
const app = new Vue({
  el:'#app',
  data:dataSource,
  router
})
