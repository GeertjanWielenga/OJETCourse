define(['knockout'],
  function (ko) {
    function model (context) {
      var self = this;
      self.initials = null;
      self.workFormatted = null;
      var element = context.element;

      /**
       * Formats a 10 digit number as a phone number.
       * @param  {number} number The number to format
       * @return {number}        The formatted phone number
       */
      var formatPhoneNumber = function(number) {
        return number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      }

      // The props field on context is a Promise. Once that resolves,
      // we can access the properties that were defined in the composite metadata
      // and were initially set on the composite DOM element.
      context.props.then(function(properties) {
        if (properties.name) {
          var initials = properties.name.match(/\b\w/g);
          self.initials = (initials.shift() + initials.pop()).toUpperCase();
        }
        if (properties.workNumber)
          self.workFormatted = formatPhoneNumber(properties.workNumber);
      });
      
      /**
       * Flips a card
       * @param  {MouseEvent} event The click event
       */
      self.flipCard = function(model, event) {
        if (event.type === 'click' || (event.type === 'keypress' && event.keyCode === 13)) {
          $(element.childNodes[0]).toggleClass('flipped');
        }
      };
    }

    return model;
  }
)
