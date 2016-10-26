define(['ojs/ojcore', 'knockout', 'ojs/ojgauge'
], function (oj, ko) {
    function peopleContentViewModel() {
        var self = this;
        self.value10 = ko.observable(80);
    }
    return peopleContentViewModel;
});