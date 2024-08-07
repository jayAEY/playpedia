"use client";

import { useEffect, useState } from "react";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BacklogGame, BacklogTableColumns } from "./BacklogTableColumns";
import { BacklogTable } from "./BacklogTable";
import { CompletedGame, CompletedTableColumns } from "./CompletedTableColumns";
import { CompletedTable } from "./CompletedTable";

type UserInfoProps = {};

// const UserInfo = ({ columns, DataTable }) => {
const UserInfo = () => {
  const { data: session, status } = useSession();
  const [backlogData, setBacklogData] = useState<BacklogGame[]>([]);
  const [completedData, setCompletedData] = useState<CompletedGame[]>([]);

  // let email = session?.user.email;
  // let backlogData: BacklogGame[] = [];
  let email = session?.user.email;

  // console.log(email);

  async function getBacklogData() {
    // let email = session?.user.email;

    // console.log(email);
    const res = await fetch(`api/backlog?email=${email}`, {
      method: "GET",
    });
    if (res.ok) {
      let response = await res.json();
      setBacklogData(response.backlog);
    }
  }

  async function getCompletedData() {
    const res = await fetch(`api/completed?email=${email}`, {
      method: "GET",
    });
    if (res.ok) {
      let response = await res.json();
      setCompletedData(response.completed);
    }
  }

  useEffect(() => {
    getBacklogData();
    getCompletedData();
  }, [session]);

  // function getBacklogData() {
  // console.log(session?.user);
  // let backlog = session?.user.backlog;
  // return [{}];
  // function getBacklogData() {
  // Fetch data from your API here.
  // }

  //   async function getData(): Promise<Payment[]> {
  // function getBacklogData() {
  // Fetch data from your API here.
  // return [
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "p",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "lkasjhdflkjashf",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Meruru: The Apprentice of Arland DX",
  //   backlogPlatform: "ps3",
  //   goalTime: "1",
  //   goalDate: "1",
  //   backlogNotes: "kljvhskjhf",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
  //   backlogPlatform: "pp",
  //   goalTime: "p",
  //   goalDate: "p",
  //   backlogNotes: "",
  //   dateAdded: "p",
  // },
  // {
  //   name: "Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator",
  //   backlogPlatform: "pc",
  //   goalTime: "tomorrow",
  //   goalDate: "today",
  //   backlogNotes: "wow",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "p",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "lkasjhdflkjashf",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Meruru: The Apprentice of Arland DX",
  //   backlogPlatform: "ps3",
  //   goalTime: "1",
  //   goalDate: "1",
  //   backlogNotes: "kljvhskjhf",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
  //   backlogPlatform: "pp",
  //   goalTime: "p",
  //   goalDate: "p",
  //   backlogNotes: "",
  //   dateAdded: "p",
  // },
  // {
  //   name: "Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator",
  //   backlogPlatform: "pc",
  //   goalTime: "tomorrow",
  //   goalDate: "today",
  //   backlogNotes: "wow",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "p",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "lkasjhdflkjashf",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Meruru: The Apprentice of Arland DX",
  //   backlogPlatform: "ps3",
  //   goalTime: "1",
  //   goalDate: "1",
  //   backlogNotes: "kljvhskjhf",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
  //   backlogPlatform: "pp",
  //   goalTime: "p",
  //   goalDate: "p",
  //   backlogNotes: "",
  //   dateAdded: "p",
  // },
  // {
  //   name: "Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator",
  //   backlogPlatform: "pc",
  //   goalTime: "tomorrow",
  //   goalDate: "today",
  //   backlogNotes: "wow",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "p",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "lkasjhdflkjashf",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Meruru: The Apprentice of Arland DX",
  //   backlogPlatform: "ps3",
  //   goalTime: "1",
  //   goalDate: "1",
  //   backlogNotes: "kljvhskjhf",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
  //   backlogPlatform: "pp",
  //   goalTime: "p",
  //   goalDate: "p",
  //   backlogNotes: "",
  //   dateAdded: "p",
  // },
  // {
  //   name: "Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator",
  //   backlogPlatform: "pc",
  //   goalTime: "tomorrow",
  //   goalDate: "today",
  //   backlogNotes: "wow",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "p",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "lkasjhdflkjashf",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Meruru: The Apprentice of Arland DX",
  //   backlogPlatform: "ps3",
  //   goalTime: "1",
  //   goalDate: "1",
  //   backlogNotes: "kljvhskjhf",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
  //   backlogPlatform: "pp",
  //   goalTime: "p",
  //   goalDate: "p",
  //   backlogNotes: "",
  //   dateAdded: "p",
  // },
  // {
  //   name: "Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator",
  //   backlogPlatform: "pc",
  //   goalTime: "tomorrow",
  //   goalDate: "today",
  //   backlogNotes: "wow",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "p",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //   backlogPlatform: "lkasjhdflkjashf",
  //   goalTime: "",
  //   goalDate: "",
  //   backlogNotes: "",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Meruru: The Apprentice of Arland DX",
  //   backlogPlatform: "ps3",
  //   goalTime: "1",
  //   goalDate: "1",
  //   backlogNotes: "kljvhskjhf",
  //   dateAdded: "2024-07-31",
  // },
  // {
  //   name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
  //   backlogPlatform: "pp",
  //   goalTime: "p",
  //   goalDate: "p",
  //   backlogNotes: "",
  //   dateAdded: "p",
  // },
  // {
  //   name: "Atelier Resleriana: Forgotten Alchemy and the Polar Night Liberator",
  //   backlogPlatform: "pc",
  //   goalTime: "tomorrow",
  //   goalDate: "today",
  //   backlogNotes: "wow",
  //   dateAdded: "2024-07-31",
  // },
  // ];
  // }

  // const backlogData
  // let backlogData: BacklogGame[] = [];
  // backlogData = session?.user.backlog;
  // const backlogData = getBacklogData();
  // const completedData = [
  //   {
  //     name: "Atelier Ryza 2: Lost Legends & the Secret Fairy",
  //     backlogPlatform: "p",
  //     completedPlatform: "lkashlkjashglkjaha",
  //     completedDate: "lkashlskjashglkjaha",
  //     completedTime: "lkashlkjashglasdasdkjaha",
  //     rating: "lkashlkjasashglkjaha",
  //     completedNotes: "lkashlkjashglkjaha",
  //   },
  //   {
  //     name: "Atelier Meruru: The Apprentice of Arland DX",
  //     backlogPlatform: "p",
  //     completedPlatform: "lkashlkjashglkjaha",
  //     completedDate: "lkashlskjashglkjaha",
  //     completedTime: "lkashlkjashglasdasdkjaha",
  //     rating: "lkashlkjasashglkjaha",
  //     completedNotes: "lkashlkjashglkjaha",
  //   },
  //   {
  //     name: "Atelier Rakjsdfhlkjashgdlkjashglkyza 2: Lost Legends & the Secret Fairy",
  //     backlogPlatform: "p",
  //     completedPlatform: "lkashlkjashglkjaha",
  //     completedDate: "lkashlskjashglkjaha",
  //     completedTime: "lkashlkjashglasdasdkjaha",
  //     rating: "lkashlkjasashglkjaha",
  //     completedNotes: "lkashlkjashglkjaha",
  //   },
  //   {
  //     name: "Atelier Ryza 2: Lost Legendasdkhaljhljk34h5s & the Secret Fairy",
  //     backlogPlatform: "p",
  //     completedPlatform: "lkashlkjashglkjaha",
  //     completedDate: "lkashlskjashglkjaha",
  //     completedTime: "lkashlkjashglasdasdkjaha",
  //     rating: "lkashlkjasashglkjaha",
  //     completedNotes: "lkashlkjashglkjaha",
  //   },
  //   {
  //     name: "Atelier Ryza 2: Lost 23424324Legends & the Secret Fairy",
  //     backlogPlatform: "p",
  //     completedPlatform: "lkashlkjashglkjaha",
  //     completedDate: "lkashlskjashglkjaha",
  //     completedTime: "lkashlkjashglasdasdkjaha",
  //     rating: "lkashlkjasashglkjaha",
  //     completedNotes: "lkashlkjashglkjaha",
  //   },
  // ];

  return (
    <main>
      {status === "authenticated" ? (
        <>
          <div className="flex flex-col items-center justify-center p-24">
            {session.user.avatar && (
              <Avatar className="w-60 h-60 rounded-full">
                <AvatarImage src={session?.user?.avatar} />
                <AvatarFallback>IMG</AvatarFallback>
              </Avatar>
            )}
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <h1 className="text-3xl font-extrabold text-red-400 ">
              {session?.user?.email}
            </h1>
            <Button
              onClick={() => {
                signOut();
              }}
              type="submit"
              className="mt-6 text-xs  font-black"
            >
              Logout
            </Button>
          </div>
          <div className="flex flex-col p-4 justify-center items-center">
            <BacklogTable
              columns={BacklogTableColumns}
              data={backlogData}
              // data={completedData}
            />

            <CompletedTable
              columns={CompletedTableColumns}
              data={completedData}
            />
          </div>
        </>
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <h1 className="text-3xl font-extrabold text-red-400 ">
            Please login
          </h1>
        </div>
      )}
    </main>
  );
};
export default UserInfo;
