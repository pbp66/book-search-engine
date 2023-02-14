// save book data for a logged in user
export const saveBook = (bookData, token) => {
	return fetch("/api/users", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(bookData),
	});
};

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = async (query) => {
	return await fetch(
		`https://www.googleapis.com/books/v1/volumes?q=${query}`
	);
};
