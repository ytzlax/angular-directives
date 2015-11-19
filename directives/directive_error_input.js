

app.directive('errorInput', function () {
    return {
        restrict: 'A', // only activate on element attribute
            
        link: function (scope, element, attrs) {
            scope.$watch(attrs.errorInput, function (newVal) {
                if (newVal) {
                    element.css('border-style', 'double');
                    element.css('border-color', 'red');
                    element.css('border-width', '3px');
                }
                else {
                    element.css('border-color', 'white');
                    element.css('border-width', '0px');
                   
                }
            });
           
               

        }




    }


});