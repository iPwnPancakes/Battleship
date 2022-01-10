Feature: Players should be able to place their Battleships on the Grid

    Scenario: Battleships should never overlap
        Given I am Player 1
        And a size 5 Grid
        And my "small" Battleship at 1, 3 "horizontally"
        When I try to place my "small" Battleship onto 1, 3 "horizontally"
        Then I should not be able to place the Battleship

    Scenario: Battleships should only be placed vertically or horizontally
        Given I am Player 1
        And a size 5 Grid
        When I try to place my "small" Battleship onto 1, 3 "diagonally"
        Then I should not be able to place the Battleship
