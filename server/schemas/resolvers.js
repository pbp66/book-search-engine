import { GraphQLError } from "graphql";
import { User } from "../models/index.js";
import { signToken } from "../utils/auth";

const resolvers = {
	Query: {
		me: async (parent, args, context, info) => {
			return await User.findById(context._id); // user account passed by context via authMiddleware
		},
	},
	Mutation: {
		login: async (
			parents,
			{ username, email, password, ...args },
			context,
			info
		) => {
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
			{ username, email, password, ...args },
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
		saveBook: async (parents, { user, book, ...args }, context, info) => {
			try {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: user._id },
					{ $addToSet: { savedBooks: book } },
					{ new: true, runValidators: true }
				);
				return res.json(updatedUser);
			} catch (err) {
				console.log(err);
				return res.status(400).json(err);
			}
		},
		removeBook: async (
			parents,
			{ user, bookId, ...args },
			context,
			info
		) => {
			const updatedUser = await User.findOneAndUpdate(
				{ _id: user._id },
				{ $pull: { savedBooks: { bookId: bookId } } },
				{ new: true }
			);
			if (!updatedUser) {
				return res
					.status(404)
					.json({ message: "Couldn't find user with this id!" });
			}
			return res.json(updatedUser);
		},
	},
};

export default resolvers;
