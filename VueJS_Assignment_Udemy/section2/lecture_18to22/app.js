new Vue({
    el: "#app",
    data: {
        counter: 0,
        x: null,
        y: null
    },
    methods: {
        increase: function (step, event) {
            console.log(event);
            this.counter += step;
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function (event) {
            alert(event.target.value);
        }
    }
});