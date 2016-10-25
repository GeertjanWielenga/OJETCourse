define(['ojs/ojcore', 'knockout', 'MovieFactory', 
    'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojcollectiontabledatasource'],
function (oj, ko, MovieFactory) {
    var viewModel = {
        movieCollection: MovieFactory.createMovieCollection(),
        dataSource: ko.observable(),
        // Called each time the view is shown to the user:
        initialize: function () {
            this.dataSource(new oj.CollectionTableDataSource(this.movieCollection));
            this.movieCollection.fetch();
        }
    };
    return viewModel;
});