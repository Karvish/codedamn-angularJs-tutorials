var app = angular.module('mainApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'login.html',
    })
    .when('/dashboard', {
        resolve: {
            'check': function($location, $rootScope) {
                if (!$rootScope.loggedIn) {
                    $location.path('/');
                }
            },
        },
        templateUrl: 'dashboard.html',
    })
    .otherwise({
        templateUrl: 'notFound.html',
    });
}]);

app.controller('loginCtrl', function($scope, $location, $rootScope) {
    $scope.submit = function() {
        // $rootScope: $scope variables accessible to all controllers

        if ($scope.username === 'admin' && $scope.password === 'admin') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        }
    }
});
