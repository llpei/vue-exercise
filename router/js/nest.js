const Home = {
  template: '<h2>首页</h2>'
}
// vue-router 使用 path-to-regexp 作为路径匹配引擎，所以支持很多高级的匹配模式
// 有时候，同一个路径可以匹配多个路由，
// 此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。
const Event = {
  template: `
    <div>
      <h2>活动 {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `,
  beforeRouteEnter(to, from, next){
    console.log(to, from)
    next()
  }
}

const Comment  = {
  template:`
    <div>
      <hr class="ui section divider">
        <h2>评论</h2>
    </div>
  `
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
    // 增加的嵌套路由
    children:[
      {
        path:'comments',
        component:Comment
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el:'#app',
  router
})
