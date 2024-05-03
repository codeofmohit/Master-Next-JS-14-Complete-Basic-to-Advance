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
  // console.log(req);

  // request body
  const res = await req.json();
  console.log("json response", res);

  const resMsg = { msg: "response sent success!" };
  return NextResponse.json(resMsg);
};

export { GET, POST };
