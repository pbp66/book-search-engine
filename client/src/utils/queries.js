import { gql } from "@apollo/client";

export const ME = gql`
	query ME {
		me {
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
`;
