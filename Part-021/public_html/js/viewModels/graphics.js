define(['ojs/ojcore', 'knockout', 'ojs/ojcomposite',
    'jet-composites/demo-memory-game/loader', 'ojs/ojinputnumber', 'ojs/ojpopup'
], function (oj, ko) {
    function graphicsContentViewModel() {
        var self = this;
        self.attempts = ko.observable(0);
        self.chartImages = [
            {value: 'donut chart', url: 'css/images/componentcategories/donutchart_list.png'},
            {value: 'pie chart', url: 'css/images/componentcategories/piechart_list.png'},
            {value: 'scatter chart', url: 'css/images/componentcategories/scatterchart_list.png'},
            {value: 'bubble chart', url: 'css/images/componentcategories/bubblechart_list.png'},
            {value: 'pyramid chart', url: 'css/images/componentcategories/pyramidchart_list.png'},
            {value: 'funnel chart', url: 'css/images/componentcategories/funnelchart_list.png'},
            {value: 'stock chart', url: 'css/images/componentcategories/stockchart_list.png'},
            {value: 'box plot', url: 'css/images/componentcategories/boxplot_list.png'}
        ];
        self.handleAttached = function (info) {
            var game = document.getElementById('game1');
            // Property change listeners for demo-memory-game's attempts and hasWon properties
            // See the JSDoc Events section for more information on property change events
            game.addEventListener('attempts-changed', updateAttempts);
            game.addEventListener('hasWon-changed', showWinnerPopup);
            function updateAttempts(event) {
                self.attempts(event.detail.value);
            }
            function showWinnerPopup(event) {
                if (event.detail.value)
                    $('#popup1').ojPopup('open', '#game1');
            }
        };
    }
    return graphicsContentViewModel;
});
