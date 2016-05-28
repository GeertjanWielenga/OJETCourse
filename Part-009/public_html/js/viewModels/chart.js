define(['ojs/ojcore', 'knockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function chartContentViewModel() {
        var self = this;
        /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');

        /* chart data */
        var areaSeries = [{name: "Series 1", items: [74, 42, 70, 46]},
            {name: "Series 2", items: [50, 58, 46, 54]},
            {name: "Series 3", items: [34, 22, 30, 32]},
            {name: "Series 4", items: [18, 6, 14, 22]}];

        var areaGroups = ["Group A", "Group B", "Group C", "Group D"];


        this.areaSeriesValue = ko.observableArray(areaSeries);
        this.areaGroupsValue = ko.observableArray(areaGroups);

        /* toggle buttons*/
        self.stackOptions = [
            {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-area-vert'},
            {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-area-stack'}
        ];
        self.orientationOptions = [
            {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-area-vert'},
            {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-area-horiz'}
        ];
    }

    return chartContentViewModel;
});
