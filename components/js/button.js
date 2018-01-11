Vue.component('g-button',{
  template : '<button class="ui button">gButton</button>'
})

var uiButton = {
  template : '<button class="ui button">cbutton</button>'
}

var propsButton = {
  template : '<button class="ui button">{{text}}</button>',
  // props: ['text']
  props: {
    text:{
      type : String,
      default :'button',
      required : true,
      validator (value){
          return value.length > 3
      }
    }
  }
}

var dataSource = {
  published : false
}

var vm = new Vue({
  el: '#app',
  data: dataSource,
  components: {
    'ui-button': uiButton,
    'props-button': propsButton,
  }
})
