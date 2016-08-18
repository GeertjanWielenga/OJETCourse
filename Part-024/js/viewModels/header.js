/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Header module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojdialog',
  'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojmenu'],
  function (oj, ko, $) {
    /**
     * The view model for the header module
     */
    function HeaderViewModel() {
      var self = this;

      // Application Name used in Branding Area
      self.appName = ko.observable("QuickStart");

      // User Info used in Global Navigation area
      self.userLogin = ko.observable("john.hancock@oracle.com");

      // Media Queries for repsonsive header
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      // Dropdown menu states
      self.menuItemSelect = function (event, ui) {
        switch (ui.item.attr("id")) {
          case "about":
            $("#aboutDialog").ojDialog("open");
            break;
          default:
        }
      };

    }
    return new HeaderViewModel();
  }
);
