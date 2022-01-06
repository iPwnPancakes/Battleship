Feature: Battleship Hit

    Scenario: Battleship should keep track of any Coordinates hit
        Given I am Player 1
        And it is Player 2's Turn
        When Player 2 shoots one of my Battleships
        Then notify Player 1 that they have Hit my Battleship

    Scenario: A Battleship must sink when all of its Coordinates are Shot
        Given I am Player 1
        And it is Player 2's Turn
        When they shoot my Battleship's last un-Shot Coordinate
        Then mark the Battleship as Sunk
        And notify Player 2 that they have Sunk my Battleship
