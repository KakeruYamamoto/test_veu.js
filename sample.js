Vue.component('todo-item',{
  template: '<li>this is a todo</li>'
})

var app = new Vue({
  // このelにHTMLのidを指定することで、そのidのDOMでVue.jsのインスタンスがインポートされる
  el: '#app',
  // dataは、定義されたVue.jsのインスタンスが持つ属性（値）
  data: {
    name: 'A山B郎',
    cource: 'Webエンジニアコース',
    acceptancePeriod: '2019年01月期',
    defaultLastId: 3,
    students: [
      { id: 1, name: '野呂浩良', cource: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '富永修司', cource: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', cource: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  // methodsに、Vue.jsのインスタンスに使用させたいメソッドを記載する
  methods: {
    addStudent: function() {
        var max = this.students.reduce(function (a, b) {
       return a > b.id ? a : b.id
     }, 0)
      this.students.push({
        id: max + 1,
        name: this.name,
        cource: this.cource,
        acceptancePeriod: this.acceptancePeriod
        })
    }
  }
})
