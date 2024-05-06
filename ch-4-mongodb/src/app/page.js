import Image from "next/image";
import DisplayPosts from "../components/DisplayPosts";
import PostPosts from "../components/PostPosts";
import DisplayPostsServerAction from "../components/DislpayPostsServerActions";
import PostPostsServerActions from "../components/PostPostsServerActions";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex justify-evenly">
      {/* <PostPosts /> */}
      {/* <DisplayPosts /> */}
      <PostPostsServerActions />
      <Suspense fallback="Loading....">
        <DisplayPostsServerAction />
      </Suspense>
    </main>
  );
}
