define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojinputtext', 'ojs/ojbutton'],
    function (oj, ko, $) {
        function libraryContentViewModel() {
            var self = this;
            self.userName = ko.observable();
            self.userNameDeferred = ko.observable(false);
            // Listener for the optionChange event that reacts to changes 
            // to 'messagesHidden' option.
            self.messagesHiddenListener = function(event, data)
            {
              if (data['option'] === "messagesHidden")
              {
                var id = event.currentTarget.id, 
                    showIcon = data['value'].length > 0 ? true : false;
                if (id === "username")
                {
                  self.userNameDeferred(showIcon);
                }
              }
            };
        }
        return new libraryContentViewModel();
    });
