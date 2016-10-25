define(["authenticator", "thing"], function (authenticator, thing) {
    return {
        /**
         * Buyer for obtaining Thing
         * for an authenticated name.
         * @param {type} name
         * @returns {undefined}
         */
        buyThing: function(name) {
            console.log(name + " is trying to buy");
            var verified = authenticator.verifyName(name);
            if (verified) {
                thing.sendThing(name);
            } else {
                thing.sendApology(name);
            }
            return verified;
        }
    };
});