import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import db from "./config/connection";
import { typeDefs, resolvers } from "./schemas";
import { authMiddleware } from "./utils/auth";

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
// To use with ES6, changed path.join to using URL objects:
// https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-js-when-using-es6-modules
if (process.env.NODE_ENV === "production") {
	app.use(
		express.static(new URL("../client/build", import.meta.url).pathname)
	);
}

app.get("/", (req, res) => {
	res.sendFile(
		new URL("../client/build/index.html", import.meta.url).pathname
	);
});

const startApolloServer = () => {
	db.once("open", async () => {
		await server.start();
		app.use(
			"/graphql",
			expressMiddleware(server, {
				context: authMiddleware, // Runs all graphql req's through authMiddleware
			})
		);

		app.listen(PORT, () => {
			console.log(
				`🌍 API server running Now Listening on http://localhost:${PORT}`
			);
			console.log(`Use GraphQL at http://localhost:${PORT}${"/graphql"}`);
		});
	});
};

startApolloServer();
