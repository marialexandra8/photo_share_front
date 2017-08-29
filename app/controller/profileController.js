angular.module("app")
    .controller("ProfileController", ["$scope", "HttpService", "AppConfigService", "$location", function ($scope, HttpService, ApiConfig, $location) {
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
                    $scope.userLogoUrl = ApiConfig.config().apiUrl + user.logoUrl;
                    console.log($scope.userLogoUrl);
                }
            }, function errorCallback(response) {
                //TODO error pop-up
            });

        HttpService.get("/api/contests/mine/active")
            .then(function succesCallback(response) {
                $scope.contests = response.data;
                angular.forEach($scope.contests, function (value, key) {
                    $scope.contests[key].logoPath = ApiConfig.config().apiUrl + value.logoPath;
                    console.log($scope.contests);
                });
            }, function errorCallback(response) {
                console.log("Error in fetching contests for user" + response.status);
            });

        $scope.goToContestPage = function (id) {
            $location.url("/contest/" + id);
        };
    }]);