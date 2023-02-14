const typeDefs = `
	type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
	}

    type Book {
        _id: ID!
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type Auth {
        token: String!
        user: User
    }

    input SavedBookInput {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String
    }

    type Query {
        me(): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: SavedBookInput): User
        removeBook(bookId: String!): User
    }
`;

export default typeDefs;
