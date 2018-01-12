const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    add(state){
      state.count ++
    },
    addPayload(state,payload){
      state.count = state.count + payload
    }
  }
})

const Counter = {
  template:`
    <div class="ui red circular label">
      {{ count }}
    </div>
  `,
  computed:{
    count(){
      return store.state.count
    }
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
