angular.module("app")
    .service("HttpService", ["AppConfigService", "$http", "$cookies", function (AppConfigService, $http, $cookies) {
        console.log("in httpService");
        console.log(AppConfigService.config().apiUrl);
        console.log($http);

        this.get = function (url) {
            console.log("GET " + url);
            return $http({
                method: "GET",
                url: AppConfigService.config().apiUrl + url,
                headers: {
                    "Authorization": $cookies.get("token")
                }
            });
        };

        this.post = function (url, object) {
            console.log("POST" + url);
            return $http({
                method: "POST",
                url: AppConfigService.config().apiUrl + url,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": $cookies.get("token")
                },
                data: object
            });
        };
    }]);