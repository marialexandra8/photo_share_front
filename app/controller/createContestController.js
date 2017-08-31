angular.module("app")
    .controller("CreateContestController", ["$scope", "HttpService", "$filter", "Upload", "$timeout",
        function ($scope, HttpService, $filter, Upload, $timeout) {
            console.log($scope.uploader);
            var contestId = -1;
            $scope.contestUploadedOk = false;
            $scope.createContest = function () {
                $scope.contest.deadline = $filter('date')($scope.contest.deadline, "dd-MM-yyyy");

                HttpService.post("/api/contest", $scope.contest, "JSON")
                    .then(function succes(response) {
                        console.log(response.data);
                        $scope.contestUploadedOk = '0';
                        $scope.uploader = new FileUploader({
                            url: $filter("ApiBaseUrlFilter", "/api/contest/logo/upload"),
                            formData: [{contest_id: response.data.id}]
                        });

                    }, function fail(response) {
                        console.log(response.status);
                    })
            };

            $scope.uploadPic = function (file) {
                console.log("in uploadPic");
                var fd = new FormData();
                fd.append("contest_id", contestId);
                fd.append("logo", file);

                HttpService.post("/api/contest/logo/upload", fd, "FORM")
                    .then(function succes(response) {
                            console.log("succes");
                        }, function fail(response) {
                            console.log("fail" + status);
                        }
                    );
            }
// file.upload = Upload.upload({
//     url: $filter("ApiBaseUrlFilter")("/api/contest/logo/upload"),
//     data: {contest_id: contestId, images: file},
//     header : {}
// });
//
// file.upload.then(function (response) {
//     $timeout(function () {
//         file.result = response.data;
//     });
// }, function (response) {
//     if (response.status > 0)
//         $scope.errorMsg = response.status + ': ' + response.data;
// }, function (evt) {
//     // Math.min is to fix IE which reports 200% sometimes
//     file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
// });

        }
    ])
;


