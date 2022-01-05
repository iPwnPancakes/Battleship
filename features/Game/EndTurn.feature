Feature: What happens when a Turn ends

    Scenario: Players should be notified if their Coordinate was a Hit or a Miss
        Given a Player
        And a Shot
        When the Player ends their Turn
        Then notify the Player if their Shot was a Hit or a Miss
