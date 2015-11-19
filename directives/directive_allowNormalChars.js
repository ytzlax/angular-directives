app.directive('allowNormalChars', [allowPatternDirective]);

//***********************************//
//allow only the next chars:
//[A-Z] | [a-z] |[0-9]| space
//***********************************//

function allowPatternDirective() {
    return {
        restrict: "A",
        compile: function (tElement, tAttrs) {
            return function (scope, element, attrs) {
                // I handle key events
                element.bind("keypress", function (event) {
                    var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
                    var keyCodeChar = String.fromCharCode(keyCode); // I determine the char from the keyCode.

                    if ((keyCode < 32) || ((keyCode > 32) && (keyCode < 48)) || ((keyCode > 57) && (keyCode < 65)) || ((keyCode > 90) && (keyCode < 97)) || (keyCode > 122)) {
                        event.preventDefault();
                        return false;
                    }
                   

                });
            };
        }
    };
}