import { NextResponse } from "next/server";
import { jp_posts } from "../../constants/constants";

const GET = async (req) => {
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
  const api_endpoint = `${jp_posts}`;
  const posts = await fetchPosts(api_endpoint);
  return NextResponse.json(posts);
};

export { GET };
