Feature: Players should be able to create a Grid of a particular size

    Scenario: Players should be able to specify a Size and get a Grid with the same Length and Height
        Given a Player
        When a Player specifies a Size
        Then create a Grid with the same Length and Height
