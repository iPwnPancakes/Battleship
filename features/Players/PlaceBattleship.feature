Feature: Placing a Battleship onto the board

    Scenario: Players should not be able to place a Battleship they dont have any available Battleships of that size
        Given I am Player 1
        And a size 5 Grid
        And my "small" Battleship at 1, 3 "horizontally"
        And 0 "small" Battleships available
        When I try to place my "small" Battleship onto 2, 3 "horizontally"
        Then I should not be able to place the Battleship

    Scenario: Players should have 1 less Battleship from their available Battleships when placing one down
        Given I am Player 1
        And a size 5 Grid
        And 1 "small" Battleships available
        When I try to place my "small" Battleship onto 2, 3 "horizontally"
        Then I should be able to place the Battleship
        And I should have 0 "small" Battleships
