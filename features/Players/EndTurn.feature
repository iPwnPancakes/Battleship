Feature: What happens when a Turn ends

    Scenario: Players should be notified if one of their Battleships was Hit
        Given I am Player 1
        And it is Player 2's Turn
        And Player 2 Shot my Battleship during their Shoot Phase
        When Player 2 ends their Turn
        Then I should be notified that my Battleship was Hit

    Scenario: Players making a Shot should be notified if their Shot was a Miss or a Hit
        Given I am Player 1
        And I took a Shot
        When I end my Turn
        Then notify me if my Shot was a Hit or a Miss

    Scenario: If a Player 1's Shot would Sink the last of Player 2's Battleships then Player 1 wins the Game
        Given I am Player 1
        And it is my Turn
        When I shoot the last of Player 2's Battleships
        Then I win the Game
