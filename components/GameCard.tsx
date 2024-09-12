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
  BsWindows,
  BsPlaystation,
  BsXbox,
  BsApple,
  BsAndroid,
} from "react-icons/bs";
import { DiLinux } from "react-icons/di";
import { SiNintendo } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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

import { BacklogForm } from "./BacklogForm";
import { CompletedForm } from "./CompletedForm";
import { useSession } from "next-auth/react";

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
  platforms: [{ platform: { name: string } }];
  released: string;
  short_screenshots: [{ image: string }];
  tags: object[];
  metacritic: number;
};

const GameCard = ({
  name,
  image,
  gameplayMain,
  gameplayMainExtra,
  completionist,
}: GameCardProps) => {
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { data: session, status } = useSession();

  const [gameData, setGameData] = useState<GameProps>();
  const [loading, setLoading] = useState(false);

  let averageTime = (
    (gameplayMain + gameplayMainExtra + completionist) /
    3
  ).toFixed(0);

  async function getGameData(gameName: string) {
    setLoading(true);
    const res = await fetch("/api/details", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameName }),
    });

    if (res.ok) {
      let response = await res.json();
      setGameData(response.results);
    }
    setLoading(false);
  }

  let handlePlatformIcons = (platform: string, index: number) => {
    switch (platform) {
      case "PlayStation":
        return (
          <BsPlaystation
            key={platform + index}
            title="Playstation"
          />
        );
        break;
      case "PlayStation 2":
        return (
          <BsPlaystation
            key={platform + index}
            title="Playstation 2"
          />
        );
        break;
      case "PlayStation 3":
        return (
          <BsPlaystation
            key={platform + index}
            title="Playstation 3"
          />
        );
        break;
      case "PlayStation 4":
        return (
          <BsPlaystation
            key={platform + index}
            title="Playstation 4"
          />
        );
        break;
      case "PlayStation 5":
        return (
          <BsPlaystation
            key={platform + index}
            title="Playstation 5"
          />
        );
        break;
      case "PlayStation Vita":
        return (
          <BsPlaystation
            key={platform + index}
            title="Playstation Vita"
          />
        );
        break;
      case "PlayStation Portable":
        return (
          <BsPlaystation
            key={platform + index}
            title="Playstation Portable"
          />
        );
        break;
      case "PSP":
        return (
          <BsPlaystation
            key={platform + index}
            title="PSP"
          />
        );
        break;
      case "Xbox":
        return (
          <BsXbox
            key={platform + index}
            title="Xbox"
          />
        );
        break;
      case "Xbox 360":
        return (
          <BsXbox
            key={platform + index}
            title="Xbox 360"
          />
        );
        break;
      case "Xbox One":
        return (
          <BsXbox
            key={platform + index}
            title="Xbox One"
          />
        );
        break;
      case "Xbox Series X/S":
        return (
          <BsXbox
            key={platform + index}
            title="Xbox Series X/S"
          />
        );
        break;
      case "Xbox Series S/X":
        return (
          <BsXbox
            key={platform + index}
            title="Xbox Series X/S"
          />
        );
        break;
      case "NES":
        return (
          <SiNintendo
            key={platform + index}
            title="Nintendo NES"
          />
        );
        break;
      case "Super Nintendo":
        return (
          <SiNintendo
            key={platform + index}
            title="Super Nintendo"
          />
        );
        break;
      case "Nintendo Switch":
        return (
          <SiNintendo
            key={platform + index}
            title="Nintendo Switch"
          />
        );
        break;
      case "Switch":
        return (
          <SiNintendo
            key={platform + index}
            title="Switch"
          />
        );
        break;
      case "Wii":
        return (
          <SiNintendo
            key={platform + index}
            title="Nintendo Wii"
          />
        );
        break;
      case "Nintendo Gamecube":
        return (
          <SiNintendo
            key={platform + index}
            title="Nintendo Gamecube"
          />
        );
        break;
      case "Nintendo 64":
        return (
          <SiNintendo
            key={platform + index}
            title="Nintendo 64"
          />
        );
        break;
      case "Game Boy Color":
        return (
          <SiNintendo
            key={platform + index}
            title="Game Boy Color"
          />
        );
        break;
      case "Nintendo DS":
        return (
          <SiNintendo
            key={platform + index}
            title="Nintendo DS"
          />
        );
        break;
      case "Game Boy":
        return (
          <SiNintendo
            key={platform + index}
            title="Game Boy"
          />
        );
        break;
      case "Game Boy Advance":
        return (
          <SiNintendo
            key={platform + index}
            title="Game Boy Advance"
          />
        );
        break;
      case "iOS":
        return (
          <BsApple
            key={platform + index}
            title="iOS"
          />
        );
        break;
      case "Apple Macintosh":
        return (
          <BsApple
            key={platform + index}
            title="MacOS"
          />
        );
        break;
      case "Android":
        return (
          <BsAndroid
            key={platform + index}
            title="Android"
          />
        );
        break;
      case "Mobile":
        return (
          <FaMobileAlt
            key={platform + index}
            title="Mobile"
          />
        );
        break;
      case "PC":
        return (
          <BsWindows
            key={platform + index}
            title="PC"
          />
        );
        break;
      case "Linux":
        return (
          <DiLinux
            key={platform + index}
            title="Linux"
          />
        );
        break;
    }
  };

  let handleMetacritic = (score: number | undefined) => {
    if (score) {
      if (score > 74) {
        return (
          <p className="bg-green-600 text-s font-extrabold px-1 text-white">
            {score}
          </p>
        );
      } else if (score < 75 && score > 49) {
        return (
          <p className="bg-yellow-500 text-s font-extrabold px-1 text-white">
            {score}
          </p>
        );
      } else if (score < 50 && score !== null) {
        return (
          <p className="bg-red-700 text-s font-extrabold px-1 text-white">
            {score}
          </p>
        );
      }
    }
    if (!score) {
      return (
        <p className="bg-gray-500 text-secondary text-xs tracking-tighter font-extrabold px-0.5 py-1">
          N/A
        </p>
      );
    }
  };

  return (
    <>
      <AlertDialog open={alertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogCancel
              onClick={() => setAlertOpen(false)}
              className="w-0.5"
            >
              x
            </AlertDialogCancel>
            <AlertDialogTitle className="text-center min-h-14 pb-8">
              {alertMessage}
            </AlertDialogTitle>
            <AlertDialogDescription className="hidden">
              {alertMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      <Card className="flex gap-2 h-full p-6 col-span-1 rounded-none border-foreground/15 shadow-2xl hover:bg-secondary">
        <CardContent className="flex flex-col gap-6 p-0 w-full h-full">
          <div className="flex flex-col md:flex-row h-full gap-6 text-foreground/70 ">
            <div className="flex flex-col flex-1 gap-6 h-full">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl font-black text-foreground tracking-tight leading-6 -mb-1">
                  {name}
                </CardTitle>
                <CardDescription>
                  Average Time: {averageTime} hours
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
              <div className="flex flex-col w-32 self-center gap-2 sm:flex-row sm:w-full ">
                {/* Backlog Dialog */}
                <Dialog>
                  {status === "authenticated" ? (
                    <DialogTrigger
                      asChild
                      className="
                    bg-primary
                    text-white
                    max-h-6
                    px-3
                    pr-4
                    text-xs
                    font-black
                    hover:bg-secondary-foreground
                    hover:text-secondary"
                    >
                      <Button variant="outline">+ Backlog</Button>
                    </DialogTrigger>
                  ) : (
                    <Button
                      variant="outline"
                      className="
                  bg-primary
                  text-white
                  max-h-6
                  px-3
                  pr-4
                  text-xs
                  font-black
                  hover:bg-secondary-foreground
                  hover:text-secondary"
                      onClick={() => {
                        setAlertOpen(true);
                        setAlertMessage("Please login to add to backlog");
                      }}
                    >
                      + Backlog
                    </Button>
                  )}

                  <DialogContent className="sm:max-w-[425px] pt-2 pb-1">
                    <DialogHeader>
                      <DialogTitle className="hidden">{name}</DialogTitle>
                      <DialogDescription className="hidden">
                        Enter additional info for backlog(optional):
                      </DialogDescription>
                    </DialogHeader>
                    <BacklogForm
                      name={name}
                      addOrEdit="add"
                    />
                    <DialogFooter></DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Completed Dialog */}
                <Dialog>
                  {status === "authenticated" ? (
                    <DialogTrigger
                      asChild
                      className="
                    bg-primary
                    text-white
                    max-h-6
                    px-3
                    pr-4
                    text-xs
                    font-black
                    hover:bg-secondary-foreground
                    hover:text-secondary"
                    >
                      <Button variant="outline">+ Completed</Button>
                    </DialogTrigger>
                  ) : (
                    <Button
                      variant="outline"
                      className="
                  bg-primary
                  text-white
                  max-h-6
                  px-3
                  pr-4
                  text-xs
                  font-black
                  hover:bg-secondary-foreground
                  hover:text-secondary"
                      onClick={() => {
                        setAlertOpen(true);
                        setAlertMessage(
                          "Please login to add to completed list"
                        );
                      }}
                    >
                      + Completed
                    </Button>
                  )}
                  <DialogContent className="sm:max-w-[425px] pt-2 pb-1">
                    <DialogHeader>
                      <DialogTitle className="hidden">{name}</DialogTitle>
                      <DialogDescription className="hidden">
                        Enter additional info for completed(optional):
                      </DialogDescription>
                    </DialogHeader>
                    <CompletedForm
                      name={name}
                      addOrEdit="add"
                    />
                    <DialogFooter></DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <img
              src={image}
              className="w-full md:max-w-[35%] object-contain self-start"
              alt={name}
            />
          </div>
          <CardFooter className="flex-col gap-4 items-start md:flex-row p-0 md:justify-between">
            <details>
              <summary
                className="text-primary font-extrabold text-xs hover:text-secondary-foreground cursor-pointer"
                onClick={() => getGameData(name)}
              >
                More Info...
              </summary>
              <div className="m-6 grid grid-cols-2 gap-4">
                {loading ? (
                  <p className="text-foreground -mx-6 text-sm ">
                    Loading Details...
                  </p>
                ) : (
                  <>
                    <div>
                      <p className="text-sm pb-2 underline text-muted-foreground">
                        Metacritic:
                      </p>
                      <div className="flex gap-2">
                        {handleMetacritic(gameData?.metacritic)}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm pb-2 underline text-muted-foreground">
                        Platforms:
                      </p>
                      {gameData?.platforms.map((platform, i) => {
                        return (
                          <p
                            className="flex items-center gap-2 text-xs font-extrabold text-foreground no-underline"
                            key={platform.platform.name}
                          >
                            {handlePlatformIcons(platform.platform.name, i)}
                            {platform.platform.name}
                          </p>
                        );
                      })}
                    </div>
                    <div>
                      <p className="text-sm underline text-muted-foreground">
                        Release Date:
                      </p>
                      {gameData?.released && (
                        <p className="text-xs font-extrabold text-foreground no-underline">
                          {gameData?.released}
                        </p>
                      )}
                    </div>
                    <div>
                      <p className="text-sm underline text-muted-foreground">
                        Genres:
                      </p>
                      {gameData?.genres?.map((genre) => {
                        return (
                          <p
                            className="text-xs font-extrabold text-foreground no-underline"
                            key={genre.name}
                          >
                            {genre.name}
                          </p>
                        );
                      })}
                    </div>
                    <div>
                      <p className="text-sm underline text-muted-foreground">
                        Age Rating:
                      </p>
                      <p className="text-xs font-extrabold text-foreground no-underline">
                        {gameData?.esrb_rating?.name}
                      </p>
                    </div>

                    <Carousel className="col-span-2">
                      <CarouselContent>
                        {gameData?.short_screenshots?.map((screenshot, i) => {
                          return (
                            <CarouselItem
                              key={"screenshot-" + i}
                              className="flex object-contain"
                            >
                              <img
                                src={screenshot.image}
                                alt={`${gameData.name} screenshot ${i}`}
                                className="self-center w-full"
                              />
                            </CarouselItem>
                          );
                        })}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </>
                )}
              </div>
            </details>
          </CardFooter>
        </CardContent>
      </Card>
    </>
  );
};
export default GameCard;
