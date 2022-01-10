const expect = require('chai').expect;
const { Given, When, Then } = require('@cucumber/cucumber');
const { Player } = require('../../src/models/Player');
const { Game } = require('../../src/models/Game');
const { Grid } = require('../../src/models/Grid');
const { IntentToPlace } = require('../../src/models/IntentToPlace');

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
    const playerInContext = this.context.game.getPlayer(this.context.iam);

    playerInContext.giveBattleships(battleshipSize, 1);

    expect(playerInContext.battleships[battleshipSize]).to.equal(1);
    expect(playerInContext.hasAvailableBattleship(battleshipSize)).to.equal(true);
});

Given('my {string} Battleship at {int}, {int} {string}', function (battleshipSize, x, y, direction) {
    const player = this.context.game.getPlayer(this.context.iam);

    player.giveBattleships(battleshipSize, 1);
    expect(player.hasAvailableBattleship(battleshipSize));

    player.place(battleshipSize, x, y, direction);
    expect(player.hasBattleshipAt(x, y)).to.equal(true);
});

Given('{int} {string} Battleships available', function (amount, size) {
    const player = this.context.game.getPlayer(this.context.iam);

    player.setAvailableBattleships(size, amount);

    if (amount === 0) {
        expect(player.hasAvailableBattleship(size)).to.equal(false);
    } else {
        expect(player.hasAvailableBattleship(size)).to.equal(true);
    }
});

When('I try to place my {string} Battleship onto {int}, {int} {string}', function (size, x, y, direction) {
    const player = this.context.game.getPlayer(this.context.iam);

    player.giveBattleships(size, 1);
    expect(player.hasAvailableBattleship(size)).to.equal(true);

    const battleship = player.getAvailableBattleship(size);
    const intent = new IntentToPlace(battleship, x, y, direction);

    expect(intent.battleship).to.equal(battleship);
    expect(intent.x).to.equal(x);
    expect(intent.y).to.equal(y);
    expect(intent.direction).to.equal(direction);

    this.context.intent = intent;
});

Then('I should not be able to place the Battleship', function () {
    const player = this.context.game.getPlayer(this.context.iam);

    const { battleship, x, y, direction } = this.context.intent;

    expect(() => player.place(battleship.sizeDescriptor, x, y, direction)).to.throw(Error);
});

Then('I should be able to place the Battleship', function () {
    const player = this.context.game.getPlayer(this.context.iam);

    const { battleship, x, y, direction } = this.context.intent;

    expect(() => player.place(battleship.sizeDescriptor, x, y, direction)).to.not.throw(Error);
});

Then('and see my Battleship at {int}, {int}', function (x, y) {
    const player = this.context.game.getPlayer(this.context.iam);

    expect(player.hasBattleshipAt(x, y)).to.equal(true);
});

Then('I should have {int} {string} Battleships', function (amount, size) {
    const player = this.context.game.getPlayer(this.context.iam);

    expect(player.battleships[size]).to.equal(amount);
});
