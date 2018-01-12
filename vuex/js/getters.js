const store = new Vuex.Store({
  state:{
    count:[]
  },
  mutations:{
    add(state){
      state.count.push(1);
    },
    addPayload(state,payload){
      state.count.push(payload)
    }
  },
  getters:{
    sum(state,getters){
      return state.count.reduce((a,b) => a + b,0)
    },
    total(state){
      return state.count.length
    },
    avg(state,getters){
      // toFixed 返回的是字符串，前面添加一个加号，转为整型
      return +(getters.sum / getters.total * 100 / 100).toFixed(1)
    }
  }
})

const Counter = {
  template:`
    <div>
      <div class="ui red circular label">
        {{ count }}
      </div>
      <div class="ui blue circular label">
        {{ total }}
      </div>
      <div class="ui gray circular label">
        {{ avg }}
      </div>
    </div>

  `,
  computed:{
    count(){
      console.log(store.state.count);
      // 箭头函数 ES6语法
      // return store.state.count.reduce((a,b) => a + b,0)
      // return store.state.count.reduce(function(a,b){return a + b},0)
      return store.getters.sum

    },
    avg(){
      return store.getters.avg
    },
    total(){
      return store.getters.total
    }

    // spread 操作符，它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列
    // console.log(...[1, 2, 3])
    // ...mapGetters(['count','avg','total'])
    // ...Vuex.mapGetters({
    //   'count':'sum',
    //   'avg':'avg',
    //   'total':'total'
    // })

  }
}

const vm = new Vue({
  el:"#app",
  store,
  components:{
    counter:Counter
  },
  methods:{
    add(){
      store.commit('add');
    },
    addPayload(){
      const payload = Math.floor( Math.random() * (10 -1) + 1)
      store.commit('addPayload',payload);
    }
  }
})
