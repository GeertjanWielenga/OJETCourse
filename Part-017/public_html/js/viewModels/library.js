define(['ojs/ojcore', 'knockout', 'ojs/ojmasonrylayout'],
    function (oj, ko) {
        function libraryContentViewModel() {
            var self = this;
            self.chemicals = [
                {name: 'Hydrogen', sizeClass: 'oj-masonrylayout-tile-2x1'},
                {name: 'Helium', sizeClass: 'oj-masonrylayout-tile-1x1'},
                {name: 'Lithium', sizeClass: 'oj-masonrylayout-tile-1x1'},
                {name: 'Beryllium', sizeClass: 'oj-masonrylayout-tile-1x1'},
                {name: 'Boron', sizeClass: 'oj-masonrylayout-tile-1x1'},
                {name: 'Carbon', sizeClass: 'oj-masonrylayout-tile-1x1'},
                {name: 'Nitrogen', sizeClass: 'oj-masonrylayout-tile-1x1'},
                {name: 'Oxygen', sizeClass: 'oj-masonrylayout-tile-1x1'}
            ];
        }
        return new libraryContentViewModel();
    });
