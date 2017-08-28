angular.module("app")
    .controller("ContestController", ["$scope", "AppConfigService", "$routeParams", "HttpService", function ($scope, AppConfigService, $routeParams, HttpService) {
        var contestId = $routeParams.contestId;

        HttpService.get("/api/contests/entries/" + contestId)
            .then(function succesCallback(response) {
                $scope.entries = response.data;
                console.log($scope.entries);
            }, function errorCallback(response) {
                console.log("error fetching entries" + response.status);
            });

    }]);