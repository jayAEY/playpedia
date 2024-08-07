import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/mongodb";
import UsersModel from "@/models/Users";

export async function GET(
  req: NextRequest,
  context: { params: { email: string } }
) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  try {
    connectToDb();
    const user = await UsersModel.findOne({ email });
    const completed = await user.completed;
    return NextResponse.json({ completed }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
}
export async function POST(req: NextRequest) {
  const { email, newGame } = await req.json();
  try {
    connectToDb();
    const user = await UsersModel.findOne({ email });
    const updatedUser = await UsersModel.findOneAndUpdate(
      { email },
      { completed: [...user.completed, newGame] }
    );
    return NextResponse.json({ message: `Post successful` }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
}
