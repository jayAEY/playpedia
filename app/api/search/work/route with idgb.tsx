// import getGames from "@/lib/getGames";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const { searchTerm } = await req.json();
//   try {
//     let games = await getGames(searchTerm);
//     return NextResponse.json({ games }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { message: "An error has occurred" },
//       { status: 500 }
//     );
//   }
// }
