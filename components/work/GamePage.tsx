// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Card } from "../ui/card";
// import { Input } from "../ui/input";

// type GameProps = {
//   name: string;
//   // background_image: string;
//   esrb_rating: { name: string };
//   genres: [{ name: string }];
//   // parent_platforms: object[];
//   platforms: [{ platform: { name: string } }];
//   released: string;
//   short_screenshots: [{ image: string }];
//   tags: object[];
// };

// const GamePage = () => {
//   const searchParams = useSearchParams();

//   let gameName = (searchParams && searchParams.get("name")) || "";
//   let gameTimes = (searchParams && searchParams.get("times")) || "";

//   const [gameData, setGameData] = useState<GameProps>();

//   async function getGameData() {
//     const res = await fetch("/api/details", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ gameName }),
//     });

//     if (res.ok) {
//       let response = await res.json();
//       setGameData(response.results);
//     }
//   }

//   useEffect(() => {
//     getGameData();
//   }, []);

//   console.log(gameData);
//   return (
//     <>
//       {gameData ? (
//         <Card className="w-full p-10 rounded-none">
//           <h1 className="text-2xl font-extrabold">{gameData?.name}</h1>
//           <h1 className="text-3xl font-extrabold">{gameTimes}</h1>
//           <h1>{gameData?.esrb_rating?.name}</h1>
//           {gameData?.genres?.map((genre) => {
//             return <li>{genre.name}</li>;
//           })}
//           {gameData?.released && <h1>Release Date : {gameData?.released}</h1>}
//           {gameData?.platforms.map((platform) => {
//             return <li>{platform.platform.name}</li>;
//           })}
//           {gameData?.short_screenshots[0].image && (
//             <img
//               src={gameData?.short_screenshots[0].image}
//               alt={`${gameData?.name} background`}
//             />
//           )}
//           {gameData?.short_screenshots?.map((screenshot, i) => {
//             return (
//               i > 0 && (
//                 <img
//                   src={screenshot.image}
//                   alt={`${gameData.name} screenshot ${i}`}
//                 />
//               )
//             );
//           })}
//         </Card>
//       ) : (
//         <Card className="w-full p-10 rounded-none">
//           <h1>loading</h1>
//         </Card>
//       )}
//     </>
//   );
// };
// export default GamePage;
