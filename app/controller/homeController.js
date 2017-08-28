angular.module("app")
    .controller("HomeController", ["$scope", "HttpService", function ($scope, HttpService) {
        console.log("in homeController");

        HttpService.get("/api/contests")
            .then(function succesCallback(response) {
                $scope.contests = response.data;
            })
    }]);