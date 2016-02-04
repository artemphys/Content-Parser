/**
 * Created by Artem_Timoshenko on 2/2/2016.
 */

var UTubeDL = require('components/YouTubeDownloader/UTubeDl');

(function() {
    "use strict";

    angular.module("parserApp")
        .controller("parserCtrl", parserCtrl);

    function youtubeDL() {
        UTubeDL();
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
