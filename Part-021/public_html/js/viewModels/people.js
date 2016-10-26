define(['ojs/ojcore', 'knockout', 'ojs/ojcomposite',
'jet-composites/customer/loader'],
   function (oj, ko) {
      function peopleContentViewModel() {
          var self = this;
          self.customers = [
              {name: 'Billy Bob Thornton', city: 'New York'},
              {name: 'Brad Pitt', city: 'Hollywood'},
              {name: 'Val Kilmer', city: 'Seattle'}
          ];
      }
      return new peopleContentViewModel();
   });