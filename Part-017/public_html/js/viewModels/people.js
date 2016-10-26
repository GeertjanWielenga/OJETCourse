define(['ojs/ojcore', 'knockout', 'ojs/ojfilmstrip'],
        function (oj, ko) {
            function peopleContentViewModel() {
                var self = this;
                self.chemicals = ko.observableArray([
                    "Hydrogen",
                    "Helium",
                    "Lithium",
                    "Beryllium",
                    "Boron",
                    "Carbon",
                    "Nitrogen",
                    "Oxygen",
                    "Fluorine",
                    "Neon",
                    "Sodium",
                    "Magnesium"
                ]);
            }
            return new peopleContentViewModel();
        });
