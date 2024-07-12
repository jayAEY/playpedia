// "use client";
import { useSearchParams } from "next/navigation";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("query");

  const pp = async () => {
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "p" }),
      });
      if (res.ok) {
        // console.log(await res.json());
      }
    } catch (error) {}
  };

  pp();
  // const getGames = async () => {
  // const res = await fetch("/search", { method: "GET" });
  // console.log(await res.json());
  // };
  // const getGames = async () => {
  // let accessToken;
  // try {
  //   const res = await fetch(
  //     `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_IGDB_ID}&client_secret=${process.env.NEXT_PUBLIC_IGDB_SECRET}&grant_type=client_credentials`,
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );
  //   if (res.ok) {
  //     // console.log(await res.json());
  //     accessToken = await res.json();
  //     try {
  //       const gamesRes = await fetch("https://api.igdb.com/v4/games", {
  //         method: "POST",
  //         headers: {
  //           "Client-ID": "itljwapfoi3ntn66gh77kmjy5e7f8r",
  //           Authorization: `Bearer ${await accessToken.access_token}`,
  //         },
  //       });
  //       if (gamesRes.ok) {
  //         console.log(await gamesRes.json());
  //       }
  //     } catch (error) {}
  //   }
  // } catch (error) {}
  // try {
  //   const res = await fetch("/api/search", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email: "p" }),
  //   });
  //   if (res.ok) {
  //     console.log(await res.json());
  //   }
  // } catch (error) {}
  // };

  // getGames();
  return <h1>{searchQuery}</h1>;
};

export default SearchResults;
