define(function () {
    return {
        /**
         * Send thing if authentication succeeds.
         * @param {type} name
         * @returns {undefined}
         */
        sendThing: function (name) {
            console.log("send thing to " + name);
        },
        /**
         * Send apology if authentication fails.
         * @param {type} name
         * @returns {undefined}
         */
        sendApology: function (name) {
            console.log("say sorry to " + name);
        }
    };
});