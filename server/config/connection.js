import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

export default mongoose.connection;
