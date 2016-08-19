define(['ojs/ojcore', 'knockout', 'ojs/ojbutton', 'ojs/ojdatetimepicker'],
    function (oj, ko) {
        function mainContentViewModel() {
            var self = this;
            self.date = ko.observable();
            self.greeting = ko.observable("Good Morning");
            self.localeDate = ko.observable();
            self.localeDate(oj.Translations.getTranslatedString('date')); 
            self.localeGreeting = ko.observable();
            self.localeGreeting(oj.Translations.getTranslatedString('greeting')); 
            self.setLang = function (data) {
                var newLang = '';
                switch (data) {
                    case 'Czech':
                        newLang = 'cs-CZ';
                        break;
                    case 'French':
                        newLang = 'fr-FR';
                        break;
                    default:
                        newLang = 'en-US';
                }
                oj.Config.setLocale(newLang,
                    function () {
                        $('html').attr('lang', newLang);
                        self.localeDate(oj.Translations.getTranslatedString('date')); 
                        self.localeGreeting(oj.Translations.getTranslatedString('greeting')); 
                         $('#dateInput').ojInputDate('refresh');
                    }
                );
            };
        }
        return new mainContentViewModel();
    });
