/**
 * EXPERIMENT #1: what happens when we don’t pass enough arguments?
 * Each parameter that doesn’t have a matching argument is set to undefined.
 */
function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
}
makeTea(3);


/**
 * EXPERIMENT #2: what happens when we pass too many arguments?
 * In this case JavaScript just ignores the extra.
 */
makeTea(3, "Earl Grey", "hey ma!", 42);