angular.module("app")
    .controller("ProfileController", ["$scope", "HttpService", "AppConfigService", function ($scope, HttpService, ApiConfig) {
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
    }]);