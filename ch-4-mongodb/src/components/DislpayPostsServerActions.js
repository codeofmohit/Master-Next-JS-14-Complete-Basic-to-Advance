import { posts_api_get } from "../constants/constant";
import connectMongo from "../db/connectMongo";
import Post from "./Post";
import PostModel from "../db/models/Post";

const DisplayPostsServerAction = async () => {
  await connectMongo();
  const posts = await PostModel.find();

  // const data = await fetchPosts(posts_api_get);
  // const posts = data?.posts;

  // console.log(posts);

  return (
    <div className="posts flex flex-col justify-center items-center h-[90vh]">
      <h1 className="my-4">Posts coming from Mongo DB </h1>
      {posts.map((post) => {
        return <Post key={post._id} title={post.title} body={post.body} />;
      })}
    </div>
  );
};
export default DisplayPostsServerAction;
