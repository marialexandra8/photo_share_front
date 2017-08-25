angular.module("app")
    .controller("ProfileController", ["$scope", "HttpService", function ($scope, HttpService) {
        $scope.name = "Maria-Alexandra";
        $scope.ranking = "5";
    }]);