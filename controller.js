var app = angular.module('mainApp', []);

app.controller('app', function($scope, random) {
    $scope.generateRandom = function() {
        $scope.randomNumber = random.generate();
    }
});
