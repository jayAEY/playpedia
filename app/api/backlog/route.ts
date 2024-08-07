import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/mongodb";
import UsersModel from "@/models/Users";
// export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  context: { params: { email: string } }
) {
  // let email = req.nextUrl.searchParams.get("email");
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  // console.log(email);
  // console.log("pp");
  // console.log(context.params.email);
  // console.log(email);
  try {
    connectToDb();
    const user = await UsersModel.findOne({ email });
    // console.log(user);
    const backlog = await user.backlog;
    return NextResponse.json({ backlog }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
  // return NextResponse.json({ user: email }, { status: 201 });
}

// export async function GET(req: NextRequest) {
//   // let email = req.nextUrl.searchParams.get("email");
//   const { searchParams } = new URL(req.url);
//   const email = searchParams.get("email");
//   console.log(email);

//   try {
//     connectToDb();
//     const user = await UsersModel.findOne({ email });
//     // console.log(user);
//     return NextResponse.json({ user }, { status: 201 });
//   } catch (err) {
//     return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
//   }
// }
export async function POST(req: NextRequest) {
  const { email, newGame } = await req.json();
  try {
    connectToDb();
    const user = await UsersModel.findOne({ email });
    const updatedUser = await UsersModel.findOneAndUpdate(
      { email },
      { backlog: [...user.backlog, newGame] }
    );
    console.log(updatedUser.backlog);
    return NextResponse.json({ message: `Post successful` }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
}
