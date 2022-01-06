Feature: Players should be able to place their Battleships on the Grid

    Background:
        Given I am Player 1
        And my Grid

    Scenario: Battleships should never overlap
        Given I am choosing to place a Battleship on the Grid
        And an already placed Battleship
        When I try to place my Battleship onto another Battleship
        Then I should not be able to place the Battleship

    Scenario: Battleships should only be placed vertically or horizontally
        Given I am choosing to place a Battleship on the Grid
        When I try to place a Battleship diagonally
        Then I should not be able to place the Battleship
