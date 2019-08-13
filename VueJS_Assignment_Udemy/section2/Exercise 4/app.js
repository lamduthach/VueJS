new Vue({
  el: '#exercise',
  data: {
    effectIntervalId: 0,
    effect: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressIntervalId: 0,
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect: function () {
      var vm = this;
      clearInterval(vm.effectIntervalId);
      vm.effectIntervalId = setInterval(function () {
        vm.effect.highlight = !vm.effect.highlight;
        vm.effect.shrink = !vm.effect.shrink;
      }, 1000);
    },
    startProgress: function () {
      var vm = this;
      var width = 0;

      clearInterval(vm.progressIntervalId);
      vm.progressIntervalId = setInterval(function () {
        width = width + 10;
        vm.progressBar.width = width + 'px';
      }, 500);
    }
  }
});