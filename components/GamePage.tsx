"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";

type GameProps = {
  name: string;
  background_image: string;
  esrb_rating: { name: string };
  genres: [{ name: string }];
  // parent_platforms: object[];
  platforms: [{ platform: { name: string } }];

  released: string;
  short_screenshots: [{ image: string }];
  tags: object[];
};

const GamePage = () => {
  const searchParams = useSearchParams();

  let gameName = (searchParams && searchParams.get("name")) || "";
  const [gameData, setGameData] = useState<GameProps>();

  // const [gameData, setGameData] = useState<GameProps[]>([]);

  async function getGameData() {
    const res = await fetch(
      `https://rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG}&search=${gameName}&search_precise`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (res.ok) {
      let response = await res.json();
      setGameData(response.results[0]);
    }
  }

  useEffect(() => {
    getGameData();
  });

  // getGameData();
  console.log(gameData);
  return (
    <>
      {gameData ? (
        <Card className="w-full p-10 rounded-none">
          <h1 className="text-2xl font-extrabold">{gameData?.name}</h1>
          <h1>{gameData?.esrb_rating?.name}</h1>
          {gameData?.genres?.map((genre) => {
            return <li>{genre.name}</li>;
          })}
          {gameData?.released && <h1>Release Date : {gameData?.released}</h1>}
          {gameData?.platforms.map((platform) => {
            return <li>{platform.platform.name}</li>;
          })}
          {gameData?.background_image && (
            <img
              src={gameData?.background_image}
              alt={`${gameData?.name} background`}
            />
          )}
          {gameData?.short_screenshots?.map((screenshot, i) => {
            return (
              <img
                src={screenshot.image}
                alt={`${gameData.name} screenshot ${i}`}
              />
            );
          })}
          {/* <h1>{gameData?.esrb_rating.name}</h1> */}
        </Card>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
  // return <h1>{gameData.results}</h1>;
};
export default GamePage;
