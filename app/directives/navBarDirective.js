angular.module("app")
    .directive("navbar", function () {
        return {
            templateUrl: "view/navBarView.html",
            controller: "NavBarController"
        }
    });