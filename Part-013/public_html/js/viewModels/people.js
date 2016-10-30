define(['ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojtree'
], function (oj, ko) {
    function homeContentViewModel() {
        var self = this;
        self.datasource = [
            {"title": "Home", "attr": {"id": "home"}, 
                "children": [
                    {"title": "Overview", "attr": {"id": "overview"}},
                    {"title": "Section1", "attr": {"id": "section1"}},
                    {"title": "Section2", "attr": {"id": "section2"}}
                ]
            },
            {"title": "News", "attr": {"id": "news"}},
            {"title": 'Contact', "attr": {"id": "contact"}},
            {"title": 'About', "attr": {"id": "about"}}
        ];
        self.currentRowListener = function (event, ui) {
            if (ui.func === 'select') {
                var selectedNode = _arrayToStr(ui.item);
                $('#selectedNode').text(selectedNode);
            }
        };
    }
    function _arrayToStr(arr) {
        var s = "";
        $.each(arr, function (i, val) {
            if (i) {
                s += ", ";
            }
            s += $(arr[i]).attr("id");
        });
        return s;
    };
    return homeContentViewModel;
});