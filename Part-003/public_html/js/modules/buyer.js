define(function () {
    return{
        /**
         * Buyer for obtaining Thing
         * for an authenticated name.
         * @param {type} name
         * @returns {undefined}
         */
        buyThing: function (name) {
            console.log(name + " is trying to buy");
            return true;
        }
    };
});