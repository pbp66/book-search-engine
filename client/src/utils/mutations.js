import { gql } from "@apollo/client";

export const LOGIN = gql`
	mutation LOGIN($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
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

export const ADD_USER = gql`
	mutation ADD_USER($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
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

export const SAVE_BOOK = gql`
	mutation SAVE_BOOK($input: SavedBookInput!) {
		saveBook(input: $input) {
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

export const REMOVE_BOOK = gql`
	mutation REMOVE_BOOK($bookId: String!) {
		removeBook(bookId: $bookId) {
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
