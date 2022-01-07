const { Player } = require('./Player');

class Game {
    constructor() {
        this.currentPlayerTurn = null;
        this.player1 = null;
        this.player2 = null;
    }

    /**
     *
     * @param {Number} num
     * @returns {Player}
     */
    getPlayer(num) {
        if (num === 1) {
            return this.player1;
        } else {
            return this.player2;
        }
    }

    setPlayer(num, player) {
        if (num === 1) {
            this.player1 = player;
        } else {
            this.player2 = player;
        }
    }

    setCurrentPlayer(num) {
        this.currentPlayerTurn = num;
    }
}

module.exports = { Game };
