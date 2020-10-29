/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
$(() => {
  // practice 1 - add my first Vue
  // var app = new Vue({
  //   el: '#app',
  //   data: {
  //     message: 'Hello Vue!',
  //   },
  // });
  // data.message = 'Hello Paul';

  // practice 2 - using v-bind:XXX
  // var app2 = new Vue({
  //   el: '#app-2',
  //   data: {
  //     title: `You loaded this page on ${new Date().toLocaleString()}`,
  //   },
  // });

  // practice 3 - using v-if
  // var app3 = new Vue({
  //   el: '#app-3',
  //   data: {
  //     seen: true,
  //   },
  // });
  // app3.seen = false;

  // practice 4 - using todos
  // var app4 = new Vue({
  //   el: '#app-4',
  //   data: {
  //     todos: [
  //       { text: 'Learn JavaScript' },
  //       { text: 'Learn Vue' },
  //       { text: 'Build something awesome' },
  //     ],
  //   },
  // });
  // app4.todos.push({ text: 'New item' });

  // practice 5 - Handing User Input
  // var app5 = new Vue({
  //   el: '#app-5',
  //   data: {
  //     message: 'Hello Vue.js!',
  //   },
  //   methods: {
  //     reverseMessage: function () {
  //       this.message = this.message.split('').reverse().join('');
  //     },
  //   },
  // });
  // var app6 = new Vue({
  //   el: '#app-6',
  //   data: {
  //     message: 'Hello Vue!',
  //   },
  // });

  // practice 6 - Composing with Components
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
  });
  let app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' },
      ],
    },
  });
});
