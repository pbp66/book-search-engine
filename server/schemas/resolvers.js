import { User } from "../models/index.js";
import signToken from "../utils/auth";

export default resolvers = {
	Query: {
		me: async (parent, args, context, info) => {
			return await User.findById(args._id);
		},
	},
	Mutation: {
		login: async (parents, args, context, info) => {
			const user = await User.findOne({ email: args.email });

			if (!user) {
				return res
					.status(400)
					.json({ message: "Can't find this user" });
			}

			const correctPw = await user.isCorrectPassword(args.password);

			if (!correctPw) {
				return res.status(400).json({ message: "Wrong password!" });
			}

			const token = signToken(user);
			return res.json({ token, user });
		},
		addUser: async (parents, args, context, info) => {
			const user = await User.create(args); //username, email, password

			if (!user) {
				return res.status(400).json({ message: "Something is wrong!" });
			}
			const token = signToken(user);
			return res.json({ token, user });
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
