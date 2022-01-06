Feature: What happens when a Turn starts

    Scenario: Each Turn begins with the Shoot phase
        Given I am Player 1
        When my Turn has started
        Then enter the Shoot phase

    Scenario: After the Shoot phase comes the End phase
        Given I am Player 1
        When I end my Shoot phase
        Then ask me to confirm my decisions
