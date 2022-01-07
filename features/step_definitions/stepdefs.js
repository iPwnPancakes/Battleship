const expect = require('chai').expect;
const { Given, When, Then } = require('@cucumber/cucumber');
const { Player } = require('../../src/models/Player');
const { Game } = require('../../src/models/Game');
const { Grid } = require('../../src/models/Grid');

Given('I am Player {int}', function (playerNum) {
    const game = new Game();
    const player = new Player(playerNum);

    game.setPlayer(1, player);

    expect(player.number).to.equal(playerNum);
    expect(game.player1).to.equal(player);

    this.context = {
        ...this.context ?? {},
        iam: playerNum,
        game
    };
});

Given('a size {int} Grid', function (size) {
    const grid = new Grid(size);
    const player = this.context.game.getPlayer(this.context.iam);

    player.setGrid(grid);

    expect(grid.size).to.equal(size);
    expect(player.grid).to.equal(grid);
});

Given('it is Player {int}\'s Turn', function (int) {
    this.context.game.setCurrentPlayer(int);

    expect(this.context.game.currentPlayerTurn).to.equal(int);
});

Given('my {string} Battleship', function (battleshipSize) {
    const grid = new Grid(5);
    const playerInContext = this.context.game.getPlayer(this.context.iam);

    playerInContext.giveBattleships(battleshipSize, 1);

    expect(playerInContext.battleships[battleshipSize]).to.equal(1);

    playerInContext.setGrid(grid);
    playerInContext.setBattleship(battleshipSize, 1, 1, 'horizontal');

    expect(grid.hasBattleshipAt(1, 1)).to.equal(true);
});

Given('my {string} Battleship at {int}, {int} {string}', function (battleshipSize, x, y, direction) {
    const player = this.context.game.getPlayer(this.context.iam);

    player.giveBattleships(battleshipSize, 1);
    player.setBattleship(battleshipSize, x,  y, direction)

    expect(player.hasBattleshipAt(x, y)).to.be.true();
});
