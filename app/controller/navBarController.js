angular.module("app")
    .controller("NavBarController", ["$scope", "HttpService", "AppConfigService", "$location", function ($scope, HttpService, AppConfig, $location) {
            HttpService.get("/api/profile")
                .then(function succesCallback(response) {
                    var user = response.data;
                    $scope.name = user.name;
                    console.log(user.logoUrl);
                    if (user.logoUrl === "") {
                        if (user.gender === "MALE") {
                            $scope.userLogoUrl = "view/assets/boy.png";
                        } else {
                            $scope.userLogoUrl = "view/assets/girl.png";
                        }
                    } else {
                        $scope.userLogoUrl = AppConfig.config().apiUrl + user.logoUrl;
                        console.log($scope.userLogoUrl);
                    }
                }, function errorCallback(response) {
                    //TODO error pop-up
                });

            HttpService.get("/api/contests/mine/active")
                .then(function succesCallback(response) {
                    $scope.myContests = response.data;
                    console.log(response.data);
                    angular.forEach($scope.myContests, function (value, key) {
                        console.log("ok");
                        $scope.myContests[key].logoPath = AppConfig.config().apiUrl + value.logoPath;
                        console.log($scope.myContests[key].logoPath);
                    });
                }, function errorCallback(response) {
                    console.log("Error in fetching contests for user" + response.status);
                });

            $scope.goToContestPage = function (id) {
                $location.url("/contest/" + id);
            };
        }]
    );