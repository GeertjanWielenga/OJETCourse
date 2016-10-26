define(['ojs/ojcore', 'knockout', 'jqueryui-amd/widgets/datepicker'],
  function(oj, ko) {
    function mainContentViewModel() {
        var self = this;
        self.selectedDate = ko.observable();
        self.dateSelector = function (dateText, inst) {
            self.selectedDate(dateText);
        };
    }
   return new mainContentViewModel();
});
