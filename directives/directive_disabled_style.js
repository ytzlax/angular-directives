
//***********************************//
//get name of class and add this class when the button disabled
//***********************************//

app.directive('disabledStyle', function () {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngDisabled',
        scope: {
            disabled: '@',
           
        },
        link: function (scope, element, attrs) {
            scope.$parent.$watch(attrs.ngDisabled, function (newVal) {

                if (newVal)
                    element.addClass(attrs.disabledStyle);

                else
                    element.removeClass(attrs.disabledStyle)
            });
        }




    }


});