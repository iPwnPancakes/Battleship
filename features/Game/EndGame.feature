Feature: What happens when a Game ends

    Scenario: If a Player wins, ask if they would like to play again
        Given I am Player 1
        When I win the Game
        Then ask me if I would like to Play again
