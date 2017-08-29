angular.module("app")
    .controller("ContestController", ["$scope", "AppConfigService", "$routeParams", "HttpService", function ($scope, AppConfigService, $routeParams, HttpService) {
        var contestId = $routeParams.contestId;
        $scope.baseUrl = AppConfigService.config().apiUrl;
        HttpService.get("/api/contests/" + contestId)
            .then(function succesCallback(response) {
                $scope.contest = response.data;
                console.log($scope.contest);
            }, function errorCallback(response) {
                console.log("Cannot fetch contst" + response.status);
            });

        HttpService.get("/api/contests/entries/" + contestId)
            .then(function succesCallback(response) {
                $scope.entries = response.data;
                console.log($scope.entries);
            }, function errorCallback(response) {
                console.log("error fetching entries" + response.status);
            });

    }
    ])
;