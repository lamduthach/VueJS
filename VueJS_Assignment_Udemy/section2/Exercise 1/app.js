new Vue({
    el: "#exercise",
    data: {
        name: 'Lam Du Thach',
        age: null
    },
    created: function () {
        this.age = this.getAge();
    },
    methods: {
        getAge: function () {
            return new Date().getFullYear() - 1993;
        },
        printAgeByCount: function (count) {
            let html = '';
            for (let i = 0; i < count; i++) {
                html += '<span>' + this.age + '</span><br>';
            }
            return html;
        },
        randomFloat: function (min, max) {
            return Math.floor(Math.random() * max) + min;
        },
        bindImage: function () {
            return 'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/27752335_183388762274056_8444825533827249221_n.jpg?_nc_cat=106&_nc_oc=AQnudmPQDmjmr6RmtZF4zEUy-VZ80V9iAUK6Jm6Jrd_xh1GbFbVCwPaszCr8DYuUTD4&_nc_ht=scontent-nrt1-1.xx&oh=d957639322052691011a206b3113f9ec&oe=5DA82563';
        }
    }
});