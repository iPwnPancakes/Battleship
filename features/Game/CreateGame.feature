Feature: Create Game

    Scenario: New Games should always only have 2 players
        Given I am a new User
        And I have a friend next to me irl
        When I want to create a new Game
        Then ask us for each of our Names

    Scenario: New Games can also have CPU opponents
        Given I am a new User
        And I dont have any friends
        When I want to create a new Game
        Then ask me for my Name
        And generate a CPU opponent

    Scenario: Each Player should have their own Grid
        Given I am a new Player
        When I create a new Game
        And I specify the Size of each Player's Grid
        Then create a Grid for each Player

    Scenario: The amount of Battleships and their sizes need to be specified
        Given I am the User creating the Game
        When I first create the Game
        Then ask me how many Small, Medium, and Large Battleships each player should have
