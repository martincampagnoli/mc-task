'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mcTaskApp'));

  var MainCtrl, mockMainService , scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mockMainService = jasmine.createSpy('MainService');
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      MainService: mockMainService
    });
  }));

  it('should load ads properly', function () {
    var response = {
      data: {
        data: ["test add"]
      }
    };
    mockMainService.getAds = jasmine.createSpy('getAds').and.returnValue({ then: function (callback) {
       callback(response);
     } });
    scope.getAds();
    scope.$digest;
    expect(scope.ads.length).toBe(response.data.data.length);
  });
});
