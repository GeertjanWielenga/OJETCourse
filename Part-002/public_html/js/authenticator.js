define(function () {
    return{
        /**
         * Verifier for name.
         * @param {type} name
         * @returns {undefined}
         */
        verifyName: function (name) {
            requiredNameLength = 1;
            console.log("authenticating " + name);
            return name.length > requiredNameLength;
        }
    };
});