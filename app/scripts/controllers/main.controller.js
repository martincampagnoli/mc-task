/*globals UIHelper*/
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
    $scope.loaded = false;
    $scope.getAds = function(){
    				  UIHelper.blockUI();
    					MainService.getAds().then(function(response){
                  $scope.ads = response.data.data;
                  $scope.loaded = true;
    					    UIHelper.unblockUI();
    						},
    						function(error){
                  console.dir(error);
                  $scope.loaded = true;
                  UIHelper.unblockUI();
    						}
    					);
    			};

    $scope.getAds();
  });
