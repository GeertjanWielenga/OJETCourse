define(['ojs/ojcore', 'knockout', 'ojs/ojdatetimepicker'],
    function (oj, ko) {
        function mainContentViewModel() {
            var self = this;
            self.date = ko.observable();
        }
        return new mainContentViewModel();
    });
