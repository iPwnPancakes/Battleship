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
     * @param {Battleship} battleship
     * @param {Number} topLeftX
     * @param {Number} topLeftY
     * @param {String} direction
     *
     * @return void
     */
    place(battleship, topLeftX, topLeftY, direction) {
        const isBattleshipTopLeftOnTheGrid = topLeftX > this.size || topLeftX < 0 || topLeftY > this.size || topLeftY < 0;
        if (isBattleshipTopLeftOnTheGrid) {
            throw new Error('Invalid coordinates');
        }

        if (direction !== 'horizontally' && direction !== 'vertically') {
            throw new Error('Invalid direction');
        }

        let bottomRightCoordinate = [];
        if(direction === 'horizontally') {
            bottomRightCoordinate = [topLeftY, topLeftX + battleship.size];
        } else {
            bottomRightCoordinate = [topLeftY + battleship.size, topLeftX];
        }

        if(bottomRightCoordinate[0] > this.size || bottomRightCoordinate[1] > this.size) {
            throw new Error('Invalid placement');
        }

        if(direction === 'horizontally') {
            for (let i = topLeftX; i < topLeftX + battleship.size; i++) {
                this.grid[topLeftY + i][topLeftX] = battleship;
            }
        } else {
            
        }
    }

    hasBattleshipAt(x, y) {
        const itemAtCoordinate = this.grid[x][y] ?? null;

        return itemAtCoordinate !== null;
    }

    getBattleshipAt(x, y) {
        return this.grid[x][y];
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
}

module.exports = { Grid };
