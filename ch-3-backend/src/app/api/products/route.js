import { NextResponse } from "next/server";

const GET = async (req) => {
  const productList = [
    {
      id: 1,
      type: "chair",
      desc: "4 foot chair",
    },
    {
      id: 2,
      type: "table",
      desc: "random black table",
    },
  ];

  // request headers
  // const requestHeaders = new Headers(req.headers);

  // url query params
  // const { searchParams } = new URL(req.url);
  // console.log(searchParams.get("color"));

  // cookies
  // const cookie1 = req.cookies;
  // console.log(cookie1);

  return NextResponse.json(productList);
};

const POST = async (req) => {
  // json body
  // const resFromPost = await req.json();
  // console.log(resFromPost);

  const requestBody_formData = await req.formData();
  console.log(requestBody_formData);

  return NextResponse.json({ msg: "post success" }, { status: 201 });
};

export { GET, POST };
