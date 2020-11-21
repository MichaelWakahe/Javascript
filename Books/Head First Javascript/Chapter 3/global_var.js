/**
 *  If you forget to declare a variable before using it, the variable will always be global (even if the first time you
 *  use it is in a function).
 *
 * @param player
 * @param location
 * @returns {number}
 */
function playTurn(player, location) {
    points = 0; // We forgot to declare points with “let” before we used it. So points is automatically global.

    if (location === 1) {
        points = points + 100;
    }

    return points;
}

let total = playTurn("Jai", 1);

console.log(points);