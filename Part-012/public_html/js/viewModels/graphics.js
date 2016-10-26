define(['text!../socialNetworks.json', 'ojs/ojtagcloud'],
    function (file) {
        function mainContentViewModel() {
            var self = this;
            self.tags = [];
            var content = JSON.parse(file);
            for (var i = 0; i < content.length; i++) {
                var network = content[i];
                self.tags.push({
                    id: network["id"],
                    label: network["id"],
                    value: network["total"],
                    shortDesc: network["id"] + ': ' + network["total"] + '%'
                });
            }
        }
        return new mainContentViewModel();
    });


