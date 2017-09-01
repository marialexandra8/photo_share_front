angular.module("app")
    .controller("LoginController", ["$scope", "HttpService", "$window", "$cookies", "$location",
        function ($scope, HttpService, $window, $cookies, $location) {
        if ($cookies.get("token")) {
            console.log("redirect to home...");
            $location.url("/home")
        } else {
            console.log("missing token");
        }

        $scope.login = function () {
            HttpService.post("/api/authenticate", $scope.user, "JSON")
                .then(function succesCallback(response) {
                    $cookies.put("token", response.data.token);
                    console.log("succes");
                    $window.location.href = "#!/home";
                }, function errorCallback(response) {
                    console.log("error");
                });
        };
    }]);