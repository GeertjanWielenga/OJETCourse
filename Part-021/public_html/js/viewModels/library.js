define(['ojs/ojcore', 'knockout', 'ojs/ojcomposite',
    'jet-composites/demo-card/loader'],
    function (oj, ko) {
        function libraryContentViewModel() {
            var self = this;
            self.employees = [
                {
                    name: 'Susan Hellooooo',
                    avatar: 'css/images/composites/debraphaely.png',
                    title: 'Purchasing Director',
                    work: '5171278899',
                    email: 'deb.raphaely@oracle.com',
                    backgroundImage: 'css/images/composites/card-background_1.png'
                },
                {
                    name: 'Adam Fripp',
                    avatar: null,
                    title: 'IT Manager',
                    work: '6501232234',
                    email: 'adam.fripp@oracle.com',
                    backgroundImage: null
                }
            ];
        }
        return new libraryContentViewModel();
    });
