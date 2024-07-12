export default async function getGames() {
  let accessToken;
  try {
    const res = await fetch(
      `https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_IGDB_ID}&client_secret=${process.env.NEXT_PUBLIC_IGDB_SECRET}&grant_type=client_credentials`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (res.ok) {
      // console.log(await res.json());
      accessToken = await res.json();
      try {
        const gamesRes = await fetch("https://api.igdb.com/v4/games", {
          method: "POST",
          headers: {
            "Client-ID": "itljwapfoi3ntn66gh77kmjy5e7f8r",
            Authorization: `Bearer ${await accessToken.access_token}`,
          },
          body: 'fields *; search "sonic the hedgehog"; limit 50;',
        });
        // if (gamesRes.ok) {
        // console.log(await gamesRes.json());
        return await gamesRes.json();
        // }
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
