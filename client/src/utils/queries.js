import { gql } from "@apollo/client";

export const ME = gql`
	query ME($_id: ID!) {
		me(_id: $_id) {
			user {
				_id
				username
				email
				password
				bookCount
				savedBooks {
					_id
					bookId
					authors
					description
					title
					image
					link
				}
			}
		}
	}
`;
