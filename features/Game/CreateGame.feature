Feature: Create Game

    Scenario: New Games should always only have 2 players
        Given a Player
        When a Player creates a new Game
        Then create the Game with 2 players

    Scenario: Each Player should have their own Grid
        Given 2 Players
        When Player 1 specifies the size of each Grid
        Then create a Grid for each Player
