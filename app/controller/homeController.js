angular.module("app")
    .controller("HomeController", ["$scope", "HttpService", function ($scope, HttpService) {
        console.log("in homeController");
        // $scope.ceva = "salut";
        // console.log($scope.ceva);
        // $scope.click = function () {
        //     var obj = {
        //         email: "ceva in json",
        //         password: "atlceva"
        //     };
        //     console.log(obj.test);
        //     HttpService.post("/api/authenticate", obj)
        // };

        HttpService.get("/api/contests")
            .then(function succesCallback(response) {
                $scope.contests = response.data;
            })
    }]);