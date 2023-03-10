# Book-Search-Engine

## Description

This simple fullstack application uses the MERN stack to save books using google's book API [`https://www.googleapis.com/books/v1/volumes?q=<search terms>`](https://developers.google.com/books/docs/v1/using). Rather than use traditional routes and controllers, [apollo client/server](https://www.apollographql.com/) and [graphQL](https://graphql.org/) are used to pair the [react](https://reactjs.org/[) front-end with [MongoDB](https://www.mongodb.com/).

User Story:

```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

Acceptance Criteria:

```
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
```

## Table of Contents

- [Book-Search-Engine](#book-search-engine)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

No need to install this application. Click this link to visit the application: [Deployed App!](https://calm-reef-49139.herokuapp.com/)

## Usage

Visiting the site will display this search page:
![search-for-books-launch-page](./assets/readme/launch-page.png)

If you use the search term programming, the following results are most likely to appear:
![Searching-programming](./assets/readme/search-for-programming.png)

Since we aren't logged in, we can only view the books, not save them. Clicking the login/signup loads a modal on the screen prompting to login or signup.
![Login-Modal](./assets/readme/login-modal.png)

The sign-up modal is mostly the same with the added addition of a username field.
![Signup-Modal](./assets/readme/signup-modal.png)

When searching while logged in, a button now appears allowing you to save a book.
![Searching-Programming](./assets/readme/search-for-programming-logged-in.png)
![Save-Book-Button](./assets/readme/saved-book.png)

Clicking on saved books will load the Saved Books Page and display all of the books you've saved.
![Saved-Books-Page](./assets/readme/saved-books-page.png)

Additionally, the option to delete a saved book is also present if you no longer want to save a book.
![Delete-Book-Button](./assets/readme/delete-book-button.png)

Clicking on the delete book button will remove the book from your saved books list.
![Saved-Books-Page](./assets/readme/after-deleting-book.png)

Clicking logout in the header will log you out of the site.

## License

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=brightgreen)

MIT

Copyright (c) 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## How to Contribute

Before contributing, be sure to read the GitHub [Code of Conduct](https://github.com/github/docs/blob/main/CODE_OF_CONDUCT.md). If you have an issue, search all open issues to see if one matches the description of your issue. If not, proceed to create one providing details on the issue, errors, OS, options provided, installed node packages, etc. Issues are not assigned to anyone by the repository team. To select an issue to work on, open a pull request and generate a new branch labeled as the issue. Add your name as a contributor to the issue in question. When you make the desired changes and fixes, push all changes to your branch on the repository and submit. The repository team will review the changes. If acceptable, we will merge the changes to main and we will notify you of a successful merge or any necessary changes before a merge can take place.

## Tests

No Tests Provided

## Questions

Repo owner: [pbp66](https://github.com/pbp66).
For any questions, you may contact pbp66 via email: pbp66.coding@gmail.com. Please format your email using the following template:

-   Subject: Repository - Question/Issue
-   Body: Summarize the issue with a brief description for the first paragraph. Additional paragraphs can be used for a long description, if needed. Include any errors when using this project
-   Signature: Please leave an email address so that any updates are sent get back to you.
