define(['ojs/ojcore', 'knockout', 'ojs/ojbutton', 'ojs/ojdatetimepicker'],
    function (oj, ko) {
        function mainContentViewModel() {
            var self = this;
            self.formats = ko.observableArray(["english"]);
            self.date = ko.observable();
            self.greeting = ko.observable("Good Morning");
            self.localeDate = ko.observable();
            self.localeDate(oj.Translations.getTranslatedString('date')); 
            self.localeGreeting = ko.observable();
            self.localeGreeting(oj.Translations.getTranslatedString('greeting')); 
            self.setLang = function (data) {
                var newLang = '';
                switch (data) {
                    case 'Arabic':
                        newLang = 'ar-EG';
                        self.formats(["arabic"]);
                        break;
                    case 'Czech':
                        newLang = 'cs-CZ';
                        self.formats(["czech"]);
                        break;
                    case 'French':
                        newLang = 'fr-FR';
                        self.formats(["french"]);
                        break;
                    default:
                        newLang = 'en-US';
                        self.formats(["english"]);
                }
                oj.Config.setLocale(newLang,
                    function () {
                        $('html').attr('lang', newLang);
                        if (newLang === 'ar-EG') {
                            $('html').attr('dir', 'rtl');
                        } else {
                            $('html').attr('dir', 'ltr');
                        }
                        self.localeDate(oj.Translations.getTranslatedString('date')); 
                        self.localeGreeting(oj.Translations.getTranslatedString('greeting')); 
                        $('#dateInput').ojInputDateTime('refresh');
                    }
                );
            };
        }
        return new mainContentViewModel();
    });
