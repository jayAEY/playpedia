export default async function getGames(searchTerm: string) {
  let accessToken;
  const clientId = process.env.IGDB_ID as string;
  const secret = process.env.IGDB_SECRET;
  try {
    const res = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${secret}&grant_type=client_credentials`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (res.ok) {
      accessToken = await res.json();
      try {
        const gamesRes = await fetch("https://api.igdb.com/v4/games", {
          method: "POST",
          headers: {
            "Client-ID": clientId,
            Authorization: `Bearer ${await accessToken.access_token}`,
          },
          // body: `fields *; search "${searchTerm}"; limit 10;`,
          body: `fields *, name, cover.*; screenshots.*; ;
                 exclude alternative_name;
                 search "${searchTerm}";
                  limit 10;`,
          // body:`query games "Playstation Games" {
          //   fields name,platforms.name;
          //   limit 10;
          // };`,
        });
        if (gamesRes.ok) {
          return await gamesRes.json();
        }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
