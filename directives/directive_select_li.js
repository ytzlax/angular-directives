app.directive('selectLi', function () {
    return {
        restrict: 'A',
        
        link: function (scope,element, attrs) {
          
            element.on('mousedown', function () {
               
                    $(element).siblings().removeClass('select');
                    element.addClass('select');
               
                   
                
            });

        }

    }
});