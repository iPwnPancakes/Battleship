Feature: Player 1 must specify Game parameters before being able to play the Game

    Scenario: A Coin flip should decide which Player gets to go first
        Given a Game
        And a Coin
        And Player 1
        When the Game is being configured
        Then ask Player 1 to choose Heads or Tails
        And save Player 1's decision

    Scenario: Player 1 should be able to specify the amount of Small, Medium, and Large Battleships each player has
        Given 2 Players
        When the Game is being configured
        And Player 1 confirms how many Small, Medium, and Large Battleships each player should have
        Then save the specified amounts
