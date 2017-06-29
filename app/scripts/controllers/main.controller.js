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

    $scope.getAds = function(){
    				  //UIHelper.blockUI();
    					MainService.getAds().then(function(response){
                  console.dir(response.data.data);
    					       //UIHelper.unblockUI();
    						},
    						function(error){
                    //UIHelper.unblockUI();
    						}
    					);
    			};

    $scope.getAds();
  });
