// "use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { HowLongToBeatEntry } from "howlongtobeat";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchQuery = (searchParams && searchParams.get("query")) || "";
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
  }, [searchQuery]);

  console.log(data);
  return (
    <main>
      {searchQuery && (
        <h1 className="pl-10 pt-10 text-2xl font-semibold text-muted-foreground">
          Search results for &ldquo;{searchQuery}&ldquo;
        </h1>
      )}
      <section className="grid p-10 min-h-screen min-w-screen grid-cols-4 gap-4">
        {data?.results ? (
          data?.results.map((game, index) => {
            return (
              game.gameplayMain != 0 && (
                <GameCard
                  name={game.name}
                  image={game.imageUrl}
                  gameplayMain={game.gameplayMain}
                  gameplayMainExtra={game.gameplayMainExtra}
                  completionist={game.gameplayCompletionist}
                  platforms={game.platforms}
                  id={game.id}
                  key={game.name + index}
                />
              )
            );
          })
        ) : (
          <h1 className="pl-10 pt-10 text-2xl font-semibold text-muted-foreground">
            No results found
          </h1>
        )}
      </section>
    </main>
  );
};

export default SearchResults;
