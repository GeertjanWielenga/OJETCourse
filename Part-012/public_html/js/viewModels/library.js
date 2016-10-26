define(['text!../uk_epsg27700.json',
        'proj4',
        'ojs/ojcore',
        'knockout',
        'ojs/ojthematicmap'],
        function (geo, proj4, oj, ko) {
            function libraryContentViewModel() {
                var self = this;
                self.mapProvider = {
                    geo: JSON.parse(geo),
                    propertiesKeys: {
                        id: 'id',
                        shortLabel: 'sLabel',
                        longLabel: 'lLabel'
                    }
                };
                var storeLocations = [
                    {'long': 0.1278, 'lat': 51.5074, 'city': 'London'},
                    {'long': -1.257677, 'lat': 51.752022, 'city': 'Oxford'},
                    {'long': -0.460739, 'lat': 52.136436, 'city': 'Bedford'},
                    {'long': -7.318268, 'lat': 55.006763, 'city': 'Londonderry'},
                    {'long': -8.630498, 'lat': 52.668018, 'city': 'Limerick'},
                    {'long': -6.251495, 'lat': 53.353584, 'city': 'Dublin'}
                ];
                this.cities = [];
                for (var i = 0; i < storeLocations.length; i++) {
                    var store = storeLocations[i];
                    // Call proj4js API with the proj4 projection mapping for EPSG:2770 and the long/lat coordinates.
                    var coords = proj4("+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs", [store.long, store.lat]);
                    this.cities.push({id: store.city, x: coords[0], y: coords[1], shortDesc: store.city});
                }

            }
            return new libraryContentViewModel();
        });