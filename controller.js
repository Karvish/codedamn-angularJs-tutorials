var app = angular.module('mainApp', []);

app.service('fromService', function() {
    this.message = "This is from service";
});

app.factory('fromFactory', function() {
    return {
        message: "This is from factory",
    }
});

app.provider('fromProvider', function() {
    var m1 = "This is from provider";
    return {
        $get: function() {
            return {
                message: m1,
            };
        },
        setAName: function(name) {
            m1 += ' ' + name;
        }
    };
});

app.config(function(fromProviderProvider) {
    fromProviderProvider.setAName('Guillaume');
});

app.controller('app', function($scope, fromService, fromFactory, fromProvider) {
    $scope.greetMessages = [fromService.message, fromFactory.message, fromProvider.message];
});
