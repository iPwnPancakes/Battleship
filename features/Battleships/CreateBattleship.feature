Feature: Create Battleship

    Scenario: Battleships should never overlap
        Given a Game
        And a Player
        And a Grid
        When the Game is started
        And Battleships are to be generated at random locations
        Then reserve consecutive Coordinates for the Battleship on the Grid
        But only if those spaces are not already reserved by another Battleship
