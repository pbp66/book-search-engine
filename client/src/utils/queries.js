export const ME = `
    query ME($_id: ID!) {
        me(_id: $_id) {
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
