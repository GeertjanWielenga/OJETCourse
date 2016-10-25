define(['ojs/ojcore', 'knockout', 'ojs/ojtable'
], function (oj, ko) {
    function homeContentViewModel() {
        var self = this;
        self.data = ko.observableArray();
        $.getJSON("http://movieapp-sitepointdemos.rhcloud.com/api/movies").
                then(function (movies) {
                    $.each(movies, function () {
                        self.data.push({
                            title: this.title,
                            director: this.director,
                            releaseYear: this.releaseYear,
                            genre: this.genre
                        });
                    });
                });
        self.dataSource = new oj.ArrayTableDataSource(
                self.data, 
                {idAttribute: 'title'}
        );
    }
    return homeContentViewModel;
});