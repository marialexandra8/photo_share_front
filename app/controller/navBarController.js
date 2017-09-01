angular.module("app")
    .controller("NavBarController", ["$scope", "HttpService", "AppConfigService", "$location", "$cookies", "$window", function ($scope, HttpService, AppConfig, $location, $cookies, $window) {


            $scope.getProfile = function () {
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
            };
            $scope.getProfile();


            $scope.uploadLogo = function (logo) {
                var fd = new FormData();
                fd.append("logo", logo);
                HttpService.post("/api/user/logo/upload", fd, "FORM")
                    .then(function succes(response) {
                        console.log("succes upload user logo");
                        $scope.getProfile();
                    }, function error() {
                        console.log("error upload user logo" + status);
                    })
            };
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

            $scope.logout = function () {
                console.log("logout");
                $cookies.remove("token");
                $window.location.href = "#!/login";

            };
        }]
    );