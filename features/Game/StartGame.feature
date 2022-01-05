Feature: What happens when Player 1 starts the Game

    Scenario: A Game should be configured before it can be started
        Given a Game without a Configuration
        When a Player tries to start the Game
        Then deny the Player
        And notify the Player that the Game cannot be started without a Configuration

    Scenario: The winner of the Coin Flip should start their Turn first
        Given 2 Players
        And a Coin
        And the Game's Configuration
        When the Game is started
        Then flip the Coin
        And save which Player won the Coin flip to the Configuration
