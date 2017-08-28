angular.module("app")
    .controller("HomeController", ["$scope", "HttpService", "$cookies", "$location", function ($scope, HttpService, $cookies, $location) {
        console.log("in homeController");

        if (! $cookies.get("token")) {
            $location.url("/login");
        }

        HttpService.get("/api/contests")
            .then(function succesCallback(response) {
                $scope.contests = response.data;
            })
    }]);