import { NextRequest, NextResponse } from "next/server";
import { HowLongToBeatService, HowLongToBeatEntry } from "howlongtobeat";
let hltbService = new HowLongToBeatService();

export async function POST(req: NextRequest) {
  const { searchTerm } = await req.json();
  try {
    let res = await hltbService.search(`${searchTerm}`);
    if (res.length < 1) {
      return NextResponse.json(
        { message: "Error no results found" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ results: res }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error has occurred" },
      { status: 500 }
    );
  }
}
