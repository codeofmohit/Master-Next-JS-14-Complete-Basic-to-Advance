import Image from "next/image";
import DisplayPosts from "../components/DisplayPosts";
import PostPosts from "../components/PostPosts";
import DisplayPostsServerAction from "../components/DislpayPostsServerActions";
import PostPostsServerActions from "../components/PostPostsServerActions";

export default function Home() {
  return (
    <main className="flex justify-evenly">
      {/* <PostPosts /> */}
      {/* <DisplayPosts /> */}
      <PostPostsServerActions />
      <DisplayPostsServerAction />
    </main>
  );
}
