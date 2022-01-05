Feature: Battleship Hit

    Scenario: Battleship should keep track of any Coordinates hit
        Given a Battleship
        And a Shot
        When the Shot's Coordinates matches any of the Coordinates of a Battleship
        Then mark the Coordinates on the Battleship as "hit"
