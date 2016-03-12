var app = angular.module('mainApp', []);

app.controller('app', function($scope, date) {

    $scope.message = date.showDate();

});

app.provider('date', function() {
    return {
        $get: function() {
            return {
                showDate: function() {
                    var date = new Date();
                    return date.getHours();
                }
            }
        }
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
