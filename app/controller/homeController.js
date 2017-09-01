angular.module("app")
    .controller("HomeController", ["$scope", "HttpService", "$cookies", "$location", function ($scope, HttpService, $cookies, $location) {
        console.log("in homeController");

        if (!$cookies.get("token")) {
            $location.url("/login");
        }

        $scope.getAllContests = function () {
            console.log("getting all contests...");
            HttpService.get("/api/contests/with-participation")
                .then(function succesCallback(response) {
                    $scope.contests = response.data;
                    console.log($scope.contests);
                })
        };

        $scope.getNewContests = function () {
            console.log("getting new contests...");
            HttpService.get("/api/contests/new")
                .then(function succesCallback(response) {
                    $scope.contests = response.data;
                    console.log($scope.contests);

                })
        };

        $scope.getAllContests();
        $scope.filter = "ALL";

        $scope.goToJoinContest = function (contestId) {
            $location.url("/contest/join/" + contestId);
        };
    }]);