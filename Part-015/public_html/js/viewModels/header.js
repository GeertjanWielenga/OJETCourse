define(['ojs/ojcore', 'knockout', 'ojs/ojnavigationlist', 'ojs/ojdatacollection-common'
], function (oj, ko) {
    function headerContentViewModel() {
        var self = this;
        var appNavData = [
            {name: 'Home', id: 'home'},
            {name: 'People', id: 'people'}
        ];
        self.dataSource =
                new oj.ArrayTableDataSource(
                        appNavData,
                        {idAttribute: 'id'});

    }
    return headerContentViewModel;
});
