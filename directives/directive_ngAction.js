//***********************************//
//this directive is ng-action
//***********************************//
app.directive('ngAction', function () {
    return {
        restrict: 'A',

        link: function (scope, element, attrs) {
            scope.$watch(attrs.ngAction, function (action_path) {
                element.attr('action', action_path)
            });


        }
    }
});

