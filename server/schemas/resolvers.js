import { GraphQLError } from "graphql";
import { User } from "../models/index.js";
import { signToken } from "../utils/auth";

const resolvers = {
	Query: {
		me: async (parent, args, context, info) => {
			return await User.findById(context._id);
		},
	},
	Mutation: {
		login: async (parents, { email, password }, context, info) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new GraphQLError("User is not authenticated", {
					extensions: {
						code: "UNAUTHENTICATED",
						http: { status: 401 },
					},
				});
			}

			const correctPasswordBoolean = await user.isCorrectPassword(
				password
			);

			if (!correctPasswordBoolean) {
				throw new GraphQLError("Wrong Password", {
					extensions: {
						code: "INCORRECT PASSWORD",
						http: { status: 401 },
					},
				});
			}

			const token = signToken(user);
			return { token, user };
		},
		addUser: async (
			parents,
			{ username, email, password },
			context,
			info
		) => {
			const user = await User.create({ username, email, password });

			if (!user) {
				throw new GraphQLError("User was not created", {
					extensions: {
						code: "BAD USER DATA",
						http: { status: 401 },
					},
				});
			}
			const token = signToken(user);
			return { token, user };
		},
		saveBook: async (parents, { book }, context, info) => {
			try {
				const user = await User.findOneAndUpdate(
					{ _id: context._id },
					{ $addToSet: { savedBooks: book } },
					{ new: true, runValidators: true }
				);

				if (!user) {
					throw new GraphQLError("User does not exist", {
						extensions: {
							code: "USER NOT FOUND",
							http: { status: 401 },
						},
					});
				}

				return user;
			} catch (err) {
				console.error("Error saving book", err);
			}
		},
		removeBook: async (parents, { bookId }, context, info) => {
			try {
				const user = await User.findOneAndUpdate(
					{ _id: context._id },
					{ $pull: { savedBooks: { bookId } } },
					{ new: true, runValidators: true }
				);
				if (!user) {
					throw new GraphQLError("User does not exist", {
						extensions: {
							code: "USER NOT FOUND",
							http: { status: 401 },
						},
					});
				}

				return user;
			} catch (err) {
				console.error("Error removing book", err);
			}
		},
	},
};

export default resolvers;
