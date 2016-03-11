var app = angular.module('mainApp', []);

app.controller('people', function($scope, $http) {
    $http.get('/database.JSON')
    .success(function(response) {
        $scope.people = response.records;
    });
});
