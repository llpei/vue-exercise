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

const vm = new Vue({
  el:"#app",
  store,
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
