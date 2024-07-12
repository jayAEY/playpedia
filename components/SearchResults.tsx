// "use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";

type Game = {
  name: string;
  platforms: string;
  released: string;
  metacritic: string;
  background_image: string;
  playtime: string;
  rating: string;
  genres: string;
  screenshots: { string };
  // cover: { url: string };
};

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("query");
  const [gameData, setGameData] = useState<{ games: [Game] }>({
    games: [{}] as [Game],
  });

  async function getData() {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchTerm: searchQuery }),
    });

    if (res.ok) {
      return setGameData(await res.json());
    }
    return;
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(gameData?.games && gameData?.games[0]);
  // console.log(getData());
  return (
    <main>
      <h1>Search results for "{searchQuery}"</h1>
      <section className="grid p-10 min-h-screen min-w-screen grid-cols-4 gap-4">
        {gameData?.games &&
          gameData.games.map((game, index) => {
            return (
              <GameCard
                key={index}
                name={game.name}
                // cover={game.cover.url}
              />
            );
          })}
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
