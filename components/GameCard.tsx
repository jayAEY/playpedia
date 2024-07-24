"use client";

import { useState } from "react";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  BsWindows,
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsApple,
  BsAndroid,
} from "react-icons/bs";
import { DiLinux } from "react-icons/di";
import { SiNintendo } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type GameCardProps = {
  name: string;
  image: string;
  gameplayMain: number;
  gameplayMainExtra: number;
  completionist: number;
  platforms: string[];
  id: number | string;
};

type GameProps = {
  name: string;
  // background_image: string;
  esrb_rating: { name: string };
  genres: [{ name: string }];
  // parent_platforms: object[];
  platforms: [{ platform: { name: string } }];
  released: string;
  short_screenshots: [{ image: string }];
  tags: object[];
};

const GameCard = ({
  name,
  image,
  gameplayMain,
  gameplayMainExtra,
  completionist,
  platforms,
  id,
}: GameCardProps) => {
  const [moreOpen, setmoreOpen] = useState(false);
  const [gameData, setGameData] = useState<GameProps>();

  async function getGameData(gameName: string) {
    const res = await fetch("/api/details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameName }),
    });

    if (res.ok) {
      let response = await res.json();
      setGameData(response.results);
    }
  }

  // console.log(platforms.filter((platform) => platform !== "Emulated").toString());
  // let handlePlatformIcons = (platform: string, index: number) => {
  //   switch (platform) {
  //     case "PlayStation":
  //       return (
  //         <BsPlaystation
  //           key={platform + index}
  //           title="Playstation"
  //         />
  //       );
  //       break;
  //     case "PlayStation 2":
  //       return (
  //         <BsPlaystation
  //           key={platform + index}
  //           title="Playstation 2"
  //         />
  //       );
  //       break;
  //     case "PlayStation 3":
  //       return (
  //         <BsPlaystation
  //           key={platform + index}
  //           title="Playstation 3"
  //         />
  //       );
  //       break;
  //     case "PlayStation 4":
  //       return (
  //         <BsPlaystation
  //           key={platform + index}
  //           title="Playstation 4"
  //         />
  //       );
  //       break;
  //     case "PlayStation Vita":
  //       return (
  //         <BsPlaystation
  //           key={platform + index}
  //           title="Playstation Vita"
  //         />
  //       );
  //       break;
  //     case "PlayStation Portable":
  //       return (
  //         <BsPlaystation
  //           key={platform + index}
  //           title="Playstation Portable"
  //         />
  //       );
  //       break;
  //     case "Xbox":
  //       return (
  //         <BsXbox
  //           key={platform + index}
  //           title="Xbox"
  //         />
  //       );
  //       break;
  //     case "Xbox 360":
  //       return (
  //         <BsXbox
  //           key={platform + index}
  //           title="Xbox 360"
  //         />
  //       );
  //       break;
  //     case "Xbox One":
  //       return (
  //         <BsXbox
  //           key={platform + index}
  //           title="Xbox One"
  //         />
  //       );
  //       break;
  //     case "Xbox Series X/S":
  //       return (
  //         <BsXbox
  //           key={platform + index}
  //           title="Xbox Series X/S"
  //         />
  //       );
  //       break;
  //     case "NES":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Nintendo NES"
  //         />
  //       );
  //       break;
  //     case "Super Nintendo":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Super Nintendo"
  //         />
  //       );
  //       break;
  //     case "Nintendo Switch":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Nintendo Switch"
  //         />
  //       );
  //       break;
  //     case "Wii":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Nintendo Wii"
  //         />
  //       );
  //       break;
  //     case "Nintendo Gamecube":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Nintendo Gamecube"
  //         />
  //       );
  //       break;
  //     case "Nintendo 64":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Nintendo 64"
  //         />
  //       );
  //       break;
  //     case "Game Boy Color":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Game Boy Color"
  //         />
  //       );
  //       break;
  //     case "Nintendo DS":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Nintendo DS"
  //         />
  //       );
  //       break;
  //     case "Game Boy":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Game Boy"
  //         />
  //       );
  //       break;
  //     case "Game Boy Advance":
  //       return (
  //         <SiNintendo
  //           key={platform + index}
  //           title="Game Boy Advance"
  //         />
  //       );
  //       break;
  //     case "iOS":
  //       return (
  //         <BsApple
  //           key={platform + index}
  //           title="iOS"
  //         />
  //       );
  //       break;
  //     case "Apple Macintosh":
  //       return (
  //         <BsApple
  //           key={platform + index}
  //           title="MacOS"
  //         />
  //       );
  //       break;
  //     case "Android":
  //       return (
  //         <BsAndroid
  //           key={platform + index}
  //           title="Android"
  //         />
  //       );
  //       break;
  //     case "Mobile":
  //       return (
  //         <FaMobileAlt
  //           key={platform + index}
  //           title="Mobile"
  //         />
  //       );
  //       break;
  //     case "PC":
  //       return (
  //         <BsWindows
  //           key={platform + index}
  //           title="PC"
  //         />
  //       );
  //       break;
  //     case "Linux":
  //       return (
  //         <DiLinux
  //           key={platform + index}
  //           title="Linux"
  //         />
  //       );
  //       break;
  //   }
  // };

  // let handleMetacritic = (score) => {
  //   if (score > 74) {
  //     return (
  //       <p className="bg-green-600 text-s font-extrabold px-1 text-white">
  //         {score}
  //       </p>
  //     );
  //   } else if (score < 75 && score > 49) {
  //     return (
  //       <p className="bg-primary text-s font-extrabold px-1 text-white">
  //         {score}
  //       </p>
  //     );
  //   } else if (score < 50 && score !== null) {
  //     return (
  //       <p className="bg-red-700 text-s font-extrabold px-1 text-white">
  //         {score}
  //       </p>
  //     );
  //   } else if (score == null) {
  //     return (
  //       <p className="bg-gray-500 text-secondary text-xs tracking-tighter font-extrabold px-0.5 py-1">
  //         N/A
  //       </p>
  //     );
  //   }
  // };

  // function addGame(game) {
  //   let gameName = game.target.parentElement.parentElement.firstChild.innerText;
  //   if (!props.backlog.includes(gameName)) {
  //     props.setToastMsg(`${gameName} has been added to backlog`);
  //     props.setBacklog(props.backlog.concat(gameName));
  //     localStorage.setItem("backlog", props.backlog.concat(gameName));
  //     props.setBacklogOpen(true);
  //   } else if (props.backlog.includes(gameName)) {
  //     props.setAlertOpen(true);
  //     props.setAlertMessage(`${gameName} is already in backlog`);
  //   }
  // }

  // return (

  // add completed form
  // <Card className="w-full p-10 rounded-none">
  // <div className="flex gap-2">
  //   <Input
  //     className="w-14  text-center bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
  //     id="hours"
  //     name="hours"
  //     placeholder="HH"
  //     type="number"
  //   />
  //   <Input
  //     className="w-14 text-center bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
  //     id="minutes"
  //     name="minutes"
  //     placeholder="MM"
  //     type="number"
  //   />
  //   <Input
  //     className="w-14 text-center bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
  //     id="seconds"
  //     name="seconds"
  //     placeholder="SS"
  //     type="number"
  //   />
  // </div>
  // <Input
  //     className="w-14  text-center bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
  //     id="Notes"
  //     name="notes"
  //     placeholder="Notes"
  //     type="text"
  //   />

  return (
    <>
      {/* {moreOpen ? ( */}
      {/* <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog> */}
      {/* ) : ( */}
      <Card className="flex gap-2 h-full p-6 col-span-1 rounded-none border-foreground/15 shadow-2xl hover:bg-secondary">
        <CardContent className="flex flex-col gap-6 p-0 w-full h-full">
          <div className="flex flex-col md:flex-row h-full gap-6 text-foreground/70 ">
            <div className="flex flex-col flex-1 gap-6 h-full">
              <CardHeader className="p-0 pb-1 ">
                <CardTitle className="text-2xl font-black text-foreground tracking-tight leading-6 -mb-1">
                  {name}
                </CardTitle>
                <CardDescription
                  title={platforms
                    .filter((platform) => platform !== "Emulated")
                    .join(", ")}
                >
                  {platforms[0] !== "Emulated"
                    ? platforms[0]
                    : platforms[1] && platforms[1]}
                  ...
                </CardDescription>
              </CardHeader>
              <table className="w-full text-xs font-bold">
                <tbody>
                  <tr className="hover:bg-primary">
                    <td className="flex-1 border border-foreground p-2">
                      Main
                    </td>
                    <td className="flex-1 border border-foreground p-2 text-nowrap px-2">
                      {gameplayMain} hours
                    </td>
                  </tr>
                  <tr className="hover:bg-primary">
                    <td className="flex-1 border border-foreground p-2">
                      Main + Extra
                    </td>
                    <td className="flex-1 border border-foreground p-2 text-nowrap px-2">
                      {gameplayMainExtra} hours
                    </td>
                  </tr>
                  <tr className="hover:bg-primary">
                    <td className="flex-1 border border-foreground p-2">
                      Completionist
                    </td>
                    <td className="flex-1 border border-foreground p-2 text-nowrap px-2">
                      {completionist} hours
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src={image}
              className="w-full md:max-w-[35%] object-contain self-start"
              alt={name}
            />
          </div>
          <CardFooter className="flex-col gap-4 items-start md:flex-row p-0 md:justify-between">
            {/* <Button onClick={(e) => addGame(e)}>Add to Backlog</Button> */}
            {/* <Link
              // href={`/details/game?name=${name}`}
              href={`/details/game?name=${name}&times=${gameplayMain}-${gameplayMainExtra}-${completionist}`}
              className="text-primary font-extrabold text-xs hover:text-secondary-foreground"
            >
              More Info...
            </Link> */}
            <Dialog>
              <DialogTrigger
                className="text-primary font-extrabold text-xs hover:text-secondary-foreground"
                onClick={() => getGameData(name)}
              >
                More Info...
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-extrabold">
                    {gameData?.name}
                  </DialogTitle>
                </DialogHeader>

                {/* <DialogDescription> */}
                <div className="flex flex-col">
                  <h1 className="text-3xl font-extrabold">{gameplayMain}</h1>
                  <h1 className="text-3xl font-extrabold">
                    {gameplayMainExtra}
                  </h1>
                  <h1 className="text-3xl font-extrabold">{completionist}</h1>

                  <h1>{gameData?.esrb_rating?.name}</h1>
                  {gameData?.genres?.map((genre) => {
                    return <li>{genre.name}</li>;
                  })}
                  {gameData?.released && (
                    <h1>Release Date : {gameData?.released}</h1>
                  )}
                  {gameData?.platforms.map((platform) => {
                    return <li>{platform.platform.name}</li>;
                  })}
                  <Carousel className="w-[90%] self-center">
                    <CarouselContent>
                      {gameData?.short_screenshots?.map((screenshot, i) => {
                        return (
                          <CarouselItem>
                            <img
                              src={screenshot.image}
                              alt={`${gameData.name} screenshot ${i}`}
                              // className="object-cover"
                              key={"screenshot-" + i}
                            />
                          </CarouselItem>
                        );
                      })}
                      <CarouselPrevious />
                      <CarouselNext />
                    </CarouselContent>
                  </Carousel>

                  {/* {gameData?.short_screenshots[0].image && (
                      <img
                        src={gameData?.short_screenshots[0].image}
                        alt={`${gameData?.name} background`}
                      />
                    )} */}
                  {/* {gameData?.short_screenshots?.map((screenshot, i) => {
                      return (
                        i > 0 && (
                          <img
                            src={screenshot.image}
                            alt={`${gameData.name} screenshot ${i}`}
                          />
                        )
                      );
                    })} */}
                </div>
                {/* </DialogDescription> */}
              </DialogContent>
            </Dialog>
            <div className="flex gap-2">
              <Button className="max-h-6 px-2 text-xs font-black hover:bg-secondary-foreground hover:text-secondary">
                + Backlog
              </Button>
              <Button className="max-h-6 px-2 text-xs font-black hover:bg-secondary-foreground hover:text-secondary">
                + Completed
              </Button>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
      {/* )} */}
    </>
  );
};
export default GameCard;
