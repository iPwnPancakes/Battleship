Feature: The first phase of each Turn is the Shoot phase

    Scenario: The Player must specify a Coordinate to Hit
        Given I am Player 1
        When my Turn starts
        Then I should specify where my Shot should be
        But only if the Shot is a valid point on Player 2's Grid
