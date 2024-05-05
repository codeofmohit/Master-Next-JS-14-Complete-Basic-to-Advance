const Post = ({ title, body }) => {
  return (
    <div className="post p-2 m-2">
      <h1 className="mb-2">{title}</h1>
      <h2>{body}</h2>
    </div>
  );
};
export default Post;
