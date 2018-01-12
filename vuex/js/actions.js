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
    },
    remove(state){
      state.count.pop()
    },
    setCount(state,payload){
      state.count = payload
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
  },
  actions:{
    getCount(context){
      return axios.get('http://localhost:8080/api/count')
        .then(response => {
          console.log(response)
          context.commit('setCount',response.data.count)
        })
    },
    add({ commit }){
      return axios.post('http://localhost:8080/api/count',{number:1})
        .then(response => {
          console.log(response)
          commit('add');
        })
    },
    addPayload({ commit },payload){
      return axios.post('http://localhost:8080/api/count',{number:payload})
        .then(response => {
          console.log(response)
          commit('addPayload',payload);
        })
    },
    remove( { commit }){
      return axios.delete('http://localhost:8080/api/count')
        .then(response => {
          commit('remove')
        })
    }
  }
})

const Counter = {
  template:`
    <div>
      <div class="ui red circular label">
        总数：{{ count }}
      </div>
      <div class="ui blue circular label">
        数组长度：{{ total }}
      </div>
      <div class="ui gray circular label">
        平均值：{{ avg }}
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
  },
  methods:{
    ...Vuex.mapActions(['getCount'])
  },
  mounted(){
    // this.getCount()
    // store.dispatch('getCount')
    this.$store.dispatch('getCount')

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
      this.$store.dispatch('add');
    },
    addPayload(){
      const payload = Math.floor( Math.random() * (10 -1) + 1)
      this.$store.dispatch('addPayload',payload);
    },
    remove(){
      this.$store.dispatch('remove');
    }
  }
})
