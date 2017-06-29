'use strict';

/**
 * @ngdoc function
 * @name mcTaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mcTaskApp
 */
angular.module('mcTaskApp')
  .controller('MainCtrl', function ($scope, MainService) {
    $scope.ads = [];
    $scope.quantity = 10;
    $scope.getAds = function(){
    				  //UIHelper.blockUI();
    					MainService.getAds().then(function(response){
                  console.dir(response.data.data);
                  $scope.ads = response.data.data;
    					       //UIHelper.unblockUI();
    						},
    						function(error){
                    //UIHelper.unblockUI();
    						}
    					);
    			};

    $scope.getAds();
  });
