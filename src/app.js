require('angular');

angular.module('app', [])
    .component('helloWorld', {
        template: '<span>Hey what\'s up {{$ctrl.name}}?</span> <span>{{$ctrl.reverse($ctrl.name)}}',
        bindings: { name: '@' },
        controller: function() {
            this.reverse = function (toReverse) {
                return toReverse.split('').reverse().join('');
            };
        }
    });