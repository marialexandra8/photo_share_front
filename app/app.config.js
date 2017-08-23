angular.module("app")
    .config(
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix("!");

            $routeProvider
                .when("/home", {
                    templateUrl: "view/homeView.html",
                    controller: "HomeController"
                })
                .when("/login", {
                    templateUrl: "view/loginView.html",
                    controller: "LoginController"
                });
        });