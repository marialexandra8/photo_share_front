angular.module("app")
    .controller("EntriesController", ["$scope", "HttpService", "$routeParams", function ($scope, HttpService, $routeParams) {
        var contestId = $routeParams.contestId;
        console.log(contestId);


    }]);