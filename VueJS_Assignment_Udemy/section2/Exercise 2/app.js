new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertButton: function () {
                alert('clicked');
            },
            keydownStoreValue:function (event) {
                this.value = event.target.value;
            }
        }
    });