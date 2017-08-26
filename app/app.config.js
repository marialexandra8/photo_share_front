angular.module("app")
    .config(
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix("!");

            $routeProvider
                .when("/home", {
                    templateUrl: "view/homeView.html",
                    controller: "HomeController"
                })
                .when ("/register",{
                    templateUrl: "view/registerView.html",
                    controller: "RegisterController"
                })
                .when("/login", {
                    templateUrl: "view/loginView.html",
                    controller: "LoginController"
                });
        });

angular.module("app")
    .service("AppConfigService", function () {
        this.config = function () {
            var configFactory = {
                "apiUrl": window.__env.apiUrl
            };
            return configFactory;
        };
    });

