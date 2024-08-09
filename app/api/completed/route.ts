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
  console.log(newGame);
  try {
    connectToDb();
    const user = await UsersModel.findOne({ email });
    const updatedUser = await UsersModel.findOneAndUpdate(
      { email },
      { completed: [...user.completed, newGame] }
    );
    await updatedUser.save();
    return NextResponse.json({ message: `Post successful` }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { email, newGame, id } = await req.json();
  try {
    connectToDb();
    const user = await UsersModel.findOne({ email });
    const completed = JSON.parse(JSON.stringify(await user.completed));
    let index: number = -1;
    completed.forEach((game: { id: any }, i: number) => {
      if (game.id == id) index = i;
    });
    if (index > -1) completed[index] = newGame;
    const updatedUser = await UsersModel.findOneAndUpdate(
      { email },
      { completed }
    );
    await updatedUser.save();
    return NextResponse.json({ message: `Game Deleted` }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
}
export async function DELETE(req: NextRequest) {
  const { email, id } = await req.json();
  try {
    connectToDb();
    const user = await UsersModel.findOne({ email });
    const completed = await user.completed;
    const updatedCompleted = completed.filter(
      (game: { id: any }) => game.id !== id
    );
    const updatedUser = await UsersModel.findOneAndUpdate(
      { email },
      { completed: updatedCompleted }
    );
    await updatedUser.save();
    return NextResponse.json({ message: `Game Deleted` }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: JSON.stringify(err) }, { status: 500 });
  }
}
