# Book Search Engine

## Description
A fully functioning Google Books API search engine built with a RESTful API. Refactored to be a GraphQL API built with Apollo Server.

## Table of Contents
  - [Deployed Site](#deployed-site)
  - [Screenshot](#screenshot)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contribution](#contribution)

# Deployed Site
https://secret-reaches-17864.herokuapp.com/


# Screenshot
<img width="1440" alt="Screen Shot 2020-10-24 at 7 24 51 AM" src="https://user-images.githubusercontent.com/65192910/97081746-16800d80-15ca-11eb-95c5-0e56414c2334.png">

# User Story
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

# Acceptance Criteria
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## Installation

- In the server directory run the following command to install the required modules `npm init` and
`npm i bcrypt express moment mongoose nodemon apollo-server-express jsonwebtoken`

- In the client directory run the following command to install the required modules `npm init` and
` npm i apollo-boost graphql graphql-tag @apollo/react-hooks react-router-dom jwt-decode `

- In the root directory run the following command to install the required modules ` npm init ` and ` npm i if-env -D concurrently `

## Usage
Sign up via the sign up link and create your account. Begin searching for books of your choice and they will be saved to your personal account.

## Testing
No testing is set up at this moment.

## Contribution
This README was generated with ❤️ by:
- Rachel Fritz (github.com/rachelf0)