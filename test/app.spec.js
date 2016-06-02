require('angular')
describe('app', function() {
    beforeEach(module('app'));

    fit('helloworld', function () {
       expect(3).toBe(3); 
    });

    describe('with $compile', function() {
        var element;
        var scope;

        beforeEach(inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            element = angular.element('<hello-world name="{{outside}}"></hello-world>');
            element = $compile(element)(scope);
            scope.outside = 'Test';
            scope.$apply();
        }));

        describe('Controller: helloWorld', function() {
            var controller;
            beforeEach(function() {
                controller = element.controller('helloWorld');
            });

            it('should expose my title', function() {
                expect(controller.reverse('iets')).toBe('stei');
            });
        });
    });
});