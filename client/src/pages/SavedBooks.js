import React, { useState, useEffect } from "react";
import {
	Jumbotron,
	Container,
	CardColumns,
	Card,
	Button,
} from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { removeBookId } from "../utils/localStorage";
import { ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";

const SavedBooks = () => {
	const [userData, setUserData] = useState({});

	// eslint-disable-next-line no-unused-vars
	const { data, loading, error } = useQuery(ME);

	// eslint-disable-next-line no-unused-vars
	const [removeBook] = useMutation(REMOVE_BOOK);

	// use this to determine if `useEffect()` hook needs to run again
	const userDataLength = Object.keys(userData).length;

	useEffect(() => {
		const getUserData = async () => {
			try {
				const token = Auth.loggedIn() ? Auth.getToken() : null;
				if (!token) {
					return false;
				}
				if (error) {
					throw new Error("something went wrong!");
				}
				const user = (await data?.me) || {};
				setUserData(user);
			} catch (err) {
				console.error(err);
			}
		};

		getUserData();
	}, [userDataLength, data, error, loading]);

	// create function that accepts the book's mongo _id value as param and deletes the book from the database
	const handleDeleteBook = async (bookId) => {
		const token = Auth.loggedIn() ? Auth.getToken() : null;

		if (!token) {
			return false;
		}

		try {
			const response = await removeBook({
				variables: { bookId },
			});

			if (!response) {
				throw new Error("something went wrong!");
			}
			const updatedUser = response.data.removeBook;

			setUserData(updatedUser);
			// upon success, remove book's id from localStorage
			removeBookId(bookId);
		} catch (err) {
			console.error(err);
		}
	};

	if (!userDataLength) {
		return <h2>LOADING...</h2>;
	}

	return (
		<>
			<Jumbotron
				fluid
				className="text-light bg-dark"
			>
				<Container>
					<h1>Viewing saved books!</h1>
				</Container>
			</Jumbotron>
			<Container>
				<h2>
					{userData.savedBooks.length
						? `Viewing ${userData.savedBooks.length} saved ${
								userData.savedBooks.length === 1
									? "book"
									: "books"
						  }:`
						: "You have no saved books!"}
				</h2>
				<CardColumns>
					{userData.savedBooks.map((book) => {
						return (
							<Card
								key={book.bookId}
								border="dark"
							>
								{book.image ? (
									<Card.Img
										src={book.image}
										alt={`The cover for ${book.title}`}
										variant="top"
									/>
								) : null}
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
									<p className="small">
										Authors: {book.authors}
									</p>
									<Card.Text>{book.description}</Card.Text>
									<Button
										className="btn-block btn-danger"
										onClick={() =>
											handleDeleteBook(book.bookId)
										}
									>
										Delete this Book!
									</Button>
								</Card.Body>
							</Card>
						);
					})}
				</CardColumns>
			</Container>
		</>
	);
};

export default SavedBooks;
