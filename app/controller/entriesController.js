angular.module("app")
    .controller("EntriesController", ["$scope", "HttpService", "$routeParams", function ($scope, HttpService, $routeParams) {
        var contestId = $routeParams.contestId;
        console.log(contestId);
        $scope.join = function () {
            var fd = new FormData();
            fd.append("firstImage", $scope.firstPicFile);
            fd.append("secondImage", $scope.secondPicFile);
            fd.append("contest_id", contestId);

            if (contestId) {
                HttpService.post("/api/contest/entries/upload", fd, "FORM")
                    .then(function succes() {
                        console.log("Succes");
                    }, function fail(response) {
                        console.log("Failed " + response.status);
                    })

            }
        }

    }]);