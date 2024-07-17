"use client";
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

type GameCardProps = {
  name: string;
  image: string;
  gameplayMain: number;
  gameplayMainExtra: number;
  completionist: number;
  platforms: string[];
};

const GameCard = ({
  name,
  image,
  gameplayMain,
  gameplayMainExtra,
  completionist,
  platforms,
}: GameCardProps) => {
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

  const imgUrl = image;

  return (
    // <Card className="flex-row col-span-4 md:col-span-2 xl:col-span-1 gap-2 rounded-none bg-card shadow-2xl border-foreground/15 hover:bg-secondary">

    <Card className="flex-row col-span-4 md:col-span-2 xl:col-span-1 rounded-none">
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold tracking-tight -mb-2">
          {name}
        </CardTitle>
      </CardHeader>
      {/* <CardContent className="space-y-4 text-foreground/70"> */}
      <CardContent className="space-y-4 gap-2 text-foreground/70 flex-row md:flex">
        {/* <div className="flex-row mb-6"> */}
        <div className="flex-row flex-1">
          <p>Average playtimes:</p>
          <table className="w-full text-sm font-black ">
            <tbody>
              <tr>
                <td className="flex-1">Main</td>
                <td className="flex-1 text-nowrap px-2">
                  {gameplayMain} hours
                </td>
              </tr>
              <tr>
                <td>Main + Extra</td>
                <td className="flex-1 text-nowrap px-2">
                  {gameplayMainExtra} hours
                </td>
              </tr>
              <tr>
                <td>Completionist</td>
                <td className="flex-1 text-nowrap px-2">
                  {completionist} hours
                </td>
              </tr>
            </tbody>
          </table>

          {/* <p>User Rating: {props.rating}/5</p> */}
          <div className="flex gap-2">
            {/* Metacritic: {handleMetacritic(props.metacritic)} */}
          </div>
          <div className="flex space-x-2 items-center">
            {/* <p>Release Date: {props.released}</p> */}
            {platforms &&
              platforms.map((plat, index) => {
                return handlePlatformIcons(plat, index);
              })}
          </div>
        </div>
        <div className="flex-1">
          {/* <Image
            priority
            src="https://howlongtobeat.com/games/46464_Mario__Rabbids_Kingdom_Battle.jpg"
            fill={true}
            className="w-full object-cover"
            alt={name}
          /> */}
          <img
            src={image}
            className="w-full object-cover"
            alt={name}
          />
        </div>
      </CardContent>
      <CardFooter>
        {/* <Button onClick={(e) => addGame(e)}>Add to Backlog</Button> */}
      </CardFooter>
    </Card>
  );
};
export default GameCard;
