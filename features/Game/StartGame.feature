Feature: What happens when a User starts the Game

    Scenario: The winner of the Coin Flip should start their Turn first
        Given I am Player 1
        When I want to start the Game
        Then ask Player 2 what side of the Coin they think it will land on
        And flip the Coin
        And whoever wins the Coin flip gets start their Turn first
