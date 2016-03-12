var app = angular.module('mainApp', []);

app.controller('app', function($scope, randomService, randomFactory) {

    $scope.generateRandom = function() {
        $scope.serviceNum = randomService.generate();
        $scope.factoryNum = randomFactory.generate();
    }

});

app.service('randomService', function() {

    this.generate = function() {
        return Math.floor(Math.random()*10);
    }

});

app.factory('randomFactory', function() {

    return {
        generate: function() {
            return Math.floor(Math.random()*10);
        },
    };

});
