"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Card } from "./ui/card";

type GameProps = {
  name: string;
  background_image: string;
  esrb_rating: object;
  genres: object[];
  parent_platforms: object[];
  released: string;
  short_screenshots: object[];
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

  getGameData();
  // console.log(gameData);
  return (
    <Card className="w-full p-10 rounded-none">
      <h1 className="text-2xl font-extrabold">{gameName}</h1>
    </Card>
  );
  // return <h1>{gameData.results}</h1>;
};
export default GamePage;
