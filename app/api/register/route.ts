import { NextRequest, NextResponse } from "next/server";
import { connectToDb } from "@/lib/mongodb";
import UsersModel from "@/models/Users";
import bcrypt from "bcryptjs";

export function GET() {
  //api test
  return NextResponse.json({ Date: new Date() }, { status: 201 });
}

export async function POST(req: NextRequest) {
  const { email, password, avatar } = await req.json();
  try {
    connectToDb();
    const user = await UsersModel.findOne({ email });
    if (user) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 500 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UsersModel({ email, password: hashedPassword, avatar });
    await newUser.save();
    return NextResponse.json(
      { message: `${email} is now registered!` },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "An error has occurred" },
      { status: 500 }
    );
  }
}
