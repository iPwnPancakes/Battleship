const { IntentToPlace } = require('./IntentToPlace');

class Grid {
    /**
     *
     * @param {Number} size
     */
    constructor(size) {
        this.size = size;
        this.grid = this._makeGrid(size);
    }

    /**
     * Places the top-left corner of a battleship onto the board in the direction specified
     *
     * @param {IntentToPlace} intent
     *
     * @return void
     */
    place(intent) {
        this._isValidPlacement(intent);

        if (intent.direction === 'horizontally') {
            const newRow = new Array(this.size - intent.y).fill(intent.battleship);

            this.grid[intent.x - 1].splice(intent.y - 1, intent.y - intent.battleship.size, ...newRow);
        } else {
            for (let i = intent.x; i < intent.x + intent.battleship.size; i++) {
                this.grid[i - 1].splice(intent.y - 1, 1, intent.battleship);
            }
        }
    }

    hasBattleshipAt(x, y) {
        const itemAtCoordinate = this.grid[x - 1][y - 1] ?? null;

        return itemAtCoordinate !== null;
    }

    /**
     * Creates an N x N array where N = size
     *
     * @param {Number} size
     * @private
     */
    _makeGrid(size) {
        const grid = [];

        for (let i = 0; i < size; i++) {
            grid[i] = new Array(size);
        }

        return grid;
    }

    /**
     *
     * @param intent
     * @private
     *
     * @return void
     *
     * @throws {Error} Throws if anything is wrong with the intent
     */
    _isValidPlacement(intent) {
        const isBattleshipCompletelyOnTheGrid = intent.x > this.size || intent.x < 0 || intent.y > this.size || intent.y < 0;
        if (isBattleshipCompletelyOnTheGrid) {
            throw new Error('Invalid coordinates');
        }

        if (intent.direction !== 'horizontally' && intent.direction !== 'vertically') {
            throw new Error('Invalid direction');
        }

        let bottomRightCoordinate = intent.direction === 'horizontally' ?
            [intent.x, (intent.y + intent.battleship.size - 1)] :
            [intent.x + (intent.battleship.size - 1), intent.y];

        if (bottomRightCoordinate[0] > this.size || bottomRightCoordinate[1] > this.size) {
            throw new Error('Battleship cannot be placed at ' + bottomRightCoordinate[0] + ', ' + bottomRightCoordinate[1]);
        }

        if (intent.direction === 'horizontally') {
            for (let i = intent.y; i < intent.y + intent.battleship.size; i++) {
                if (this.hasBattleshipAt(intent.x, i)) {
                    throw new Error('Battleship already placed at ' + intent.x + ', ' + i);
                }
            }
        }
    }
}

module.exports = { Grid };
