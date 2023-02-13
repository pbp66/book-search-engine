import { gql } from "@apollo/client";

export const ME = gql`
	query ME {
		me {
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
