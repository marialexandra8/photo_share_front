angular.module("app")
    .controller('UploadController', function($scope, fileReader) {
        $scope.uploader = new FileUploader();

});