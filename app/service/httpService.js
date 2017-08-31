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

        this.post = function (url, object, contentType) {
            if (contentType === "JSON") {
                console.log("POST" + url + contentType);
                return $http({
                    method: "POST",
                    url: AppConfigService.config().apiUrl + url,
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": $cookies.get("token")
                    },
                    data: object
                });
            } else if (contentType === "FORM") {
                console.log("POST" + url + contentType);
                return $http({
                    method: "POST",
                    url: AppConfigService.config().apiUrl + url,
                    transformRequest: angular.identity,
                    headers: {
                        "Content-Type": undefined,
                        Authorization: $cookies.get("token")
                    },
                    data: object
                });
            }
        };
    }]);