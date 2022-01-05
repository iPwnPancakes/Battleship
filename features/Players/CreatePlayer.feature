Feature: Users should be able to create a Player

    Scenario: Users should be prompted for a Name when creating a Player
        Given a User
        When a User wants to create a Player
        Then ask the User for a Name
