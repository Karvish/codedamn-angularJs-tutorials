var app = angular.module('mainApp', []);

app.controller('app', function($scope) {
    var range = new Array(25);
    $scope.myRange = range;
});
