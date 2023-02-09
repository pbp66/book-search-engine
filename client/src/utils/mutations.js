export const LOGIN = `
    mutation LOGIN($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            User {
                _id: ID!
                username: String!
                email: String!
                password: String!
                bookCount: Int
                savedBooks: [Book]
            }
        }
    }
`;

export const ADD_USER = `
    mutation ADD_USER($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            User {
                _id: ID!
                username: String!
                email: String!
                password: String!
                bookCount: Int
                savedBooks: [Book]
            }
        }
    }
`;

export const SAVE_BOOK = `
    mutation SAVE_BOOK($input: SavedBookInput!) {
        saveBook(input: $input) {
            User {
                _id: ID!
                username: String!
                email: String!
                password: String!
                bookCount: Int
                savedBooks: [Book]
            }
        }
    }
`;

export const REMOVE_BOOK = `
    mutation REMOVE_BOOK($bookId: String!) {
        removeBook(bookId: $bookId) {
            User {
                _id: ID!
                username: String!
                email: String!
                password: String!
                bookCount: Int
                savedBooks: [Book]
            }
        }
    }
`;
