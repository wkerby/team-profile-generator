# Team Profile Generator

## Description

As part of the challenge 10 assignment I was tasked with using the node js inquirer package to create a command line application that takes user input about work team members' basic information
and generates and index.html file that neatly displays each team member's contact card with relevant contact information. Additionally, I gained exposure to Test Driven Development (TDD) methodology 
and the jest package for verifying the functionality of classes I was tasked with constructing for the generic work team member (Employee) and each work team member type (Manager, Engineer, and Intern).

Application features include but are not limited to:

 - Addition of inquirer package to gather input data from end user from command line
 - Testing suite with help from jest package to verify class functionality
 - A neatly formatted index.html file complete with work team member contact cards, links to email that launch user's default email application, and links to GitHub user profiles

## User Story

As part of the assignment, I was asked to develop an application that would meet the needs of the following user and scenario:

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

The acceptance critetia below mor specifically covers what I was asked to provide to the end user.

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Usage

The following video link provides a full demonstration of the application's functionality:

https://drive.google.com/file/d/1HySDGJeBdfFF3vDy9BSLY65Amx2wNFvv/view

##Notes

You will find an example HTML file generated from this application inside of this GitHub repository (dist/index.html)
