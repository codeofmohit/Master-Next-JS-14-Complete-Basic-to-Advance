import { NextResponse } from "next/server";
import connectMongo from "../../../db/connectMongo";
import PostModel from "../../../db/models/Post";

export const GET = async () => {
  try {
    // make connection
    await connectMongo();
    // fetch data from db
    const posts = await PostModel.find();
    return NextResponse.json(
      { posts: posts },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: 0,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "something went wrong!" },
      { status: 400 }
    );
  }
};

export const POST = async (req) => {
  try {
    // make db connection
    await connectMongo();
    console.log("db connected success!");
    // request body as formData
    const reqBody = await req.json();
    // console.log(reqBody);
    const post = await PostModel.create(reqBody);
    return NextResponse.json({ post: post }, { status: 201 });
  } catch (error) {
    console.log("something went wrong!");
    return NextResponse.json({ err: error }, { status: 400 });
  }
};
