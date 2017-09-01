angular.module("app")
    .controller("ContestController", ["$scope", "AppConfigService", "$routeParams", "HttpService", "$filter"
        , function ($scope, AppConfigService, $routeParams, HttpService, $filter) {
            var contestId = $routeParams.contestId;
            $scope.baseUrl = AppConfigService.config().apiUrl;
            HttpService.get("/api/contests/" + contestId)
                .then(function succesCallback(response) {
                    $scope.contest = response.data;
                    console.log($scope.contest);
                }, function errorCallback(response) {
                    console.log("Cannot fetch contst" + response.status);
                });

            $scope.getAllEntries = function () {
                HttpService.get("/api/contests/entries/" + contestId)
                    .then(function succesCallback(response) {
                        $scope.entries = response.data;
                        console.log($scope.entries);
                    }, function errorCallback(response) {
                        console.log("error fetching entries" + response.status);
                    });
            };
            $scope.getAllEntries();


            $scope.vote = function (entryId) {
                var idObj = {
                    contestEntryId: entryId
                };

                HttpService.post("/api/review", idObj, "JSON")
                    .then(function succes(response) {
                        //TODO show succes message
                        angular.forEach($scope.entries, function (value, key) {
                            if (value.id === response.data.entryId) {
                                $scope.entries[key].likes = response.data.totalReviewsCount;
                            }
                        });
                    }, function error(response) {

                    })
            }

        }
    ])
;