define(['text!../seriesOneData.json', 'knockout', 'ojs/ojtimeline'],
    function (file, ko) {
        function mainContentViewModel() {
            var self = this;
            self.selected = ko.observable("Nothing is selected.");
            var content = JSON.parse(file);
            self.series = ko.observableArray(content)();
            self.optionChangeListener = function (event, data) {
                for (var i = 0; i < content.length; i++) {
                    if (content[i].id == data['value']) {
                        self.selected(content[i].title);
                    }
                }
            };
        }
        return new mainContentViewModel();
    });
