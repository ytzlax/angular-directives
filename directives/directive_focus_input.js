//***********************************//
//this directive focus the cursor in input
//***********************************//
app.directive('focusInput', function ($timeout) {
    return {
        restrict: 'A',

       

        link: function (scope, element,attrs) {

            scope.$watch(attrs.focusInput, function (value) {

                if (value) {

                    $timeout(function () {

                        element[0].focus();
                        element[0].select();
                    });
                }
            });
        }

    }
});
   
