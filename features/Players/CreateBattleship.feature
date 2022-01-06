Feature: Create Battleship

    Scenario: Battleships should never overlap
        Given I am Player 1
        And I am placing my Battleships
        When when I place a Battleship overlapping another Battleship
        Then dont let me place the Battleship
        And notify me that it was overlapping
