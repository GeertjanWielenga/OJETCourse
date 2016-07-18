define(['ojs/ojcore', 'knockout', 'ojs/ojdatetimepicker'],
    function (oj, ko) {
        function peopleContentViewModel() {
            var self = this;
            self.date = ko.observable();
            self.todayIsoDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
            self.milleniumStartIsoDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2000, 00, 01)));
        }
        return new peopleContentViewModel();
    });
