angular.module("app")
    .controller("RegisterController", ["$scope", "$filter", "$window", "HttpService", function ($scope, $filter, $window, HttpService) {

        $scope.register = function () {
            console.log($scope.user);
            var dateString = $filter('date')($scope.user.birthday, "dd-MM-yyyy");
            $scope.user.birthday = dateString;
            console.log($scope.user.birthday);

            HttpService.post("/api/register", $scope.user, "JSON")
                .then(function succesCallback(response) {
                    console.log("succes" + response.data.email);
                    $window.location.href = "#!/login";
                }, function errorCallback(response) {
                    console.log("error" + response.status);
                });
        };
    }]);