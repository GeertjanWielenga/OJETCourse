define(['knockout'],
  function (ko) {
    function model (context) {
      var self = this;
      var element = context.element;;
      var props;
      var firstCard, firstValue, secondCard;
      var pairs = 0;
      var matches = 0;
      self.cards = ko.observableArray();
      self.gameMsg = ko.observable('Memory card game. Try and match pairs of cards.');

      // Listen to the stamped cards' cardClick custom event
      element.addEventListener('cardClick', checkMatch);
      
      // The props field on context is a Promise. Once that resolves,
      // we can access the properties that were defined in the composite metadata
      // and were initially set on the composite DOM element.
      context.props.then(function(properties) {
        self.cards(createCards(properties.cards));
        pairs = properties.cards.length;
        matches = 0;
        props = properties;
      });

      /**
       * Randomly arranges an array of objects.
       * @param  {Array} array The array to shuffle
       * @return {Array} The shuffled array
       */
      self.shuffle = function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      };

      /**
       * Creates pairs of cards from a given array of card objects and returns the shuffled array of cards.
       * @param  {Array<String>} cards The array of card objects
       * @return {Array<String>} The shuffled cards
       */
      function createCards(cards) {
        var orderedCards = [];
        for (var i = 0; i < cards.length; i++) {
          var card = cards[i];
          // Create the pair of cards
          orderedCards.push(card);
          orderedCards.push(card);
        }
        return self.shuffle(orderedCards);
      };

      /**
       * Checks to see whether a pair of cards is a match.
       * @param  {MouseEvent} event The mouse click event
       */
      function checkMatch(event) {
        // Remove the card's click listener once it's been clicked
        event.target.enableFlip(false);

        if (firstValue) {
          // Update attempts property
          props.attempts++;
        }

        if (!firstValue) {
          firstCard = event.target;
          firstValue = event.detail.value;
        }
        else if (firstValue === event.detail.value) {
          self.gameMsg("Pair matches. " + props.attempts + " attempts made.");
          firstValue = null;
          matches++;
        } else {
          firstValue = null;
          var oldCard = firstCard;
          self.gameMsg("Pair not a match. Resetting. " + props.attempts + " attempts made.");
          // Reset the mismatched pair on a timeout so player has time to look at the cards
          window.setTimeout(function() {
            oldCard.flipCard();
            event.target.flipCard();
            event.target.enableFlip(true);
            oldCard.enableFlip(true);
          }, 1200);
        }

        if (pairs === matches) {
          props.hasWon = true;
          self.gameMsg("All pairs matched. You've won. " + props.attempts + " attempts made.");
        }
      };

    }

    return model;
  }
)
