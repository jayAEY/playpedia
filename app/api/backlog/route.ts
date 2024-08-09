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
    const backlog = await user.backlog;
    return NextResponse.json({ backlog }, { status: 201 });
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
      { backlog: [...user.backlog, newGame] }
    );
    await updatedUser.save();
    return NextResponse.json({ message: `Post successful` }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { email, editedGame } = await req.json();
  try {
    //   connectToDb();
    //   const user = await UsersModel.findOne({ email });
    //   const updatedUser = await UsersModel.findOneAndUpdate(
    //     { email },
    //     { backlog: [...user.backlog, newGame] }
    // );
    //   await updatedUser.save();
    return NextResponse.json({ message: `Post successful` }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
}
export async function DELETE(req: NextRequest) {
  const { email, id } = await req.json();
  try {
    connectToDb();
    const user = await UsersModel.findOne({ email });
    const backlog = await user.backlog;
    const updatedBacklog = backlog.filter(
      (game: { id: any }) => game.id !== id
    );
    const updatedUser = await UsersModel.findOneAndUpdate(
      { email },
      { backlog: updatedBacklog }
    );
    await updatedUser.save();
    return NextResponse.json({ message: `Post successful` }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
}
