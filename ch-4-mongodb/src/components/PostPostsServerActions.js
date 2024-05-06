import { revalidatePath } from "next/cache";
import connectMongo from "../db/connectMongo";
import Post from "../db/models/Post";

const create = async (formData) => {
  "use server";
  await connectMongo();
  const result = await Post.create({
    title: formData.get("title"),
    body: formData.get("body"),
  });
  revalidatePath("/");
};

const PostPostsServerActions = () => {
  return (
    <form action={create} className="flex flex-col gap-4 w-1/3 m-4 p-2">
      <input
        className="text-slate-900"
        type="text"
        placeholder="enter title"
        name="title"
      />
      <input
        type="text"
        className="text-slate-900"
        placeholder="enter body"
        name="body"
      />
      <button type="submit" className="bg-slate-700 p-2 rounded">
        Submit post
      </button>
    </form>
  );
};
export default PostPostsServerActions;
