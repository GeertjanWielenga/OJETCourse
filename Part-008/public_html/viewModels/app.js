define(['ojs/ojcore', 'knockout'
], function (oj, ko) {
    function homeContentViewModel() {
        var self = this;
        self.firstName = ko.observable('Bert');
        this.firstNameCaps = ko.pureComputed(function () {
            return this.firstName().toUpperCase();
        }, this);
    }
    return homeContentViewModel;
});
