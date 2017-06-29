
'use strict';

/**
 * @ngdoc function
 * @name mcTaskApp.service:MainService
 * @description
 * # MainService
 * Service of the mcTaskApp
 */
angular.module('mcTaskApp')
  .service('MainService', ['$q', '$http', '$sce',
    function ($q, $http, $sce) {
        return {
    			getAds: function () {
    					var url = "https://api.mcmakler.de/v1/advertisements",
    					deferred = $q.defer();

    					$http.get(url)
    						 .then(function (data) { deferred.resolve(data); },
    						 function (data, status) { deferred.reject({ data: data, status: status }); });
    					return deferred.promise;
    			},
        };
    }
]);
