/**
 * Verifier for name.
 * @param {type} name
 * @returns {undefined}
 */
function verifyName(name) {
    requiredNameLength = 1;
    console.log("authenticating " + name);
    return name.length > requiredNameLength;
}