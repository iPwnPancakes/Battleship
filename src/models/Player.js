const { Grid } = require('./Grid');
const { Battleship } = require('./Battleship');
const { IntentToPlace } = require('./IntentToPlace');

class Player {
    /**
     * @type {?Grid}
     */
    grid = null;

    /**
     * @param {Number} number
     */
    constructor(number) {
        this.number = number;
        this.battleships = {};
    }

    giveBattleships(size, amount) {
        if (this.battleships[size]) {
            this.battleships[size] += amount;
        } else {
            this.battleships[size] = amount;
        }
    }

    setAvailableBattleships(size, amount) {
        this.battleships[size] = amount;
    }

    /**
     *
     * @param {Grid} grid
     */
    setGrid(grid) {
        this.grid = grid;
    }

    /**
     *
     * @param {String} battleshipSize
     * @param {Number} x
     * @param {Number} y
     * @param {String} direction
     */
    place(battleshipSize, x, y, direction) {
        if (!this.grid) {
            throw new Error('Cannot set a battleship without a grid');
        }

        const battleship = this.getAvailableBattleship(battleshipSize);
        const intent = new IntentToPlace(battleship, x, y, direction);

        this.grid.place(intent);
    }

    hasAvailableBattleship(size) {
        return this.battleships[size] > 0;
    }

    getAvailableBattleship(size) {
        if(this.hasAvailableBattleship(size)) {
            this.battleships[size]--;

            return new Battleship(size);
        }

        throw new Error('Player does not have that size battleship available');
    }

    hasBattleshipAt(x, y) {
        return this.grid.hasBattleshipAt(x, y);
    }
}

module.exports = { Player };
