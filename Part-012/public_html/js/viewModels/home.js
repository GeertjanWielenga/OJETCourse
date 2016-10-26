define(['ojs/ojcore', 'knockout','ojs/ojpictochart'
], function (oj, ko) {
    function homeContentViewModel() {
        var self = this;
        self.pictoChartItems = ko.observableArray([
            {name: 'Have Sleep Problems', shape: 'human', count: 7, color: '#ed6647'},
            {name: 'Sleep Well', shape: 'human', count: 3}
        ]);
    }
    return homeContentViewModel;
});