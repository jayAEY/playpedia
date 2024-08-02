import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/mongodb";
import UsersModel from "@/models/Users";

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
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
