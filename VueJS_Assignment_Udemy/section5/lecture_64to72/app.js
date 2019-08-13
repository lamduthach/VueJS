var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

Vue.component('hello', {
  template: '<h1>Hello component!</h1>'
});

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
      console.log(this.$refs.myButton);
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

vm1.newProp = 'New!';
console.log(vm1);

vm1.$refs.heading.innerText = 'Something else';

setTimeout(function () {
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange: function () {
      vm1.title = 'Changed!';
    }
  }
});

var vm3 = new Vue({
  template: '<h1>Hello vm3!</h1>'
});

vm3.$mount('');
document.getElementById('app3').appendChild(vm3.$el);

var vm4 = new Vue({
  el: '.hello',
  template: '<h1>Hello vm4!</h1>'
});