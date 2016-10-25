/**
 * Example of Require.js boostrap javascript
 */

requirejs.config({
    // Path mappings for the logical module names
    paths: {
        'knockout': 'libs/knockout/dist/knockout',
        'jquery': 'libs/jquery/dist/jquery.min',
        'jqueryui-amd': 'libs/jquery-ui/ui',
        'promise': 'libs/es6-promise/promise.min',
        'hammerjs': 'libs/hammerjs/hammer.min',
        'ojdnd': 'libs/oraclejet/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
        'ojs': 'libs/oraclejet/dist/js/libs/oj/min',
        'ojL10n': 'libs/oraclejet/dist/js/libs/oj/ojL10n',
        'ojtranslations': 'libs/oraclejet/dist/js/libs/oj/resources',
        'text': 'libs/text/text',
        'signals': 'libs/js-signals/dist/signals.min'
    },
    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    },
// This section configures the i18n plugin. It is merging the Oracle JET built-in translation
// resources with a custom translation file.
// Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
// a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
                //'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'
            }
        }
    }
});

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojrouter', 'ojs/ojknockout',
    'ojs/ojmodule', 'ojs/ojbutton', 'ojs/ojtoolbar', 'ojs/ojmenu',
    'ojs/ojarraytabledatasource', 'ojs/ojnavigationlist'],
        function (oj, ko, $)
        {

            var router = oj.Router.rootInstance;
            router.configure({
                'home': {label: 'Home', isDefault: true},
                'people': {label: 'People'}
            });

            function RootViewModel() {
                var self = this;
                self.router = router;
                var navData = [
                    {name: 'Home', id: 'home'},
                    {name: 'People', id: 'people'}
                ];
                self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});
                self.navChange = function (event, ui) {
                    if (ui.option === 'selection' && ui.value !== self.router.stateId()) {
                        self.router.go(ui.value);
                    }
                };
            }

            oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
            oj.Router.sync().then(
                    function () {
                        //bind your ViewModel for the content 
                        //of the whole page body.
                        ko.applyBindings(
                                new RootViewModel(),
                                document.getElementById('globalBody'));
                        $('#globalBody').show();
                    },
                    function (error) {
                        oj.Logger.error(
                                'Error in root start: ' +
                                error.message);
                    });
        }

);

