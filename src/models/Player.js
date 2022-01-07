const { Grid } = require('./Grid');
const { Battleship } = require('./Battleship');

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
    setBattleship(battleshipSize, x, y, direction) {
        if (!this.grid) {
            throw new Error('Cannot set a battleship without a grid');
        }

        if (!this.hasAvailableBattleship(battleshipSize)) {
            throw new Error('Player does not have that size battleship available');
        }

        const battleship = this.getAvailableBattleship(battleshipSize);

        this.grid.place(battleship, x, y, direction);
    }

    hasAvailableBattleship(size) {
        return true;
    }

    getAvailableBattleship(size) {
        return new Battleship();
    }

    hasBattleshipAt(x, y) {
        return this.grid.hasBattleshipAt(x, y);
    }
}

module.exports = { Player };
