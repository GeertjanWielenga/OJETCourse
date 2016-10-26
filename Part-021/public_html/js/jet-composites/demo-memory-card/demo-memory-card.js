define(['knockout'],
  function (ko) {
    function model (context) {
      var self = this;
      var element = context.element;
      var props;
      context.props.then(function(properties) {
        props = properties;
      });
      var flipMessage = "Flip card."
      self.cardMessage = ko.observable(flipMessage);
      var flipContainer;

      /**
       * Flips a card
       */
      self.flipCard = function() {
        // Toggle pressed state and message for accessibility
        var bFlipped = flipContainer.getAttribute('aria-pressed') === 'true';
        if (bFlipped)
          self.cardMessage(flipMessage);
        else
          self.cardMessage("Card value: " + props.value);
        flipContainer.setAttribute('aria-pressed', bFlipped ? 'false' : 'true');

        $(flipContainer).toggleClass('flipped');
      };

      /**
       * Click listener to toggle card flipping and fires a cardClick event.
       * @param  {MouseEvent} event The click event
       */
      function clickCard(event) {
        if (event.type === 'click' || (event.type === 'keypress' && event.keyCode === 13)) {
          // Flip card
          self.flipCard();

          // Fire a custom cardClick event
          var params = {
            'bubbles': true,
            'detail': {'value': element.value}
          };
          element.dispatchEvent(new CustomEvent('cardClick', params));
        }
      };

      /**
       * Adds a click listener to allow card flipping.
       */
      function addListener() {
        flipContainer.addEventListener('click', clickCard);
        flipContainer.addEventListener('keypress', clickCard);
      };

      /**
       * Removes a click listener to allow card flipping.
       */
      function removeListener() {
        flipContainer.removeEventListener('click', clickCard);
        flipContainer.removeEventListener('keypress', clickCard);
      };

      /**
       * Adds or removes a click listener on card to allow card flipping.
       * @param  {boolean} bEnable True if card flipping should be enabled.
       */
      self.enableFlip = function(bEnable) {
        if (bEnable)
          addListener();
        else
          removeListener();
      };
      
      // Composite lifecycle listener 
      self.attached = function(context) {
        flipContainer = element.childNodes[0];
        // We want to attach the click listener to a child element of the composite that's defined in the View, 
        // so we need to wait until the composite's View has been attached to the DOM to aceess that child element.
        addListener();
      };
    }

    return model;
  }
)
