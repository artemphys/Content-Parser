/**
 * Created by Artem_Timoshenko on 2/2/2016.
 */

(function() {
    "use strict";

    angular.module("parserApp")
        .controller("parserCtrl", parserCtrl);

    function youtubeDL() {
    }

    function youTubeInput() {
    }

    function parserCtrl($scope) {
        //$scope.model = model;
        //console.log(model);

        $scope.youtubeDL = youtubeDL;
        $scope.youTubeInput = youTubeInput;
    }
})();
