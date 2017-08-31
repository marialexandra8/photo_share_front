angular.module("app")
    .config(
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix("!");

            $routeProvider
                .when("/", {
                    templateUrl: "view/loginView.html",
                    controller: "LoginController"
                })
                .when("/home", {
                    templateUrl: "view/homeView.html",
                    controller: "HomeController"
                })
                .when("/register", {
                    templateUrl: "view/registerView.html",
                    controller: "RegisterController"
                })
                .when("/login", {
                    templateUrl: "view/loginView.html",
                    controller: "LoginController"
                })
                .when("/create-contest", {
                    templateUrl: "view/createContestView.html",
                    controller: "CreateContestController"
                })
                .when("/contest/join/:contestId", {
                    templateUrl: "view/entriesView.html",
                    controller: "EntriesController"
                })
                .when("/contest/:contestId", {
                    templateUrl: "view/contestView.html",
                    controller: "ContestController"
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

angular.module("app")
    .filter("ApiBaseUrlFilter", ["AppConfigService", function (AppConfigService) {
        return function (imgUrl) {
            return AppConfigService.config().apiUrl + imgUrl;
        }
    }]);