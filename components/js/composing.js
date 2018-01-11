var liComponent = {
  template : '<li> {{ text }} </li>',
  props: ['text']
}

var olComponent = {
  template : `
    <ol>
      <li-component text="苹果"></li-component>
      <li-component text="香蕉"></li-component>
      <li-component text="橘子"></li-component>
    </ol>
  `,
  components:{
    'li-component': liComponent
  }
}

var dataSource = {

}

var vm = new Vue({
  el: '#app',
  data: dataSource,
  components: {
    'ol-component': olComponent
  }
})
