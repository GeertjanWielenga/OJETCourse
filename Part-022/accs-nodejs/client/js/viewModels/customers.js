define(['ojs/ojcore', 'knockout', 'ojs/ojtable', 'ojs/ojdatacollection-common'
], function (oj, ko) {
    function GeneratedContentViewModel() {
        var self = this;
        self.data = ko.observableArray();
        $.getJSON("/incidents?technician=charlie").
                then(function (json) {
                    var metrics = json.result;
                    var location = json.result.location;
                    $.each(metrics, function () {
                        self.data.push({
                            problem: this.problem,
                            description: this.description,
                            status: this.status,
                            formattedAddress: this.location.formattedAddress
                        });
                    });
                });
        self.datasource = new oj.ArrayTableDataSource(
                self.data,
                {idAttribute: 'problem'}
        );

    }
    return GeneratedContentViewModel;
});