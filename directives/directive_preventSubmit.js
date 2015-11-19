app.directive('preventSubmit', function () {
    return {
        restrict: 'A',
        scope: {
            preventSubmit: '='
        },
        link: function (scope, element) {
            element.bind('submit', function (e) {
                if (scope.preventSubmit) {
                    e.preventDefault();
                }
            });
        }
    }
});