import { posts_api_get } from "../constants/constant";
import Post from "./Post";

const DisplayPosts = async () => {
  // fetching posts via nextJS public api local
  const fetchPosts = async (api) => {
    try {
      const res = await fetch(api);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const data = await fetchPosts(posts_api_get);
  const posts = data?.posts;

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
export default DisplayPosts;
