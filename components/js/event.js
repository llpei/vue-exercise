Vue.component('ui-button',{
  template : '<button @click="increment" class="ui button">{{counter}}</button>',
  data(){
    return {
      counter:0
    }
  },
  methods:{
    increment(){
      this.counter += 1
      this.$emit('increment');
    }
  }
})
var dataSource = {
  total : 0
}
var vm = new Vue({
  el: '#app',
  data: dataSource,
  methods:{
    incrementTotal(){
      this.total +=1
    }
  }
})
