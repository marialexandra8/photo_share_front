angular.module("app")
    .config(function ($locationProvider, $rootProvider) {
        $locationProvider.hashPrefix("#!");

        $rootProvider
            .when("/home", {
                templateUrl: "view/homeView.html",
                controller: "HomeController"
            })
            .otherwise({
                templateUrl: "view/loginView.html",
                controller: "LoginController"
            });
    });