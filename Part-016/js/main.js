requirejs.config({
  // Path mappings for the logical module names
  paths: 
 //injector:mainReleasePaths
  {
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
    'ojdnd': 'libs/oraclejet/dist/js/libs/dnd-polyfill/dnd-polyfill-1.0.0.min'
  }
  //endinjector
  ,
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
        //'ojtranslations/nls/ojtranslations': 'resources/nls/menu'
      }
    }
  }
});

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojrouter',
  'ojs/ojmodule', 'ojs/ojoffcanvas', 'ojs/ojnavigationlist', 'ojs/ojarraytabledatasource'],
  function (oj, ko, $) { // this callback gets executed when all required modules are loaded
    var router = oj.Router.rootInstance;
    router.configure({
      'home': {label: 'Home', isDefault: true},
      'people': {label: 'People'},
      'library': {label: 'Library'},
      'graphics': {label: 'Graphics'},
      'performance': {label: 'Performance'}
    });

    function RootViewModel() {
      var self = this;
      self.router = router;

      // Shared navigation data and callbacks for nav bar (medium+ screens) and nav list (small screens)
      var navData = [
        {name: 'Home', id: 'home',
          iconClass: 'demo-home-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'},
        {name: 'People', id: 'people',
          iconClass: 'demo-education-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'},
        {name: 'Library', id: 'library',
          iconClass: 'demo-library-icon-24 demo-icon-font-24 oj-navigationlist-item-icon'},
        {name: 'Graphics', id: 'graphics',
          iconClass: 'demo-palette-icon-24  demo-icon-font-24 oj-navigationlist-item-icon'},
        {name: 'Performance', id: 'performance',
          iconClass: 'demo-grid-icon-16 demo-icon-font-24 oj-navigationlist-item-icon'}
      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      self.navChange = function(event, ui) {
        if (ui.option === 'selection' && ui.value !== self.router.stateId()) {
          // Only toggle navigation drawer when it's shown on small screens
          if (self.smScreen())
            self.toggleDrawer();
          self.router.go(ui.value);
        }
      };
      self.drawerParams = {
        displayMode: 'push',
        selector: '#offcanvas',
      };
      // Called by navigation drawer toggle button and after selection of nav drawer item
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle(self.drawerParams);
      };
      // Close the drawer for medium and up screen sizes
      var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);
      self.mdScreen.subscribe(function() {oj.OffcanvasUtils.close(self.drawerParams);});
    }

    oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
    oj.Router.sync().then(
      function () {
        // bind your ViewModel for the content of the whole page body.
        ko.applyBindings(new RootViewModel(), document.getElementById('globalBody'));
      },
      function (error) {
        oj.Logger.error('Error in root start: ' + error.message);
      }
    );
  }
);
