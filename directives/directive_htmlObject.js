app.directive('htmlObject', function ($compile) {
    return {
        scope: {
            model: '='
        },
        restrict: 'E',
        replace: 'true',

        
        compile: function (element, attrs) {
            var htmlText = ''
            if (attrs.tagName == "input")
                htmlText = '<' + attrs.tagName + ' type="' + attrs.type + '" name="' + attrs.name + " " + '" name="' + attrs.placeholder + '" ng-model="' + attrs.model + '"/>'
            if (attrs.tagName == "textarea")
                htmlText = '<' + attrs.tagName + '" placeholder="' + attrs.placeholder + '"><' + attrs.tagName + '>'
          
            element.replaceWith(htmlText);
        }


    };
});