import { NextResponse } from "next/server";

const GET = async (req, context) => {
  const id = context.params.id;

  const blog = {
    id: id,
    title: "first blog",
    desc: "first blog desc",
  };
  return NextResponse.json(blog);
};

export { GET };
