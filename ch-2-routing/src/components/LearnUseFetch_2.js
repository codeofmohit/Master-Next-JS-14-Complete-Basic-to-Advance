const SinglePost = ({ post }) => {
  return (
    <div className="singlePost p-2 m-2 border">
      <div className="postTitle p-2 border-b">{post?.title}</div>
      <div className="postBody p-2">{post?.body}</div>
    </div>
  );
};

const LearnUseFetch_2 = async () => {
  const getData = async () => {
    const api = "https://jsonplaceholder.typicode.com/posts/";
    const res = await fetch(api);
    const data = await res.json();
    return data;
  };

  const data = await getData();

  const posts = data.splice(0, 5);

  return (
    <div className="post flex flex-col p-4 m-2">
      {posts.map((post) => {
        return <SinglePost key={post.id} post={post} />;
      })}
    </div>
  );
};
export default LearnUseFetch_2;
