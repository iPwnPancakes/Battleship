Feature: What happens when a Player starts their Turn

    Scenario: Each Turn the Player must specify a Coordinate to Hit
        Given a Game
        And a Player
        When the Turn has started
        Then save the Coordinate that the Player has chosen
        But only if that Coordinate is a valid Coordinate for the other Player's Grid
