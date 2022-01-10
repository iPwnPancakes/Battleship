const { Battleship } = require('./Battleship');

class IntentToPlace {
    /**
     * Both topLeftX and topLeftY are 1 based numbers.
     * @example topLeftX = 1 would indicate the first row
     * @example topLeftX = 3 would indicate the third row
     * @example topLeftY = 4 would indicate the fourth column
     *
     * @param {Battleship} battleship
     * @param {Number} x 1-based X
     * @param {Number} y 1-based Y
     * @param {String} direction
     */
    constructor(battleship, x, y, direction) {
        this.battleship = battleship;
        this.x = x;
        this.y = y;
        this.direction = direction;
    }
}

module.exports = { IntentToPlace };
