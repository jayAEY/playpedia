// "use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { HowLongToBeatEntry } from "howlongtobeat";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchQuery = (searchParams && searchParams.get("query")) || "";
  // const [data, setData] = useState<{ results: [HowLongToBeatEntry] }>();

  const [loading, setLoading] = useState(true);

  // async function getData() {
  //   const res = await fetch("/api/search", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ searchTerm: searchQuery }),
  //   });

  //   if (res.ok) {
  //     setData(await res.json());
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, [searchQuery]);

  // fake data
  const [data, setData] = useState<object>();

  useEffect(() => {
    setData({
      results: [
        {
          id: "36936",
          name: "Nioh",
          imageUrl: "https://howlongtobeat.com/games/36936_Nioh.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 34.5,
          gameplayMainExtra: 61,
          gameplayCompletionist: 93.5,
          similarity: 1,
          searchTerm: "Nioh",
        },
        {
          id: "50419",
          name: "Nioh: Complete Edition",
          imageUrl: "https://howlongtobeat.com/games/60877_Nioh_2.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 42,
          gameplayMainExtra: 84,
          gameplayCompletionist: 97,
          similarity: 0.18,
          searchTerm: "Nioh",
        },
        {
          id: "52219",
          name: "Atelier Ryza: Ever Darkness & the Secret Hideout",
          imageUrl:
            "https://howlongtobeat.com/games/71350_Atelier_Ryza_Ever_Darkness_&_the_Secret_Hideout.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 27.5,
          gameplayMainExtra: 42,
          gameplayCompletionist: 60,
          similarity: 0.0,
          searchTerm: "Nioh",
        },
        {
          id: "12419",
          name: "Atelier Escha & Logy: Alchemists of the Dusk Sky DX",
          imageUrl:
            "https://howlongtobeat.com/games/74044_Atelier_Escha_&_Logy_Alchemists_of_the_Dusk_Sky_DX.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 38,
          gameplayMainExtra: 52.5,
          gameplayCompletionist: 79.5,
          similarity: 0.0,
          searchTerm: "Nioh",
        },
        {
          id: "99219",
          name: "Tekken 5: Dark Resurection",
          imageUrl:
            "https://howlongtobeat.com/games/230px-PSP-TekkenDarkRessurectionUSversion-FrontCover.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 2,
          gameplayMainExtra: 12,
          gameplayCompletionist: 35,
          similarity: 0.0,
          searchTerm: "Nioh",
        },
        {
          id: "1128319",
          name: "Tekken 8",
          imageUrl: "https://howlongtobeat.com/games/113569_Tekken_8.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 4,
          gameplayMainExtra: 10.5,
          gameplayCompletionist: 17,
          similarity: 0.0,
          searchTerm: "Nioh",
        },
        {
          id: "36936",
          name: "Nioh",
          imageUrl: "https://howlongtobeat.com/games/36936_Nioh.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 34.5,
          gameplayMainExtra: 61,
          gameplayCompletionist: 93.5,
          similarity: 1,
          searchTerm: "Nioh",
        },
        {
          id: "50419",
          name: "Nioh: Complete Edition",
          imageUrl: "https://howlongtobeat.com/games/60877_Nioh_2.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 42,
          gameplayMainExtra: 84,
          gameplayCompletionist: 97,
          similarity: 0.18,
          searchTerm: "Nioh",
        },
        {
          id: "52219",
          name: "Atelier Ryza: Ever Darkness & the Secret Hideout",
          imageUrl:
            "https://howlongtobeat.com/games/71350_Atelier_Ryza_Ever_Darkness_&_the_Secret_Hideout.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 27.5,
          gameplayMainExtra: 42,
          gameplayCompletionist: 60,
          similarity: 0.0,
          searchTerm: "Nioh",
        },
        {
          id: "12419",
          name: "Atelier Escha & Logy: Alchemists of the Dusk Sky DX",
          imageUrl:
            "https://howlongtobeat.com/games/74044_Atelier_Escha_&_Logy_Alchemists_of_the_Dusk_Sky_DX.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 38,
          gameplayMainExtra: 52.5,
          gameplayCompletionist: 79.5,
          similarity: 0.0,
          searchTerm: "Nioh",
        },
        {
          id: "99219",
          name: "Tekken 5: Dark Resurection",
          imageUrl:
            "https://howlongtobeat.com/games/230px-PSP-TekkenDarkRessurectionUSversion-FrontCover.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 2,
          gameplayMainExtra: 12,
          gameplayCompletionist: 35,
          similarity: 0.0,
          searchTerm: "Nioh",
        },
        {
          id: "1128319",
          name: "Tekken 8",
          imageUrl: "https://howlongtobeat.com/games/113569_Tekken_8.jpg",
          platforms: ["PS4", "PS4", "PC"],
          gameplayMain: 4,
          gameplayMainExtra: 10.5,
          gameplayCompletionist: 17,
          similarity: 0.0,
          searchTerm: "Nioh",
        },
      ],
    });
    setLoading(false);
  }, [searchQuery]);

  console.log(data);
  return (
    <main>
      {loading ? (
        <h1 className="pl-10 pt-10 text-2xl font-semibold text-muted-foreground">
          Results Loading...
        </h1>
      ) : (
        searchQuery && (
          <h1 className="pl-10 pt-10 text-2xl font-semibold text-muted-foreground">
            Search results for &ldquo;{searchQuery}&ldquo;
          </h1>
        )
      )}
      <section className="grid p-10 min-w-screen grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[1600px]:grid-cols-4  gap-4">
        {data?.results
          ? data?.results.map((game, index) => {
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
          : !loading && (
              <h1 className="text-2xl font-semibold text-nowrap text-muted-foreground">
                No games found
              </h1>
            )}
      </section>
    </main>
  );
};

export default SearchResults;
