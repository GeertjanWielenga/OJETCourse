/**
 * Buyer for obtaining Thing
 * for an authenticated name.
 * @param {type} name
 * @returns {undefined}
 */
function buyThing(name) {
    console.log(name + " is trying to buy");
    var verified = verifyName(name);
    if(verified){
        sendThing(name);
    } else {
        sendApology(name);
    }
    return verified;
}