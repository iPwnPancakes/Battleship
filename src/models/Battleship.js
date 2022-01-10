class Battleship {
    constructor(sizeDescriptor) {
        this.sizeDescriptor = sizeDescriptor;

        if (sizeDescriptor === 'large') {
            this.size = 5;
        } else if (sizeDescriptor === 'medium') {
            this.size = 3;
        } else {
            this.size = 2;
        }
    }
}

module.exports = { Battleship };
