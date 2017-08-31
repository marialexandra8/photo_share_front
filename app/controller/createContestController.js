angular.module("app")
    .controller("CreateContestController", ["$scope", "HttpService", "$filter", "Upload", "$timeout",
        function ($scope, HttpService, $filter, Upload, $timeout) {
            console.log($scope.uploader);
            $scope.createContest = function (file) {
                $scope.contest.deadline = $filter('date')($scope.contest.deadline, "dd-MM-yyyy");

                HttpService.post("/api/contest", $scope.contest, "JSON")
                    .then(function succes(response) {
                        console.log(response.data);

                        var fd = new FormData();
                        fd.append("contest_id", response.data.id);
                        fd.append("logo", file);

                        HttpService.post("/api/contest/logo/upload", fd, "FORM")
                            .then(function succes(response) {
                                    console.log("succes");
                                }, function fail(response) {
                                    console.log("fail" + status);
                                }
                            );

                    }, function fail(response) {
                        console.log(response.status);
                    })
            };
        }
    ]);


