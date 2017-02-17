'use strict';

describe('Controller: BlogMainCtrl', function () {

  // load the controller's module
  beforeEach(module('fontanasApp'));

  var BlogMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogMainCtrl = $controller('BlogMainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BlogMainCtrl.awesomeThings.length).toBe(3);
  });
});
