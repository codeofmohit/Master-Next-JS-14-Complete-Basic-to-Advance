"use client";

import { useState } from "react";

const PostPosts = () => {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // hit the post api , with data as req body
    const post = {
      title: titleInput,
      body: bodyInput,
    };
    const postData = async (api) => {
      try {
        const res = await fetch(api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post),
        });
        if (res.ok) {
          const data = await res.json();
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    };
    const isPosted = await postData("http://localhost:3000/api/posts/");
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className="flex flex-col gap-4 w-1/3 m-4 p-2"
    >
      <input
        className="text-slate-900"
        type="text"
        value={titleInput}
        placeholder="enter title"
        onChange={(e) => {
          setTitleInput(e.target.value);
        }}
      />
      <input
        type="text"
        className="text-slate-900"
        value={bodyInput}
        placeholder="enter body"
        onChange={(e) => {
          setBodyInput(e.target.value);
        }}
      />
      <button type="submit" className="bg-slate-700 p-2 rounded">
        Submit post
      </button>
    </form>
  );
};
export default PostPosts;
