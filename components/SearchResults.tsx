// "use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { HowLongToBeatEntry } from "howlongtobeat";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const searchQuery = (searchParams && searchParams.get("query")) || "";
  // const [data, setData] = useState<{ results: [HowLongToBeatEntry] }>();
  // const [data, setData] = useState();

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
  // const [data, setData] = useState<object>();

  // useEffect(() => {
  //   setData({
  //     results: [
  //       {
  //         id: "36936",
  //         name: "Nioh",
  //         imageUrl: "https://howlongtobeat.com/games/36936_Nioh.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 34.5,
  //         gameplayMainExtra: 61,
  //         gameplayCompletionist: 93.5,
  //         similarity: 1,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "50419",
  //         name: "Nioh 2",
  //         imageUrl: "https://howlongtobeat.com/games/60877_Nioh_2.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 42,
  //         gameplayMainExtra: 84,
  //         gameplayCompletionist: 97,
  //         similarity: 0.18,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "52219",
  //         name: "Atelier Ryza: Ever Darkness & the Secret Hideout",
  //         imageUrl:
  //           "https://howlongtobeat.com/games/71350_Atelier_Ryza_Ever_Darkness_&_the_Secret_Hideout.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 27.5,
  //         gameplayMainExtra: 42,
  //         gameplayCompletionist: 60,
  //         similarity: 0.0,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "12419",
  //         name: "Atelier Escha & Logy: Alchemists of the Dusk Sky DX",
  //         imageUrl:
  //           "https://howlongtobeat.com/games/74044_Atelier_Escha_&_Logy_Alchemists_of_the_Dusk_Sky_DX.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 38,
  //         gameplayMainExtra: 52.5,
  //         gameplayCompletionist: 79.5,
  //         similarity: 0.0,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "99219",
  //         name: "Tekken 5: Dark Resurrection",
  //         imageUrl:
  //           "https://howlongtobeat.com/games/230px-PSP-TekkenDarkRessurectionUSversion-FrontCover.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 2,
  //         gameplayMainExtra: 12,
  //         gameplayCompletionist: 35,
  //         similarity: 0.0,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "1128319",
  //         name: "Tekken 8",
  //         imageUrl: "https://howlongtobeat.com/games/113569_Tekken_8.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 4,
  //         gameplayMainExtra: 10.5,
  //         gameplayCompletionist: 17,
  //         similarity: 0.0,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "36936",
  //         name: "Nioh",
  //         imageUrl: "https://howlongtobeat.com/games/36936_Nioh.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 34.5,
  //         gameplayMainExtra: 61,
  //         gameplayCompletionist: 93.5,
  //         similarity: 1,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "50419",
  //         name: "Nioh 2",
  //         imageUrl: "https://howlongtobeat.com/games/60877_Nioh_2.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 42,
  //         gameplayMainExtra: 84,
  //         gameplayCompletionist: 97,
  //         similarity: 0.18,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "52219",
  //         name: "Atelier Ryza: Ever Darkness & the Secret Hideout",
  //         imageUrl:
  //           "https://howlongtobeat.com/games/71350_Atelier_Ryza_Ever_Darkness_&_the_Secret_Hideout.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 27.5,
  //         gameplayMainExtra: 42,
  //         gameplayCompletionist: 60,
  //         similarity: 0.0,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "12419",
  //         name: "Atelier Escha & Logy: Alchemists of the Dusk Sky DX",
  //         imageUrl:
  //           "https://howlongtobeat.com/games/74044_Atelier_Escha_&_Logy_Alchemists_of_the_Dusk_Sky_DX.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 38,
  //         gameplayMainExtra: 52.5,
  //         gameplayCompletionist: 79.5,
  //         similarity: 0.0,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "99219",
  //         name: "Tekken 5: Dark Resurrection",
  //         imageUrl:
  //           "https://howlongtobeat.com/games/230px-PSP-TekkenDarkRessurectionUSversion-FrontCover.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 2,
  //         gameplayMainExtra: 12,
  //         gameplayCompletionist: 35,
  //         similarity: 0.0,
  //         searchTerm: "Nioh",
  //       },
  //       {
  //         id: "1128319",
  //         name: "Tekken 8",
  //         imageUrl: "https://howlongtobeat.com/games/113569_Tekken_8.jpg",
  //         platforms: ["PS4", "PS4", "PC"],
  //         gameplayMain: 4,
  //         gameplayMainExtra: 10.5,
  //         gameplayCompletionist: 17,
  //         similarity: 0.0,
  //         searchTerm: "Nioh",
  //       },
  //     ],
  //   });
  //   setLoading(false);
  // }, [searchQuery]);

  // fake data 2

  // const [data, setData] = useState<object>();
  let data = {
    results: [
      {
        id: "71350",
        name: "Atelier Ryza: Ever Darkness & the Secret Hideout",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/71350_Atelier_Ryza_Ever_Darkness_&_the_Secret_Hideout.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 28,
        gameplayMainExtra: 42,
        gameplayCompletionist: 60,
        similarity: 0.15,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "81096",
        name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4", "PlayStation 5"],
        imageUrl:
          "https://howlongtobeat.com/games/81096_Atelier_Ryza_2_Lost_Legends_&_the_Secret_Fairy.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 33,
        gameplayMainExtra: 52,
        gameplayCompletionist: 67,
        similarity: 0.15,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4", "PlayStation 5"],
      },
      {
        id: "113571",
        name: "Atelier Ryza 3: Alchemist of the End & the Secret Key",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4", "PlayStation 5"],
        imageUrl:
          "https://howlongtobeat.com/games/113571_Atelier_Ryza_3_Alchemist_of_the_End.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 33,
        gameplayMainExtra: 65,
        gameplayCompletionist: 81,
        similarity: 0.13,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4", "PlayStation 5"],
      },
      {
        id: "74721",
        name: "Atelier Ayesha: The Alchemist of Dusk DX",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/74721_Atelier_Ayesha_The_Alchemist_of_Dusk_DX.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 23,
        gameplayMainExtra: 33,
        gameplayCompletionist: 54,
        similarity: 0.18,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "141055",
        name: "Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator",
        description: "",
        platforms: ["Mobile", "PC"],
        imageUrl:
          "https://howlongtobeat.com/games/141055_Atelier_Resleriana_Forgotten_Alchemy_and_the_Polar_Night_Liberator.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 17,
        gameplayMainExtra: 0,
        gameplayCompletionist: 0,
        similarity: 0.1,
        searchTerm: "atelier",
        playableOn: ["Mobile", "PC"],
      },
      {
        id: "98841",
        name: "Atelier Sophie 2: The Alchemist of the Mysterious Dream",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/98841_Atelier_Sophie_2_The_Alchemist_of_the_Mysterious_Dream.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 47,
        gameplayMainExtra: 57,
        gameplayCompletionist: 72,
        similarity: 0.13,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "91465",
        name: "Atelier Sophie: The Alchemist of the Mysterious Book DX",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/91465_Atelier_Sophie_The_Alchemist_of_the_Mysterious_Book_DX.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 33,
        gameplayMainExtra: 45,
        gameplayCompletionist: 54,
        similarity: 0.13,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "74044",
        name: "Atelier Escha & Logy: Alchemists of the Dusk Sky DX",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/74044_Atelier_Escha_&_Logy_Alchemists_of_the_Dusk_Sky_DX.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 38,
        gameplayMainExtra: 53,
        gameplayCompletionist: 80,
        similarity: 0.14,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "124436",
        name: "Atelier Marie Remake: The Alchemist of Salburg",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4", "PlayStation 5"],
        imageUrl:
          "https://howlongtobeat.com/games/124436_Atelier_Marie_Remake_The_Alchemist_of_Salburg.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 9,
        gameplayMainExtra: 13,
        gameplayCompletionist: 30,
        similarity: 0.15,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4", "PlayStation 5"],
      },
      {
        id: "19480",
        name: "Atelier Rorona: The Alchemist of Arland DX",
        description: "",
        platforms: [
          "Nintendo Switch",
          "PC",
          "PlayStation 3",
          "PlayStation 4",
          "PlayStation Vita",
        ],
        imageUrl:
          "https://howlongtobeat.com/games/AtelierRoronaPlusAlchemistofArland.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 21,
        gameplayMainExtra: 32,
        gameplayCompletionist: 67,
        similarity: 0.17,
        searchTerm: "atelier",
        playableOn: [
          "Nintendo Switch",
          "PC",
          "PlayStation 3",
          "PlayStation 4",
          "PlayStation Vita",
        ],
      },
      {
        id: "67462",
        name: "Atelier Lulua: The Scion of Arland",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/67462_Atelier_Lulua_The_Scion_of_Arland.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 33,
        gameplayMainExtra: 48,
        gameplayCompletionist: 60,
        similarity: 0.21,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "74045",
        name: "Atelier Shallie: Alchemists of the Dusk Sea DX",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/74045_Atelier_Shallie_Alchemists_of_the_Dusk_Sea_DX.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 31,
        gameplayMainExtra: 43,
        gameplayCompletionist: 66,
        similarity: 0.15,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "91480",
        name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/91480_Atelier_Lydie_&_Suelle_The_Alchemists_and_the_Mysterious_Paintings_DX.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 42,
        gameplayMainExtra: 57,
        gameplayCompletionist: 92,
        similarity: 0.1,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "91479",
        name: "Atelier Firis: The Alchemist and the Mysterious Journey DX",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/91479_Atelier_Firis_The_Alchemist_and_the_Mysterious_Journey_DX.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 20,
        gameplayMainExtra: 48,
        gameplayCompletionist: 80,
        similarity: 0.12,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "15369",
        name: "Atelier Meruru: The Apprentice of Arland DX",
        description: "",
        platforms: [
          "Nintendo Switch",
          "PC",
          "PlayStation 4",
          "PlayStation Vita",
        ],
        imageUrl:
          "https://howlongtobeat.com/games/AtelierMeruruPlusTheApprenticeofArland.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 25,
        gameplayMainExtra: 37,
        gameplayCompletionist: 88,
        similarity: 0.16,
        searchTerm: "atelier",
        playableOn: [
          "Nintendo Switch",
          "PC",
          "PlayStation 4",
          "PlayStation Vita",
        ],
      },
      {
        id: "65953",
        name: "Nelke & The Legendary Alchemists: Ateliers of the New World",
        description: "",
        platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
        imageUrl:
          "https://howlongtobeat.com/games/65953_Nelke_&_The_Legendary_Alchemists_Ateliers_of_the_New_World.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 30,
        gameplayMainExtra: 42,
        gameplayCompletionist: 64,
        similarity: 0.12,
        searchTerm: "atelier",
        playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
      },
      {
        id: "18289",
        name: "Atelier Totori: The Adventurer of Arland DX",
        description: "",
        platforms: [
          "Nintendo Switch",
          "PC",
          "PlayStation 4",
          "PlayStation Vita",
        ],
        imageUrl:
          "https://howlongtobeat.com/games/AtelierTotoriPlusTheAdventurerofArland.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 24,
        gameplayMainExtra: 37,
        gameplayCompletionist: 54,
        similarity: 0.16,
        searchTerm: "atelier",
        playableOn: [
          "Nintendo Switch",
          "PC",
          "PlayStation 4",
          "PlayStation Vita",
        ],
      },
      {
        id: "702",
        name: "Atelier Iris: Eternal Mana",
        description: "",
        platforms: ["PlayStation 2"],
        imageUrl: "https://howlongtobeat.com/games/252px-Atelier_Iris.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 28,
        gameplayMainExtra: 41,
        gameplayCompletionist: 65,
        similarity: 0.27,
        searchTerm: "atelier",
        playableOn: ["PlayStation 2"],
      },
      {
        id: "37884",
        name: "Atelier Sophie: The Alchemist of the Mysterious Book",
        description: "",
        platforms: ["PC", "PlayStation 4", "PlayStation Vita"],
        imageUrl:
          "https://howlongtobeat.com/games/37884_Atelier_Sophie_The_Alchemist_of_the_Mysterious_Book.png",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 35,
        gameplayMainExtra: 44,
        gameplayCompletionist: 62,
        similarity: 0.13,
        searchTerm: "atelier",
        playableOn: ["PC", "PlayStation 4", "PlayStation Vita"],
      },
      {
        id: "701",
        name: "Atelier Iris 3: Grand Phantasm",
        description: "",
        platforms: ["PlayStation 2"],
        imageUrl: "https://howlongtobeat.com/games/252px-Grand_Phantasm.jpg",
        timeLabels: [
          ["Main", "Main"],
          ["Main + Extra", "Main + Extra"],
          ["Completionist", "Completionist"],
        ],
        gameplayMain: 32,
        gameplayMainExtra: 41,
        gameplayCompletionist: 58,
        similarity: 0.23,
        searchTerm: "atelier",
        playableOn: ["PlayStation 2"],
      },
    ],
  };
  setLoading(false);

  // useEffect(() => {
  //   setData({
  //     results: [
  //       {
  //         id: "71350",
  //         name: "Atelier Ryza: Ever Darkness & the Secret Hideout",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/71350_Atelier_Ryza_Ever_Darkness_&_the_Secret_Hideout.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 28,
  //         gameplayMainExtra: 42,
  //         gameplayCompletionist: 60,
  //         similarity: 0.15,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "81096",
  //         name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //         description: "",
  //         platforms: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation 5",
  //         ],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/81096_Atelier_Ryza_2_Lost_Legends_&_the_Secret_Fairy.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 33,
  //         gameplayMainExtra: 52,
  //         gameplayCompletionist: 67,
  //         similarity: 0.15,
  //         searchTerm: "atelier",
  //         playableOn: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation 5",
  //         ],
  //       },
  //       {
  //         id: "113571",
  //         name: "Atelier Ryza 3: Alchemist of the End & the Secret Key",
  //         description: "",
  //         platforms: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation 5",
  //         ],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/113571_Atelier_Ryza_3_Alchemist_of_the_End.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 33,
  //         gameplayMainExtra: 65,
  //         gameplayCompletionist: 81,
  //         similarity: 0.13,
  //         searchTerm: "atelier",
  //         playableOn: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation 5",
  //         ],
  //       },
  //       {
  //         id: "74721",
  //         name: "Atelier Ayesha: The Alchemist of Dusk DX",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/74721_Atelier_Ayesha_The_Alchemist_of_Dusk_DX.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 23,
  //         gameplayMainExtra: 33,
  //         gameplayCompletionist: 54,
  //         similarity: 0.18,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "141055",
  //         name: "Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator",
  //         description: "",
  //         platforms: ["Mobile", "PC"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/141055_Atelier_Resleriana_Forgotten_Alchemy_and_the_Polar_Night_Liberator.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 17,
  //         gameplayMainExtra: 0,
  //         gameplayCompletionist: 0,
  //         similarity: 0.1,
  //         searchTerm: "atelier",
  //         playableOn: ["Mobile", "PC"],
  //       },
  //       {
  //         id: "98841",
  //         name: "Atelier Sophie 2: The Alchemist of the Mysterious Dream",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/98841_Atelier_Sophie_2_The_Alchemist_of_the_Mysterious_Dream.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 47,
  //         gameplayMainExtra: 57,
  //         gameplayCompletionist: 72,
  //         similarity: 0.13,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "91465",
  //         name: "Atelier Sophie: The Alchemist of the Mysterious Book DX",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/91465_Atelier_Sophie_The_Alchemist_of_the_Mysterious_Book_DX.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 33,
  //         gameplayMainExtra: 45,
  //         gameplayCompletionist: 54,
  //         similarity: 0.13,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "74044",
  //         name: "Atelier Escha & Logy: Alchemists of the Dusk Sky DX",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/74044_Atelier_Escha_&_Logy_Alchemists_of_the_Dusk_Sky_DX.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 38,
  //         gameplayMainExtra: 53,
  //         gameplayCompletionist: 80,
  //         similarity: 0.14,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "124436",
  //         name: "Atelier Marie Remake: The Alchemist of Salburg",
  //         description: "",
  //         platforms: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation 5",
  //         ],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/124436_Atelier_Marie_Remake_The_Alchemist_of_Salburg.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 9,
  //         gameplayMainExtra: 13,
  //         gameplayCompletionist: 30,
  //         similarity: 0.15,
  //         searchTerm: "atelier",
  //         playableOn: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation 5",
  //         ],
  //       },
  //       {
  //         id: "19480",
  //         name: "Atelier Rorona: The Alchemist of Arland DX",
  //         description: "",
  //         platforms: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 3",
  //           "PlayStation 4",
  //           "PlayStation Vita",
  //         ],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/AtelierRoronaPlusAlchemistofArland.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 21,
  //         gameplayMainExtra: 32,
  //         gameplayCompletionist: 67,
  //         similarity: 0.17,
  //         searchTerm: "atelier",
  //         playableOn: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 3",
  //           "PlayStation 4",
  //           "PlayStation Vita",
  //         ],
  //       },
  //       {
  //         id: "67462",
  //         name: "Atelier Lulua: The Scion of Arland",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/67462_Atelier_Lulua_The_Scion_of_Arland.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 33,
  //         gameplayMainExtra: 48,
  //         gameplayCompletionist: 60,
  //         similarity: 0.21,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "74045",
  //         name: "Atelier Shallie: Alchemists of the Dusk Sea DX",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/74045_Atelier_Shallie_Alchemists_of_the_Dusk_Sea_DX.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 31,
  //         gameplayMainExtra: 43,
  //         gameplayCompletionist: 66,
  //         similarity: 0.15,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "91480",
  //         name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/91480_Atelier_Lydie_&_Suelle_The_Alchemists_and_the_Mysterious_Paintings_DX.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 42,
  //         gameplayMainExtra: 57,
  //         gameplayCompletionist: 92,
  //         similarity: 0.1,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "91479",
  //         name: "Atelier Firis: The Alchemist and the Mysterious Journey DX",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/91479_Atelier_Firis_The_Alchemist_and_the_Mysterious_Journey_DX.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 20,
  //         gameplayMainExtra: 48,
  //         gameplayCompletionist: 80,
  //         similarity: 0.12,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "15369",
  //         name: "Atelier Meruru: The Apprentice of Arland DX",
  //         description: "",
  //         platforms: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation Vita",
  //         ],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/AtelierMeruruPlusTheApprenticeofArland.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 25,
  //         gameplayMainExtra: 37,
  //         gameplayCompletionist: 88,
  //         similarity: 0.16,
  //         searchTerm: "atelier",
  //         playableOn: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation Vita",
  //         ],
  //       },
  //       {
  //         id: "65953",
  //         name: "Nelke & The Legendary Alchemists: Ateliers of the New World",
  //         description: "",
  //         platforms: ["Nintendo Switch", "PC", "PlayStation 4"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/65953_Nelke_&_The_Legendary_Alchemists_Ateliers_of_the_New_World.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 30,
  //         gameplayMainExtra: 42,
  //         gameplayCompletionist: 64,
  //         similarity: 0.12,
  //         searchTerm: "atelier",
  //         playableOn: ["Nintendo Switch", "PC", "PlayStation 4"],
  //       },
  //       {
  //         id: "18289",
  //         name: "Atelier Totori: The Adventurer of Arland DX",
  //         description: "",
  //         platforms: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation Vita",
  //         ],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/AtelierTotoriPlusTheAdventurerofArland.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 24,
  //         gameplayMainExtra: 37,
  //         gameplayCompletionist: 54,
  //         similarity: 0.16,
  //         searchTerm: "atelier",
  //         playableOn: [
  //           "Nintendo Switch",
  //           "PC",
  //           "PlayStation 4",
  //           "PlayStation Vita",
  //         ],
  //       },
  //       {
  //         id: "702",
  //         name: "Atelier Iris: Eternal Mana",
  //         description: "",
  //         platforms: ["PlayStation 2"],
  //         imageUrl: "https://howlongtobeat.com/games/252px-Atelier_Iris.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 28,
  //         gameplayMainExtra: 41,
  //         gameplayCompletionist: 65,
  //         similarity: 0.27,
  //         searchTerm: "atelier",
  //         playableOn: ["PlayStation 2"],
  //       },
  //       {
  //         id: "37884",
  //         name: "Atelier Sophie: The Alchemist of the Mysterious Book",
  //         description: "",
  //         platforms: ["PC", "PlayStation 4", "PlayStation Vita"],
  //         imageUrl:
  //           "https://howlongtobeat.com/games/37884_Atelier_Sophie_The_Alchemist_of_the_Mysterious_Book.png",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 35,
  //         gameplayMainExtra: 44,
  //         gameplayCompletionist: 62,
  //         similarity: 0.13,
  //         searchTerm: "atelier",
  //         playableOn: ["PC", "PlayStation 4", "PlayStation Vita"],
  //       },
  //       {
  //         id: "701",
  //         name: "Atelier Iris 3: Grand Phantasm",
  //         description: "",
  //         platforms: ["PlayStation 2"],
  //         imageUrl: "https://howlongtobeat.com/games/252px-Grand_Phantasm.jpg",
  //         timeLabels: [
  //           ["Main", "Main"],
  //           ["Main + Extra", "Main + Extra"],
  //           ["Completionist", "Completionist"],
  //         ],
  //         gameplayMain: 32,
  //         gameplayMainExtra: 41,
  //         gameplayCompletionist: 58,
  //         similarity: 0.23,
  //         searchTerm: "atelier",
  //         playableOn: ["PlayStation 2"],
  //       },
  //     ],
  //   });
  //   setLoading(false);
  // }, [searchQuery]);

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
