Feature: Players should be able to place their Battleships on the Grid

    Scenario: Battleships should never overlap
        Given I am Player 1
        And a size 5 Grid
        And my "small" Battleship at 1, 3 "horizontally"
        When I try to place my "small" Battleship onto 1, 3 "horizontally"
        Then I should not be able to place the Battleship

    Scenario: Battleships should be able to be placed horizontally
        Given I am Player 1
        And a size 5 Grid
        And 1 "small" Battleships available
        When I try to place my "small" Battleship onto 1, 3 "horizontally"
        Then I should be able to place the Battleship

    Scenario: Battleships should be able to be placed vertically
        Given I am Player 1
        And a size 5 Grid
        And 1 "large" Battleships available
        When I try to place my "large" Battleship onto 1, 1 "vertically"
        Then I should be able to place the Battleship

    Scenario: Battleships should only be placed vertically or horizontally
        Given I am Player 1
        And a size 5 Grid
        When I try to place my "small" Battleship onto 1, 3 "diagonally"
        Then I should not be able to place the Battleship

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
