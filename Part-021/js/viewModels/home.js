/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Main content module
 */
define(['ojs/ojcore', 'knockout'],
  function(oj, ko) {
   /**
    * The view model for the main content view template
    */
    function mainContentViewModel() {
        var self = this;
        self.something = ko.observable("This section uses content from it's own 'home' ViewModel. The module is found in the /js/viewModules folder");
    }
   return new mainContentViewModel();
});
