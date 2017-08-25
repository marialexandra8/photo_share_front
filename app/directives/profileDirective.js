angular.module("app")
    .directive("profile", function () {
        return {
            templateUrl: "view/profileView",
            controller: "ProfileController"
        }

    });