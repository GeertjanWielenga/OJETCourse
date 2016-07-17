/**
 * Example of Require.js boostrap javascript
 */

requirejs.config({
    // Path mappings for the logical module names
    paths: {
        'knockout': 'libs/knockout/dist/knockout',
        'jquery': 'libs/jquery/dist/jquery.min',
        'jqueryui-amd': 'libs/jquery-ui/ui',
        'ojs': 'libs/oraclejet/dist/js/libs/oj/min',
        'ojL10n': 'libs/oraclejet/dist/js/libs/oj/ojL10n',
        'ojtranslations': 'libs/oraclejet/dist/js/libs/oj/resources',
        'text': 'libs/text/text',
        'promise': 'libs/es6-promise/promise.min',
        'hammerjs': 'libs/hammerjs/hammer.min',
        'signals': 'libs/js-signals/dist/signals.min',
        'ojdnd': 'libs/oraclejet/dist/libs/dnd-polyfill/dnd-polyfill-1.0.0.min'
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


/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback.
 *
 * For a listing of which JET component modules are required for each component, see the specific component
 * demo pages in the JET cookbook.
 */
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojmodule', 'ojs/ojbutton', 'ojs/ojtoolbar', 'ojs/ojmenu'], // add additional JET component modules as needed
        function (oj, ko, $) // this callback gets executed when all required modules are loaded
        {
            var router = oj.Router.rootInstance;
            router.configure({
                'home': {label: 'Home', isDefault: true},
                'people': {label: 'People'}
            });

            function RootViewModel() {
                var self = this;
                self.router = router;
                self.optionChangeHandler = function (event, data) {
                    if (data.value === undefined) {
                        data.value = 'home';
                    }
                    // Only go for user action events
                    if ('ojAppNav' ===
                            event.target.id &&
                            event.originalEvent) {
                        self.router.go(data.value);
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

