var app = angular.module('mainApp', []);

app.controller('app', function($scope, date) {

    $scope.message = date.showDate();

});

app.provider('date', function() {
    var greet;
    var date = new Date();
    return {
        setGreeting: function(value) {
            greet = value;
        },
        getTime: function() {
            return date.getHours();
        },
        $get: function() {
            return {
                showDate: function() {
                    return greet + " It's " + date.getHours();
                }
            }
        }
    }
});

app.config(function(dateProvider) {
    var hour = dateProvider.getTime();
    if(hour > 23 && hour <= 11) {
        dateProvider.setGreeting("Good morning!");
    }
    else if (hour > 11 && hour <= 16) {
        dateProvider.setGreeting("Good afternoon!");
    }
    else if (hour > 16 && hour <= 20){
        dateProvider.setGreeting("Good evening!");
    }
    else {
        dateProvider.setGreeting("Good night!");
    }
});

// app.service('randomService', function() {
//
//     this.generate = function() {
//         return Math.floor(Math.random()*10);
//     }
//
// });
//
// app.factory('randomFactory', function() {
//
//     return {
//         generate: function() {
//             return Math.floor(Math.random()*10);
//         },
//     };
//
// });
