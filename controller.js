var app = angular.module('mainApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        template: 'Welcome user!',
    })
    .when('/anotherPage', {
        template: 'Welcome user!',
    }).
    otherwise({
        template: 'Error 404: NOT FOUND!',
    });
}]);
