class Coin {
    constructor() {
        this.winner = null;
    }

    flip() {
        const headsOrTails = Math.random();

        if (headsOrTails === 0) {
            this.winner = 0;
        } else {
            this.winner = 1;
        }
    }

    isHeads() {
        return this.winner === 0;
    }

    isTails() {
        return this.winner === 1;
    }
}

module.exports = { Coin };
