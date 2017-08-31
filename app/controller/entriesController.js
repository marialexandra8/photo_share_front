angular.module("app")
    .controller("EntriesController", ["$scope", "HttpService", "$routeParams", function ($scope, HttpService, $routeParams) {
        var contestId = $routeParams.contestId;
        $scope.uploadFiles = function (files) {
            if (files && files.length) {
                for (var i = 0; i < files.length; i++) {
                    console.log(files[i].name);
                }
                // or send them all together for HTML5 browsers:
            }
        }

    }]);