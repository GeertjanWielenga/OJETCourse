define(['ojs/ojcore', 'knockout', 'ojs/ojtable'
], function (oj, ko) {
    function homeContentViewModel() {
        var self = this;
        self.data = ko.observableArray();
    }
    return homeContentViewModel;
});