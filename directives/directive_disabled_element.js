//***********************************//
//this directive is ng-disabled directive for all elements and not only for button
//***********************************//

app.directive('disabledElement', function () {
    return {
       restrict: 'A', 
        scope: {
            disabled: '@'

        },
        link: function (scope, element, attrs) {
           
            scope.$parent.$watch(attrs.disabledElement, function (newVal) {

                if (newVal)
                    $(element).css('pointerEvents', 'none');
                                   

                else
                    $(element).css('pointerEvents', 'all');
                    
                 
            });

        }

    }
});