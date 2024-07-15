// "use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { HowLongToBeatEntry } from "howlongtobeat";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("query");
  const [data, setData] = useState<{ results: [HowLongToBeatEntry] }>();

  async function getData() {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchTerm: searchQuery }),
    });

    if (res.ok) {
      setData(await res.json());
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <main>
      <h1>Search results for "{searchQuery}"</h1>
      <section className="grid p-10 min-h-screen min-w-screen grid-cols-4 gap-4">
        {data?.results &&
          data?.results.map((game, index) => {
            return (
              <GameCard
                name={game.name}
                image={game.imageUrl}
                gameplayMain={game.gameplayMain}
                gameplayMainExtra={game.gameplayMainExtra}
                completionist={game.gameplayCompletionist}
                platforms={game.platforms}
                key={game.name}
              />
            );
          })}
        {/* {gameData?.games && 
          // gameData.games.map((game, index) => {
            // return (
              // <GameCard
              // key={index}
              // name={game.name}
              // cover={game.cover?.url}
              // screenshots={game.screenshots?.[0].url}
              // />
            // );
          // })}
        {/* {data &&
              data.map((game: game, index: number) => {
                if (game.background_image && index < 17) {
                  return (
                    <GameCard
                      name={game.name}
                      platforms={game.parent_platforms}
                      released={game.released}
                      metacritic={game.metacritic}
                      background_image={game.background_image}
                      playtime={game.playtime}
                      rating={game.rating}
                      genres={game.genres}
                      screenshots={game.short_screenshots}
                      key={index}
                      backlog={backlog}
                      setBacklog={setBacklog}
                      setBacklogOpen={setBacklogOpen}
                      setAlertOpen={setAlertOpen}
                      setAlertMessage={setAlertMessage}
                      setToastMsg={setToastMsg}
                    />
                  );
                } 
               }) 
              }*/}
      </section>
    </main>
  );
};

export default SearchResults;
