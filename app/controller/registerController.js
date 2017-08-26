angular.module("app")
    .controller("RegisterController", ["$scope", "$filter", "$window", "HttpService", function ($scope, $filter, $window, HttpService) {
        $scope.user = {};
        $scope.register = function () {
            var dateString = $filter('date')($scope.user.birthday, "dd-MM-yyyy");
            $scope.user.birthday = new Date(dateString);
            console.log($scope.user.birthday);
            HttpService.post("/api/register", $scope.user)
                .then(function succesCallback(response) {
                    console.log("succes" + response.data.email);
                    $window.location.href = "#!/login";
                }, function errorCallback(response) {
                    console.log("error" + response.status);
                });
        };
    }]);