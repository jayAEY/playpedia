import getGames from "@/lib/getGames";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // getGames();
  // Nex
  let games = await getGames();
  console.log(games);

  // return NextResponse.json(games);

  // const email = await req.json();
  // let accessToken;
  // const res = await fetch(
  //   `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_IGDB_ID}&client_secret=${process.env.NEXT_PUBLIC_IGDB_SECRET}&grant_type=client_credentials`,
  //   {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   }
  // );

  //   if (res.ok) {
  //     console.log(await res.json());
  //     const gamesRes = await fetch("https://api.igdb.com/v4/games", {
  //       method: "POST",
  //       headers: {
  //         "Client-ID": "itljwapfoi3ntn66gh77kmjy5e7f8r",
  //         Authorization: `Bearer ${await res.json()}`,
  //       },
  //     });
  //   }

  //   console.log(accessToken);
  //   try {
  //     const res = await fetch(
  //       `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_IGDB_ID}&client_secret=${process.env.NEXT_PUBLIC_IGDB_SECRET}&grant_type=client_credentials`,
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     );

  //     if (res.ok) {
  //       console.log(await res.json());
  //       accessToken = await res.json();
  // try {
  //   const gamesRes = await fetch("https://api.igdb.com/v4/games", {
  //     method: "POST",
  //     headers: {
  //       "Client-ID": "itljwapfoi3ntn66gh77kmjy5e7f8r",
  //       Authorization: `Bearer ${await accessToken}`,
  //     },
  //   });

  //         if (gamesRes.ok) {
  //           console.log(await gamesRes);
  //           //       return NextResponse.json(gamesRes);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   console.log("ppgit");
  return NextResponse.json({ pupu: "pp" });
}
