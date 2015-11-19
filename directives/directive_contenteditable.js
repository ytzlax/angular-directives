app.directive('dircontenteditable', function () {
    return {
        restrict: 'A', // only activate on element attribute
        require: '?ngModel', // get a hold of NgModelController
        scope: {
            dircontenteditable: '='
        },
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return; // do nothing if no ng-model

            // Specify how UI should be updated
            ngModel.$render = function () {
                element.html(ngModel.$viewValue || '');

            };

            element.on('mousedown', function () {
                if (scope.dircontenteditable == true) {
                    element.attr('contenteditable', 'true');
                }
                else {
                    element.attr('contenteditable', 'false');
                }
            });

            //when press on close form bind all the change to the ng-model
            $("#leadpages-close-button").on('mousedown', function (e) {
                scope.$apply(readViewText);
                element.attr('contenteditable', 'false');
            });

       



            // Write data to the model
            function readViewText() {
                var html = element.html();

                // When we clear the content editable the browser leaves a <br> behind
                // If strip-br attribute is provided then we strip this out
                if (attrs.stripBr && html == '<br>') {
                    html = '';
                }
                ngModel.$setViewValue(html);

            }
        }
    };
});