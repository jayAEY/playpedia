import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { gameName } = await req.json();
  console.log(gameName);
  try {
    const res = await fetch(
      // `https://rawg.io/api/games?key=${process.env.RAWG_KEY}&search=${gameName}&search_precise&search_exact&page_size=3&ordering=name`,
      `https://rawg.io/api/games?key=${process.env.RAWG_KEY}&search=${gameName}&search_precise&page_size=1`,

      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.ok) {
      let response = await res.json();
      console.log(response.results);
      return NextResponse.json(
        { results: response.results[0] },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Error no results found" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error has occurred" },
      { status: 500 }
    );
  }
}
