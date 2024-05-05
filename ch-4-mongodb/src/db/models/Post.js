import mongoose from "mongoose";

// defining schema
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
});

// compiling schema
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
